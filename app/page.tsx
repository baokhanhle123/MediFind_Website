"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import TechnologySection from "@/components/sections/TechnologySection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TechnologySection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
