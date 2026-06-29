export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-zinc-300">
      <h1 className="mb-8 text-4xl font-black uppercase italic text-white">
        Datenschutzerklärung
      </h1>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-red-600">
            1. Datenschutz auf einen Blick
          </h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Wir verarbeiten Ihre personenbezogenen Daten ausschließlich auf
            Grundlage der Datenschutz-Grundverordnung (DSGVO), des
            österreichischen Datenschutzgesetzes (DSG) sowie des
            Telekommunikationsgesetzes (TKG).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-red-600">
            2. Datenerfassung auf unserer Website
          </h2>
          <p>
            Beim Besuch unserer Website können automatisch technische
            Informationen, sogenannte Server-Logfiles, erfasst werden. Diese
            Daten dienen ausschließlich der technischen Bereitstellung,
            Sicherheit und Stabilität der Website und lassen keine unmittelbaren
            Rückschlüsse auf Ihre Person zu.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-red-600">
            3. Kontaktaufnahme per E-Mail
          </h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
            übermittelten personenbezogenen Daten ausschließlich zur Bearbeitung
            Ihrer Anfrage sowie für mögliche Anschlussfragen gespeichert. Eine
            Weitergabe Ihrer Daten an Dritte erfolgt nicht ohne Ihre
            ausdrückliche Einwilligung, sofern keine gesetzliche Verpflichtung
            dazu besteht.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-red-600">4. Ihre Rechte</h2>
          <p>
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
            Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit,
            Widerruf einer Einwilligung sowie Widerspruch gegen die Verarbeitung
            Ihrer personenbezogenen Daten zu.
          </p>

          <p className="mt-3">
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen
            das Datenschutzrecht verstößt, können Sie sich bei der zuständigen
            Datenschutzbehörde beschweren.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-red-600">
            5. Verantwortlicher gemäß Art. 4 Z 7 DSGVO
          </h2>

          <p>
            <strong>Kraftsportverein Kitzbühel</strong>
            <br />
            Obmann: Tomas Sailer
            <br />
            Lindnerfeld 7
            <br />
            6370 Kitzbühel
            <br />
            ZVR-Zahl: 1928877064
            <br />
            E-Mail:{" "}
            <a
              href="mailto:ksvkitz@gmail.com"
              className="underline transition-colors hover:text-white"
            >
              ksvkitz@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}