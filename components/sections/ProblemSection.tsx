"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import styles from "@/styles/ProblemSection.module.css";

export default function ProblemSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: String(t("problem.stats.arbitrary_use")),
      description: String(t("problem.stats.arbitrary_use_desc")),
    },
    {
      value: String(t("problem.stats.pharmacies")),
      description: String(t("problem.stats.pharmacies_desc")),
    },
    {
      value: String(t("problem.stats.worldwide")),
      description: String(t("problem.stats.worldwide_desc")),
    },
    {
      value: String(t("problem.stats.western_pacific")),
      description: String(t("problem.stats.western_pacific_desc")),
    },
  ];

  const issues = [
    String(t("problem.issues.misinformation")),
    String(t("problem.issues.continuity")),
    String(t("problem.issues.engagement")),
  ];

  return (
    <section id="problem" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionTitle
            title={String(t("problem.title"))}
            subtitle={String(t("problem.source"))}
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className={styles.globalBox}>
            <h3 className={styles.globalTitle}>{String(t("problem.global.title"))}</h3>
            <p className={styles.globalDescription}>
              {String(t("problem.global.description"))}
            </p>
            <p className={styles.globalDeaths}>{String(t("problem.global.deaths"))}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className={styles.issuesSection}>
            <h3 className={styles.issuesTitle}>{String(t("problem.title"))}</h3>
            <ul className={styles.issuesList}>
              {issues.map((issue, index) => (
                <li key={index}>
                  <span className={styles.issueIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className={styles.aboutBox}>
            <h3 className={styles.aboutTitle}>{String(t("about.title"))}</h3>
            <p className={styles.aboutText}>{String(t("about.description"))}</p>
            <p className={styles.aboutFeatures}>{String(t("about.features"))}</p>
            <p className={styles.aboutHighlight}>{String(t("about.first_in_vietnam"))}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
