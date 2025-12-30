/**
 * MediFind+ Logo Component
 * Displays the heart icon with medical cross
 */

import type { LogoProps } from "@/types";

/**
 * MediFind logo with configurable variant
 * @param variant - "default" for red fill, "white" for white fill
 * @param className - Additional CSS classes
 */
export function Logo({ variant = "default", className, ...props }: LogoProps) {
  const fillColor = variant === "white" ? "white" : "var(--medifind-red)";
  const strokeColor = variant === "white" ? "var(--medifind-red)" : "white";

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      {...props}
    >
      <title>MediFind+ Logo</title>
      <path
        d="M50 90C50 90 85 65 85 40C85 20 70 10 50 25C30 10 15 20 15 40C15 65 50 90 50 90Z"
        fill={fillColor}
      />
      <path
        d="M50 35V55M40 45H60"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
