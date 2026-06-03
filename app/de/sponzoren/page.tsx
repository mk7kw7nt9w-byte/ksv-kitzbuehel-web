export default function SponsorenDE() {
  return (
    <div className="container mx-auto px-4 py-20 flex-grow">
      {/* Nadpis */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-6">
          Sponsoren <span className="text-red-600">.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light">
          Werden Sie Teil des KSV Kitzbühel. Unterstützen Sie die Entwicklung des Kraftsports in unserer Region und präsentieren Sie Ihre Marke in einem starken Umfeld.
        </p>
      </div>

      {/* Sponzorské karty */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 text-zinc-200">Vorteile der Partnerschaft</h2>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-center gap-3">
              <span className="text-red-600">✓</span> Logo auf Website & Social Media
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-600">✓</span> Branding auf der Vereinsausrüstung
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-600">✓</span> Starkes Image durch lokales Sponsoring
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-red-900/20 to-zinc-900 p-8 rounded-2xl border border-red-900/30 flex flex-col justify-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 text-white">Interesse geweckt?</h2>
          <p className="text-zinc-300 mb-8">Senden Sie uns eine Nachricht, um die Möglichkeiten einer Zusammenarbeit zu besprechen.</p>
          <a href="mailto:info@ksv-kitzbuehel.at" className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-xl font-bold uppercase tracking-widest transition-all text-center shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            E-Mail schreiben
          </a>
        </div>
      </div>

      {/* Sekcia partnerov */}
      <div className="border-t border-zinc-900 pt-16">
        <h2 className="text-3xl font-black uppercase italic text-center mb-12 text-zinc-700">Unsere Partner</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Tu budeme vkladať logá */}
          <div className="h-32 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-700 italic border-dashed">
            Partner Logo
          </div>
          <div className="h-32 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-700 italic border-dashed">
            Partner Logo
          </div>
          <div className="h-32 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-700 italic border-dashed">
            Partner Logo
          </div>
          <div className="h-32 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-700 italic border-dashed">
            Partner Logo
          </div>
        </div>
      </div>
    </div>
  );
}