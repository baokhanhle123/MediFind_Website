"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/FeatureCard.module.css";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  image,
  icon,
}: FeatureCardProps) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className={styles.image}
          />
        </div>
      )}
      {icon && !image && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
