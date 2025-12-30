"use client";

import React from "react";
import Image from "next/image";

/**
 * Props for the FeatureCard component
 */
interface FeatureCardProps {
  /** Title of the feature */
  title: string;
  /** Description text for the feature */
  description: string;
  /** Optional image URL to display (takes precedence over icon) */
  image?: string;
  /** Optional icon element to display (only shown if no image) */
  icon?: React.ReactNode;
}

/**
 * Card component for displaying a feature with icon/image, title, and description
 *
 * @description
 * Displays a feature card with either an image or an icon at the top, followed by
 * a title and description. If both image and icon are provided, the image takes
 * precedence. Uses Next.js Image component for optimized image loading.
 *
 * @example
 * ```tsx
 * // With icon
 * <FeatureCard
 *   title="Scan Prescription"
 *   description="Quickly scan and analyze prescriptions"
 *   icon={<ScanIcon />}
 * />
 *
 * // With image
 * <FeatureCard
 *   title="AI Analysis"
 *   description="Advanced medication analysis"
 *   image="/images/ai-feature.jpg"
 * />
 * ```
 */
export default function FeatureCard({
  title,
  description,
  image,
  icon,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-card bg-white shadow-card hover:shadow-card-hover transition-all duration-normal hover:scale-105">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      {icon && !image && (
        <div className="text-medifind-red mb-4 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
