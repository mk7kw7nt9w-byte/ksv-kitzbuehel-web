import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Plus } from "lucide-react";
import VisionCards from "@/components/VisionCards";

export default function HomeDE() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-photo">
          <Image
            src="/images/gym-vision.webp"
            alt="KI-Visualisierung unserer Vision: Ein Kraftsportraum mit Blick auf die Alpen"
            fill
            sizes="100vw"
            preload
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow hero-intro">
            <span className="status-dot" /> KITZBÜHEL, TIROL · EIN VEREIN IM
            AUFBAU
          </p>
          <h1>
            <span>GEMEINSAM.</span>
            <span>STÄRKER.</span>
            <span className="red-word">K.S.V.</span>
          </h1>
          <p className="hero-description">
            Ein Zuhause für Kraftsport in Kitzbühel.
            <br />
            Unsere Vision beginnt mit Menschen, die sie teilen.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/de/mitgliedschaft">
              Teil der Bewegung werden <ArrowUpRight size={19} />
            </Link>
            <Link className="button secondary" href="/de/vision">
              Unsere Vision <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom shell">
          <a href="#vision" className="scroll-cue">
            <ArrowDown size={16} /> ENTDECKE, WAS UNS ANTREIBT
          </a>
          <span>KI-VISUALISIERUNG · UNSERE VISION</span>
        </div>
        <span className="hero-side" aria-hidden="true">
          KRAFT. HALTUNG. GEMEINSCHAFT.
        </span>
      </section>
      <div
        className="sports-ticker"
        aria-label="Kraftsport · Athletik · Gemeinschaft · Kitzbühel"
      >
        <div className="ticker-track" aria-hidden="true">
          {[0, 1].map((n) => (
            <div className="ticker-group" key={n}>
              <span>KRAFTSPORT</span>
              <Plus />
              <span>ATHLETIK</span>
              <Plus />
              <span>GEMEINSCHAFT</span>
              <Plus />
              <span>KITZBÜHEL</span>
              <Plus />
            </div>
          ))}
        </div>
      </div>
      <section className="shell section-pad" id="vision">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">01 / UNSERE VISION</p>
            <h2>
              MEHR ALS
              <br />
              <span className="outline-text">SCHWERE GEWICHTE.</span>
            </h2>
          </div>
          <div className="section-intro">
            <p>
              Wir wollen einen Ort schaffen, an dem Kraftsport, persönlicher
              Fortschritt und Gemeinschaft zusammenkommen. Ehrlich.
              Konzentriert. Miteinander.
            </p>
            <Link className="text-link" href="/de/vision">
              Die ganze Vision <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <VisionCards />
        <p className="visual-disclaimer">
          Die Bilder zeigen unsere Vision mit KI-Unterstützung. Sie zeigen keine
          bestehende Vereinsanlage.
        </p>
      </section>
      <section className="manifesto">
        <div className="shell manifesto-inner" data-reveal>
          <p className="eyebrow">UNSER ANTRIEB</p>
          <h2>
            DU MUSST NICHT
            <br />
            DER STÄRKSTE SEIN.
            <br />
            <span>
              ABER DU KANNST
              <br />
              MIT UNS WACHSEN.
            </span>
          </h2>
          <Link className="text-link" href="/de/uber-uns">
            Lerne den Verein kennen <ArrowUpRight size={20} />
          </Link>
        </div>
        <span className="manifesto-bg" aria-hidden="true">
          KSV
        </span>
      </section>
      <section className="shell section-pad journey">
        <div data-reveal>
          <p className="eyebrow">02 / AUS EINER IDEE WIRD EIN ORT</p>
          <h2>
            WIR SIND
            <br />
            AM <span className="red-word">ANFANG.</span>
            <br />
            SEI DABEI.
          </h2>
          <p className="body-copy">
            Der Verein steht. Jetzt suchen wir Menschen, Partner und einen
            passenden Raum. Ein eigener Trainingsbetrieb ist noch nicht
            gestartet.
          </p>
        </div>
        <ol className="steps">
          <li data-reveal>
            <span>01</span>
            <div>
              <small>DAS FUNDAMENT STEHT</small>
              <h3>Ein gemeinsamer Anfang.</h3>
              <p>
                Eingetragener Verein. Klare Werte. Eine langfristige Idee für
                Kraftsport in Kitzbühel.
              </p>
            </div>
          </li>
          <li className="current-step" data-reveal>
            <span>02</span>
            <div>
              <small>HIER STEHEN WIR</small>
              <h3>Menschen & Raum finden.</h3>
              <p>
                Wir sammeln Interesse, knüpfen Partnerschaften und suchen ein
                bezahlbares Vereinszuhause.
              </p>
              <Link className="text-link" href="/de/raumsuche">
                Einen Raum anbieten <ArrowUpRight size={16} />
              </Link>
            </div>
          </li>
          <li data-reveal>
            <span>03</span>
            <div>
              <small>UNSER NÄCHSTES ZIEL</small>
              <h3>Gemeinsam aufbauen.</h3>
              <p>
                Raum gestalten, Equipment planen und Schritt für Schritt die
                Voraussetzungen für Training schaffen.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section className="join-section" data-reveal>
        <div className="shell join-inner">
          <p className="eyebrow">
            <MapPin size={16} /> IN KITZBÜHEL VERWURZELT.
          </p>
          <h2>
            DEIN PLATZ.
            <br />
            UNSERE <span>ZUKUNFT.</span>
          </h2>
          <p>
            Mittrainieren, mitgestalten oder den Aufbau unterstützen.
            <br />
            Der erste Schritt ist ein Gespräch.
          </p>
          <div className="button-row">
            <Link className="button light" href="/de/mitgliedschaft">
              Interesse anmelden <ArrowUpRight size={19} />
            </Link>
            <Link className="button secondary" href="/de/sponsoren">
              Partner werden <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
