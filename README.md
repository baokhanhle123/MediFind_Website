# MediFind+ — portfolio site

Bilingual (English / Vietnamese) landing page for **MediFind**, an AI medication-scanning
platform built for the Vietnamese market. The product uses OCR and NLP to read a prescription
or a medicine package from a photo, identify the medicines, and explain how to take them
safely. It serves two audiences: pharmacists and physicians verifying what they dispense, and
patients and families managing medication at home — in a country where 88–91% of people
self-medicate with antibiotics and 76% of pharmacies dispense them without a prescription.

The app is in a closed beta and is not on the app stores. This repository is the public site:
the pitch, the research behind it, and the competition record.

> **Medical disclaimer.** MediFind provides medicine information, not medical advice.
> Full text at `/en/legal`.

---

## Stack

| | |
|---|---|
| Framework | Next.js 15.5 (App Router, React 19) |
| Language | TypeScript, strict |
| Styling | CSS Modules for layout, Tailwind for utilities |
| i18n | Route-based, custom — no library |
| Testing | Playwright + axe-core |

## Running it

```bash
npm install
npm run dev          # http://localhost:3000 → redirects to /en or /vi
```

| Script | |
|---|---|
| `npm run build` | Production build; every route prerenders to static HTML |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:vi` | Fails if Vietnamese copy is missing diacritics (see below) |
| `npm test` | Playwright, including axe scans of all four routes |

Set `NEXT_PUBLIC_SITE_URL` in production. Without it, canonical URLs, hreflang tags and OG
image URLs fall back to `http://localhost:3000`.

---

## Internationalisation

The interesting part of this codebase, and the piece most i18n implementations get wrong.

**The URL is the only source of truth.** `/en` and `/vi` are real route segments under
`app/[locale]/`, which acts as the root layout — there is no `app/layout.tsx` or
`app/page.tsx`. Both locales prerender as static HTML at build time.

```
middleware.ts              /  → /en | /vi   (cookie → Accept-Language → default)
app/[locale]/layout.tsx    root layout, server component, localised <html lang>
app/[locale]/page.tsx      landing page
app/[locale]/legal/        disclaimer + privacy
constants/locales.ts       LOCALES, isLocale() guard, cookie name
utils/i18n.ts              dictionary access, shared by server and client
```

Three consequences worth calling out:

1. **Vietnamese is indexable.** `curl -s localhost:3000/vi` returns Vietnamese copy in the raw
   HTML with no JavaScript executed. A client-side language toggle — the common shortcut —
   produces a site Google only ever sees in one language.
2. **No flash of the wrong language.** `LanguageProvider` holds *no state*. It receives the
   locale as a prop from the server-rendered layout, so first paint is already correct. The
   usual `useState` + `useEffect(() => setLang(stored))` pattern guarantees a visible flip on
   every load, and `useState(prop)` would silently ignore navigation between locales.
3. **Preference lives in a cookie, not localStorage.** Middleware runs before the page renders
   and can only read cookies. That is what lets `/` redirect server-side.

### Vietnamese diacritics

`locales/vi.json` was originally written without tone marks — `"Trang chu"` rather than
`"Trang chủ"` — across all 157 prose strings. Unaccented Vietnamese is not a typo; it is a
different, unreadable thing. `npm run check:vi` guards against regression using a two-tier
heuristic (tokens that are invalid unaccented, plus function-word density) so that only
genuinely broken strings fail and English proper nouns pass.

---

## Accessibility

Targets WCAG 2.1 AA, enforced by the test suite rather than asserted.

- Every route is scanned with axe-core (`wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`).
- Body text is `#75707E` — 4.80:1 on white. The original `#7D7987` measured 4.24:1 and failed.
- Focus indicators are global (`:focus-visible` in `globals.css`), with an inverted variant for
  dark brand surfaces via `.on-brand`. Button focus rings are full-strength: the earlier
  `ring-medifind-red/50` measured 2.43:1 against a 3:1 minimum for non-text indicators.
- The stakeholder tabs implement the full WAI-ARIA tabs pattern — roving `tabIndex`, arrow
  keys, Home/End.
- The mobile menu moves focus on open, traps Tab while open, closes on Escape and restores
  focus to its toggle.
- Scroll animations start at `opacity: 0`, so `prefers-reduced-motion` and `@media print`
  blocks force the end state. Without them the page prints blank.

## Testing

```bash
npm test                       # all projects
npx playwright test --ui       # watch mode
```

`playwright.config.ts` pins `reuseExistingServer: false`. It matters: with the default, the
suite silently attaches to whatever unrelated dev server already holds the port and reports
confident nonsense.

## Layout

```
app/[locale]/        routes, layout, metadata, generated OG images
components/
  layout/            Navbar, Footer
  sections/          Hero, Credibility, Problem, Solution, Technology, Team, CTA
  ui/                Button, cards, icons, AnimatedSection
constants/           navigation, locales, contact, team, features
context/             LanguageContext (no state — locale comes from the route)
locales/             en.json, vi.json
scripts/             check-vi-diacritics.mjs
styles/              CSS Modules
e2e/                 Playwright specs
```

## Credits

Built by students of Ho Chi Minh City University of Technology (HCMUT) and the University of
Economics Ho Chi Minh City (UEH). Incubated at HCMUT Technology Business Incubator and Viet
Startup Incubator.

Contact: healthtect.solution@gmail.com
