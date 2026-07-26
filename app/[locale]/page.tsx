import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import AppShowcase from "@/components/sections/AppShowcase";
import TechnologySection from "@/components/sections/TechnologySection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* tabIndex allows the skip link to move focus here */}
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <CredibilityStrip />
        <ProblemSection />
        <SolutionSection />
        <AppShowcase />
        <TechnologySection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
