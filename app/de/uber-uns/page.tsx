import {
  CheckCircle2,
  Dumbbell,
  FileText,
  Shield,
  UserRound,
} from "lucide-react";

export default function UberUnsDE() {
  const values = [
    {
      icon: Dumbbell,
      title: "Kraft & Leistung",
      text: "Fokus auf Grundübungen, Kraftdreikampf und verantwortungsvolles Training mit schweren Gewichten.",
    },
    {
      icon: Shield,
      title: "Struktur",
      text: "Ein offiziell eingetragener Verein mit klaren Regeln, Dokumenten und langfristiger Ausrichtung.",
    },
    {
      icon: CheckCircle2,
      title: "Gemeinschaft",
      text: "Eine private Trainingsgemeinschaft für Menschen, die ernsthaft trainieren und den Verein mittragen.",
    },
  ];

  const board = [
    {
      name: "Tomas Sailer",
      role: "Obmann",
    },
    {
      name: "Oto Okoličáni",
      role: "Kassier / Schriftführer",
    },
  ];

  const documents = [
    {
      title: "Statuten",
      href: "/statuten.pdf",
    },
    
  ];

  return (
    <div className="w-full overflow-x-hidden bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-24 text-center">
        <h1 className="mb-6 text-5xl font-black uppercase italic tracking-tighter md:text-8xl">
          Wer wir sind <span className="text-red-600">.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
          Der K.S.V. Kitzbühel ist ein junger Kraftsportverein mit klarer
          Ausrichtung: ernsthaftes Training, starke Gemeinschaft und der Aufbau
          eines eigenen Trainingsumfelds für Kraftsport in Kitzbühel.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <item.icon className="mb-6 h-10 w-10 text-red-600" />
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-zinc-900 px-4 py-20">
        <h2 className="mb-14 text-center text-4xl font-black uppercase italic tracking-tight text-zinc-700">
          Vorstand
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {board.map((person) => (
            <div key={person.name} className="flex flex-col items-center">
              <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <UserRound className="h-16 w-16 text-zinc-700" />
              </div>
              <h3 className="text-center text-2xl font-bold uppercase tracking-tight">
                {person.name}
              </h3>
              <p className="mt-1 text-center text-xs font-medium uppercase tracking-widest text-red-600">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="mb-12 text-2xl font-black uppercase italic text-zinc-400 md:text-3xl">
          Dokumente
        </h2>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {documents.map((document) => (
            <a
              key={document.title}
              href={document.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:bg-zinc-800 sm:max-w-64"
            >
              <FileText className="mx-auto mb-4 h-8 w-8 text-red-600" />
              <h3 className="mb-1 font-bold uppercase text-white">
                {document.title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                PDF Download
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}