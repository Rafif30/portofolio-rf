import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MetricsStrip from "@/components/sections/MetricsStrip";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import RevealInit from "@/components/ui/RevealInit";

export default function Home() {
  return (
    <div className="site-shell">
      {/* Background decoration */}
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      {/* Client-side reveal observer */}
      <RevealInit />

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
