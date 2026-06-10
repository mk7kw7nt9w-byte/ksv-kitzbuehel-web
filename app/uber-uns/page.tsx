import { CheckCircle2, Dumbbell, Shield } from "lucide-react";

export default function UberUns() {
  return (
    <div className="w-full bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-24 text-center">
        <h1 className="mb-6 text-5xl font-black uppercase italic tracking-tighter md:text-8xl">
          Kto sme <span className="text-red-600">.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
          K.S.V. Kitzbühel je mladý silový športový spolok so zameraním na
          seriózny tréning, komunitu a budovanie vlastného tréningového
          prostredia pre kraftsport v Kitzbüheli.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6">
            <Dumbbell className="mb-6 h-10 w-10 text-red-600" />
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wider">
              Sila a výkon
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Základné cviky, silový trojboj a zodpovedný tréning s ťažkými
              váhami.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6">
            <Shield className="mb-6 h-10 w-10 text-red-600" />
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wider">
              Štruktúra
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Oficiálne registrovaný spolok s jasnými pravidlami, dokumentmi a
              dlhodobým smerovaním.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6">
            <CheckCircle2 className="mb-6 h-10 w-10 text-red-600" />
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wider">
              Komunita
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Súkromná tréningová komunita pre ľudí, ktorí trénujú vážne a
              chcú sa podieľať na rozvoji klubu.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-zinc-900 px-4 py-20">
        <h2 className="mb-14 text-center text-4xl font-black uppercase italic tracking-tight text-zinc-700">
          Predstavenstvo
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
              <svg
                className="h-16 w-16 text-zinc-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-center text-2xl font-bold uppercase tracking-tight">
              Tommy Sailer
            </h3>
            <p className="mt-1 text-center text-xs font-medium uppercase tracking-widest text-red-600">
              Predseda
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
              <svg
                className="h-16 w-16 text-zinc-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-center text-2xl font-bold uppercase tracking-tight">
              Oto Okoličáni
            </h3>
            <p className="mt-1 text-center text-xs font-medium uppercase tracking-widest text-red-600">
              Pokladník / zapisovateľ
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="mb-12 text-2xl font-black uppercase italic text-zinc-400 md:text-3xl">
          Dokumenty na stiahnutie
        </h2>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/statuten.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:bg-zinc-800 sm:max-w-64"
          >
            <h3 className="mb-1 font-bold uppercase text-white">
              Stanovy spolku
            </h3>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              PDF Download
            </p>
          </a>

          <a
            href="/zvr-auszug.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:bg-zinc-800 sm:max-w-64"
          >
            <h3 className="mb-1 font-bold uppercase text-white">
              Výpis zo ZVR
            </h3>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              PDF Download
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}