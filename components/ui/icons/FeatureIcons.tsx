/**
 * Feature icons for the solution section
 * Icons representing different app features
 */

import type { IconProps } from "@/types";

/**
 * Health tracking/activity icon
 * Represents health monitoring and vital signs tracking
 */
export function HealthTrackIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <title>Health Tracking</title>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

/**
 * Reminder/clock icon
 * Represents medication reminders and schedules
 */
export function ReminderIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <title>Reminder</title>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/**
 * Pharmacy/location icon
 * Represents nearby pharmacy finder
 */
export function PharmacyIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <title>Find Pharmacy</title>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/**
 * Scan/camera icon
 * Represents prescription scanning feature
 */
export function ScanIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <title>Scan Prescription</title>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

/**
 * Chatbot/message icon
 * Represents AI chatbot feature
 */
export function ChatbotIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <title>AI Chatbot</title>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/**
 * History/time icon
 * Represents medication history tracking
 */
export function HistoryIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <title>History</title>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
      <path d="M4 4l2 2" />
    </svg>
  );
}
