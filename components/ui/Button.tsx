"use client";

import React from "react";
import styles from "@/styles/Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${
    fullWidth ? styles.fullWidth : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
