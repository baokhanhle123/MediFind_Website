"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PAPER } from "@/constants";
import styles from "@/styles/CredibilityStrip.module.css";

/**
 * Compact proof band sitting directly under the hero.
 *
 * The awards, published paper and dataset scale already exist further down the
 * page, but they sit in sections three and five — below the fold and below the
 * problem statement. For an investor, competition reviewer or recruiter the
 * evidence is the reason to keep reading, so it is surfaced first and each item
 * anchors to the section that substantiates it.
 *
 * Deliberately not new content: every figure here is drawn from copy that is
 * already on the page.
 */
const ITEMS = [
  { key: "awards", href: "#team", external: false },
  // Straight to the IEEE record — the one claim here that can be checked
  // independently, so it should be one click away.
  { key: "research", href: PAPER.url, external: true },
  { key: "data", href: "#technology", external: false },
  { key: "clinics", href: "#team", external: false },
] as const;

export default function CredibilityStrip() {
  const { t } = useLanguage();

  return (
    <section
      className={styles.strip}
      aria-label={String(t("credibility.aria_label"))}
    >
      <AnimatedSection className={styles.inner}>
        <ul className={styles.list}>
          {ITEMS.map(({ key, href, external }) => (
            <li key={key} className={styles.item}>
              <a
                href={href}
                className={styles.link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <span className={styles.value}>
                  {String(t(`credibility.${key}.value`))}
                </span>
                <span className={styles.label}>
                  {String(t(`credibility.${key}.label`))}
                </span>
                <span className={styles.detail}>
                  {String(t(`credibility.${key}.detail`))}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </section>
  );
}
