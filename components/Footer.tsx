import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link href="/de" className="footer-title">
              K.S.V. <span className="red-word">KITZBÜHEL.</span>
            </Link>
            <p>Kraftsport. Gemeinschaft. Eine gemeinsame Zukunft.</p>
          </div>
          <nav className="footer-links" aria-label="Fußnavigation">
            <Link href="/de/vision">Unsere Vision</Link>
            <Link href="/de/raumsuche">Raum anbieten</Link>
            <Link href="/de/kontakt">Kontakt</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Kraftsportverein Kitzbühel · ZVR
            1928877064
          </span>
          <div>
            <Link href="/de/impressum">Impressum & KI-Hinweis</Link>
            <Link href="/de/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
