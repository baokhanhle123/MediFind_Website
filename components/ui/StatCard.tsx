"use client";

import React from "react";
import styles from "@/styles/StatCard.module.css";

interface StatCardProps {
  value: string;
  description: string;
  icon?: React.ReactNode;
}

export default function StatCard({ value, description, icon }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.value}>{value}</div>
      {icon && <div className={styles.icon}>{icon}</div>}
      <p className={styles.description}>{description}</p>
    </div>
  );
}
