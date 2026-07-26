import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LANGUAGE_COOKIE,
  LOCALES,
  isLocale,
} from "@/constants/locales";

/**
 * Redirects locale-less requests to a locale route.
 *
 * @description
 * Every page lives under `/[locale]`, so bare `/` (and any legacy unprefixed path)
 * has to be resolved to a language before rendering. Preference order:
 *   1. the `medifind-language` cookie, written by the in-page language toggle
 *   2. the browser's `Accept-Language` header
 *   3. {@link DEFAULT_LOCALE}
 *
 * Requests that already carry a valid locale prefix pass straight through.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${resolveLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

/**
 * Picks the best locale for a request from its cookie, then its Accept-Language header.
 */
function resolveLocale(request: NextRequest): string {
  const cookie = request.cookies.get(LANGUAGE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const accepted = request.headers.get("accept-language")?.toLowerCase() ?? "";
  // Match the language subtag only, so "vi-VN" and "vi" both resolve to Vietnamese
  // while a substring like "sla-vi" cannot produce a false positive.
  const preferred = accepted
    .split(",")
    .map((part) => part.split(";")[0].trim().split("-")[0])
    .find((tag) => isLocale(tag));

  return preferred ?? DEFAULT_LOCALE;
}

export const config = {
  // Skip Next internals, API routes and any path containing a file extension
  // (favicon.ico, sitemap.xml, robots.txt, static assets).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
