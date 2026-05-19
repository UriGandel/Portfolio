import { About } from "@/components/about";
import { Awards } from "@/components/awards";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { SkillsMatrix } from "@/components/skills-matrix";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <SkillsMatrix />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
