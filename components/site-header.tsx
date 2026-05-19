import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="#top" aria-label="Uriel Gandelman Rothschild home">
          <span className="brand-mark" aria-hidden="true">
            UG
          </span>
          <span>Uriel Gandelman</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
