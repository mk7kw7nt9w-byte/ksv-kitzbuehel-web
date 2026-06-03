import { CheckCircle2, Dumbbell, Shield } from "lucide-react";

export default function UberUnsDE() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100 overflow-x-hidden">
      
      {/* Hlavička */}
      <section className="w-full relative pt-24 pb-20 px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter italic">
          Wer wir sind <span className="text-red-600 font-normal">.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto font-light">
          Kraftsportverein Kitzbühel. Wir vereinen diejenigen, für die Eisen ein Lebensstil ist.
        </p>
      </section>

      {/* Hodnoty */}
      <section className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Dumbbell, title: "Kraft & Leistung", text: "Grundübungen, Kraftdreikampf und funktionelle Kraft." },
            { icon: Shield, title: "Transparenz", text: "Offiziell eingetragener Verein mit Sinn für Ordnung." },
            { icon: CheckCircle2, title: "Gemeinschaft", text: "Gemeinsam wachsen wir und verschieben Grenzen." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
              <item.icon className="w-10 h-10 text-red-600 mb-6" />
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dokumenty - OPRAVENÁ RESPONZIVITA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-12 text-zinc-400">Dokumente</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
          <a href="/statuten.pdf" target="_blank" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 p-6 rounded-2xl flex-1 sm:w-64 transition-all">
            <h3 className="font-bold uppercase text-white mb-1">Statuten</h3>
            <p className="text-zinc-500 text-xs">PDF Download</p>
          </a>
          <a href="/zvr-auszug.pdf" target="_blank" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 p-6 rounded-2xl flex-1 sm:w-64 transition-all">
            <h3 className="font-bold uppercase text-white mb-1">ZVR-Auszug</h3>
            <p className="text-zinc-500 text-xs">PDF Download</p>
          </a>
        </div>
      </section>
    </div>
  );
}