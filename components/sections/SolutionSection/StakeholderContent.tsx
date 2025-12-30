"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckIcon } from "@/components/ui/icons";
import type { StakeholderKey } from "@/constants";
import styles from "@/styles/SolutionSection.module.css";

interface StakeholderContentProps {
  activeTab: StakeholderKey;
}

/**
 * Content panel displaying benefits for the selected stakeholder
 */
export default function StakeholderContent({ activeTab }: StakeholderContentProps) {
  const { t } = useLanguage();

  const items = t(`solution.stakeholders.${activeTab}.items`);

  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <div
      id={`stakeholder-panel-${activeTab}`}
      className={styles.tabContent}
      role="tabpanel"
      aria-labelledby={`tab-${activeTab}`}
    >
      <ul className={styles.benefitsList}>
        {items.map((item: string, index: number) => (
          <li key={index}>
            <span className={styles.checkIcon}>
              <CheckIcon aria-hidden={true} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
