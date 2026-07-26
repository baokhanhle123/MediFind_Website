import { ImageResponse } from "next/og";
import { LOCALES, isLocale } from "@/constants/locales";
import { translateString } from "@/utils/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MediFind+ — AI-powered prescription scanning";

/**
 * Image routes need their own params — the layout's copy does not cascade here,
 * and without it the card is re-rendered on every crawler request.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * Generates the Open Graph / Twitter card for each locale.
 *
 * @remarks
 * Generated rather than a checked-in asset so the card stays in sync with the
 * translation files. Rendered at build time, once per locale.
 */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "en";

  const tagline = translateString(lang, "hero.tagline");
  const description = translateString(lang, "meta.og_description");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 100px",
          background: "linear-gradient(135deg, #C41E3A 0%, #9E1830 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="110" height="110" viewBox="0 0 100 100">
            <path
              d="M50 92C50 92 88 65 88 39C88 18 71 7 50 23C29 7 12 18 12 39C12 65 50 92 50 92Z"
              fill="#FFFFFF"
            />
            <path
              d="M50 33V57M38 45H62"
              stroke="#C41E3A"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
            MediFind+
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontStyle: "italic",
            marginTop: 36,
            opacity: 0.95,
          }}
        >
          {tagline}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 24,
            lineHeight: 1.4,
            opacity: 0.85,
            maxWidth: 900,
          }}
        >
          {description}
        </div>
      </div>
    ),
    { ...size }
  );
}
