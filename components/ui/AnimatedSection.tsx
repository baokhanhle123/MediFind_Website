"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Props for the AnimatedSection component
 */
interface AnimatedSectionProps {
  /** Content to animate when scrolled into view */
  children: React.ReactNode;
  /** Additional CSS classes to apply to the wrapper */
  className?: string;
  /** Delay in milliseconds before triggering the animation (default: 0) */
  delay?: number;
}

/**
 * Wrapper component that animates its children when scrolled into viewport
 *
 * @description
 * Uses the Intersection Observer API to detect when the element enters the viewport
 * and applies animation classes. The animation is triggered only once and unobserves
 * after activation to improve performance. Supports configurable delay for staggered
 * animations.
 *
 * @remarks
 * - Animation classes are defined in globals.css (.animate-on-scroll and .visible)
 * - Observer threshold is set to 0.1 (triggers when 10% visible)
 * - Bottom margin of -50px ensures animation triggers slightly before full visibility
 * - Animation only runs once per element (observer unsubscribes after trigger)
 *
 * @example
 * ```tsx
 * // Basic usage
 * <AnimatedSection>
 *   <h1>This will fade in when scrolled into view</h1>
 * </AnimatedSection>
 *
 * // With delay for staggered animations
 * <AnimatedSection delay={100}>
 *   <p>First item</p>
 * </AnimatedSection>
 * <AnimatedSection delay={200}>
 *   <p>Second item (100ms later)</p>
 * </AnimatedSection>
 * ```
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
