"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/ui/FeatureCard";
import {
  ScanIcon,
  ChatbotIcon,
  HealthTrackIcon,
  ReminderIcon,
  PharmacyIcon,
  HistoryIcon,
} from "@/components/ui/icons";
import { SOLUTION_FEATURES } from "@/constants";
import styles from "@/styles/SolutionSection.module.css";

/**
 * Map of feature keys to their icon components
 */
const FEATURE_ICON_MAP = {
  scan: <ScanIcon />,
  chatbot: <ChatbotIcon />,
  health_track: <HealthTrackIcon />,
  reminder: <ReminderIcon />,
  pharmacy: <PharmacyIcon />,
  history: <HistoryIcon />,
} as const;

/**
 * Grid displaying all solution features with icons
 */
export default function FeatureGrid() {
  const { t } = useLanguage();

  return (
    <div className={styles.featuresGrid}>
      {SOLUTION_FEATURES.map((featureKey) => (
        <FeatureCard
          key={featureKey}
          title={String(t(`solution.features.${featureKey}.title`))}
          description={String(t(`solution.features.${featureKey}.description`))}
          icon={FEATURE_ICON_MAP[featureKey]}
        />
      ))}
    </div>
  );
}
