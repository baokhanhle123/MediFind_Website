"use client";

import React from "react";
import { cn } from "@/utils";

/**
 * Props for the Button component
 */
interface ButtonProps {
  /** Content to display inside the button */
  children: React.ReactNode;
  /** Visual style variant of the button */
  variant?: "primary" | "secondary" | "outline";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** If provided, renders as a link instead of a button */
  href?: string;
  /** Click handler for button (only used when href is not provided) */
  onClick?: () => void;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
}

/**
 * Versatile button component that can render as either a button or link
 *
 * @description
 * Renders as an anchor tag when `href` is provided, otherwise renders as a button element.
 * Supports multiple variants (primary, secondary, outline) and sizes (sm, md, lg).
 * Automatically adds target="_blank" and security attributes for external links.
 *
 * @example
 * ```tsx
 * // Button element
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click Me
 * </Button>
 *
 * // Link element
 * <Button variant="outline" href="#section">
 *   Learn More
 * </Button>
 *
 * // External link
 * <Button href="https://example.com">
 *   Visit Site
 * </Button>
 * ```
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  fullWidth = false,
}: ButtonProps) {
  const buttonClasses = cn(
    // Base styles
    "inline-flex items-center justify-center rounded-button font-medium",
    "transition-all duration-normal",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",

    // Variant styles
    {
      // Primary variant
      "bg-medifind-red text-white hover:bg-medifind-red-dark focus:ring-medifind-red/50 shadow-sm hover:shadow-md":
        variant === "primary",

      // Secondary variant
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400":
        variant === "secondary",

      // Outline variant
      "bg-white text-medifind-red border-2 border-medifind-red hover:bg-medifind-red/5 focus:ring-medifind-red/50":
        variant === "outline",
    },

    // Size styles
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },

    // Full width
    fullWidth && "w-full",

    // Custom className
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
