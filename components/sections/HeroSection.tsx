"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Logo } from "@/components/ui/icons";
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
            <Button href="#contact" size="lg">
              {String(t("hero.cta_demo"))}
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
                    <Logo className="w-6 h-6" aria-hidden={true} />
                    <span>MediFind+</span>
                  </div>
                  <div className={styles.appContent}>
                    <div className={styles.featureBox}>
                      <span>{String(t("hero.mockup.reminder"))}</span>
                      <small>{String(t("hero.mockup.reminder_action"))}</small>
                    </div>
                    <div className={styles.featureBoxBlue}>
                      <span>{String(t("hero.mockup.scan"))}</span>
                    </div>
                    <div className={styles.chatPreview}>
                      <span>{String(t("hero.mockup.chatbot"))}</span>
                      <small>{String(t("hero.mockup.chatbot_desc"))}</small>
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
