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
 * Founding team keys, in display order
 * These map to translation keys in the format: team.founders.{key}
 *
 * Roles are described functionally rather than by job title — MediFind is not
 * yet incorporated, so C-level titles would assert a structure that does not
 * exist.
 */
export const FOUNDER_KEYS = ["khanh", "thuy", "linh"] as const;

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
  "bronze",
  "gold",
] as const;

/**
 * Maximum number of awards to display
 *
 * Keep in step with AWARD_TYPES and team.awards.list in the locale files — an
 * award past this index renders with no medal type.
 */
export const MAX_AWARDS_DISPLAY = AWARD_TYPES.length;
