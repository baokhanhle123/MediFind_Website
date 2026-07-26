/**
 * Internationalization utility functions
 *
 * @remarks
 * Everything here is isomorphic — the locale JSON is bundled at build time rather
 * than fetched, so these helpers are safe to call from Server Components (for
 * metadata and server-rendered copy) and from the client `LanguageProvider`.
 */

import en from "@/locales/en.json";
import vi from "@/locales/vi.json";
import type {
  Language,
  TranslateReturnType,
  Translations,
  TranslationValue,
} from "@/types/i18n";

const dictionaries: Record<Language, Translations> = { en, vi };

/**
 * Returns the full translation dictionary for a locale
 * @param locale - Target language
 */
export function getDictionary(locale: Language): Translations {
  return dictionaries[locale];
}

/**
 * Retrieves a nested value from a translation object using dot notation
 * @param obj - Translation object
 * @param path - Dot-separated path (e.g., "nav.home" or "solution.features.scan.title")
 * @returns The translation value (string or string array), or the path key if not found
 */
export function getNestedValue(
  obj: Record<string, TranslationValue>,
  path: string
): TranslateReturnType {
  const keys = path.split(".");
  let result: TranslationValue = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && !Array.isArray(result) && key in result) {
      result = (result as Record<string, TranslationValue>)[key];
    } else if (Array.isArray(result)) {
      // If we hit an array, return it
      return result;
    } else {
      // Return key if path not found (fallback)
      return path;
    }
  }

  // Ensure we return either string or string[]
  if (typeof result === "string") {
    return result;
  } else if (Array.isArray(result)) {
    return result;
  } else {
    // If we got an object, return the path as fallback
    return path;
  }
}

/**
 * Translates a dot-notation key for a given locale
 *
 * @description
 * Shared by the client `LanguageProvider` and by Server Components that need copy
 * before hydration (page metadata, the skip link, generated social images).
 *
 * @param locale - Target language
 * @param key - Dot-separated translation key
 *
 * @example
 * ```ts
 * translate("vi", "nav.home");                  // => "Trang chu"
 * translate("en", "problem.issues.continuity"); // => "Poor continuity of care"
 * ```
 */
export function translate(locale: Language, key: string): TranslateReturnType {
  return getNestedValue(
    dictionaries[locale] as unknown as Record<string, TranslationValue>,
    key
  );
}

/**
 * Translates a key and guarantees a string result, for use in metadata and JSX
 *
 * @remarks
 * Prefer this over `String(translate(...))` when the key holds a single string:
 * `String()` on an array silently yields comma-joined text, whereas this returns
 * the first element.
 */
export function translateString(locale: Language, key: string): string {
  return asString(translate(locale, key));
}

/**
 * Safely converts translation return value to string for JSX rendering
 * If value is an array, returns the first element
 * @param value - Translation value from t() function
 * @returns String suitable for JSX rendering
 */
export function asString(value: TranslateReturnType): string {
  if (Array.isArray(value)) {
    return value[0] || "";
  }
  return value;
}

/**
 * Type guard to check if translation value is a string array
 * @param value - Translation value from t() function
 */
export function isStringArray(value: TranslateReturnType): value is string[] {
  return Array.isArray(value);
}
