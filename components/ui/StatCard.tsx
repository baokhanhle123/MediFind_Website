"use client";

import React from "react";
import { cn } from "@/utils";

/**
 * Props for the StatCard component
 */
interface StatCardProps {
  /** Main statistic value to display */
  value: string;
  /** Description text explaining the statistic */
  description: string;
  /** Optional icon to display */
  icon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card component for displaying statistics
 *
 * @example
 * ```tsx
 * <StatCard value="44%" description="Arbitrary medication use in Vietnam" />
 * ```
 */
export default function StatCard({ value, description, icon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-6 rounded-card bg-white",
        "shadow-card hover:shadow-card-hover transition-shadow duration-normal",
        "text-center",
        className
      )}
    >
      <div className="text-4xl md:text-5xl font-bold text-medifind-red mb-2">
        {value}
      </div>
      {icon && <div className="text-medifind-blue mb-2">{icon}</div>}
      <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
