export default function Sponzoren() {
  return (
    <div className="w-full bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
            Partnerstvo
          </p>

          <h1 className="mb-6 text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
            Sponzori <span className="text-red-600">.</span>
          </h1>

          <p className="text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
            Podporte rozvoj K.S.V. Kitzbühel a staňte sa súčasťou mladého
            silového športového spolku s jasným regionálnym zameraním.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-zinc-200">
            Výhody partnerstva
          </h2>

          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="text-red-600">✓</span>
              Prezentácia loga na webe a klubových kanáloch
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600">✓</span>
              Viditeľnosť pri klubových aktivitách a podujatiach
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600">✓</span>
              Podpora mladého športového spolku v regióne
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600">✓</span>
              Partnerstvo s jasnou a dlhodobou víziou
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center rounded-lg border border-red-900/40 bg-zinc-900 p-8">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wider text-white">
            Máte záujem o spoluprácu?
          </h2>

          <p className="mb-8 leading-relaxed text-zinc-300">
            Napíšte nám krátko, aká forma podpory by bola pre vás zaujímavá.
            Ozveme sa osobne a preberieme možnosti partnerstva.
          </p>

          <a
            href="mailto:ksvkitz@gmail.com?subject=Sponzoring%20KSV%20Kitzb%C3%BChel"
            className="rounded-lg bg-red-600 px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-red-500"
          >
            Napísať e-mail
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-black uppercase italic text-zinc-700">
            Naši partneri
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500">
            Klub je vo fáze budovania a tešíme sa na prvých partnerov, ktorí
            podporia silový šport v Kitzbüheli od začiatku.
          </p>
        </div>
      </section>
    </div>
  );
}