/**
 * Feature and stakeholder-related constants for the MediFind Website
 */

/**
 * Feature icon names mapped to translation keys
 */
export const FEATURE_KEYS = {
  SCAN: "scan",
  CHATBOT: "chatbot",
  HEALTH_TRACK: "health_track",
  REMINDER: "reminder",
  PHARMACY: "pharmacy",
  HISTORY: "history",
} as const;

/**
 * Ordered list of features to display in the solution section
 */
export const SOLUTION_FEATURES = [
  FEATURE_KEYS.SCAN,
  FEATURE_KEYS.CHATBOT,
  FEATURE_KEYS.HEALTH_TRACK,
  FEATURE_KEYS.REMINDER,
  FEATURE_KEYS.PHARMACY,
  FEATURE_KEYS.HISTORY,
] as const;

/**
 * Stakeholder types for the solution section tabs
 */
export const STAKEHOLDER_KEYS = [
  "government",
  "hospitals",
  "clinics",
  "pharma",
  "users",
] as const;

export type StakeholderKey = (typeof STAKEHOLDER_KEYS)[number];

/**
 * Default active stakeholder tab
 */
export const DEFAULT_STAKEHOLDER_TAB: StakeholderKey = "users";

/**
 * Problem section statistics configuration
 * These map to translation keys in the format: problem.stats.{key}
 */
export const PROBLEM_STATS_KEYS = [
  "arbitrary_use",
  "pharmacies",
  "worldwide",
  "western_pacific",
] as const;

/**
 * Problem issues configuration
 * These map to translation keys in the format: problem.issues.{key}
 */
export const PROBLEM_ISSUES_KEYS = [
  "misinformation",
  "continuity",
  "engagement",
] as const;
