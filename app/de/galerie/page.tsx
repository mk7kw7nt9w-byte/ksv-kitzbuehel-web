import Image from "next/image";

export default function GalerieContent({
  nadpis = "Galerie",
  popis = "Training, Equipment und Einblicke in den Aufbau des K.S.V. Kitzbühel.",
}: {
  nadpis?: string;
  popis?: string;
}) {
  const items = [
    { label: "Training" },
    { label: "Equipment" },
    { label: "Gemeinschaft" },
    { label: "Vereinsraum", wide: true },
  ];

  return (
    <div className="w-full flex-grow bg-zinc-950 pb-24 text-zinc-100">
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-24 text-center">
        <h1 className="mb-6 text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
          {nadpis} <span className="text-red-600">.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
          {popis}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900/60 p-6 text-center">
          <Image
            src="/logo2.png"
            alt="K.S.V. Kitzbühel Logo"
            width={120}
            height={120}
            className="mx-auto mb-5 opacity-80"
          />

          <h2 className="mb-2 text-xl font-black uppercase tracking-widest text-white">
            Galerie im Aufbau
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500">
            Wir bauen den K.S.V. Kitzbühel gerade auf. Erste Bilder von
            Training, Equipment und Vereinsaktivitäten folgen demnächst.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className={`relative flex items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 ${
                item.wide
                  ? "aspect-[2/1] md:col-span-2 lg:col-span-3"
                  : "aspect-square"
              }`}
            >
              <Image
                src="/logo2.png"
                alt=""
                fill
                className="object-contain p-10 opacity-10"
              />

              <span className="relative z-10 text-sm font-bold uppercase tracking-widest text-zinc-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}