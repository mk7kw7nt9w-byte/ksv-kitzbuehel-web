"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  // Zistenie, či sme na nemeckej verzii
  const isDe = pathname.startsWith("/de");

  // Logika pre prepnutie jazyka
  const switchUrl = isDe 
    ? pathname.replace("/de", "") || "/" 
    : `/de${pathname === "/" ? "" : pathname}`;

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-black text-2xl tracking-tighter text-red-600 uppercase flex items-center gap-2 shrink-0">
          <span>K.S.V.</span>
          <span className="text-white">Kitzbühel</span>
        </Link>
        
        {/* Navigácia - na mobile skrytá, na PC (md) zobrazená */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
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
          <Link href={isDe ? "/de/kontakt" : "/kontakt"} className="hover:text-white transition-colors">
            {isDe ? "Kontakt" : "Kontakt"}
          </Link>

          {/* Prepínač jazykov */}
          <div className="ml-4 pl-4 border-l border-zinc-700 flex gap-3 font-bold text-base">
            <Link 
              href={isDe ? switchUrl : pathname} 
              className={`${!isDe ? 'text-red-600' : 'text-zinc-600 hover:text-zinc-300'} transition-colors`}
            >
              SK
            </Link>
            <Link 
              href={isDe ? pathname : switchUrl} 
              className={`${isDe ? 'text-red-600' : 'text-zinc-600 hover:text-zinc-300'} transition-colors`}
            >
              DE
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}