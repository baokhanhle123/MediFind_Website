import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from "@/constants";
import { LOCALES, isLocale } from "@/constants/locales";
import { translate, translateString } from "@/utils/i18n";
import styles from "@/styles/LegalPage.module.css";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const title = translateString(locale, "legal.title");
  return {
    title: `${title} | MediFind+`,
    description: translateString(locale, "legal.disclaimer_short"),
    alternates: {
      canonical: `/${locale}/legal`,
      languages: { en: "/en/legal", vi: "/vi/legal", "x-default": "/en/legal" },
    },
  };
}

/**
 * Disclaimer and privacy notice.
 *
 * A server component — nothing here is interactive, so the whole page ships as
 * static HTML with no client bundle beyond the shared Navbar/Footer.
 */
export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const disclaimerItems = translate(locale, "legal.disclaimer.items");
  const privacyItems = translate(locale, "legal.privacy.items");

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className={styles.page}>
        <article className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>{translateString(locale, "legal.title")}</h1>
            <p className={styles.updated}>{translateString(locale, "legal.updated")}</p>
          </header>

          <section className={styles.section} aria-labelledby="disclaimer-heading">
            <h2 id="disclaimer-heading" className={styles.sectionTitle}>
              {translateString(locale, "legal.disclaimer.title")}
            </h2>
            <ul className={styles.list}>
              {Array.isArray(disclaimerItems) &&
                disclaimerItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="privacy-heading">
            <h2 id="privacy-heading" className={styles.sectionTitle}>
              {translateString(locale, "legal.privacy.title")}
            </h2>
            <p className={styles.intro}>
              {translateString(locale, "legal.privacy.intro")}
            </p>
            <ul className={styles.list}>
              {Array.isArray(privacyItems) &&
                privacyItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className={styles.contact}>
              {translateString(locale, "legal.privacy.contact_label")}{" "}
              <a href={CONTACT_EMAIL_HREF}>{CONTACT_EMAIL}</a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
