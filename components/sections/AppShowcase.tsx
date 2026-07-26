"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { APP_SCREENS } from "@/constants";
import styles from "@/styles/AppShowcase.module.css";

/**
 * Screenshots of the app itself.
 *
 * The screenshots are English-only, so each one carries a localised caption and
 * alt text. On /vi those are the only readable part of the figure, which is why
 * the caption sits in the markup rather than being baked into the image.
 */
export default function AppShowcase() {
  const { t } = useLanguage();
  const stripRef = useRef<HTMLUListElement>(null);

  /**
   * Scroll a whole card per keypress.
   *
   * The browser's native line-scroll fights `scroll-snap-type: x mandatory`:
   * held or fast-repeated arrow keys leave the strip stuck at an intermediate
   * snap point, so it reads as unresponsive. Moving by one card lands on a
   * snap position every time.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const strip = stripRef.current;
    if (!strip) return;

    const card = strip.querySelector("li");
    const gap = Number.parseFloat(getComputedStyle(strip).columnGap) || 0;
    const step = (card?.getBoundingClientRect().width ?? 0) + gap;

    switch (event.key) {
      case "ArrowRight":
        strip.scrollBy({ left: step, behavior: "smooth" });
        break;
      case "ArrowLeft":
        strip.scrollBy({ left: -step, behavior: "smooth" });
        break;
      case "Home":
        strip.scrollTo({ left: 0, behavior: "smooth" });
        break;
      case "End":
        strip.scrollTo({ left: strip.scrollWidth, behavior: "smooth" });
        break;
      default:
        return;
    }

    // Only reached when a key was handled — stops the page scrolling too.
    event.preventDefault();
  };

  return (
    <section id="app" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionTitle
            title={String(t("showcase.title"))}
            subtitle={String(t("showcase.subtitle"))}
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          {/* Horizontally scrollable: five phone-shaped images will not fit
              otherwise, and shrinking them to fit makes the UI in them
              unreadable.

              tabIndex makes the scroll container reachable by keyboard. Nothing
              inside it is focusable — the cards are images and text — so
              without this a keyboard-only user cannot scroll it at all
              (WCAG 2.1.1, axe `scrollable-region-focusable`). */}
          <ul
            ref={stripRef}
            className={styles.strip}
            tabIndex={0}
            aria-label={String(t("showcase.title"))}
            onKeyDown={handleKeyDown}
          >
            {APP_SCREENS.map((screen) => (
              <li key={screen.key} className={styles.item}>
                <figure className={styles.figure}>
                  <div className={styles.phone}>
                    <Image
                      src={screen.src}
                      alt={String(t(`showcase.screens.${screen.key}.alt`))}
                      width={screen.width}
                      height={screen.height}
                      className={styles.image}
                      sizes="(max-width: 900px) 200px, 220px"
                    />
                  </div>
                  <figcaption className={styles.caption}>
                    {String(t(`showcase.screens.${screen.key}.caption`))}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
