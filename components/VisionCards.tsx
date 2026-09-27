import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const disciplines = [
  {
    id: "kraftsport",
    number: "01",
    title: "Kraftsport",
    tag: "DIE BASIS",
    image: "/images/strength.webp",
    alt: "KI-Visualisierung: Langhantel und Gewichte in einer Kraftsportzone",
    text: "Kniebeuge, Bankdrücken, Kreuzheben. Raum für Grundübungen, Kraftdreikampf und vielseitiges Krafttraining.",
  },
  {
    id: "athletik",
    number: "02",
    title: "Athletik",
    tag: "WEITER DENKEN",
    image: "/images/gym-vision.webp",
    alt: "KI-Visualisierung eines geplanten Trainingsraums mit Racks und freien Gewichten",
    text: "Stärke, die über die Hantel hinausgeht. Platz für Beweglichkeit, Stabilität und eine solide körperliche Grundlage.",
  },
  {
    id: "ringen",
    number: "03",
    title: "Ringen & Grappling",
    tag: "UNSERE PERSPEKTIVE",
    image: null,
    alt: "",
    text: "Technik, Körpergefühl und Respekt. Eine mögliche Erweiterung – abhängig von Raum, Ausstattung und Betreuung.",
  },
];
export default function VisionCards() {
  return (
    <div className="vision-grid">
      {disciplines.map((item) => (
        <Link
          href={`/de/vision#${item.id}`}
          className="vision-card"
          key={item.id}
          data-reveal
        >
          <div className={`card-image ${!item.image ? "card-typography" : ""}`}>
            {item.image ? (
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
            ) : (
              <div className="future-art" aria-hidden="true">
                <span>RESPEKT.</span>
                <span>TECHNIK.</span>
                <span>KONTROLLE.</span>
              </div>
            )}
            <span className="card-number">{item.number}</span>
            <span className="image-note">
              {item.image ? "KI-VISUALISIERUNG" : "PERSPEKTIVE FÜR DIE ZUKUNFT"}
            </span>
          </div>
          <div className="card-copy">
            <span className="eyebrow">{item.tag}</span>
            <h3>
              {item.title}
              <ArrowUpRight size={22} />
            </h3>
            <p>{item.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
