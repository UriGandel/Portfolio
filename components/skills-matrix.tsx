import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/content";

export function SkillsMatrix() {
  return (
    <section className="section-shell reveal" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills Matrix"
        title="From systems fundamentals to AI product architecture."
        copy="My stack combines low-level engineering, applied AI, frontend product work, and leadership."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className={`skill-card accent-${group.accent}`} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
