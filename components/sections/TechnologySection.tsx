"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { ExternalLinkIcon } from "@/components/ui/icons";
import { PAPER } from "@/constants";
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

              {/* Tuning, not authorship: the pipeline adapts VietOCR and spaCy
                  rather than building either from nothing, and the icon should
                  not imply otherwise. */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                </div>
                <h4>{String(t("technology.research.title"))}</h4>
                <p>{String(t("technology.research.description"))}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className={styles.architectureBox}>
              <p>{String(t("technology.architecture.description"))}</p>
            </div>
          </AnimatedSection>

          {/*
            The claim above is the loud one; this is its receipt. The publication
            is the only thing on the page a reader can check without taking our
            word for it, so it gets a record of its own rather than a badge tucked
            into a card — with the DOI exposed, not just the Xplore link.

            Title, venue, publisher and DOI render straight from PAPER in both
            locales: translating a citation's proper nouns would make the paper
            unfindable for the reader most likely to search for it.
          */}
          <AnimatedSection delay={400}>
            <div id="research" className={styles.record}>
              <h3 className={styles.recordHeading}>
                {String(t("technology.publication.heading"))}
              </h3>

              <div className={styles.recordBody}>
                <div className={styles.recordMain}>
                  <cite className={styles.recordTitle}>{PAPER.title}</cite>
                  <Button
                    variant="outline"
                    size="sm"
                    href={PAPER.url}
                    className={styles.recordCta}
                  >
                    {String(t("technology.publication.cta"))}
                    <ExternalLinkIcon aria-hidden />
                    <span className="sr-only">
                      {String(t("technology.publication.new_tab"))}
                    </span>
                  </Button>
                </div>

                <dl className={styles.recordMeta}>
                  <dt className={styles.recordMetaKey}>
                    {String(t("technology.publication.venue_label"))}
                  </dt>
                  <dd className={`${styles.recordMetaValue} ${styles.recordVenue}`}>
                    {PAPER.venue}
                  </dd>

                  <dt className={styles.recordMetaKey}>
                    {String(t("technology.publication.publisher_label"))}
                  </dt>
                  <dd className={styles.recordMetaValue}>{PAPER.publisher}</dd>

                  {/* Date and place read as prose rather than as identifiers, so
                      unlike the rest of the record they are translated. Both must
                      track PAPER.date and PAPER.location. */}
                  <dt className={styles.recordMetaKey}>
                    {String(t("technology.publication.presented_label"))}
                  </dt>
                  <dd className={styles.recordMetaValue}>
                    {String(t("technology.publication.date"))}
                    {" · "}
                    {String(t("technology.publication.location"))}
                  </dd>

                  <dt className={styles.recordMetaKey}>
                    {String(t("technology.publication.doi_label"))}
                  </dt>
                  <dd className={styles.recordMetaValue}>
                    <a
                      className={styles.recordDoi}
                      href={`https://doi.org/${PAPER.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {PAPER.doi}
                      <span className="sr-only">
                        {String(t("technology.publication.new_tab"))}
                      </span>
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
