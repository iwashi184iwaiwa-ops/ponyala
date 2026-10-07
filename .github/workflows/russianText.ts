// Utilities for Russian Cyrillic accent marks, normalization, and search

// Vowels that can take an acute accent in Russian
export const RUSSIAN_VOWELS_LOWER = ['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
export const RUSSIAN_VOWELS_UPPER = ['А', 'Е', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];

// Map of vowel to vowel with acute accent (Cyrillic vowel + \u0301)
export const ACCENTED_VOWELS: Record<string, string> = {
  а: 'а́',
  е: 'е́',
  и: 'и́',
  о: 'о́',
  у: 'у́',
  ы: 'ы́',
  э: 'э́',
  ю: 'ю́',
  я: 'я́',
  А: 'А́',
  Е: 'Е́',
  И: 'И́',
  О: 'О́',
  У: 'У́',
  Ы: 'Ы́',
  Э: 'Э́',
  Ю: 'Ю́',
  Я: 'Я́'
};

/**
 * Remove all combining accent marks, grave accents, and apostrophes used as pseudo-accents
 */
export function stripAccents(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0301\u0300]/g, '')
    .normalize('NFC')
    .replace(/['`’´]/g, '');
}

/**
 * Normalize Russian string for search, comparison, and duplication checking
 */
export function normalizeRussian(text: string): string {
  if (!text) return '';
  return stripAccents(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}

/**
 * Convert any apostrophe-based accents (e.g. кни'га, Газе'та) to proper acute accented Cyrillic vowels (кни́га, Газе́та)
 */
export function convertApostrophesToAccents(text: string): string {
  if (!text) return '';
  // Match a Cyrillic vowel followed by an apostrophe or backtick
  return text.replace(/([аеиоуыэюяАЕИОУЫЭЮЯ])['`’´]/g, (_match, vowel) => {
    return ACCENTED_VOWELS[vowel] || `${vowel}\u0301`;
  });
}

/**
 * Get the accented vowel representation (e.g. 'о' -> 'о́')
 */
export function getAccentedVowel(vowel: string): string {
  return ACCENTED_VOWELS[vowel] || `${vowel}\u0301`;
}

/**
 * Checks if search query matches Russian text regardless of accent marks or casing
 */
export function matchesRussianSearch(text: string, query: string): boolean {
  if (!query) return true;
  const normText = normalizeRussian(text);
  const normQuery = normalizeRussian(query);
  return normText.includes(normQuery);
}
