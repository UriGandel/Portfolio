# Uriel Gandelman Portfolio Design

## Product Direction

The portfolio is a single-page, dark-first technical profile for a senior TIC student and software developer focused on AI agents, systems architecture, and community leadership. The tone is minimalist, precise, and high-trust: closer to Vercel or Stripe engineering pages than to a marketing landing page.

## Color Palette

- Background: `#050607`
- Elevated surface: `#0B0D10`
- Secondary surface: `#111419`
- Text: `#F7F8F8`
- Muted text: `#9BA3AF`
- Subtle text: `#687280`
- Border: `#23272E`
- Bright border: `#343A44`
- AI green accent: `#64F4AC`
- Systems blue accent: `#38BDF8`
- Achievement gold accent: `#F5C451`
- Leadership rose accent: `#FF5C7A`

Accent colors are used sparingly for status marks, metadata, hover states, and section rhythm. The page should never become a one-color neon interface.

## Typography

- Primary: Geist Sans when available, with a high-quality system sans fallback for offline builds
- Mono: Geist Mono when available, with SF Mono/Consolas fallback for offline builds
- Headings: tight line-height, strong weight, no negative letter spacing
- Body: readable line-height, restrained widths
- Labels and technical metadata: Geist Mono, uppercase, small caps-like treatment through text-transform

## Layout Strategy

- Route: single App Router page at `/`
- Navigation: sticky top bar with anchors to `#about`, `#skills`, `#projects`, `#awards`, and `#contact`
- Page width: constrained content shell with full-width dark background
- Sections: generous vertical rhythm, no nested cards, no marketing-style split hero card
- Hero: first viewport signal includes name, role, tagline, CTAs, technical stats, and a credential image preview
- Responsiveness: mobile-first stacking, two-column desktop layouts only where they improve scanning

## Component Structure

- `app/page.tsx`: page composition and static data usage
- `app/layout.tsx`: metadata, fonts, root shell
- `app/globals.css`: tokens, layout primitives, responsive styles, animations
- `components/site-header.tsx`: sticky anchor navigation
- `components/hero.tsx`: headline, tagline, CTAs, stats, badge visual
- `components/section-heading.tsx`: consistent section label/title/copy treatment
- `components/about.tsx`: education and technical focus narrative
- `components/skills-matrix.tsx`: grouped skill matrix
- `components/projects.tsx`: project cards
- `components/awards.tsx`: credential gallery and award copy
- `components/contact.tsx`: placeholder contact links and mail CTA
- `lib/content.ts`: structured content arrays for easy future editing

## Motion

- Use CSS transitions and keyframes only.
- Entrance animation: subtle fade/translate on primary page blocks.
- Hover: small translate, border highlight, and soft accent glow.
- Respect `prefers-reduced-motion: reduce` by disabling transitions and animations.

## Assets

- Source credential files are copied into `public/credentials/originals/`.
- Web display variants live in `public/credentials/`.
- Large scans are resized to web-friendly JPEGs using local tooling.
- PDF credential is converted to a preview image when possible; if conversion fails, include the PDF as a linked asset and keep the gallery stable.
- All images must have descriptive alt text and stable dimensions through Next Image or CSS aspect-ratio.

## Accessibility

- Semantic headings and landmarks.
- Keyboard-visible focus states.
- High color contrast on text and controls.
- Buttons and links have clear accessible names.
- Image captions do not replace alt text.
- No hover-only critical information.

## Performance

- Use mostly server components and static data.
- Avoid animation libraries and large client-side bundles.
- Use `next/image` for credential imagery.
- Keep JavaScript minimal; no runtime filtering or carousels required for v1.
- Use CSS `content-visibility` on lower sections where appropriate.
