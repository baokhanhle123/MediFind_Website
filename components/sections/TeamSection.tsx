"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";
import AwardCard from "@/components/ui/AwardCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import styles from "@/styles/TeamSection.module.css";

export default function TeamSection() {
  const { t } = useLanguage();

  const mentors = [
    { key: "sonia" },
    { key: "thoai" },
    { key: "xuan" },
  ];

  const awardTypes: Array<"gold" | "silver" | "bronze" | "special"> = [
    "gold",
    "silver",
    "bronze",
    "special",
    "special",
  ];

  return (
    <section id="team" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionTitle title={String(t("team.title"))} />
        </AnimatedSection>

        {/* Mentors */}
        <AnimatedSection delay={100}>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{String(t("team.mentors.title"))}</h3>
            <div className={styles.mentorsGrid}>
              {mentors.map((mentor) => (
                <TeamCard
                  key={mentor.key}
                  name={String(t(`team.mentors.${mentor.key}.name`))}
                  role={String(t(`team.mentors.${mentor.key}.role`))}
                  type="mentor"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Supervisor */}
        <AnimatedSection delay={150}>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{String(t("team.supervisor.title"))}</h3>
            <div className={styles.supervisorContainer}>
              <TeamCard
                name={String(t("team.supervisor.khanh.name"))}
                role={String(t("team.supervisor.khanh.role"))}
                type="supervisor"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Partners */}
        <AnimatedSection delay={200}>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{String(t("team.partners.title"))}</h3>
            <div className={styles.partnersGrid}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                  </svg>
                </div>
                <span>{String(t("team.partners.hcmut_tbi"))}</span>
              </div>
              <div className={styles.partnerCard}>
                <div className={styles.partnerIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <span>{String(t("team.partners.vsi"))}</span>
              </div>
              <div className={styles.partnerCard}>
                <div className={styles.partnerIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                  </svg>
                </div>
                <span>{String(t("team.partners.hpc"))}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Awards */}
        <AnimatedSection delay={250}>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{String(t("team.awards.title"))}</h3>
            <div className={styles.awardsGrid}>
              {(() => {
                const awards = t("team.awards.list") as unknown as Array<{ title: string; description: string }>;
                if (Array.isArray(awards)) {
                  return awards.map((award, index: number) => (
                    <AwardCard
                      key={index}
                      title={award.title}
                      description={award.description}
                      type={awardTypes[index]}
                    />
                  ));
                }
                return null;
              })()}
            </div>
          </div>
        </AnimatedSection>

        {/* Clinics */}
        <AnimatedSection delay={300}>
          <div className={styles.clinicsSection}>
            <h3 className={styles.clinicsTitle}>{String(t("team.clinics.title"))}</h3>
            <ul className={styles.clinicsList}>
              {(() => {
                const clinics = t("team.clinics.list");
                if (Array.isArray(clinics)) {
                  return clinics.map((clinic: string, index: number) => (
                    <li key={index}>
                      <span className={styles.clinicNumber}>{index + 1}</span>
                      {clinic}
                    </li>
                  ));
                }
                return null;
              })()}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
