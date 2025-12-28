"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import styles from "@/styles/TechnologySection.module.css";

export default function TechnologySection() {
  const { t } = useLanguage();

  const techItems = [
    { label: "OCR", color: "red" },
    { label: "NLP", color: "blue" },
    { label: "LLM", color: "red" },
    { label: "Big Data", color: "blue" },
    { label: "VietOCR", color: "red" },
    { label: "spaCy", color: "blue" },
  ];

  return (
    <section id="technology" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionTitle title={String(t("technology.title"))} />
        </AnimatedSection>

        <div className={styles.content}>
          <AnimatedSection delay={100}>
            <div className={styles.techGrid}>
              {/* Modern Technology */}
              <div className={styles.techCard}>
                <h3>{String(t("technology.modern.title"))}</h3>
                <div className={styles.techTags}>
                  {techItems.map((tech, index) => (
                    <span
                      key={index}
                      className={`${styles.tag} ${styles[tech.color]}`}
                    >
                      {tech.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Sources */}
              <div className={styles.techCard}>
                <h3>{String(t("technology.data.title"))}</h3>
                <ul className={styles.dataList}>
                  <li>
                    <span className={styles.dataIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                    {String(t("technology.data.drugbank"))}
                  </li>
                  <li>
                    <span className={styles.dataIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                    {String(t("technology.data.umls"))}
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h4>{String(t("technology.solving.title"))}</h4>
                <p>{String(t("technology.solving.description"))}</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h4>{String(t("technology.digital.title"))}</h4>
                <p>{String(t("technology.digital.description"))}</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h4>{String(t("technology.research.title"))}</h4>
                <p>{String(t("technology.research.description"))}</p>
                <span className={styles.paperBadge}>{String(t("technology.research.paper"))}</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className={styles.architectureBox}>
              <p>{String(t("technology.architecture.description"))}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
