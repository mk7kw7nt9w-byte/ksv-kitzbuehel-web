import { CheckCircle2, Dumbbell, Shield } from "lucide-react";

export default function UberUns() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100">
      
      {/* Hlavička */}
      <section className="w-full relative overflow-hidden pt-24 pb-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter italic">
          Kto sme <span className="text-red-600 font-normal">.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-xl mx-auto font-light">
          Kraftsportverein Kitzbühel. Spájame tých, pre ktorých je železo životným štýlom.
        </p>
      </section>

      {/* Hodnoty */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <Dumbbell className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">Sila a výkon</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Základné cviky, trojboj a funkčná sila. Bez kompromisov.</p>
          </div>
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <Shield className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">Transparentnosť</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Oficiálne registrovaný spolok so zmyslom pre poriadok a štruktúru.</p>
          </div>
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <CheckCircle2 className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">Komunita</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Spoločne rastieme, hecujeme sa a posúvame svoje limity.</p>
          </div>
        </div>
      </section>

      {/* Predstavenstvo */}
      <section className="container mx-auto px-4 py-20 border-t border-zinc-900 max-w-5xl">
        <h2 className="text-center text-4xl font-black uppercase mb-16 italic tracking-tight text-zinc-700">Vorstand</h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-zinc-900 rounded-3xl mb-6 border border-zinc-800 flex items-center justify-center">
              <svg className="w-16 h-16 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">Tomas Sailer</h3>
            <p className="text-red-600 font-medium uppercase text-xs tracking-widest mt-1">Obmann</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-zinc-900 rounded-3xl mb-6 border border-zinc-800 flex items-center justify-center">
              <svg className="w-16 h-16 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">Oto Okoličáni</h3>
            <p className="text-red-600 font-medium uppercase text-xs tracking-widest mt-1">Pokladník & Zapisovateľ</p>
          </div>
        </div>
      </section>

      {/* Dokumenty */}
      <section className="container mx-auto px-4 py-20 border-t border-zinc-900 text-center">
        <h2 className="text-3xl font-black uppercase italic mb-12 text-zinc-400">Dokumenty na stiahnutie</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/statuten.pdf" target="_blank" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-8 py-6 rounded-2xl flex flex-col items-center w-64 transition-all">
            <h3 className="font-bold text-lg uppercase text-white mb-2">Stanovy spolku</h3>
            <p className="text-zinc-500 text-sm">Aktuálne znenie (PDF)</p>
          </a>

          <a href="/zvr-auszug.pdf" target="_blank" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-8 py-6 rounded-2xl flex flex-col items-center w-64 transition-all">
            <h3 className="font-bold text-lg uppercase text-white mb-2">ZVR Výpis</h3>
            <p className="text-zinc-500 text-sm">Oficiálny výpis (PDF)</p>
          </a>
        </div>
      </section>
    </div>
  );
}