"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Wer wir sind", href: "/de/uber-uns" },
    { label: "Galerie", href: "/de/galerie" },
    { label: "Raumsuche", href: "/de/raumsuche" },
    { label: "Mitgliedschaft", href: "/de/mitgliedschaft" },
    { label: "Sponsoren", href: "/de/sponzoren" },
    
  ];

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/de"
          className="font-black text-2xl tracking-tighter text-red-600 uppercase flex items-center gap-2"
        >
          <span>K.S.V.</span>
          <span className="text-white">Kitzbühel</span>
        </Link>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col gap-3 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm py-2 text-white truncate"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}