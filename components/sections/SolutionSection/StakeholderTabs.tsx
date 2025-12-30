"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { STAKEHOLDER_KEYS } from "@/constants";
import type { StakeholderKey } from "@/constants";
import styles from "@/styles/SolutionSection.module.css";

interface StakeholderTabsProps {
  activeTab: StakeholderKey;
  onTabChange: (tab: StakeholderKey) => void;
}

/**
 * Tab navigation for stakeholder categories
 */
export default function StakeholderTabs({ activeTab, onTabChange }: StakeholderTabsProps) {
  const { t } = useLanguage();

  return (
    <div className={styles.tabs}>
      {STAKEHOLDER_KEYS.map((key) => (
        <button
          key={key}
          className={`${styles.tab} ${activeTab === key ? styles.activeTab : ""}`}
          onClick={() => onTabChange(key)}
          role="tab"
          aria-selected={activeTab === key}
          aria-controls={`stakeholder-panel-${key}`}
        >
          {String(t(`solution.stakeholders.${key}.title`))}
        </button>
      ))}
    </div>
  );
}
