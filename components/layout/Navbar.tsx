"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle, Button } from "@/components/ui";
import { Logo } from "@/components/ui/icons";
import { NAV_LINKS, NAVBAR_CONFIG } from "@/constants";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount detection - prevents hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // Guard: only run after client-side mount

    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAVBAR_CONFIG.SCROLL_THRESHOLD);
    };

    // Set initial scroll state after mount
    setIsScrolled(window.scrollY > NAVBAR_CONFIG.SCROLL_THRESHOLD);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - NAVBAR_CONFIG.NAVBAR_HEIGHT,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="MediFind+ home"
        >
          <Logo className="w-8 h-8" aria-hidden={true} />
          <span className={styles.logoText}>
            <span className={styles.medi}>Medi</span>
            <span className={styles.find}>Find</span>
            <span className={styles.plus}>+</span>
          </span>
        </a>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          {NAV_LINKS.map((link) => (
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
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className={styles.mobileMenu} role="menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => handleNavClick(e, link.href)}
              role="menuitem"
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
