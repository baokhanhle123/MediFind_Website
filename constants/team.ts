/**
 * Team and awards-related constants for the MediFind Website
 */

import type { AwardType } from "@/types";

/**
 * Mentor keys, in display order
 * These map to translation keys in the format: team.mentors.{key}
 *
 * Ordered by advisory discipline — technical, then medical, then business — so
 * that the two Medical Advisors and the two Business Advisors each read as a
 * pair rather than as a label repeated at random. At three columns that also
 * puts the two business advisors together in the centred trailing row.
 */
export const MENTOR_KEYS = ["thoai", "xuan", "dung", "sonia", "huy"] as const;

/**
 * Every key used by the three groups in this file. `TEAM_PHOTOS` is keyed by
 * this rather than by `string` so that a mistyped key is a compile error rather
 * than a silently wrong or missing face — see the near-collisions listed there.
 */
type TeamKey =
  | (typeof MENTOR_KEYS)[number]
  | (typeof FOUNDER_KEYS)[number]
  | (typeof CORE_KEYS)[number];

/**
 * Headshots, by translation key. Files live in `public/team/`. A key with no
 * entry falls back to TeamCard's placeholder silhouette, so leaving someone out
 * is legal — but never point an entry at a file that does not exist. Next's
 * `<Image>` does not check a literal `src` at build time, so that ships a
 * broken-image icon instead of the placeholder.
 *
 * This is one flat map shared by all three groups, so keys must stay unique
 * across groups. Three pairs are close enough to swap by accident:
 *
 *   thu (core)  / thuy (founder)  — different people, one letter apart
 *   hung (core) / huy (mentor)    — different groups, one letter apart
 *   bao (core)                    — Khánh's key is `khanh`, but his file is
 *                                   le-bao-khanh.jpg, which a reader scanning
 *                                   this list for "bao" reaches first
 *
 * The `TeamKey` typing above is what actually catches these; the list is here
 * so the next person to edit knows why the map is typed at all.
 *
 * Filenames are the full name in Vietnamese order, diacritics stripped. They
 * deliberately do not match the translation keys, which are short.
 *
 * All files are 240x240 — 2x the 120px render — so a replacement should match
 * that. The nine oldest were recovered from PDFs and upscaled; khanh, thuy and
 * linh in particular are soft at 2x.
 *
 * Of the eight added later, seven were cut from the team deck's own circular
 * framing, so their square corners hold flat page background. That is invisible
 * behind TeamCard's border-radius, but worth knowing before reusing them
 * anywhere square. do-thi-mai-dung is the exception: she sits near the edge of
 * her circle, so a square centred on her face would have reached outside it and
 * was taken from the full source photo instead. nguyen-viet-hung is the softest
 * of the set; his only source was 215x160. Replacing a file in place fixes any
 * of this — nothing here needs to change.
 */
export const TEAM_PHOTOS: Readonly<Partial<Record<TeamKey, string>>> = {
  // Mentors
  thoai: "/team/thoai-nam.jpg",
  xuan: "/team/ha-thi-thanh-xuan.jpg",
  dung: "/team/do-thi-mai-dung.jpg",
  sonia: "/team/sonia.jpg",
  huy: "/team/nguyen-hoang-huy.jpg",
  // Founding team
  khanh: "/team/le-bao-khanh.jpg",
  thuy: "/team/le-thu-thuy.jpg",
  linh: "/team/pham-my-linh.jpg",
  // Core team
  phu: "/team/dang-ngoc-phu.jpg",
  nghia: "/team/dang-kim-nghia.jpg",
  tri: "/team/cao-chanh-tri.jpg",
  bao: "/team/bui-van-quoc-bao.jpg",
  anh: "/team/ngo-ngoc-tuan-anh.jpg",
  thu: "/team/nguyen-hoang-anh-thu.jpg",
  hung: "/team/nguyen-viet-hung.jpg",
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
 * The engineers — not founders and not advisors, so they render as their own
 * group rather than being folded into either. Some of them also appear in
 * `PAPER.authors` in ./contact.ts, but that list is publication metadata and
 * does not track this one in either direction.
 *
 * Grouped one discipline per row of the three-column grid: first the
 * recognition-and-language pipeline, in the order a prescription actually
 * flows through it, then the AI and data platform, then application
 * engineering. Laid out three per line here so the source mirrors the grid.
 */
export const CORE_KEYS = [
  "phu", "nghia", "tri",
  "bao", "anh", "thu",
  "hung", "toai", "minh",
] as const;

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
