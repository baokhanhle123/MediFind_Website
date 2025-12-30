/**
 * Team and awards-related constants for the MediFind Website
 */

import type { AwardType } from "@/types";

/**
 * Mentor keys for team section
 * These map to translation keys in the format: team.mentors.{key}
 */
export const MENTOR_KEYS = ["sonia", "thoai", "xuan"] as const;

/**
 * Supervisor key for team section
 * Maps to translation key: team.supervisor.khanh
 */
export const SUPERVISOR_KEY = "khanh" as const;

/**
 * Partner organization keys
 * These map to translation keys in the format: team.partners.{key}
 */
export const PARTNER_KEYS = {
  HCMUT_TBI: "hcmut_tbi",
  VSI: "vsi",
  HPC: "hpc",
} as const;

/**
 * Award types in the order they should be displayed
 * Corresponds to the awards list from translations
 */
export const AWARD_TYPES: readonly AwardType[] = [
  "gold",
  "silver",
  "bronze",
  "special",
  "special",
] as const;

/**
 * Maximum number of awards to display
 */
export const MAX_AWARDS_DISPLAY = 5;
