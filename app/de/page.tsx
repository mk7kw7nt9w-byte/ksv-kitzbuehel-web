export default function HomeDE() {
  return (
    <div className="w-full bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 text-center">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
          Kraftsportverein Kitzbühel
        </p>

        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
          K.S.V. <span className="text-red-600">Kitzbühel</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
          Eine geschlossene Community für ernsthaften Kraftsport,
          Powerlifting und starkes Training in Kitzbühel.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/de/mitgliedschaft"
            className="w-full rounded-lg bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-red-500 sm:w-auto"
          >
            Mitgliedschaft anfragen
          </a>

          <a
            href="/de/raumsuche"
            className="w-full rounded-lg border border-zinc-700 px-7 py-4 text-sm font-black uppercase tracking-widest text-zinc-100 transition-colors hover:border-zinc-400 hover:bg-zinc-900 sm:w-auto"
          >
            Raum anbieten
          </a>
        </div>

        <p className="mt-8 text-xs uppercase tracking-widest text-zinc-600">
          ZVR-Zahl 1928877064
        </p>
      </section>

      <section className="border-t border-zinc-900 px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="mb-2 text-sm font-black uppercase tracking-widest text-white">
              Ernsthaftes Training
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500">
              Fokus auf Grundübungen, Kraftdreikampf und sauberes,
              verantwortungsvolles Training.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="mb-2 text-sm font-black uppercase tracking-widest text-white">
              Raum gesucht
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500">
              Wir suchen geeignete Gewerbe- oder Industrieflächen in Kitzbühel
              und Umgebung.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="mb-2 text-sm font-black uppercase tracking-widest text-white">
              Offizieller Verein
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500">
              Eingetragener Verein mit klarer Struktur, Dokumenten und
              langfristiger Vision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}