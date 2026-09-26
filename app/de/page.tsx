import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Dumbbell, UsersRound } from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  { icon: Dumbbell, title: "Kraftsport", text: "Kraftdreikampf, Grundübungen und vielseitiges Krafttraining bilden das Fundament." },
  { icon: UsersRound, title: "Gemeinschaft", text: "Menschen mit unterschiedlichen sportlichen Zielen bauen den Verein gemeinsam auf." },
  { icon: Building2, title: "Ein eigener Raum", text: "Wir suchen eine leistbare Fläche als langfristiges Zuhause für den K.S.V. Kitzbühel." },
];

export default function HomeDE() {
  return (
    <div className="overflow-hidden bg-zinc-950 text-zinc-100">
      <section className="relative flex min-h-[82vh] items-center overflow-hidden border-b border-zinc-800">
        <Image src="/images/vision-krafttraining.webp" alt="KI-generierte Visualisierung eines möglichen Trainingsraums für Kraftsport" fill priority sizes="100vw" className="object-cover object-[55%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/20" />
        <div className="absolute -left-20 bottom-12 h-72 w-72 rounded-full bg-red-600/20 blur-3xl ambient-glow" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24">
          <p className="hero-enter mb-6 text-sm font-bold uppercase tracking-[.28em] text-red-500">Kraftsportverein Kitzbühel</p>
          <h1 className="hero-enter-delay max-w-4xl text-5xl font-black uppercase italic leading-[.96] tracking-tighter sm:text-6xl md:text-8xl">Ein Zuhause für <span className="text-red-600">Kraftsport.</span></h1>
          <p className="hero-enter-more mt-7 max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl">Wir bauen in Kitzbühel ein Vereinsumfeld für Kraftdreikampf, vielseitiges Krafttraining und weitere starke Disziplinen auf. Unsere Vision beginnt mit Menschen – und der Suche nach einem Raum.</p>
          <div className="hero-enter-more mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/de/vision" className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-widest transition-colors hover:bg-red-500">Unsere Vision <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/de/mitgliedschaft" className="inline-flex items-center justify-center rounded-lg border border-zinc-500 px-7 py-4 text-sm font-black uppercase tracking-widest transition-colors hover:border-white hover:bg-zinc-900/70">Interesse anmelden</Link>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest text-zinc-400">KI-generierte Visualisierung · kein bestehender Vereinsraum</p>
        </div>
      </section>

      <div className="overflow-hidden border-b border-zinc-800 bg-red-700 py-3 text-sm font-black uppercase tracking-[.28em] text-white" aria-hidden="true">
        <div className="ticker-track"><span className="pr-12">Kraft · Technik · Gemeinschaft · Kitzbühel · </span><span className="pr-12">Kraft · Technik · Gemeinschaft · Kitzbühel · </span><span className="pr-12">Kraft · Technik · Gemeinschaft · Kitzbühel · </span><span className="pr-12">Kraft · Technik · Gemeinschaft · Kitzbühel · </span></div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Reveal className="max-w-3xl"><p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-red-500">Unser Antrieb</p><h2 className="text-4xl font-black uppercase italic tracking-tight md:text-6xl">Stark werden. Gemeinsam wachsen.</h2><p className="mt-6 text-lg leading-relaxed text-zinc-400">Der K.S.V. ist ein junger eingetragener Verein. Wir schaffen die Grundlage für verantwortungsvolles Training und eine Gemeinschaft, die Kraftsport in der Region voranbringt.</p></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((item, index) => <Reveal key={item.title} delay={index * 110} className="h-full"><article className="card-lift h-full rounded-xl border border-zinc-800 bg-zinc-900/55 p-7"><item.icon className="mb-8 h-9 w-9 text-red-600" aria-hidden="true" /><h3 className="mb-3 text-xl font-black uppercase">{item.title}</h3><p className="leading-relaxed text-zinc-400">{item.text}</p></article></Reveal>)}
        </div>
      </section>

      <section className="grid border-y border-zinc-800 bg-zinc-900/40 lg:grid-cols-2">
        <div className="image-zoom relative min-h-[340px] overflow-hidden lg:min-h-[530px]"><Image src="/images/vision-ringen.webp" alt="KI-generierte Visualisierung eines Ringtrainings" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        <div className="flex items-center px-6 py-16 md:px-16"><Reveal className="max-w-xl"><p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-red-500">Mehr als eine Disziplin</p><h2 className="text-4xl font-black uppercase italic tracking-tight md:text-5xl">Kraft hat viele Formen.</h2><p className="mt-6 leading-relaxed text-zinc-400">Neben dem Kraftdreikampf denken wir an Athletik und – wenn Raum und Betreuung es ermöglichen – Ringen und Grappling. Auf der Visionsseite zeigen wir, wie dieses Trainingsumfeld aussehen könnte.</p><Link href="/de/vision" className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-red-500 transition-colors hover:text-red-400">Vision entdecken <ArrowRight className="h-4 w-4" /></Link><p className="mt-8 text-xs uppercase tracking-widest text-zinc-500">KI-generierte Visualisierung · keine aktuelle Vereinsaktivität</p></Reveal></div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-4 py-20 md:flex-row md:items-center md:py-24">
        <Reveal className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-red-500">Im Aufbau</p><h2 className="text-3xl font-black uppercase italic md:text-5xl">Sei von Anfang an dabei.</h2><p className="mt-5 leading-relaxed text-zinc-400">Du interessierst dich für den Verein oder kennst eine passende Fläche? Wir freuen uns über Menschen, die mit uns den nächsten Schritt gehen.</p></Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row md:flex-col"><Link href="/de/mitgliedschaft" className="rounded-lg bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-widest hover:bg-red-500">Mitmachen</Link><Link href="/de/raumsuche" className="rounded-lg border border-zinc-700 px-7 py-4 text-center text-sm font-black uppercase tracking-widest hover:border-zinc-400">Raum anbieten</Link></Reveal>
      </section>
    </div>
  );
}
