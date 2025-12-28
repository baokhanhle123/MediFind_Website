"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import styles from "@/styles/SolutionSection.module.css";

const featureIcons = {
  health_track: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  reminder: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  pharmacy: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  scan: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  chatbot: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  history: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
      <path d="M4 4l2 2" />
    </svg>
  ),
};

const stakeholderKeys = ["government", "hospitals", "clinics", "pharma", "users"] as const;

export default function SolutionSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("users");

  const features = [
    { key: "scan", icon: featureIcons.scan },
    { key: "chatbot", icon: featureIcons.chatbot },
    { key: "health_track", icon: featureIcons.health_track },
    { key: "reminder", icon: featureIcons.reminder },
    { key: "pharmacy", icon: featureIcons.pharmacy },
    { key: "history", icon: featureIcons.history },
  ];

  return (
    <section id="solution" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionTitle title={String(t("solution.title"))} />
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection delay={100}>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.key}
                title={String(t(`solution.features.${feature.key}.title`))}
                description={String(t(`solution.features.${feature.key}.description`))}
                icon={feature.icon}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Stakeholder Benefits */}
        <AnimatedSection delay={200}>
          <div className={styles.stakeholders}>
            <h3 className={styles.stakeholdersTitle}>Solutions for Everyone</h3>

            <div className={styles.tabs}>
              {stakeholderKeys.map((key) => (
                <button
                  key={key}
                  className={`${styles.tab} ${activeTab === key ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  {String(t(`solution.stakeholders.${key}.title`))}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              <ul className={styles.benefitsList}>
                {(() => {
                  const items = t(`solution.stakeholders.${activeTab}.items`);
                  if (Array.isArray(items)) {
                    return items.map((item: string, index: number) => (
                      <li key={index}>
                        <span className={styles.checkIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ));
                  }
                  return null;
                })()}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
