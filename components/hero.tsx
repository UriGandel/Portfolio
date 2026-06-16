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
    </section>
  );
}
