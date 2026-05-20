import Image from "next/image";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <p className="eyebrow">Buenos Aires, Argentina / TIC / AI systems</p>
        <h1 id="hero-title">Uriel Gandelman - Software Developer &amp; Community Leader.</h1>
        <p className="hero-tagline">Building AI agents, scalable systems, and participating in hackathons.</p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Get in Touch
          </a>
        </div>
        <dl className="stat-grid" aria-label="Profile highlights">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-visual reveal delay-1" aria-label="Platanus Hack 2026 badge preview">
        <div className="orbital-ring" aria-hidden="true" />
        <Image
          src="/credentials/platanus-hack-26-UriGandel.jpg"
          alt="Platanus Hack 2026 hacker badge for Uriel Gandelman"
          width={1080}
          height={1350}
          priority
          className="badge-image"
        />
      </div>
    </section>
  );
}
