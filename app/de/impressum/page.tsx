export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-zinc-300">
      <h1 className="text-4xl font-black uppercase italic mb-8 text-white">Impressum</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Angaben gemäß § 5 ECG</h2>
          <p>
            <strong>Kraftsportverein Kitzbühel</strong><br />
            Lindnerfeld 7<br />
            6370 Kitzbühel<br />
            Österreich
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:ksvkitz@gmail.com" className="hover:text-white underline">ksvkitz@gmail.com</a><br />
            ZVR-Zahl: 1928877064
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Vereinszweck</h2>
          <p>
            Der Verein, dessen Tätigkeit nicht auf Gewinn gerichtet ist, bezweckt die Förderung 
            des Kraftsports und die Pflege der sportlichen Gemeinschaft in Kitzbühel.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Vorstand</h2>
          <p>
            Obmann: Tommy Sailer<br />
            Kassier/Schriftführer: Oto Okolicani
          </p>
        </section>
      </div>
    </div>
  );
}