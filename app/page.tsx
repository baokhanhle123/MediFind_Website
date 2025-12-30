import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import TechnologySection from "@/components/sections/TechnologySection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

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

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TechnologySection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
