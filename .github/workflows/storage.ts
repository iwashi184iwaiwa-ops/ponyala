import { UserStats, NotificationSetting, DailyStudyLog } from '../types';

const STORAGE_KEY = 'polyana_russian_v1_release';
const NOTIF_KEY = 'polyana_notifications_v1_release';

// Clean up legacy test keys on startup if present
try {
  if (typeof window !== 'undefined' && localStorage.getItem('polyana_russian_user_stats_prod')) {
    localStorage.removeItem('polyana_russian_user_stats_prod');
  }
} catch {
  // ignore storage errors
}

export const defaultUserStats: UserStats = {
  xp: 0,
  streak: 0,
  totalStudyDays: 0,
  lastStudyDate: '',
  levelProgress: {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  },
  unlockedSections: [1],
  completedSets: [],
  masteredWordIds: [],
  bookmarkedWordIds: [],
  mistakeHistory: {},
  dailyGoal: 10,
  studiedWordsToday: 0,
  minutesSpentToday: 0,
  totalMinutesSpent: 0,
  dailyLogs: [],
  testHistory: [],
  adjustedStudyPlan: {
    recommendation: 'まずはセクション1「初歩の入門」からスタートしましょう。キリル文字33文字と母音弱化（アカーニエ）の基礎を身につけます。',
    focusAreas: ['キリル文字33文字の読み方', '無アクセント о の弱化（アカーニエ）', '語末有声子音の無声化'],
    dailyTask: '本日のおすすめ: 5単語ミニセット第1組（身の回りの筆記用具）から学習を開始しましょう。',
    targetSection: 1,
    updatedAt: new Date().toISOString()
  }
};

export const defaultNotificationSetting: NotificationSetting = {
  enabled: false,
  timeSlot: 'evening',
  customTime: '21:00',
  tone: 'cultural'
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultUserStats;
    const parsed = JSON.parse(raw);
    return {
      ...defaultUserStats,
      ...parsed,
      levelProgress: { ...defaultUserStats.levelProgress, ...parsed.levelProgress },
      mistakeHistory: { ...defaultUserStats.mistakeHistory, ...parsed.mistakeHistory }
    };
  } catch {
    return defaultUserStats;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.warn('Failed to save user stats', err);
  }
}

export function recordStudySession(
  current: UserStats,
  wordsCount: number,
  minutes: number,
  quizTaken: boolean = false
): UserStats {
  const today = new Date().toISOString().split('T')[0];
  const isNewDay = current.lastStudyDate !== today;

  let newStreak = current.streak;
  let newTotalDays = current.totalStudyDays;

  if (isNewDay) {
    // Check if yesterday was last study date
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (current.lastStudyDate === yesterday) {
      newStreak += 1;
    } else {
      newStreak = 1;
    }
    newTotalDays += 1;
  }

  const newStudiedToday = isNewDay ? wordsCount : current.studiedWordsToday + wordsCount;
  const newMinutesToday = isNewDay ? minutes : current.minutesSpentToday + minutes;

  // Update daily logs
  const updatedLogs = [...current.dailyLogs];
  const todayLogIndex = updatedLogs.findIndex(l => l.date === today);
  if (todayLogIndex >= 0) {
    updatedLogs[todayLogIndex] = {
      date: today,
      wordsStudied: updatedLogs[todayLogIndex].wordsStudied + wordsCount,
      quizzesTaken: updatedLogs[todayLogIndex].quizzesTaken + (quizTaken ? 1 : 0),
      minutesSpent: updatedLogs[todayLogIndex].minutesSpent + minutes
    };
  } else {
    updatedLogs.push({
      date: today,
      wordsStudied: wordsCount,
      quizzesTaken: quizTaken ? 1 : 0,
      minutesSpent: minutes
    });
  }

  return {
    ...current,
    streak: newStreak,
    totalStudyDays: newTotalDays,
    lastStudyDate: today,
    studiedWordsToday: newStudiedToday,
    minutesSpentToday: newMinutesToday,
    totalMinutesSpent: current.totalMinutesSpent + minutes,
    dailyLogs: updatedLogs.slice(-14) // keep last 14 days
  };
}

export function loadNotificationSettings(): NotificationSetting {
  try {
    const raw = localStorage.getItem(NOTIF_KEY);
    if (!raw) return defaultNotificationSetting;
    return { ...defaultNotificationSetting, ...JSON.parse(raw) };
  } catch {
    return defaultNotificationSetting;
  }
}

export function saveNotificationSettings(settings: NotificationSetting): void {
  try {
    localStorage.setItem(NOTIF_KEY, JSON.stringify(settings));
  } catch (err) {
    console.warn('Failed to save notifications', err);
  }
}

export function resetUserStats(): UserStats {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(NOTIF_KEY);
    localStorage.removeItem('polyana_russian_user_stats_prod');
    localStorage.removeItem('polyana_russian_user_stats');
  } catch (err) {
    console.warn('Failed to reset storage', err);
  }
  return defaultUserStats;
}

