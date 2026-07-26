"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/ui/icons";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, FOUNDED_YEAR } from "@/constants";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} on-brand`}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Logo variant="white" className="w-10 h-10" aria-hidden={true} />
            <span className={styles.logoText}>
              <span className={styles.medi}>Medi</span>
              <span className={styles.find}>Find</span>
              <span className={styles.plus}>+</span>
            </span>
          </div>
          <p className={styles.tagline}>{String(t("footer.tagline"))}</p>
        </div>

        <div className={styles.links}>
          <h4>{String(t("footer.links.title"))}</h4>
          <a href="#hero">{String(t("footer.links.home"))}</a>
          <a href="#problem">{String(t("footer.links.about"))}</a>
          <a href="#solution">{String(t("footer.links.features"))}</a>
          <a href="#contact">{String(t("footer.links.contact"))}</a>
          <Link href={`/${language}/legal`}>{String(t("footer.links.legal"))}</Link>
        </div>

        <div className={styles.contact}>
          <h4>{String(t("footer.contact.title"))}</h4>
          <a href={CONTACT_EMAIL_HREF}>{CONTACT_EMAIL}</a>
        </div>
      </div>

      <div className={styles.bottom}>
        {/* Condensed disclaimer, deliberately on every page rather than only on
            /legal — this is a page about medication guidance. */}
        <p className={styles.disclaimer}>{String(t("legal.disclaimer_short"))}</p>
        {/* Year is rendered here rather than baked into the locale string, which
            had drifted to a hardcoded "2024". */}
        {/* suppressHydrationWarning: pages are statically generated, so the
            server bakes in the build year while the client reads the real one.
            They differ only across a New Year boundary, and the client value is
            the correct one to keep. */}
        <p suppressHydrationWarning>
          © {FOUNDED_YEAR === currentYear ? FOUNDED_YEAR : `${FOUNDED_YEAR}–${currentYear}`}{" "}
          {String(t("footer.copyright"))}
        </p>
      </div>
    </footer>
  );
}
