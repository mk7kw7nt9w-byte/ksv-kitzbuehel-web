import { ArrowRight, Hammer, MapPin, Ruler, Truck } from "lucide-react";

export default function Raumsuche() {
  const requirements = [
    {
      icon: Ruler,
      title: "Plocha",
      text: "Približne 100 až 200 m². Ideálna je otvorená dispozícia s čo najmenším počtom priečok.",
    },
    {
      icon: Hammer,
      title: "Nosnosť podlahy",
      text: "Prízemie alebo suterén s nosnou betónovou podlahou vhodnou na tréning s ťažkými váhami.",
    },
    {
      icon: MapPin,
      title: "Lokalita",
      text: "Kitzbühel a blízke okolie. Vhodné sú najmä komerčné alebo priemyselné zóny.",
    },
    {
      icon: Truck,
      title: "Prístup",
      text: "Výhodou je dobrý prístup, možnosť jednoduchého zásobovania a parkovanie v blízkosti.",
    },
  ];

  return (
    <div className="w-full bg-zinc-950 pb-24 text-zinc-100 selection:bg-red-600 selection:text-white">
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-24 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
          Hľadáme priestor
        </p>

        <h1 className="mb-6 text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
          Hľadáme <span className="text-red-600">priestory</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
          Pre K.S.V. Kitzbühel hľadáme vhodný komerčný alebo priemyselný
          priestor, ktorý môže slúžiť ako klubový a tréningový priestor pre
          silový šport.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6 md:p-10">
          <h2 className="mb-8 border-b border-zinc-800 pb-4 text-2xl font-bold uppercase tracking-widest text-zinc-200">
            Naše požiadavky
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {requirements.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-red-900/50 bg-red-950/30">
                  <item.icon className="h-6 w-6 text-red-500" />
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-bold uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg border border-zinc-800 bg-zinc-950 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Máte vhodný priestor?
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
                Vystupujeme seriózne, plánujeme dlhodobo a radi osobne
                preberieme podmienky využitia, hluk, prístup aj ďalšie
                praktické detaily.
              </p>
            </div>

            <a
              href="mailto:ksvkitz@gmail.com?subject=Ponuka%20priestoru%20pre%20KSV%20Kitzb%C3%BChel"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Kontaktujte nás
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}