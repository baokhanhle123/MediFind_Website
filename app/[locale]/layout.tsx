import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Be_Vietnam_Pro } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/constants/locales";
import { translateString } from "@/utils/i18n";
import "../globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/**
 * Absolute origin used for canonical, hreflang and social image URLs.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment — without it, Next emits
 * relative OG URLs, which most social crawlers reject.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Prerender both locales at build time so `/en` and `/vi` are static HTML.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#C41E3A",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const title = translateString(locale, "meta.title");
  const description = translateString(locale, "meta.description");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      "MediFind",
      "healthcare",
      "prescription scanner",
      "medication",
      "medication safety",
      "pharmacist",
      "clinical decision support",
      "drug interaction",
      "Vietnam",
      "antibiotic resistance",
      "digital health",
      "AI healthcare",
      "OCR",
      "NLP",
    ],
    authors: [{ name: "MediFind Team" }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        vi: "/vi",
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      title: translateString(locale, "meta.og_title"),
      description: translateString(locale, "meta.og_description"),
      url: `/${locale}`,
      type: "website",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? "en_US" : "vi_VN",
      siteName: "MediFind+",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: translateString(locale, "meta.og_description"),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${beVietnamPro.variable} scroll-smooth`}>
      <body className="antialiased">
        {/* Skip navigation link for accessibility */}
        <a
          href="#main-content"
          // z-index must clear the fixed navbar (z-index 1000 in Navbar.module.css),
          // which otherwise covers the skip link and swallows the click
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1100] focus:px-6 focus:py-3 focus:bg-medifind-red focus:text-white focus:rounded-button focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medifind-red"
        >
          {translateString(locale, "a11y.skip_to_content")}
        </a>
        <StructuredData locale={locale} siteUrl={SITE_URL} />
        <LanguageProvider language={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
