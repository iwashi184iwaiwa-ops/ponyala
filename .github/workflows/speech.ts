// Web Speech API for authentic Russian TTS and Speech Recognition
import { stripAccents } from './russianText';

let cachedVoices: SpeechSynthesisVoice[] = [];
let voiceLoadingPromise: Promise<SpeechSynthesisVoice[]> | null = null;

// Audio element fallback for browsers without installed Russian TTS voice
let fallbackAudio: HTMLAudioElement | null = null;

export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return Promise.resolve([]);
  }

  const current = window.speechSynthesis.getVoices();
  if (current.length > 0) {
    cachedVoices = current;
    return Promise.resolve(current);
  }

  if (voiceLoadingPromise) {
    return voiceLoadingPromise;
  }

  voiceLoadingPromise = new Promise((resolve) => {
    let resolved = false;

    const finish = () => {
      if (resolved) return;
      resolved = true;
      cachedVoices = window.speechSynthesis.getVoices();
      resolve(cachedVoices);
    };

    window.speechSynthesis.addEventListener('voiceschanged', finish, { once: true });
    // Timeout fallback if voiceschanged does not fire
    setTimeout(finish, 600);
  });

  return voiceLoadingPromise;
}

// Immediately trigger voice load on script evaluation
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
}

/**
 * Find an authentic Russian voice from available voices
 */
export async function getRussianVoice(): Promise<SpeechSynthesisVoice | null> {
  const voices = await loadVoices();

  // 1. Exact 'ru-RU' or 'ru_RU' match
  const ruRU = voices.find(v => {
    const l = v.lang.toLowerCase().replace('_', '-');
    return l === 'ru-ru' || l === 'ru';
  });
  if (ruRU) return ruRU;

  // 2. Any voice starting with 'ru'
  const ruAny = voices.find(v => v.lang.toLowerCase().startsWith('ru'));
  if (ruAny) return ruAny;

  // 3. Name based match (Russian, Русский, Milena, Yuri, Pavel, Tatyana, Katya)
  const ruName = voices.find(v => {
    const n = v.name.toLowerCase();
    return n.includes('russian') || n.includes('русск') || n.includes('milena') || n.includes('pavel') || n.includes('irina');
  });
  if (ruName) return ruName;

  return null;
}

export interface AudioPlaybackStatus {
  success: boolean;
  engineUsed: 'native-tts' | 'online-tts' | 'unsupported';
  errorMessage?: string;
}

/**
 * Play authentic Russian audio for given text
 * Guaranteed never to play non-Russian voices or garbled noise
 */
export async function playRussianAudio(
  text: string,
  rate: number = 0.9,
  onErrorFeedback?: (msg: string) => void
): Promise<AudioPlaybackStatus> {
  if (!text || typeof window === 'undefined') {
    return { success: false, engineUsed: 'unsupported' };
  }

  // 1. Strip accent combining characters and apostrophes so the speech synthesizer
  // receives clean Cyrillic characters (e.g. "книга" instead of "кни\u0301га")
  const cleanText = stripAccents(text).trim();

  // 2. Check if SpeechSynthesis is available with Russian voice
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel(); // Stop any previous speech
      const ruVoice = await getRussianVoice();

      if (ruVoice) {
        return new Promise((resolve) => {
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.voice = ruVoice;
          utterance.lang = 'ru-RU';
          utterance.rate = rate;

          utterance.onend = () => {
            resolve({ success: true, engineUsed: 'native-tts' });
          };

          utterance.onerror = (e) => {
            console.warn('Native Russian TTS utterance error', e);
            // Fall back to online TTS
            playFallbackAudio(cleanText, onErrorFeedback).then(resolve);
          };

          window.speechSynthesis.speak(utterance);
        });
      }
    } catch (err) {
      console.warn('Failed to synthesize speech via window.speechSynthesis', err);
    }
  }

  // 3. Fallback: High quality online Russian audio fallback (so devices without Russian voice packages still work!)
  return playFallbackAudio(cleanText, onErrorFeedback);
}

/**
 * Play Russian audio via Google TTS service fallback
 */
