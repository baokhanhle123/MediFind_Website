"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import styles from "@/styles/CTASection.module.css";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="download" className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <div className={styles.logo}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 90C50 90 85 65 85 40C85 20 70 10 50 25C30 10 15 20 15 40C15 65 50 90 50 90Z"
                fill="var(--medifind-red)"
              />
              <path
                d="M50 35V55M40 45H60"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.logoText}>
              <span className={styles.medi}>Medi</span>
              <span className={styles.find}>Find</span>
              <span className={styles.plus}>+</span>
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className={styles.tagline}>{String(t("hero.tagline"))}</p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className={styles.message}>
            <span className={styles.scan}>{String(t("cta.title"))}</span>
            <span className={styles.prescription}>{String(t("cta.subtitle"))}</span>
            <span className={styles.healthier}>{String(t("cta.result"))}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className={styles.downloadArea}>
            <div className={styles.qrCode}>
              <div className={styles.qrPlaceholder}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13 2h-2v4h2v-4zm-4-6h2v4h-2v-4zm2 6h4v2h-4v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                </svg>
                <span>Scan to download</span>
              </div>
            </div>

            <div className={styles.downloadButtons}>
              <a href="#" className={styles.playButton}>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.18-.18-.276-.466-.276-.791V2.605c0-.325.096-.611.276-.791zm10.839 9.547l2.481-2.481 3.909 2.26c.657.38.657.999 0 1.379l-3.909 2.26-2.481-2.481-.001-.937zm-1.358.639L3.953 21.137l9.137-9.137zm0-1L3.953 2.863 13.09 12z" />
                </svg>
                <div>
                  <span className={styles.getIt}>GET IT ON</span>
                  <span className={styles.googlePlay}>Google Play</span>
                </div>
              </a>

              <Button href="#" size="lg">
                {String(t("cta.try_now"))}
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className={styles.contact}>
            <p>
              <strong>WeChat:</strong> maryle_23
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:lethuthuy.contact@gmail.com">
                lethuthuy.contact@gmail.com
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
