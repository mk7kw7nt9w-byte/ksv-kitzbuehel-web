import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines } from "@/components/VisionCards";
export const metadata = { title: "Unsere Vision | K.S.V. Kitzbühel" };
export default function Vision() {
  return (
    <div className="vision-page">
      <section className="shell page-intro">
        <p className="eyebrow">DAS WOLLEN WIR AUFBAUEN</p>
        <h1>
          RAUM FÜR
          <br />
          <span className="red-word">MEHR STÄRKE.</span>
        </h1>
        <p className="body-copy">
          Ein Zuhause für Kraftsport, Athletik und Gemeinschaft. Hier zeigen
          wir, wie wir uns die Zukunft des K.S.V. Kitzbühel vorstellen.
        </p>
        <div className="notice">
          <span className="status-dot" /> Wir suchen noch einen Vereinsraum.
          Alle Bilder sind KI-Visualisierungen unserer Vision, keine Fotos einer
          bestehenden Anlage.
        </div>
      </section>
      <section className="shell vision-stories">
        {disciplines.map((item) => (
          <article
            id={item.id}
            key={item.id}
            className="vision-story"
            data-reveal
          >
            <div
              className={`story-image ${!item.image ? "card-typography" : ""}`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 55vw"
                />
              ) : (
                <div className="future-art" aria-hidden="true">
                  <span>RESPEKT.</span>
                  <span>TECHNIK.</span>
                  <span>KONTROLLE.</span>
                </div>
              )}
              <span className="image-note">
                {item.image
                  ? "KI-VISUALISIERUNG · UNSERE VISION"
                  : "PERSPEKTIVE FÜR DIE ZUKUNFT"}
              </span>
            </div>
            <div className="story-copy">
              <p className="eyebrow">
                {item.number} / {item.tag}
              </p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <p className="story-detail">
                {item.id === "kraftsport"
                  ? "Solide Ausstattung, saubere Technik und respektvoller Umgang sollen das Fundament bilden. Welche Geräte und Trainingsmöglichkeiten entstehen, hängt vom künftigen Raum und unseren gemeinsamen Möglichkeiten ab."
                  : item.id === "athletik"
                    ? "Unser Ziel ist vielseitiges Training: freie Gewichte, Körpergewichtsübungen und Bewegungsfreiheit. Für Menschen, die ihre persönliche Stärke Schritt für Schritt entwickeln möchten."
                    : "Ringen und Grappling sind eine Perspektive für die Zukunft, kein derzeit buchbares Angebot. Dafür braucht es geeignete Mattenflächen und qualifizierte sportliche Betreuung."}
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="shell vision-end" data-reveal>
        <h2>EINE VISION BRAUCHT MENSCHEN.</h2>
        <Link className="button primary" href="/de/mitgliedschaft">
          Jetzt Interesse anmelden <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
