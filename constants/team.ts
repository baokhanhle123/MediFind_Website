/**
 * Team and awards-related constants for the MediFind Website
 */

import type { AwardType } from "@/types";

/**
 * Mentor keys for team section
 * These map to translation keys in the format: team.mentors.{key}
 */
export const MENTOR_KEYS = ["thoai", "xuan", "sonia"] as const;

/**
 * Headshots, by translation key. Files live in `public/team/`. A key with no
 * entry falls back to TeamCard's placeholder silhouette.
 *
 * This is one flat map shared by all three groups, so keys must stay unique
 * across groups — `thu` (core) and `thuy` (founder) are different people and
 * one letter apart.
 *
 * Filenames are the full name in Vietnamese order, diacritics stripped. They
 * deliberately do not match the translation keys, which are short.
 *
 * All files are 240x240 — 2x the 120px render — so a replacement should match
 * that. Most were recovered from PDFs and are upscaled from small originals;
 * khanh, thuy and linh in particular are soft at 2x. Replacing the files in
 * place is enough to fix that — nothing here needs to change.
 */
export const TEAM_PHOTOS: Readonly<Record<string, string>> = {
  khanh: "/team/le-bao-khanh.jpg",
  thuy: "/team/le-thu-thuy.jpg",
  linh: "/team/pham-my-linh.jpg",
  thoai: "/team/thoai-nam.jpg",
  xuan: "/team/ha-thi-thanh-xuan.jpg",
  sonia: "/team/sonia.jpg",
  thu: "/team/nguyen-hoang-anh-thu.jpg",
  toai: "/team/tran-hoang-cong-toai.jpg",
  minh: "/team/vo-duc-minh.jpg",
};

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
 * Core team keys, in display order
 * These map to translation keys in the format: team.core.{key}
 *
 * These three are the engineers behind the paper in `PAPER.authors` — they are
 * not founders and not advisors, so they render as their own group rather than
 * being folded into either.
 */
export const CORE_KEYS = ["thu", "toai", "minh"] as const;

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
 * Partner organisations in display order, with their logos.
 *
 * Intrinsic dimensions are the real file sizes in `public/partners/` — the
 * marks are not uniform, so each is scaled to a common height in CSS rather
 * than being squashed into a shared box.
 */
export const PARTNERS = [
  { key: PARTNER_KEYS.HCMUT_TBI, src: "/partners/hcmut-tbi.png", width: 200, height: 200 },
  { key: PARTNER_KEYS.VSI, src: "/partners/vsi.png", width: 450, height: 450 },
  { key: PARTNER_KEYS.HPC, src: "/partners/hpc.png", width: 344, height: 129 },
] as const;

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
