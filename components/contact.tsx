import { SectionHeading } from "@/components/section-heading";
import { contactLinks } from "@/lib/content";

export function Contact() {
  return (
    <section className="section-shell contact-section reveal" id="contact" aria-labelledby="contact-title">
      <SectionHeading
        eyebrow="Contact"
        title="Open to engineering, AI, and community-led technical opportunities."
        copy="I am open to hackathons, AI products, engineering programs, technical collaborations, and STEM communication opportunities."
      />
      <div className="contact-panel">
        <div>
          <p className="contact-kicker">Let&apos;s build useful systems.</p>
          <p>
            Reach out if you are building something ambitious, technical, or useful.
          </p>
        </div>
        <div className="contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
