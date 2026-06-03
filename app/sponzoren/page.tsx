export default function Sponzoren() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Nadpis */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-6">
          Sponzori <span className="text-red-600">.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light">
          Staňte sa súčasťou KSV Kitzbühel. Podporte rozvoj silových športov v našom regióne a získajte priestor na prezentáciu svojej značky.
        </p>
      </div>

      {/* Sponzorské karty */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">Výhody partnerstva</h2>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-center gap-3">
              <span className="text-red-600">✓</span> Logo na našom webe a sociálnych sieťach
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-600">✓</span> Branding na klubovom vybavení
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-600">✓</span> Spojenie značky so zdravým životným štýlom
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-red-900/20 to-zinc-900 p-8 rounded-2xl border border-red-900/30 flex flex-col justify-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-4">Máte záujem?</h2>
          <p className="text-zinc-300 mb-8">Pošlite nám správu a radi s vami preberieme možnosti spolupráce.</p>
          <a href="mailto:info@ksv-kitzbuehel.at" className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-xl font-bold uppercase tracking-widest transition-all text-center">
            Napísať e-mail
          </a>
        </div>
      </div>

      {/* Sekcia partnerov */}
      <div className="border-t border-zinc-900 pt-16">
        <h2 className="text-3xl font-black uppercase italic text-center mb-12 text-zinc-700">Naši partneri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Tu budeme vkladať logá */}
          <div className="h-32 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-700 italic border-dashed">
            Logo Partnera
          </div>
        </div>
      </div>
    </div>
  );
}