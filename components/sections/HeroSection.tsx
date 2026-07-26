"use client";

import React from "react";
import Image from "next/image";
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
          {/* Still an h1: the heading element and its accessible name are what
              matter for document outline and SEO, and the alt carries the
              wordmark text that the spans used to provide. */}
          <h1 className={styles.title}>
            <Image
              src="/brand/medifind-wordmark.png"
              alt="MediFind+"
              width={1537}
              height={400}
              className={styles.titleImage}
              priority
            />
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
            {/* Real app screenshot inside the phone frame. The screenshot is
                English-only, so the alt text carries the meaning in both
                locales — it is the only part a Vietnamese or screen-reader
                user can actually read. */}
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <Image
                  src="/screens/reminder.png"
                  alt={String(t("hero.screenshot.alt"))}
                  width={518}
                  height={1104}
                  className={styles.screenshot}
                  sizes="(max-width: 480px) 200px, (max-width: 900px) 220px, 280px"
                  priority
                />
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
