/**
 * Internationalization utility functions
 */

import type { TranslateReturnType } from "@/types/i18n";

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
