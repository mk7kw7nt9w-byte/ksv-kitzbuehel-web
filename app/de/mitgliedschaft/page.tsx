import { Check, Dumbbell, ShieldAlert } from "lucide-react";

export default function MitgliedschaftDE() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100 pb-24">
      
      <section className="w-full relative pt-24 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter italic relative z-10">
          Mitgliedschaft <span className="text-red-600">.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light relative z-10">
          Der KSV Kitzbühel ist eine geschlossene Community. Wir suchen keine normalen Fitnessstudio-Besucher, sondern Leute mit Herzblut, die hart trainieren und den Verein mit uns aufbauen wollen.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          
          {/* Karta 1: Fördermitglied */}
          <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-10 rounded-3xl hover:border-zinc-600 transition-all duration-500 flex flex-col">
            <ShieldAlert className="w-12 h-12 text-zinc-500 mb-6" />
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-zinc-300">Fördermitglied</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white">50 €</span>
              <span className="text-zinc-500 font-medium uppercase tracking-wider text-sm">/ Jährlich</span>
            </div>
            <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
              Für Fans des Kraftsports, die nicht vorhaben, aktiv bei uns zu trainieren, aber den Betrieb unseres Vereins finanziell unterstützen möchten.
            </p>
            <ul className="space-y-4 mb-10 text-sm font-medium text-zinc-300">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-red-600" /> Einladung zu Events und Wettkämpfen</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-red-600" /> Stimmrecht in der Generalversammlung</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-red-600" /> Das gute Gefühl, die Community zu unterstützen</li>
            </ul>
            <a href="mailto:info@ksv-kitzbuehel.at?subject=Interesse an Fördermitgliedschaft" className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-colors">
              Ich bin interessiert
            </a>
          </div>

          {/* Karta 2: Aktives Mitglied */}
          <div className="relative bg-zinc-900 p-10 rounded-3xl border border-red-900/50 shadow-[0_0_50px_-12px_rgba(220,38,38,0.25)] hover:shadow-[0_0_50px_-12px_rgba(220,38,38,0.4)] hover:-translate-y-2 transition-all duration-500 flex flex-col group">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent rounded-3xl pointer-events-none"></div>
            
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-red-600 text-white px-4 py-1 text-xs font-black uppercase tracking-widest rounded-full">
              Full Access
            </div>

            <Dumbbell className="w-12 h-12 text-red-500 mb-6 group-hover:rotate-12 transition-transform duration-500" />
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white">Aktives Mitglied</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white">Preis</span>
              <span className="text-zinc-500 font-medium uppercase tracking-wider text-sm">Auf Anfrage</span>
            </div>
            <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
              Voller Zugang zur Hardware. Für Lifter, die wissen, was sie tun. Wir nehmen nur eine begrenzte Anzahl von Mitgliedern auf, um die Trainingsqualität zu erhalten.
            </p>
            <ul className="space-y-4 mb-10 text-sm font-medium text-zinc-300">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-red-600" /> 24/7 Gym-Zugang (in Planung)</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-red-600" /> Hochwertiges ATX & Force USA Equipment</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-red-600" /> Training in einer geschlossenen Community</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-red-600" /> Möglichkeit, den KSV Kitzbühel zu repräsentieren</li>
            </ul>
            <a href="mailto:info@ksv-kitzbuehel.at?subject=Interesse an aktiver Mitgliedschaft" className="w-full block text-center bg-red-600 hover:bg-red-500 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] relative z-10">
              Mitgliedschaft anfragen
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}