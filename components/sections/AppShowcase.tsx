"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { APP_SCREENS } from "@/constants";
import styles from "@/styles/AppShowcase.module.css";

/** Target of the arrows' `aria-controls`. The section renders once per page. */
const STRIP_ID = "app-showcase-strip";

/**
 * Sub-pixel layout means `scrollLeft` never lands exactly on 0 or on
 * `scrollWidth - clientWidth`, so without a little slack the end buttons would
 * never reach their disabled state.
 */
const EDGE_SLACK = 2;

/**
 * Screenshots of the app itself.
 *
 * The screenshots are English-only, so each one carries a localised label,
 * description and alt text. On /vi those are the only readable part of the
 * figure, which is why they sit in the markup rather than in the image.
 *
 * The sources top out at 283-300px wide, so the cards are deliberately capped
 * at roughly that size. There is nothing to gain from enlarging them and a
 * blurry upscale to lose, which is also why there is no zoom or lightbox: the
 * meaning is carried by the label and description, not by the pixels.
 */
export default function AppShowcase() {
  const { t } = useLanguage();
  const stripRef = useRef<HTMLUListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);

  /*
   * Seeded to the state five cards are always in at the widths this site
   * supports (roughly 1292px of content against at most 1150px of strip).
   * Guessing right keeps the server markup and the first client measurement
   * identical, so the controls never pop in after hydration.
   */
  const [scrollable, setScrollable] = useState(true);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const { scrollLeft, scrollWidth, clientWidth } = strip;
    const max = scrollWidth - clientWidth;

    setScrollable(max > EDGE_SLACK);
    setAtStart(scrollLeft <= EDGE_SLACK);
    setAtEnd(scrollLeft >= max - EDGE_SLACK);

    /*
     * Written straight to the node rather than through state: this runs on
     * every scroll frame, and a state update per frame would re-render all five
     * cards while the user is still dragging.
     */
    const fill = fillRef.current;
    if (fill && scrollWidth > 0 && clientWidth > 0) {
      // Width is the share of the strip on screen. The offset is expressed as a
      // percentage of the fill's own width, which reduces to
      // scrollLeft / clientWidth.
      fill.style.width = `${Math.min(1, clientWidth / scrollWidth) * 100}%`;
      fill.style.transform = `translateX(${(scrollLeft / clientWidth) * 100}%)`;
    }
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const schedule = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        measure();
      });
    };

    measure();
    strip.addEventListener("scroll", schedule, { passive: true });

    /*
     * The strip's own box changes with the viewport; the cards' boxes change
     * with the breakpoint variables and again when the webfont swaps in and the
     * captions reflow. Both move scrollWidth, so both are observed.
     */
    const observer = new ResizeObserver(schedule);
    observer.observe(strip);
    for (const card of Array.from(strip.children)) observer.observe(card);

    return () => {
      strip.removeEventListener("scroll", schedule);
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [measure]);

  /** One card plus one gap — the distance between two snap positions. */
  const cardStep = () => {
    const strip = stripRef.current;
    if (!strip) return 0;

    const card = strip.querySelector("li");
    const gap = Number.parseFloat(getComputedStyle(strip).columnGap) || 0;
    return (card?.getBoundingClientRect().width ?? 0) + gap;
  };

  /*
   * `behavior` is deliberately never passed. Omitting it leaves the default
   * "auto", which resolves to the element's computed `scroll-behavior` — set to
   * `smooth` in the stylesheet and back to `auto` inside its
   * prefers-reduced-motion block. Naming "smooth" here would win over that
   * media query and animate the scroll for people who asked for no animation.
   *
   * Stepping a whole card also keeps the strip on a snap position: the
   * browser's native line-scroll fights `scroll-snap-type: x mandatory` and
   * leaves it stuck between snap points on held keys.
   */
  const step = (direction: 1 | -1) => {
    stripRef.current?.scrollBy({ left: direction * cardStep() });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const strip = stripRef.current;
    if (!strip) return;

    switch (event.key) {
      case "ArrowRight":
        step(1);
        break;
      case "ArrowLeft":
        step(-1);
        break;
      case "Home":
        strip.scrollTo({ left: 0 });
        break;
      case "End":
        strip.scrollTo({ left: strip.scrollWidth });
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
          <div
            className={`${styles.stage} ${scrollable ? "" : styles.stageStatic}`}
          >
            <div className={styles.controls}>
              {/* aria-disabled rather than the disabled attribute: a native
                  button that disables itself while focused hands focus to
                  <body>, so pressing "next" at the last card would send the
                  next Tab back to the top of the document. */}
              <button
                type="button"
                className={styles.control}
                onClick={() => !atStart && step(-1)}
                aria-disabled={atStart}
                aria-controls={STRIP_ID}
                aria-label={String(t("showcase.controls.previous"))}
              >
                <ChevronLeftIcon aria-hidden />
              </button>
              <button
                type="button"
                className={styles.control}
                onClick={() => !atEnd && step(1)}
                aria-disabled={atEnd}
                aria-controls={STRIP_ID}
                aria-label={String(t("showcase.controls.next"))}
              >
                <ChevronRightIcon aria-hidden />
              </button>
            </div>

            {/* The focus ring lives on this wrapper, not on the strip: the strip
                carries a mask, and a mask erases everything painted outside the
                element's border box — including an outline. */}
            <div className={styles.stripWrap}>
              {/* Horizontally scrollable: five phone-shaped images will not fit
                  otherwise, and shrinking them to fit makes the UI in them
                  unreadable.

                  tabIndex stays even though the arrows exist. Nothing inside the
                  strip is focusable, so without it a keyboard-only user cannot
                  scroll it at all (WCAG 2.1.1, axe
                  `scrollable-region-focusable`) — and now that the native
                  scrollbar is hidden, that route matters more, not less. */}
              {/* role="list" is not redundant here: the stylesheet sets
                  `list-style: none` on this element, and WebKit drops the
                  implicit list/listitem roles when it does, so VoiceOver would
                  otherwise not announce "list, 5 items". */}
              <ul
                id={STRIP_ID}
                ref={stripRef}
                role="list"
                className={styles.strip}
                tabIndex={0}
                aria-label={String(t("showcase.title"))}
                onKeyDown={handleKeyDown}
              >
                {APP_SCREENS.map((screen) => (
                  <li key={screen.key} className={styles.item}>
                    <figure className={styles.figure}>
                      <div className={styles.phone}>
                        <div className={styles.screen}>
                          <Image
                            src={screen.src}
                            alt={String(t(`showcase.screens.${screen.key}.alt`))}
                            width={screen.width}
                            height={screen.height}
                            className={styles.image}
                            sizes="(max-width: 600px) 164px, (max-width: 900px) 182px, 200px"
                          />
                        </div>
                      </div>
                      <figcaption className={styles.caption}>
                        <span className={styles.label}>
                          {String(t(`showcase.screens.${screen.key}.label`))}
                        </span>
                        <span className={styles.description}>
                          {String(
                            t(`showcase.screens.${screen.key}.description`)
                          )}
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative. The arrows carry the semantics; a second announced
                control for the same scroll position is only noise. */}
            <div className={styles.progress} aria-hidden="true">
              <span ref={fillRef} className={styles.progressFill} />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
