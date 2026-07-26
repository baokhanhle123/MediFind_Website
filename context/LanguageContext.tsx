"use client";

import React, { createContext, useCallback, useContext, useMemo, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LANGUAGE_COOKIE, LANGUAGE_COOKIE_MAX_AGE } from "@/constants/locales";
import { translate } from "@/utils/i18n";
import type {
  Language,
  LanguageContextType,
  TranslateReturnType,
} from "@/types/i18n";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  /** Active locale, supplied by the `[locale]` route segment */
  language: Language;
}

/**
 * Provides the active locale and translation function to client components
 *
 * @description
 * The URL is the single source of truth for language — `language` comes from the
 * `[locale]` route segment, so the server renders the correct copy on the first
 * pass. There is deliberately no component state and no `mounted` gate here:
 * both existed to reconcile a localStorage read against SSR, and both caused a
 * flash of English before the stored preference applied.
 *
 * Switching language is a navigation (`/en` ↔ `/vi`), not a state update. The
 * preference is mirrored into a cookie so `middleware.ts` can honour it when a
 * visitor later lands on bare `/`.
 */
export function LanguageProvider({ children, language }: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return;

      document.cookie = `${LANGUAGE_COOKIE}=${lang}; path=/; max-age=${LANGUAGE_COOKIE_MAX_AGE}; SameSite=Lax`;

      // Swap the leading locale segment, preserving any deeper path and the hash
      // so switching language keeps the reader where they were on the page.
      const segments = pathname.split("/");
      segments[1] = lang;
      router.push(`${segments.join("/") || `/${lang}`}${window.location.hash}`);
    },
    [language, pathname, router]
  );

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "vi" : "en");
  }, [language, setLanguage]);

  const t = useCallback(
    (key: string): TranslateReturnType => translate(language, key),
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, setLanguage, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/**
 * Hook to access the language context
 *
 * @description
 * Provides access to the current language, language setter, toggle function,
 * and translation function. Must be used within a LanguageProvider.
 *
 * @throws {Error} If used outside of a LanguageProvider
 *
 * @returns {LanguageContextType} Language context value containing:
 * - `language`: Current language ("en" | "vi")
 * - `setLanguage`: Navigates to the given locale and stores the preference
 * - `toggleLanguage`: Navigates to the other locale
 * - `t`: Translation function that accepts dot-notation keys
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { language, toggleLanguage, t } = useLanguage();
 *
 *   return (
 *     <div>
 *       <p>{String(t("nav.home"))}</p>
 *       <button onClick={toggleLanguage}>
 *         Switch to {language === "en" ? "Vietnamese" : "English"}
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
