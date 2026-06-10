import { Check, Dumbbell, ShieldAlert } from "lucide-react";

export default function MitgliedschaftDE() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100 pb-24">
      <section className="w-full pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
          Mitgliedschaft <span className="text-red-600">.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Der K.S.V. Kitzbühel ist eine private Trainingsgemeinschaft für
          ernsthaften Kraftsport. Wir suchen Menschen, die verantwortungsvoll
          trainieren und den Verein mit uns aufbauen möchten.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col">
            <ShieldAlert className="w-12 h-12 text-zinc-500 mb-6" />

            <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-zinc-300">
              Fördermitglied
            </h3>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-black text-white">Beitrag</span>
              <span className="text-zinc-500 font-medium uppercase tracking-wider text-sm">
                nach Absprache
              </span>
            </div>

            <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
              Für Menschen und Unternehmen, die den Aufbau des K.S.V. Kitzbühel
              unterstützen möchten, ohne regelmäßig aktiv bei uns zu trainieren.
            </p>

            <ul className="space-y-4 mb-10 text-sm font-medium text-zinc-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                Unterstützung eines jungen Kraftsportvereins
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                Einladung zu ausgewählten Vereinsaktivitäten
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                Einblick in die Entwicklung des Vereins
              </li>
            </ul>

            <a
              href="mailto:ksvkitz@gmail.com?subject=Interesse%20an%20F%C3%B6rdermitgliedschaft"
              className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-colors"
            >
              Interesse melden
            </a>
          </div>

          <div className="relative bg-zinc-900 p-8 rounded-2xl border border-red-900/50 flex flex-col">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-red-600 text-white px-4 py-1 text-xs font-black uppercase tracking-widest rounded-full">
              Training
            </div>

            <Dumbbell className="w-12 h-12 text-red-500 mb-6" />

            <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white">
              Aktives Mitglied
            </h3>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-black text-white">
                Auf Anfrage
              </span>
              <span className="text-zinc-500 font-medium uppercase tracking-wider text-sm">
                begrenzte Plätze
              </span>
            </div>

            <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
              Für engagierte Kraftsportler, die verantwortungsvoll trainieren,
              Erfahrung mitbringen und den Verein aktiv mittragen möchten.
            </p>

            <ul className="space-y-4 mb-10 text-sm font-medium text-zinc-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                Zugang zum geplanten Vereins-Trainingsbereich
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                Hochwertiges ATX & Force USA Equipment
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                Training in einer privaten Gemeinschaft
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                Möglichkeit, den K.S.V. Kitzbühel zu repräsentieren
              </li>
            </ul>

            <a
              href="mailto:ksvkitz@gmail.com?subject=Interesse%20an%20aktiver%20Mitgliedschaft"
              className="w-full block text-center bg-red-600 hover:bg-red-500 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-colors"
            >
              Mitgliedschaft anfragen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}