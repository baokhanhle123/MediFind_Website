"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import styles from "@/styles/HeroSection.module.css";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <AnimatedSection className={styles.content}>
          <span className={styles.badge}>{String(t("hero.badge"))}</span>
          <h1 className={styles.title}>
            <span className={styles.medi}>Medi</span>
            <span className={styles.find}>Find</span>
            <span className={styles.plus}>+</span>
          </h1>
          <p className={styles.tagline}>{String(t("hero.tagline"))}</p>
          <p className={styles.subtitle}>{String(t("hero.subtitle"))}</p>
          <div className={styles.ctas}>
            <Button href="#download" size="lg">
              {String(t("hero.cta_download"))}
            </Button>
            <Button href="#problem" variant="secondary" size="lg">
              {String(t("hero.cta_learn"))}
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection className={styles.visual} delay={200}>
          <div className={styles.phoneContainer}>
            {/* Phone mockup with app screens */}
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.appPreview}>
                  <div className={styles.appHeader}>
                    <svg width="24" height="24" viewBox="0 0 100 100" fill="var(--medifind-red)">
                      <path d="M50 90C50 90 85 65 85 40C85 20 70 10 50 25C30 10 15 20 15 40C15 65 50 90 50 90Z" />
                      <path d="M50 35V55M40 45H60" stroke="white" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                    <span>MediFind+</span>
                  </div>
                  <div className={styles.appContent}>
                    <div className={styles.featureBox}>
                      <span>Medication reminder</span>
                      <small>Set up now</small>
                    </div>
                    <div className={styles.featureBoxBlue}>
                      <span>Scan a prescription</span>
                    </div>
                    <div className={styles.chatPreview}>
                      <span>MediGPT</span>
                      <small>Chatbot powered by ChatGPT</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className={styles.floatingPlus}>+</div>
            <div className={styles.floatingPlus2}>+</div>
          </div>
        </AnimatedSection>
      </div>

      {/* Background decorations */}
      <div className={styles.bgDecor1}></div>
      <div className={styles.bgDecor2}></div>
    </section>
  );
}
