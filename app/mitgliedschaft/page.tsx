import { Check, Dumbbell, ShieldAlert } from "lucide-react";

export default function Mitgliedschaft() {
  return (
    <div className="w-full bg-zinc-950 pb-24 text-zinc-100">
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-24 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
          Členstvo
        </p>

        <h1 className="mb-6 text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
          Staň sa súčasťou <span className="text-red-600">K.S.V.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
          K.S.V. Kitzbühel je súkromná tréningová komunita pre seriózny silový
          šport. Hľadáme ľudí, ktorí trénujú zodpovedne a chcú s nami budovať
          klub od základov.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/60 p-8">
            <ShieldAlert className="mb-6 h-12 w-12 text-zinc-500" />

            <h2 className="mb-2 text-2xl font-bold uppercase tracking-widest text-zinc-300">
              Podporný člen
            </h2>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">50 €</span>
              <span className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                ročne
              </span>
            </div>

            <p className="mb-8 flex-grow leading-relaxed text-zinc-400">
              Pre ľudí, ktorí chcú podporiť rozvoj silového športu v
              Kitzbüheli, aj keď u nás neplánujú pravidelne trénovať.
            </p>

            <ul className="mb-10 space-y-4 text-sm font-medium text-zinc-300">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                Podpora mladého silového športového spolku
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                Pozvánka na vybrané klubové aktivity
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                Prehľad o vývoji klubu a jeho ďalších krokoch
              </li>
            </ul>

            <a
              href="mailto:ksvkitz@gmail.com?subject=Z%C3%A1ujem%20o%20podporn%C3%A9%20%C4%8Dlenstvo"
              className="block w-full rounded-lg bg-zinc-800 py-4 text-center text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-700"
            >
              Mám záujem
            </a>
          </div>

          <div className="relative flex flex-col rounded-lg border border-red-900/50 bg-zinc-900 p-8">
            <div className="absolute right-8 top-0 -translate-y-1/2 rounded-full bg-red-600 px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
              Tréning
            </div>

            <Dumbbell className="mb-6 h-12 w-12 text-red-500" />

            <h2 className="mb-2 text-2xl font-bold uppercase tracking-widest text-white">
              Aktívny člen
            </h2>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">
                Na vyžiadanie
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                obmedzený počet miest
              </span>
            </div>

            <p className="mb-8 flex-grow leading-relaxed text-zinc-400">
              Pre skúsených a zodpovedných športovcov, ktorí chcú trénovať v
              súkromnom prostredí a aktívne sa podieľať na fungovaní klubu.
            </p>

            <ul className="mb-10 space-y-4 text-sm font-medium text-zinc-300">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                Prístup do plánovaného klubového tréningového priestoru
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                Kvalitné ATX a Force USA vybavenie
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                Tréning v súkromnej komunite
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                Možnosť reprezentovať K.S.V. Kitzbühel
              </li>
            </ul>

            <a
              href="mailto:ksvkitz@gmail.com?subject=Z%C3%A1ujem%20o%20akt%C3%ADvne%20%C4%8Dlenstvo"
              className="block w-full rounded-lg bg-red-600 py-4 text-center text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-red-500"
            >
              Požiadať o členstvo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}