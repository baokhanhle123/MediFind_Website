/**
 * Miscellaneous icons used throughout the website
 */

import type { IconProps } from "@/types";

/**
 * Check/checkmark icon
 * Used for lists, confirmations, and completed states
 */
export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className={className}
      {...props}
    >
      <title>Check</title>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * Info/alert circle icon
 * Used to indicate information or problems
 */
export function InfoCircleIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <title>Information</title>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}

/**
 * University/education icon
 * Used for academic institutions
 */
export function UniversityIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <title>University</title>
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
  );
}

/**
 * Globe/world icon
 * Used for international or global context
 */
export function GlobeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <title>Global</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

/**
 * Computer/monitor icon
 * Used for technology or digital services
 */
export function ComputerIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <title>Computer</title>
      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
    </svg>
  );
}
