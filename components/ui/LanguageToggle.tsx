"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/styles/LanguageToggle.module.css";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={styles.toggle}
      aria-label="Toggle language"
    >
      <span className={language === "en" ? styles.active : ""}>EN</span>
      <span className={styles.divider}>/</span>
      <span className={language === "vi" ? styles.active : ""}>VI</span>
    </button>
  );
}
