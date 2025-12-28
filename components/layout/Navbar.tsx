"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Button from "@/components/ui/Button";
import styles from "@/styles/Navbar.module.css";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "problem", href: "#problem" },
  { key: "solution", href: "#solution" },
  { key: "technology", href: "#technology" },
  { key: "team", href: "#team" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, "#hero")}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 90C50 90 85 65 85 40C85 20 70 10 50 25C30 10 15 20 15 40C15 65 50 90 50 90Z"
              fill="var(--medifind-red)"
            />
            <path
              d="M50 35V55M40 45H60"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.logoText}>
            <span className={styles.medi}>Medi</span>
            <span className={styles.find}>Find</span>
            <span className={styles.plus}>+</span>
          </span>
        </a>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {String(t(`nav.${link.key}`))}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <LanguageToggle />
          <Button href="#download" size="sm">
            {String(t("nav.download"))}
          </Button>
        </div>

        <button
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {String(t(`nav.${link.key}`))}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <LanguageToggle />
            <Button href="#download" fullWidth>
              {String(t("nav.download"))}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
