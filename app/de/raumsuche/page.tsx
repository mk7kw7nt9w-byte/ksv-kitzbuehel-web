import { ArrowRight, Hammer, MapPin, Ruler } from "lucide-react";

export default function RaumsucheDE() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100 pb-24 selection:bg-red-600 selection:text-white">
      
      <section className="w-full pt-24 pb-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">
          Wir suchen <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Räumlichkeiten</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Für unseren Kraftsportverein Kitzbühel suchen wir aktiv nach geeigneten Gewerbe- oder Industrieflächen zur Errichtung eines Trainingszentrums. Wir sind ein verlässlicher Partner mit langfristiger Vision.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4 text-zinc-200">
            Unsere Anforderungen
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/30 flex items-center justify-center border border-red-900/50 shrink-0">
                  <Ruler className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase">Fläche</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Ca. 100 bis 200 m². Ideal ist ein offener Grundriss ohne unnötige Trennwände.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/30 flex items-center justify-center border border-red-900/50 shrink-0">
                  <Hammer className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase">Bodenbelastbarkeit</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Wir suchen Räumlichkeiten im Erdgeschoss oder Untergeschoss mit hoher Bodenbelastbarkeit (Beton) für schwere Gewichte.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/30 flex items-center justify-center border border-red-900/50 shrink-0">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase">Standort</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Kitzbühel und nähere Umgebung. Wir bevorzugen Gewerbegebiete, in denen wir keine Anwohner durch Lärm stören.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-zinc-950 p-8 rounded-2xl border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Haben Sie eine passende Fläche?</h3>
              <p className="text-zinc-500 text-sm">Wir garantieren seriöses Auftreten, pünktliche Mietzahlungen und die Instandhaltung der Räumlichkeiten auf eigene Kosten.</p>
            </div>
            <a href="mailto:ksvkitz@gmail.com?subject=Raumangebot für KSV" className="group flex items-center gap-3 bg-white text-zinc-950 px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all shrink-0">
              Kontaktieren Sie uns
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}