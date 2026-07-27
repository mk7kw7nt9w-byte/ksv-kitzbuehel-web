export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-zinc-300">
      <h1 className="mb-8 text-4xl font-black uppercase italic text-white">
        Impressum
      </h1>

      <div className="space-y-6 leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-bold text-red-600">
            Angaben gemäß § 5 ECG
          </h2>
          <p>
            <strong>Kraftsportverein Kitzbühel</strong>
            <br />
            Lindnerfeld 7
            <br />
            6370 Kitzbühel
            <br />
            Österreich
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-red-600">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:ksvkitz@gmail.com"
              className="underline hover:text-white"
            >
              ksvkitz@gmail.com
            </a>
            <br />
            ZVR-Zahl: 1928877064
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-red-600">
            Vereinszweck
          </h2>
          <p>
            Der Verein, dessen Tätigkeit nicht auf Gewinn gerichtet ist,
            bezweckt die Förderung des Kraftsports und die Pflege der
            sportlichen Gemeinschaft in Kitzbühel.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-red-600">Vorstand</h2>
          <p>
            Obmann: Tomas Sailer
            <br />
            Kassier / Schriftführer: Oto Okoličáni
          </p>
        </section>
      </div>
    </div>
  );
}