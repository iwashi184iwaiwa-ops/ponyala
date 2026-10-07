export type CefrLevel = 'A0' | 'A1' | 'A2' | 'B1';

export interface VocabularyWord {
  id: string;
  ru: string;            // with stress accent (e.g. кни́га, молоко́)
  ruPlain: string;       // without accent (e.g. книга, молоко)
  kana: string;          // Katakana reading (e.g. クニーガ, マラコー)
  jp: string;            // Japanese meaning
  pos: '名詞' | '動詞' | '形容詞' | '副詞' | '代名詞' | '前置詞' | '接続詞' | '数詞' | '間投詞' | '成句' | '表現' | '数量詞' | '述語' | '助詞';
  gender?: '男' | '女' | '中' | '複数';
  aspect?: '不完了' | '完了';
  pairedWord?: string;   // e.g. читать - прочитать
  caseGovernance?: string; // e.g. "+ 対格", "+ 生格", "+ с + 造格"
  conjugationNote?: string;// e.g. "第1変化 (чита́ю, чита́ешь)", "第2変化 (говорю́, говори́шь)"
  pluralForm?: string;     // e.g. "кни́ги", "дома́", "друзья́"
  category?: string;       // e.g. "日常", "家族", "移動動詞", "学術"
  difficultyRating?: 1 | 2 | 3 | 4; // 1=A0, 2=A1, 3=A2, 4=B1
  exampleRu: string;
  exampleJp: string;
  accentTip?: string;    // e.g. 'アクセントのないоは[а]に弱化'
  unitId: number;        // 1 to 5 (Large cluster of 20 sets)
  setId: number;         // 1 to 20 within unit (total 100 sets)
  level: CefrLevel;
}

export interface WordSet {
  id: number;            // 1 to 100 global set id
  unitId: number;        // 1 to 5
  localSetId: number;    // 1 to 20 within unit
  title: string;
  theme: string;
  words: VocabularyWord[];
}

export interface WordUnit {
  id: number;            // 1 to 5
  title: string;
  description: string;
  level: CefrLevel;
  sets: WordSet[];
}

export interface GrammarSection {
  id: number;            // 1 to 4
  sectionNumber: string; // 'セクション1 初歩の入門', etc.
  title: string;
  subtitle: string;
  level: CefrLevel;
  description: string;
  lessons: GrammarLesson[];
}

export interface GrammarLesson {
  id: string;
  lessonNumber: number;
  title: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
    rules?: string[];
    examples: {
      ru: string;
      kana?: string;
      jp: string;
      note?: string;
    }[];
  }[];
}

export interface ReadingPassage {
  id: string;
  title: string;
  subtitle: string;
  level: CefrLevel;
  sectionId: number;
  description: string;
  contentRu: string[];
  contentJp: string[];
  vocabulary: {
    ru: string;
    jp: string;
  }[];
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  wordId: string;
  ruWord: string;
  kana: string;
  correctMeaning: string;
  options: string[];
  explanation: string;
}

export interface DailyStudyLog {
  date: string; // 'YYYY-MM-DD'
  wordsStudied: number;
  quizzesTaken: number;
  minutesSpent: number;
}

export interface UserStats {
  xp: number;
  streak: number;
  totalStudyDays: number;
  lastStudyDate: string;
  levelProgress: {
    1: number; // Section 1 progress 0-100%
    2: number;
    3: number;
    4: number;
  };
  unlockedSections: number[]; // e.g. [1, 2]
  completedSets: number[];    // set IDs (1-100)
  masteredWordIds: string[];
  bookmarkedWordIds: string[];
  // Mistake history tracking error frequency and recency for priority queue
  mistakeHistory: Record<string, { count: number; lastMissed: number; consecutiveCorrect?: number }>;
  dailyGoal: number;          // target words per day (5, 10, 15, 20)
  studiedWordsToday: number;
  minutesSpentToday: number;
  totalMinutesSpent: number;
  dailyLogs: DailyStudyLog[];
  testHistory: {
    date: string;
    testType: 'set' | 'unit_review' | 'section_summary' | 'skip_test';
    targetId: string | number;
    score: number;
    total: number;
    passed: boolean;
  }[];
  adjustedStudyPlan?: {
    recommendation: string;
    focusAreas: string[];
    dailyTask: string;
    targetSection: number;
    updatedAt: string;
  };
}

export interface NotificationSetting {
  enabled: boolean;
  timeSlot: 'morning' | 'lunch' | 'evening' | 'custom';
  customTime: string; // 'HH:MM'
  tone: 'gentle' | 'strict' | 'cultural';
}

