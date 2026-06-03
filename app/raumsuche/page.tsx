import { ArrowRight, Hammer, MapPin, Ruler } from "lucide-react";

export default function Raumsuche() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100 pb-24 selection:bg-red-600 selection:text-white">
      
      <section className="w-full pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
          Hľadáme <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Priestory</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Pre náš Kraftsportverein Kitzbühel aktívne hľadáme vhodný komerčný alebo priemyselný priestor na zriadenie tréningového centra. Sme spoľahlivý partner s dlhodobou víziou.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4 text-zinc-200">
            Naše Požiadavky
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/30 flex items-center justify-center border border-red-900/50 shrink-0">
                  <Ruler className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase">Plocha</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Približne 100 až 200 m². Ideálne s otvorenou dispozíciou bez zbytočných priečok.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/30 flex items-center justify-center border border-red-900/50 shrink-0">
                  <Hammer className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase">Nosnosť podlahy</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Hľadáme priestory na prízemí alebo suteréne s vysokou nosnosťou podlahy (betón) kvôli ťažkým váham.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/30 flex items-center justify-center border border-red-900/50 shrink-0">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase">Lokalita</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Kitzbühel a blízke okolie. Preferujeme priemyselné zóny (Gewerbegebiet), kde nebudeme rušiť obyvateľov hlukom.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt pre majiteľov */}
          <div className="mt-12 bg-zinc-950 p-8 rounded-2xl border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Máte vhodný priestor?</h3>
              <p className="text-zinc-500 text-sm">Garantujeme seriózne jednanie, spoľahlivé platenie nájmu a údržbu priestorov na vlastné náklady.</p>
            </div>
            <a href="mailto:info@ksv-kitzbuehel.at?subject=Ponuka priestoru pre KSV" className="group flex items-center gap-3 bg-white text-zinc-950 px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all shrink-0">
              Kontaktujte Nás
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}