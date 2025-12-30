"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en.json";
import vi from "@/locales/vi.json";
import type {
  Language,
  Translations,
  LanguageContextType,
  TranslateReturnType,
  TranslationValue,
} from "@/types/i18n";

const translations: Record<Language, Translations> = { en, vi };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Retrieves a nested value from translation object using dot notation
 * @param obj - Translation object
 * @param path - Dot-separated path (e.g., "nav.home" or "solution.features.scan.title")
 * @returns The translation value (string or string array), or the path key if not found
 */
function getNestedValue(
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("medifind-language") as Language;
    if (saved && (saved === "en" || saved === "vi")) {
      setLanguageState(saved);
      document.documentElement.lang = saved; // Sync HTML lang attribute on mount
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("medifind-language", lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "vi" : "en";
    setLanguage(newLang);
  };

  const t = (key: string): TranslateReturnType => {
    return getNestedValue(
      translations[language] as unknown as Record<string, TranslationValue>,
      key
    );
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: "en",
          setLanguage: () => {},
          toggleLanguage: () => {},
          t: (key: string): TranslateReturnType =>
            getNestedValue(en as unknown as Record<string, TranslationValue>, key),
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
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
 * - `setLanguage`: Function to set a specific language
 * - `toggleLanguage`: Function to toggle between languages
 * - `t`: Translation function that accepts dot-notation keys
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { language, toggleLanguage, t } = useLanguage();
 *
 *   return (
 *     <div>
 *       <p>{t("nav.home")}</p>
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
