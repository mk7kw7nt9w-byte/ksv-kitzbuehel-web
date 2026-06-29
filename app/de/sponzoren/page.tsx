import { ArrowRight, CheckCircle2, Handshake, Megaphone, Trophy } from "lucide-react";

export default function SponsorenDE() {
  const benefits = [
    "Logo-Präsenz auf Website und Vereinskanälen",
    "Sichtbarkeit bei Vereinsaktivitäten und Events",
    "Lokale Unterstützung eines jungen Sportvereins",
    "Partnerschaft mit einer klaren, langfristigen Vision",
  ];

  const partnerOptions = [
    {
      icon: Megaphone,
      title: "Sichtbarkeit",
      text: "Ihre Marke wird im Umfeld des K.S.V. Kitzbühel sichtbar platziert.",
    },
    {
      icon: Trophy,
      title: "Sport fördern",
      text: "Sie unterstützen den Aufbau des Kraftsports in Kitzbühel und Umgebung.",
    },
    {
      icon: Handshake,
      title: "Partnerschaft",
      text: "Wir suchen verlässliche Partner, die den Verein langfristig begleiten möchten.",
    },
  ];

  return (
    <div className="w-full bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
            Partnerschaft
          </p>

          <h1 className="mb-6 text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
            Sponsoren <span className="text-red-600">.</span>
          </h1>

          <p className="text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
            Unterstützen Sie den Aufbau des K.S.V. Kitzbühel und werden Sie
            Teil eines jungen Kraftsportvereins mit klarer regionaler
            Ausrichtung.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-3">
        {partnerOptions.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <item.icon className="mb-6 h-10 w-10 text-red-600" />
            <h2 className="mb-2 text-lg font-bold uppercase tracking-wider text-white">
              {item.title}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-zinc-200">
            Vorteile der Partnerschaft
          </h2>

          <ul className="space-y-4 text-zinc-400">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center rounded-lg border border-red-900/40 bg-zinc-900 p-8">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wider text-white">
            Interesse an einer Partnerschaft?
          </h2>

          <p className="mb-8 leading-relaxed text-zinc-300">
            Schreiben Sie uns kurz, welche Art der Unterstützung für Sie
            interessant ist. Wir melden uns persönlich mit passenden
            Möglichkeiten.
          </p>

          <a
            href="mailto:ksvkitz@gmail.com?subject=Sponsoring%20KSV%20Kitzb%C3%BChel"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-red-500"
          >
            E-Mail schreiben
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-black uppercase italic text-zinc-700">
            Unsere Partner
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500">
            Wir befinden uns im Aufbau und freuen uns über Unternehmen, die den
            Kraftsport in Kitzbühel von Anfang an unterstützen möchten.
          </p>
        </div>
      </section>
    </div>
  );
}