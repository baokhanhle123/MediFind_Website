/**
 * Locale constants for route-based internationalization
 *
 * @remarks
 * Each locale is a real route segment (`/en`, `/vi`) so both languages are
 * server-rendered, indexable and shareable. See `middleware.ts` for the
 * bare-`/` redirect and `app/[locale]/layout.tsx` for the hreflang wiring.
 */

import type { Language } from "@/types/i18n";

/**
 * Supported locales, in the order they should be advertised to crawlers
 */
export const LOCALES = ["en", "vi"] as const;

/**
 * Locale used when the visitor expresses no preference
 */
export const DEFAULT_LOCALE: Language = "en";

/**
 * Cookie holding the visitor's language preference
 *
 * @remarks
 * A cookie rather than localStorage: middleware runs before the page renders and
 * can only read cookies, which is what lets `/` redirect to the right locale
 * without a client-side flash.
 */
export const LANGUAGE_COOKIE = "medifind-language";

/** One year, in seconds */
export const LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * Type guard narrowing an unknown route segment to a supported locale
 */
export function isLocale(value: string | undefined | null): value is Language {
  return value === "en" || value === "vi";
}
