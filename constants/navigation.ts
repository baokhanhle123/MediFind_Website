/**
 * Navigation-related constants for the MediFind Website
 */

import type { NavLink } from "@/types";

/**
 * Main navigation links displayed in the navbar
 * Each link corresponds to a section on the page
 */
export const NAV_LINKS: readonly NavLink[] = [
  { key: "home", href: "#hero" },
  { key: "problem", href: "#problem" },
  { key: "solution", href: "#solution" },
  { key: "technology", href: "#technology" },
  { key: "team", href: "#team" },
] as const;

/**
 * Section IDs used for scroll navigation and anchoring
 */
export const SECTION_IDS = {
  HERO: "hero",
  PROBLEM: "problem",
  SOLUTION: "solution",
  TECHNOLOGY: "technology",
  TEAM: "team",
  CTA: "cta",
} as const;

/**
 * Navbar configuration
 */
export const NAVBAR_CONFIG = {
  SCROLL_THRESHOLD: 50, // Pixels scrolled before navbar style changes
  NAVBAR_HEIGHT: 80, // Height in pixels for scroll offset calculation
} as const;
