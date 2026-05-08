"use client";

import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      {/* Fixed particle canvas background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
