import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { awards } from "@/lib/content";

export function Awards() {
  return (
    <section className="section-shell reveal" id="awards" aria-labelledby="awards-title">
      <SectionHeading
        eyebrow="Awards & Certifications"
        title="Credentials across AI, STEM communication, and leadership."
        copy="Official certificates and badges presented as high-contrast artifacts with direct links to original files."
      />
      <div className="awards-grid">
        {awards.map((award) => (
          <article className="award-card" key={award.title}>
            <a className="award-image" href={award.original} target="_blank" rel="noreferrer">
              <Image src={award.image} alt={award.alt} fill sizes="(min-width: 960px) 40vw, 100vw" />
            </a>
            <div className="award-copy">
              <h3>{award.title}</h3>
              <p>{award.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
