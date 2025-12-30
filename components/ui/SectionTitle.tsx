"use client";

import React from "react";
import styles from "@/styles/SectionTitle.module.css";

/**
 * Props for the SectionTitle component
 */
interface SectionTitleProps {
  /** Main title text */
  title: string;
  /** Optional subtitle text displayed below the title */
  subtitle?: string;
  /** Whether to center-align the title (default: true) */
  centered?: boolean;
  /** Use light color scheme for dark backgrounds (default: false) */
  light?: boolean;
}

/**
 * Section heading component with decorative elements
 *
 * @description
 * Displays a styled section title with a "+" badge above, three decorative dots below,
 * and optional subtitle. Supports center alignment and light/dark color schemes.
 *
 * @example
 * ```tsx
 * // Basic centered title
 * <SectionTitle title="Our Solution" />
 *
 * // With subtitle
 * <SectionTitle
 *   title="Problem Statement"
 *   subtitle="According to WHO 2023"
 * />
 *
 * // Left-aligned with light theme
 * <SectionTitle
 *   title="Features"
 *   centered={false}
 *   light={true}
 * />
 * ```
 */
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
