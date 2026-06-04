import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section className="section-shell content-band reveal" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="About"
        title="Hands-on technical depth."
        copy="I am a final-year TIC student at ORT Buenos Aires, with a 9.0 GPA and a portfolio shaped by competitions, systems work, and applied AI."
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
            LLM-powered applications, deep learning with Keras and TensorFlow, and the math needed
            to implement neural networks from first principles and turn that theory into code.
          </p>
        </article>
      </div>
    </section>
  );
}
