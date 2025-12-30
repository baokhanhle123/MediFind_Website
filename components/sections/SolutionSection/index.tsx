"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StakeholderTabs from "./StakeholderTabs";
import StakeholderContent from "./StakeholderContent";
import FeatureGrid from "./FeatureGrid";
import { DEFAULT_STAKEHOLDER_TAB } from "@/constants";
import type { StakeholderKey } from "@/constants";
import styles from "@/styles/SolutionSection.module.css";

/**
 * Solution section showcasing app features and stakeholder benefits
 *
 * @description
 * Displays a grid of features and tabbed stakeholder benefits.
 * Split into sub-components for better maintainability:
 * - FeatureGrid: Displays 6 main app features
 * - StakeholderTabs: Tab navigation for different user types
 * - StakeholderContent: Benefits list for selected stakeholder
 */
export default function SolutionSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<StakeholderKey>(DEFAULT_STAKEHOLDER_TAB);

  return (
    <section id="solution" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionTitle title={String(t("solution.title"))} />
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection delay={100}>
          <FeatureGrid />
        </AnimatedSection>

        {/* Stakeholder Benefits */}
        <AnimatedSection delay={200}>
          <div className={styles.stakeholders}>
            <h3 className={styles.stakeholdersTitle}>Solutions for Everyone</h3>

            <StakeholderTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <StakeholderContent activeTab={activeTab} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