async function playFallbackAudio(
  cleanText: string,
  onErrorFeedback?: (msg: string) => void
): Promise<AudioPlaybackStatus> {
  try {
    if (fallbackAudio) {
      fallbackAudio.pause();
      fallbackAudio = null;
    }

    const encoded = encodeURIComponent(cleanText);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ru&client=tw-ob&q=${encoded}`;
    const audio = new Audio(audioUrl);
    fallbackAudio = audio;

    return new Promise((resolve) => {
      audio.onended = () => {
        resolve({ success: true, engineUsed: 'online-tts' });
      };

      audio.onerror = () => {
        const errorMsg = 'ロシア語音声エンジンが見つかりません。お使いのOSまたはブラウザにロシア語言語パックを追加してください。';
        if (onErrorFeedback) onErrorFeedback(errorMsg);
        resolve({ success: false, engineUsed: 'unsupported', errorMessage: errorMsg });
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Fallback audio playback failed', err);
          const errorMsg = '音声の再生に失敗しました。';
          if (onErrorFeedback) onErrorFeedback(errorMsg);
          resolve({ success: false, engineUsed: 'unsupported', errorMessage: errorMsg });
        });
      }
    });
  } catch (err: any) {
    const errorMsg = '音声機能をご利用いただけません。';
    if (onErrorFeedback) onErrorFeedback(errorMsg);
    return { success: false, engineUsed: 'unsupported', errorMessage: errorMsg };
  }
}

// Check if speech recognition is available in the browser
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
}

export interface SpeechRecognitionResultData {
  transcript: string;
  confidence: number;
  similarity: number; // 0 - 100
  isMatch: boolean;
  feedback: string;
}

function calculateSimilarity(str1: string, str2: string): number {
  const s1 = stripAccents(str1).toLowerCase().trim().replace(/[.,!?-]/g, '');
  const s2 = stripAccents(str2).toLowerCase().trim().replace(/[.,!?-]/g, '');

  if (s1 === s2) return 100;
  if (!s1 || !s2) return 0;

  const matrix: number[][] = [];
  for (let i = 0; i <= s1.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= s2.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  const distance = matrix[s1.length][s2.length];
  const maxLen = Math.max(s1.length, s2.length);
  return Math.max(0, Math.round((1 - distance / maxLen) * 100));
}

export function startRussianSpeechRecognition(
  targetWord: string,
  onResult: (result: SpeechRecognitionResultData) => void,
  onError: (error: string) => void
): { stop: () => void } {
  const SpeechRecognitionClass = (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

  if (!SpeechRecognitionClass) {
    onError('お使いのブラウザは音声認識に対応していません。Google ChromeまたはMicrosoft Edgeをご利用ください。');
    return { stop: () => {} };
  }

  try {
    const recognition = new SpeechRecognitionClass();
    recognition.lang = 'ru-RU';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onresult = (event: any) => {
      if (event.results && event.results.length > 0) {
        let bestTranscript = '';
        let highestSimilarity = 0;
        let avgConfidence = 0.8;

        for (let i = 0; i < event.results[0].length; i++) {
          const trans = event.results[0][i].transcript;
          const conf = event.results[0][i].confidence || 0.8;
          const sim = calculateSimilarity(trans, targetWord);
          if (sim > highestSimilarity) {
            highestSimilarity = sim;
            bestTranscript = trans;
            avgConfidence = conf;
          }
        }

        const isMatch = highestSimilarity >= 70;
        let feedback = '';
        if (highestSimilarity >= 90) {
          feedback = 'Отли́чно! (完璧な発音とアクセントです！)';
        } else if (highestSimilarity >= 70) {
          feedback = 'Хорошо́! (自然に伝わります。アクセント母音をもう少し長めに意識してみましょう)';
        } else if (highestSimilarity >= 40) {
          feedback = 'Попро́буйте ещё раз (もう一度！無アクセント母音の弱化[о→а]に注目)';
        } else {
          feedback = 'Не совсе́м (お手本音声を再生してアクセントの位置を確認してみましょう)';
        }

        onResult({
          transcript: bestTranscript,
          confidence: avgConfidence,
          similarity: highestSimilarity,
          isMatch,
          feedback
        });
      }
    };

    recognition.onerror = (event: any) => {
      if (event.error === 'no-speech') {
        onError('音声が検出されませんでした。マイクに向かってロシア語を発音してください。');
      } else if (event.error === 'not-allowed') {
        onError('マイクへのアクセスが許可されていません。ブラウザ設定でマイクを許可してください。');
      } else {
        onError(`認識エラー (${event.error})`);
      }
    };

    recognition.start();

    return {
      stop: () => {
        try {
          recognition.stop();
        } catch {
          // ignore
        }
      }
    };
  } catch (err: any) {
    onError(err.message || '音声認識の開始に失敗しました');
    return { stop: () => {} };
  }
}
