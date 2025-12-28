"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 90C50 90 85 65 85 40C85 20 70 10 50 25C30 10 15 20 15 40C15 65 50 90 50 90Z"
                fill="white"
              />
              <path
                d="M50 35V55M40 45H60"
                stroke="var(--medifind-red)"
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
          <p className={styles.tagline}>{String(t("footer.tagline"))}</p>
        </div>

        <div className={styles.links}>
          <h4>{String(t("footer.links.title"))}</h4>
          <a href="#hero">{String(t("footer.links.home"))}</a>
          <a href="#problem">{String(t("footer.links.about"))}</a>
          <a href="#solution">{String(t("footer.links.features"))}</a>
          <a href="#download">{String(t("footer.links.download"))}</a>
        </div>

        <div className={styles.contact}>
          <h4>{String(t("footer.contact.title"))}</h4>
          <p>{String(t("footer.contact.wechat"))}</p>
          <a href="mailto:lethuthuy.contact@gmail.com">
            {String(t("footer.contact.email"))}
          </a>
        </div>

        <div className={styles.download}>
          <h4>{String(t("nav.download"))}</h4>
          <a
            href="#download"
            className={styles.playButton}
            aria-label="Get it on Google Play"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.609 22.186c-.18-.18-.276-.466-.276-.791V2.605c0-.325.096-.611.276-.791zm10.839 9.547l2.481-2.481 3.909 2.26c.657.38.657.999 0 1.379l-3.909 2.26-2.481-2.481-.001-.937zm-1.358.639L3.953 21.137l9.137-9.137zm0-1L3.953 2.863 13.09 12z" />
            </svg>
            <div>
              <span className={styles.getIt}>GET IT ON</span>
              <span className={styles.googlePlay}>Google Play</span>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{String(t("footer.copyright"))}</p>
      </div>
    </footer>
  );
}
