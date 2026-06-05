"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Zistíme, či sme na nemeckej verzii (URL začína na /de)
  const isDe = pathname.startsWith("/de");

  // Vygenerujeme odkaz pre prepínač (ak sme v DE, vráti SK cestu a naopak)
  const switchUrl = isDe ? pathname.replace("/de", "") || "/" : `/de${pathname === "/" ? "" : pathname}`;

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-2xl tracking-tighter text-red-600 uppercase flex items-center gap-2">
  <span>K.S.V.</span>
  <span className="text-white">Kitzbühel</span>
</Link>
        
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-300">
          <Link href={isDe ? "/de/uber-uns" : "/uber-uns"} className="hover:text-white transition-colors">
            {isDe ? "Wer wir sind" : "O nás"}
          </Link>
          <Link href={isDe ? "/de/galerie" : "/galerie"} className="hover:text-white transition-colors">
            {isDe ? "Galerie" : "Galéria"}
          </Link>
          <Link href={isDe ? "/de/raumsuche" : "/raumsuche"} className="hover:text-white transition-colors">
            {isDe ? "Raumsuche" : "Priestory"}
          </Link>
          <Link href={isDe ? "/de/mitgliedschaft" : "/mitgliedschaft"} className="hover:text-white transition-colors">
            {isDe ? "Mitgliedschaft" : "Členstvo"}
          </Link>
          <Link href={isDe ? "/de/sponzoren" : "/sponzoren"} className="hover:text-white transition-colors">
            {isDe ? "Sponsoren" : "Sponzori"}
          </Link>

          {/* Samotný prepínač jazykov s červeným zvýraznením aktívneho */}
          <div className="ml-4 pl-4 border-l border-zinc-700 flex gap-3 font-bold text-base">
            <Link href={switchUrl} className={`${!isDe ? 'text-red-600' : 'text-zinc-600 hover:text-zinc-300'} transition-colors`}>
              SK
            </Link>
            <Link href={switchUrl} className={`${isDe ? 'text-red-600' : 'text-zinc-600 hover:text-zinc-300'} transition-colors`}>
              DE
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}