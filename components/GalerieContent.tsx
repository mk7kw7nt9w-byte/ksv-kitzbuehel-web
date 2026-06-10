import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function GalerieContent({ nadpis, popis }: { nadpis: string, popis: string }) {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100 pb-24 flex-grow">
      {/* Hlavička */}
      <section className="w-full pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
          {nadpis} <span className="text-red-600">.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          {popis}
        </p>
      </section>

      {/* Mriežka na fotky */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Tréning" }, 
            { label: "Náradie" }, 
            { label: "Komunita" }, 
            { label: "Miesto Klubu", wide: true }
          ].map((item, i) => (
            <div key={i} className={`group relative aspect-square ${item.wide ? "md:col-span-2 lg:col-span-3 aspect-[2/1]" : ""} bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center hover:border-red-900/50 transition-colors cursor-pointer`}>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              
              {/* Logo s cestou do zložky public/logos/ */}
              <Image 
                src="/logos/logo2.png" 
                alt="Logo" 
                fill 
                className="object-contain p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500" 
              />
              
              <span className="absolute bottom-6 left-6 z-20 text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}