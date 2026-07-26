"use client";

import React, { useRef } from "react";
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
 *
 * Implements the WAI-ARIA tabs pattern. The roles alone are not enough: a
 * screen-reader user told "tab, 1 of n" expects arrow keys to move between them
 * and Tab to leave the group entirely. Without roving tabindex, Tab stepped
 * through every tab and the arrow keys did nothing — the announced affordance
 * did not exist.
 */
export default function StakeholderTabs({ activeTab, onTabChange }: StakeholderTabsProps) {
  const { t } = useLanguage();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const key = STAKEHOLDER_KEYS[index];
    onTabChange(key);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = STAKEHOLDER_KEYS.length - 1;

    switch (event.key) {
      case "ArrowRight":
        focusTab(index === last ? 0 : index + 1);
        break;
      case "ArrowLeft":
        focusTab(index === 0 ? last : index - 1);
        break;
      case "Home":
        focusTab(0);
        break;
      case "End":
        focusTab(last);
        break;
      default:
        return;
    }

    // Only reached when a key was handled — stops Left/Right scrolling the page.
    event.preventDefault();
  };

  return (
    <div
      className={styles.tabs}
      role="tablist"
      aria-label={String(t("solution.stakeholders_title"))}
    >
      {STAKEHOLDER_KEYS.map((key, index) => {
        const isActive = activeTab === key;

        return (
          <button
            key={key}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            // Referenced by the panel's aria-labelledby, which pointed at a
            // non-existent id before these were added
            id={`tab-${key}`}
            className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
            onClick={() => onTabChange(key)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`stakeholder-panel-${key}`}
            // Roving tabindex: the tablist is a single Tab stop, and arrow keys
            // move within it.
            tabIndex={isActive ? 0 : -1}
          >
            {String(t(`solution.stakeholders.${key}.title`))}
          </button>
        );
      })}
    </div>
  );
}
