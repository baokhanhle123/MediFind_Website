import React from "react";
import { CONTACT_EMAIL, PAPER } from "@/constants";
import { translate, translateString } from "@/utils/i18n";
import type { Language } from "@/types/i18n";

interface StructuredDataProps {
  locale: Language;
  siteUrl: string;
}

interface Award {
  title: string;
  description: string;
}

/**
 * Organization + WebSite JSON-LD.
 *
 * Deliberately *not* SoftwareApplication: that schema describes a downloadable
 * product and carries offer/rating fields. The app is not published, so
 * claiming it would be asserting something untrue to crawlers.
 *
 * Every value is read from the same dictionary the page renders, so the markup
 * cannot drift out of sync with the visible copy.
 */
export default function StructuredData({ locale, siteUrl }: StructuredDataProps) {
  const rawAwards = translate(locale, "team.awards.list");
  const awards = Array.isArray(rawAwards)
    ? (rawAwards as unknown as Award[]).map((a) => `${a.title} — ${a.description}`)
    : [];

  const partners = ["team.partners.hcmut_tbi", "team.partners.vsi", "team.partners.hpc"].map(
    (key) => ({ "@type": "Organization", name: translateString(locale, key) })
  );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "MediFind",
        alternateName: "MediFind+",
        url: `${siteUrl}/${locale}`,
        email: CONTACT_EMAIL,
        description: translateString(locale, "meta.description"),
        slogan: translateString(locale, "hero.tagline"),
        foundingLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ho Chi Minh City",
            addressCountry: "VN",
          },
        },
        award: awards,
        memberOf: partners,
        subjectOf: { "@id": `${siteUrl}/#paper` },
      },
      {
        // Real, resolvable publication metadata (verified against Crossref).
        // This is the one claim on the site a reviewer can independently check.
        "@type": "ScholarlyArticle",
        "@id": `${siteUrl}/#paper`,
        headline: PAPER.title,
        name: PAPER.title,
        url: PAPER.url,
        sameAs: `https://doi.org/${PAPER.doi}`,
        identifier: { "@type": "PropertyValue", propertyID: "DOI", value: PAPER.doi },
        datePublished: PAPER.date,
        author: PAPER.authors.map((name) => ({ "@type": "Person", name })),
        publisher: { "@type": "Organization", name: PAPER.publisher },
        isPartOf: {
          "@type": "PublicationEvent",
          name: PAPER.venue,
          startDate: PAPER.date,
          location: { "@type": "Place", name: PAPER.location },
        },
        inLanguage: "en",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/${locale}`,
        name: "MediFind+",
        description: translateString(locale, "meta.og_description"),
        inLanguage: locale === "vi" ? "vi-VN" : "en-US",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Values come from local JSON dictionaries, never user input. JSON.stringify
      // escapes quotes; the `<` replacement closes the `</script>` injection path.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
