"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en.json";
import vi from "@/locales/vi.json";

type Language = "en" | "vi";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => unknown;
}

const translations: Record<Language, Translations> = { en, vi };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path; // Return key if path not found
    }
  }

  return result;
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

  const t = (key: string): unknown => {
    return getNestedValue(translations[language] as unknown as Record<string, unknown>, key);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: "en",
          setLanguage: () => {},
          toggleLanguage: () => {},
          t: (key: string): unknown => getNestedValue(en as unknown as Record<string, unknown>, key),
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

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
