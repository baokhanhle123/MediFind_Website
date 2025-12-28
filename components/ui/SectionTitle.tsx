"use client";

import React from "react";
import styles from "@/styles/SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={`${styles.container} ${centered ? styles.centered : ""} ${
        light ? styles.light : ""
      }`}
    >
      <div className={styles.badge}>+</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
