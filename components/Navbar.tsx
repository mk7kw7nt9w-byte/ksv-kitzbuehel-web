"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Wer wir sind", "/de/uber-uns"],
  ["Unsere Vision", "/de/vision"],
  ["Raumsuche", "/de/raumsuche"],
  ["Sponsoren", "/de/sponsoren"],
  ["Kontakt", "/de/kontakt"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          button.current?.focus();
        }
      }}
    >
      <div className="nav-shell">
        <Link
          href="/de"
          className="brand"
          aria-label="K.S.V. Kitzbühel – Startseite"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            K.S.V<span>.</span>
          </span>
          <span className="brand-location">
            KITZBÜHEL
            <br />
            <small>KRAFTSPORTVEREIN</small>
          </span>
        </Link>
        <nav aria-label="Hauptnavigation" className="desktop-nav">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/de/mitgliedschaft">
          Dabei sein <ArrowUpRight size={16} />
        </Link>
        <button
          ref={button}
          className="menu-toggle"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile Navigation"
        >
          {[...links, ["Mitgliedschaft", "/de/mitgliedschaft"]].map(
            ([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={path === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
                <ArrowUpRight size={18} />
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
