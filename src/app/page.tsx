import { Hero } from "@/components/Hero";
import { IntroSplash } from "@/components/IntroSplash";
import { Nav } from "@/components/Nav";
import {
  AboutSection,
  AwardsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  ProjectsSection,
  SkillsSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <div className="relative z-[2] flex min-h-full flex-col bg-transparent text-[var(--foreground)]">
      <IntroSplash />
      <Nav />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
