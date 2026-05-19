import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section className="section-shell content-band reveal" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="About"
        title="Engineering ambition with hands-on technical depth."
        copy="I am a final-year TIC student at ORT Buenos Aires targeting a university engineering degree, with a 9.0 GPA and a portfolio shaped by competitions, systems work, and applied AI."
      />
      <div className="about-grid">
        <article>
          <h3>Where I am now</h3>
          <p>
            I am finishing high school in the TIC specialization at ORT in Buenos Aires,
            Argentina. I like working in places where academic discipline meets real execution:
            hackathons, product ideas, and systems that need to actually work.
          </p>
        </article>
        <article>
          <h3>How I build</h3>
          <p>
            I am especially interested in the bridge between low-level system design in C++ and
            high-level AI integration: from memory-aware architecture to autonomous workflows,
            LLM-powered applications, and scalable product systems.
          </p>
        </article>
      </div>
    </section>
  );
}
