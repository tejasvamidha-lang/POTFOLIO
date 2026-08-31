import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950">
      <Navbar />

      <HeroSection />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />

      <Footer />
    </main>
  );
}