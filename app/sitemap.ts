import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES } from "@/constants/locales";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Routes that exist under every locale, as path suffixes. */
const ROUTES = [
  { path: "", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/legal", changeFrequency: "yearly" as const, priority: 0.3 },
];

/**
 * Lists every locale route with reciprocal hreflang alternates, so crawlers treat
 * `/en/*` and `/vi/*` as translations of one page rather than duplicate content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ path, changeFrequency, priority }) => {
    const languages = Object.fromEntries(
      LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
    );

    return LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      // Non-default locale ranks marginally lower, matching the x-default target.
      priority: locale === DEFAULT_LOCALE ? priority : priority * 0.9,
      alternates: { languages },
    }));
  });
}
