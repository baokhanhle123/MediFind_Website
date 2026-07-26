"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle, Button } from "@/components/ui";
import { NAV_LINKS, NAVBAR_CONFIG } from "@/constants";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  // Focus management for the mobile menu. Opening it renders a panel over the
  // page, so focus has to follow: without this, a keyboard user activates the
  // toggle and their focus stays behind the overlay with nothing to operate.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const panel = mobileMenuRef.current;
    if (!panel) return;

    const focusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

    focusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        // Return focus to the control that opened the panel, not to <body>.
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      // Trap: the panel visually covers the page, so tabbing to what is behind
      // it would move focus somewhere the user cannot see.
      const items = focusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

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
          {/* The banner is the complete lockup — the heart forms the "M" — so it
              replaces the old icon-plus-text pair. The link's aria-label already
              names it, so the image itself is decorative. */}
          <Image
            src="/brand/medifind-wordmark.png"
            alt=""
            width={1537}
            height={400}
            className={styles.logoImage}
            priority
          />
        </a>

        <div className={styles.navLinks}>
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
          <Button href="#contact" size="sm">
            {String(t("nav.contact"))}
          </Button>
        </div>

        <button
          ref={toggleRef}
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
        // role="menu"/"menuitem" was wrong here: those describe an application
        // menu and promise arrow-key navigation this never had. These are plain
        // links, already inside the labelled <nav> landmark above, so the
        // disclosure pattern on the toggle (aria-expanded + aria-controls) is
        // the whole contract.
        <div id="mobile-navigation" ref={mobileMenuRef} className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
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
            <Button href="#contact" fullWidth>
              {String(t("nav.contact"))}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
