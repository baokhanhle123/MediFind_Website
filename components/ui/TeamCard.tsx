"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/TeamCard.module.css";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  type?: "mentor" | "supervisor";
}

export default function TeamCard({
  name,
  role,
  image,
  type = "mentor",
}: TeamCardProps) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div className={styles.imageContainer}>
        {image ? (
          <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
      </div>
      <h4 className={styles.name}>{name}</h4>
      <span className={styles.role}>{role}</span>
    </div>
  );
}
