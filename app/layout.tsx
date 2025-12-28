import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediFind+ | Use Wisely, Take Precisely",
  description:
    "MediFind is an AI-powered platform that helps people make smarter, safer healthcare decisions through prescription scanning, medication reminders, and personalized health insights.",
  keywords: [
    "MediFind",
    "healthcare",
    "prescription scanner",
    "medication",
    "Vietnam",
    "antibiotic resistance",
    "digital health",
    "AI healthcare",
    "OCR",
    "NLP",
  ],
  authors: [{ name: "MediFind Team" }],
  openGraph: {
    title: "MediFind+ | Digital Health Platform",
    description:
      "A platform that helps people make smarter, safer healthcare decisions through AI-powered prescription scanning.",
    type: "website",
    locale: "en_US",
    alternateLocale: "vi_VN",
    siteName: "MediFind+",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediFind+ | Use Wisely, Take Precisely",
    description:
      "AI-powered prescription scanning and personalized health insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${beVietnamPro.variable} antialiased`}>{children}</body>
    </html>
  );
}
