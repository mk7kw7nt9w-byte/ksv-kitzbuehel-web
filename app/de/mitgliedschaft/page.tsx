import { ArrowUpRight, Check } from "lucide-react";
export const metadata = { title: "Dabei sein | K.S.V. Kitzbühel" };
export default function Mitgliedschaft() {
  return (
    <div>
      <section className="shell page-intro">
        <p className="eyebrow">GEMEINSAM VON ANFANG AN</p>
        <h1>
          STÄRKE BEGINNT
          <br />
          <span className="red-word">MIT DIR.</span>
        </h1>
        <p className="body-copy">
          Du möchtest Kraftsport in Kitzbühel mit aufbauen? Melde dich
          unverbindlich. Wir freuen uns über Menschen, die trainieren,
          mitgestalten oder unterstützen möchten.
        </p>
        <a
          className="button primary"
          href="mailto:ksvkitz@gmail.com?subject=Interesse%20am%20KSV%20Kitzb%C3%BChel"
        >
          Interesse anmelden <ArrowUpRight size={18} />
        </a>
        <div className="notice">
          <span className="status-dot" /> Wir sind im Aufbau und suchen einen
          Trainingsraum. Deine Anfrage ist unverbindlich und keine
          kostenpflichtige Anmeldung.
        </div>
      </section>
      <section className="shell membership-grid">
        <article className="membership-card" data-reveal>
          <p className="eyebrow">01 / MITGESTALTEN & TRAINIEREN</p>
          <h2>
            AKTIV
            <br />
            DABEI.
          </h2>
          <p>
            Für alle, die verantwortungsvoll trainieren und Teil einer starken
            Gemeinschaft werden möchten.
          </p>
          <ul>
            {[
              "Interesse am künftigen Trainingsangebot anmelden",
              "Ideen und Erfahrung in den Aufbau einbringen",
              "Kraftsport und vielseitiges Training mitgestalten",
              "Persönlich über die nächsten Schritte sprechen",
            ].map((t) => (
              <li key={t}>
                <Check size={18} />
                {t}
              </li>
            ))}
          </ul>
          <p className="membership-note">
            Training, Starttermin und Beiträge werden erst festgelegt, wenn die
            Voraussetzungen geklärt sind.
          </p>
          <a
            className="button primary"
            href="mailto:ksvkitz@gmail.com?subject=Interesse%20an%20aktiver%20Mitgliedschaft"
          >
            Unverbindlich anfragen <ArrowUpRight size={18} />
          </a>
        </article>
        <article className="membership-card" data-reveal>
          <p className="eyebrow">02 / DEN AUFBAU MÖGLICH MACHEN</p>
          <h2>
            STARK
            <br />
            UNTERSTÜTZEN.
          </h2>
          <p>
            Du teilst unsere Idee und möchtest den Verein fördern, auch ohne
            selbst regelmäßig zu trainieren?
          </p>
          <ul>
            {[
              "Einen jungen Verein in der Region unterstützen",
              "Kontakte, Ideen oder Sachmittel einbringen",
              "Den Aufbau eines Trainingsraums ermöglichen",
              "Individuelle Möglichkeiten gemeinsam besprechen",
            ].map((t) => (
              <li key={t}>
                <Check size={18} />
                {t}
              </li>
            ))}
          </ul>
          <p className="membership-note">
            Art und Umfang der Unterstützung besprechen wir persönlich. Es
            entstehen keine Kosten durch die Anfrage.
          </p>
          <a
            className="button secondary"
            href="mailto:ksvkitz@gmail.com?subject=Interesse%20an%20F%C3%B6rdermitgliedschaft"
          >
            Verein unterstützen <ArrowUpRight size={18} />
          </a>
        </article>
      </section>
      <section className="shell faq">
        <p className="eyebrow">GUT ZU WISSEN</p>
        <h2>DEINE FRAGEN.</h2>
        <details>
          <summary>Kann ich bereits bei euch trainieren?</summary>
          <p>
            Noch nicht. Wir suchen derzeit einen geeigneten Vereinsraum. Sobald
            die Voraussetzungen für den Trainingsbetrieb stehen, informieren wir
            interessierte Personen über die nächsten Schritte.
          </p>
        </details>
        <details>
          <summary>Wie viel kostet die Mitgliedschaft?</summary>
          <p>
            Die künftigen Beiträge und Bedingungen klären wir im Zuge des
            Aufbaus. Deine erste Kontaktaufnahme ist unverbindlich und
            kostenlos.
          </p>
        </details>
        <details>
          <summary>Muss ich schon Erfahrung mitbringen?</summary>
          <p>
            Erzähl uns einfach, wo du stehst und was dich interessiert.
            Gemeinsam besprechen wir, wie du dich einbringen kannst und welche
            Möglichkeiten künftig entstehen.
          </p>
        </details>
        <p className="email-hint">
          Die Schaltflächen öffnen dein E-Mail-Programm. Du erreichst uns auch
          direkt unter <a href="mailto:ksvkitz@gmail.com">ksvkitz@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
