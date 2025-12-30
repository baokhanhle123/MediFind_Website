/**
 * Social media and download platform icons
 */

import type { IconProps } from "@/types";

/**
 * Google Play icon
 * Used for Google Play Store download links
 */
export function GooglePlayIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <title>Google Play</title>
      <path d="M3.609 1.814L13.792 12 3.609 22.186c-.18-.18-.276-.466-.276-.791V2.605c0-.325.096-.611.276-.791zm10.839 9.547l2.481-2.481 3.909 2.26c.657.38.657.999 0 1.379l-3.909 2.26-2.481-2.481-.001-.937zm-1.358.639L3.953 21.137l9.137-9.137zm0-1L3.953 2.863 13.09 12z" />
    </svg>
  );
}

/**
 * QR code icon
 * Used to represent QR code scanning/display
 */
export function QRCodeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <title>QR Code</title>
      <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13 2h-2v4h2v-4zm-4-6h2v4h-2v-4zm2 6h4v2h-4v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2z" />
    </svg>
  );
}
