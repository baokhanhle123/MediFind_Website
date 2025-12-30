/**
 * Shared TypeScript type definitions for the MediFind Website
 */

// ============================================
// Component Props Types
// ============================================

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
export type AwardType = "gold" | "silver" | "bronze" | "special";

// ============================================
// Navigation Types
// ============================================

export interface NavLink {
  key: string;
  href: string;
}

// ============================================
// Feature Types
// ============================================

export interface Feature {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: keyof typeof FeatureIconNames;
}

export const FeatureIconNames = {
  health_track: "health_track",
  reminder: "reminder",
  search: "search",
  interaction: "interaction",
  nearby: "nearby",
  emergency: "emergency",
} as const;

export interface StakeholderTab {
  id: string;
  labelKey: string;
}

// ============================================
// Team Types
// ============================================

export interface TeamMember {
  nameKey: string;
  roleKey: string;
  image?: string;
}

export interface Award {
  type: AwardType;
  titleKey: string;
  eventKey: string;
}

// ============================================
// Statistics Types
// ============================================

export interface Statistic {
  valueKey: string;
  labelKey: string;
}

// ============================================
// Icon Component Props
// ============================================

export interface IconProps {
  className?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
}

export interface LogoProps extends IconProps {
  variant?: "default" | "white";
}
