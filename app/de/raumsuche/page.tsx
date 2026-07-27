import {
  ArrowRight,
  Building2,
  Check,
  Hammer,
  MapPin,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";

const requirements = [
  {
    icon: Ruler,
    title: "60–100 m²",
    text: "Bevorzugt wird ein offener Grundriss mit möglichst wenigen Trennwänden.",
  },
  {
    icon: Hammer,
    title: "Belastbarer Boden",
    text: "Erd- oder Untergeschoss mit stabilem Betonboden für schwere Trainingsgeräte und Gewichte.",
  },
  {
    icon: MapPin,
    title: "Raum Kitzbühel",
    text: "Kitzbühel und nähere Umgebung, gerne auch in einem Gewerbe- oder Mischgebiet.",
  },
  {
    icon: Truck,
    title: "Guter Zugang",
    text: "Eine Zufahrt und einfache Anlieferung sind wichtig. Parkplätze wären von Vorteil.",
  },
];

const advantages = [
  "Renovierungs- und Anpassungsarbeiten in Eigenleistung",
  "Langfristige und verlässliche Vereinsnutzung",
  "Ordentlicher und verantwortungsvoller Umgang mit der Fläche",
  "Persönlicher Ansprechpartner für alle Vereinbarungen",
  "Offene Abstimmung zu Nutzung, Lärm und Rahmenbedingungen",
];

export default function RaumsucheDE() {
  const emailHref =
    "mailto:ksvkitz@gmail.com" +
    "?subject=Raumangebot%20f%C3%BCr%20den%20K.S.V.%20Kitzb%C3%BChel" +
    "&body=Guten%20Tag%2C%0A%0Aich%20habe%20m%C3%B6glicherweise%20eine%20passende%20Fl%C3%A4che%20f%C3%BCr%20den%20K.S.V.%20Kitzb%C3%BChel.%0A%0AOrt%3A%0AGr%C3%B6%C3%9Fe%3A%0AZustand%3A%0AKontaktdaten%3A%0A%0AFreundliche%20Gr%C3%BC%C3%9Fe";

  return (
    <main className="w-full bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white">
      {/* Hero */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red-500">
              <Building2 className="h-5 w-5" aria-hidden="true" />
              Raum gesucht
            </div>

            <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-normal text-white sm:text-5xl md:text-7xl">
              Ein neues Zuhause für{" "}
              <span className="text-red-600">
                Kraftsport in Kitzbühel
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Der K.S.V. Kitzbühel sucht eine ungenutzte Gewerbe-, Lager- oder
              Industriefläche, die wir langfristig als Vereinsraum und
              Trainingsstätte nutzen können.
            </p>

            <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
              Wir suchen keine Fläche zu marktüblichen kommerziellen
              Mietkonditionen, sondern eine langfristige und leistbare Lösung
              für unseren gemeinnützigen Vereinsbetrieb.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={emailHref}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Fläche anbieten
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>

              <p className="text-sm text-zinc-500">
                Auch Hinweise und Empfehlungen helfen uns weiter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anforderungen */}
      <section
        className="border-b border-zinc-800 bg-zinc-900/40"
        aria-labelledby="anforderungen"
      >
        <div className="sr-only">
          <h2 id="anforderungen">Unsere Anforderungen</h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-2 md:grid-cols-4">
          {requirements.map((item) => (
            <article
              key={item.title}
              className="min-h-52 bg-zinc-900 px-5 py-7 md:px-7 md:py-9"
            >
              <item.icon
                className="mb-5 h-7 w-7 text-red-500"
                aria-hidden="true"
              />

              <h3 className="text-base font-bold uppercase text-white md:text-lg">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Geeignete Flächen */}
      <section className="mx-auto grid max-w-6xl gap-14 px-4 py-20 md:grid-cols-[1fr_0.9fr] md:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            Geeignete Flächen
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-normal text-white md:text-4xl">
            Ungenutzt und renovierungsbedürftig?
            <span className="mt-2 block text-red-600">
              Für uns kein Problem.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-400">
            Wir suchen keine fertig ausgebaute Fläche und kein klassisches
            gewerbliches Mietobjekt zu marktüblichen Konditionen. Interessant
            sind vor allem leerstehende oder derzeit nicht wirtschaftlich
            genutzte Räume, für die eine langfristige Vereinsnutzung möglich
            ist.
          </p>

          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
            Notwendige Renovierungs- und Anpassungsarbeiten können wir nach
            Absprache weitgehend selbst übernehmen. Auch ehemalige
            Werkstätten, Lagerflächen, Keller, Hallenteile oder andere
            renovierungsbedürftige Räume kommen für uns infrage.
          </p>

          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
            Entscheidend sind ein belastbarer Boden, ausreichend Platz und
            eine Lage, in der ein geregelter Trainingsbetrieb möglich ist.
            Luxus oder eine hochwertige Ausstattung benötigen wir nicht.
          </p>
        </div>

        {/* Vorteile */}
        <div className="border-l-2 border-red-600 pl-6 md:pl-8">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck
              className="h-7 w-7 text-red-500"
              aria-hidden="true"
            />

            <h2 className="text-xl font-bold uppercase text-white">
              Was wir mitbringen
            </h2>
          </div>

          <ul className="space-y-4">
            {advantages.map((advantage) => (
              <li
                key={advantage}
                className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600">
                  <Check
                    className="h-3.5 w-3.5 text-white"
                    aria-hidden="true"
                  />
                </span>

                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kontakt */}
      <section className="border-y border-zinc-800 bg-zinc-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-14 md:flex-row md:items-center md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black uppercase tracking-normal text-white md:text-3xl">
              Kennen Sie eine passende Fläche?
            </h2>

            <p className="mt-3 leading-relaxed text-zinc-400">
              Besonders interessant sind leerstehende oder
              renovierungsbedürftige Räume, die wir zu leistbaren
              Vereinskonditionen langfristig nutzen und nach Absprache selbst
              herrichten können.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Senden Sie uns Standort, ungefähre Größe, Zustand und Ihre
              Kontaktdaten. Wir melden uns persönlich und unverbindlich
              zurück.
            </p>
          </div>

          <a
            href={emailHref}
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-900 sm:w-auto"          >
            Raum vorschlagen
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}