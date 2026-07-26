"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";
import AwardCard from "@/components/ui/AwardCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import {
  MENTOR_KEYS,
  FOUNDER_KEYS,
  AWARD_TYPES,
  MAX_AWARDS_DISPLAY,
  TEAM_PHOTOS,
  PARTNERS,
} from "@/constants";
import styles from "@/styles/TeamSection.module.css";

export default function TeamSection() {
  const { t } = useLanguage();

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
              {MENTOR_KEYS.map((key) => (
                <TeamCard
                  key={key}
                  name={String(t(`team.mentors.${key}.name`))}
                  role={String(t(`team.mentors.${key}.role`))}
                  image={TEAM_PHOTOS[key]}
                  type="mentor"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Founding team */}
        <AnimatedSection delay={150}>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{String(t("team.founders.title"))}</h3>
            <div className={styles.foundersGrid}>
              {FOUNDER_KEYS.map((key) => (
                <TeamCard
                  key={key}
                  name={String(t(`team.founders.${key}.name`))}
                  role={String(t(`team.founders.${key}.role`))}
                  image={TEAM_PHOTOS[key]}
                  type="founder"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Partners */}
        <AnimatedSection delay={200}>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{String(t("team.partners.title"))}</h3>
            <div className={styles.partnersGrid}>
              {PARTNERS.map((partner) => (
                <div key={partner.key} className={styles.partnerCard}>
                  <div className={styles.partnerLogo}>
                    {/* The organisation's name is rendered as text below, so the
                        logo itself is decorative and must not repeat it. */}
                    <Image
                      src={partner.src}
                      alt=""
                      width={partner.width}
                      height={partner.height}
                      className={styles.partnerLogoImage}
                    />
                  </div>
                  <span>{String(t(`team.partners.${partner.key}`))}</span>
                </div>
              ))}
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
                  return awards.slice(0, MAX_AWARDS_DISPLAY).map((award, index: number) => (
                    <AwardCard
                      key={index}
                      title={award.title}
                      description={award.description}
                      type={AWARD_TYPES[index]}
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
