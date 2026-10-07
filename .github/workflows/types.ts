import { VocabularyWord, WordSet, WordUnit, CefrLevel } from '../../types';

export interface RawWordDefinition {
  ru: string;
  kana: string;
  jp: string;
  pos: VocabularyWord['pos'];
  gender?: VocabularyWord['gender'];
  aspect?: VocabularyWord['aspect'];
  pairedWord?: string;
  caseGovernance?: string;
  conjugationNote?: string;
  pluralForm?: string;
  category?: string;
  exampleRu: string;
  exampleJp: string;
  accentTip?: string;
  level: CefrLevel;
}

export function buildWord(
  def: RawWordDefinition,
  unitId: number,
  setId: number,
  indexInSet: number
): VocabularyWord {
  // Strip any accidental apostrophes and ensure correct acute accented Cyrillic form
  const ru = def.ru.replace(/['`]/g, '');
  const ruPlain = ru.normalize('NFD').replace(/[\u0301\u0300]/g, '').normalize('NFC');

  return {
    id: `w_u${unitId}_s${setId}_${indexInSet + 1}`,
    ru,
    ruPlain,
    kana: def.kana,
    jp: def.jp,
    pos: def.pos,
    gender: def.gender,
    aspect: def.aspect,
    pairedWord: def.pairedWord,
    caseGovernance: def.caseGovernance,
    conjugationNote: def.conjugationNote,
    pluralForm: def.pluralForm,
    category: def.category,
    difficultyRating: def.level === 'A0' ? 1 : def.level === 'A1' ? 2 : def.level === 'A2' ? 3 : 4,
    exampleRu: def.exampleRu.replace(/['`]/g, ''),
    exampleJp: def.exampleJp,
    accentTip: def.accentTip,
    unitId,
    setId,
    level: def.level
  };
}

export function buildWordSet(
  globalSetId: number,
  unitId: number,
  localSetId: number,
  title: string,
  theme: string,
  rawWords: RawWordDefinition[]
): WordSet {
  const words = rawWords.map((raw, idx) => buildWord(raw, unitId, globalSetId, idx));
  return {
    id: globalSetId,
    unitId,
    localSetId,
    title,
    theme,
    words
  };
}
