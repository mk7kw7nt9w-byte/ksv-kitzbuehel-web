"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const isDe = pathname.startsWith("/de");

  // Logika prepínača: ak sme v DE, odstránime /de, inak pridáme /de
  const switchUrl = isDe 
    ? pathname.replace("/de", "") || "/" 
    : `/de${pathname === "/" ? "" : pathname}`;

  const navLinks = [
    { sk: "O nás", de: "Wer wir sind", href: isDe ? "/de/uber-uns" : "/uber-uns" },
    { sk: "Galéria", de: "Galerie", href: isDe ? "/de/galerie" : "/galerie" },
    { sk: "Priestory", de: "Raumsuche", href: isDe ? "/de/raumsuche" : "/raumsuche" },
    { sk: "Členstvo", de: "Mitgliedschaft", href: isDe ? "/de/mitgliedschaft" : "/mitgliedschaft" },
    { sk: "Sponzori", de: "Sponsoren", href: isDe ? "/de/sponzoren" : "/sponzoren" },
  ];

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-2xl tracking-tighter text-red-600 uppercase flex items-center gap-2">
          <span>K.S.V.</span><span className="text-white">Kitzbühel</span>
        </Link>
        
        {/* Hamburger ikona - viditeľná len na mobile */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop navigácia */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <Link key={link.sk} href={link.href} className="hover:text-white transition-colors">
              {isDe ? link.de : link.sk}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-zinc-700 flex gap-3 font-bold text-base">
            <Link href={isDe ? switchUrl : pathname} className={!isDe ? 'text-red-600' : 'text-zinc-600'}>SK</Link>
            <Link href={isDe ? pathname : switchUrl} className={isDe ? 'text-red-600' : 'text-zinc-600'}>DE</Link>
          </div>
        </nav>
      </div>

      {/* Mobilné rozbaľovacie menu */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col gap-3 text-center">
          {navLinks.map((link) => (
            <Link key={link.sk} href={link.href} className="text-sm py-2 text-white truncate" onClick={() => setIsOpen(false)}>
              {isDe ? link.de : link.sk}
            </Link>
          ))}
          <div className="flex justify-center gap-6 pt-4 border-t border-zinc-800 font-bold">
            <Link href={isDe ? switchUrl : pathname} className={!isDe ? 'text-red-600' : 'text-zinc-600'}>SK</Link>
            <Link href={isDe ? pathname : switchUrl} className={isDe ? 'text-red-600' : 'text-zinc-600'}>DE</Link>
          </div>
        </nav>
      )}
    </header>
  );
}