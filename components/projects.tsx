"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section className="section-shell reveal" id="projects" aria-labelledby="projects-title">
        <SectionHeading
          eyebrow="Projects"
          title="Practical systems, AI agents, and competition-proven execution."
          copy="A focused showcase of what I have built across autonomous workflows, low-level engines, financial AI, and adaptive education."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              {project.image ? (
                <button
                  className="project-media"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.name} image`}
                >
                  <Image src={project.image} alt={project.alt} fill sizes="(min-width: 960px) 33vw, 100vw" />
                </button>
              ) : null}
              <div className="project-topline">
                <span>{project.tag}</span>
                {project.status ? <strong>{project.status}</strong> : null}
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul aria-label={`${project.name} technical focus`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.links?.length ? (
                <div className="project-links" aria-label={`${project.name} links`}>
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {selectedProject?.image ? (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title"
          onMouseDown={() => setSelectedProject(null)}
        >
          <div className="image-modal-panel" onMouseDown={(event) => event.stopPropagation()}>
            <div className="image-modal-header">
              <button
                className="image-modal-close"
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Back to projects"
              >
                <span aria-hidden="true">←</span>
              </button>
              <div>
                <p className="eyebrow">{selectedProject.tag}</p>
                <h3 id="image-modal-title">{selectedProject.name}</h3>
              </div>
            </div>
            <div className="image-modal-frame">
              <Image src={selectedProject.image} alt={selectedProject.alt} fill sizes="92vw" priority />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
