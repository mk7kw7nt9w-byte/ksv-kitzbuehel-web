export default function ImpressumSK() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-zinc-300">
      <h1 className="text-4xl font-black uppercase italic mb-8 text-white">Impressum (Tiráž)</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Informácie podľa § 5 ECG</h2>
          <p>
            <strong>Kraftsportverein Kitzbühel</strong><br />
            Lindnerfeld 7<br />
            6370 Kitzbühel<br />
            Rakúsko
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Kontakt</h2>
          <p>
            E-mail: <a href="mailto:ksvkitz@gmail.com" className="hover:text-white underline">ksvkitz@gmail.com</a><br />
            ZVR-Číslo: 1928877064
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Účel spolku</h2>
          <p>
            Spolok, ktorého činnosť nie je zameraná na dosahovanie zisku, má za cieľ podporovať 
            silové športy a pestovať športovú komunitu v Kitzbüheli.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-red-600 mb-2">Predstavenstvo</h2>
          <p>
            Predseda (Obmann): Tommy Sailer
          </p>
        </section>
      </div>
    </div>
  );
}