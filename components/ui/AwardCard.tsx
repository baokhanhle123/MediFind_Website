"use client";

import React from "react";
import styles from "@/styles/AwardCard.module.css";

interface AwardCardProps {
  title: string;
  description: string;
  type?: "gold" | "silver" | "bronze" | "special";
}

const icons = {
  gold: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  silver: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="6" />
      <path d="M9 14h6v8l-3-2-3 2v-8z" />
    </svg>
  ),
  bronze: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="6" />
      <path d="M9 14h6v8l-3-2-3 2v-8z" />
    </svg>
  ),
  special: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2l2.4-7.2-6-4.8h7.6L12 2z" />
    </svg>
  ),
};

export default function AwardCard({
  title,
  description,
  type = "gold",
}: AwardCardProps) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div className={styles.iconWrapper}>{icons[type]}</div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
