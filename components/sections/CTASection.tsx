"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, DEMO_REQUEST_HREF } from "@/constants";
import styles from "@/styles/CTASection.module.css";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <div className={styles.logo}>
            <Image
              src="/brand/medifind-wordmark.png"
              alt="MediFind+"
              width={1537}
              height={400}
              className={styles.logoImage}
            />
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

        {/* The Google Play badge and QR block that used to sit here pointed at
            href="#" and a QR glyph that was not a scannable code — the app is
            not published. A demo request is the honest equivalent. */}
        <AnimatedSection delay={300}>
          <div className={styles.ctaArea}>
            <Button href={DEMO_REQUEST_HREF} size="lg">
              {String(t("cta.request_demo"))}
            </Button>
            <p className={styles.ctaNote}>{String(t("cta.status"))}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className={styles.contact}>
            <p>
              <strong>{String(t("footer.contact.title"))}:</strong>{" "}
              <a href={CONTACT_EMAIL_HREF}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
