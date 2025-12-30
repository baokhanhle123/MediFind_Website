/**
 * Type definitions for internationalization (i18n)
 */

export type Language = "en" | "vi";

/**
 * Represents possible translation value types:
 * - string: Single translated text
 * - string[]: Array of translated texts (e.g., list items)
 * - Record: Nested translation object
 */
export type TranslationValue =
  | string
  | string[]
  | { [key: string]: unknown };

/**
 * Structure of translation JSON files
 */
export interface Translations {
  [key: string]: TranslationValue;
}

/**
 * Translation function return type
 * Returns either a string or an array of strings
 */
export type TranslateReturnType = string | string[];

/**
 * Type for the translation function
 */
export type TranslateFunction = (key: string) => TranslateReturnType;

/**
 * Language context value type
 */
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslateFunction;
}
