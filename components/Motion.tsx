"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";

export default function Motion() {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], main > div > section, main > section",
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    // Content is visible without JavaScript; only off-screen elements are enhanced.
    if (!reduced.matches && !paused) {
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight * 0.92) {
          element.classList.add("reveal-ready");
          observer.observe(element);
        }
      });
    }
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current)
        progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      frame = 0;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const revealAll = () =>
      elements.forEach((el) => el.classList.add("is-visible"));
    reduced.addEventListener("change", revealAll);
    window.addEventListener("scroll", scroll, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
      reduced.removeEventListener("change", revealAll);
      cancelAnimationFrame(frame);
      elements.forEach((el) =>
        el.classList.remove("reveal-ready", "is-visible"),
      );
    };
  }, [pathname, paused]);

  function toggle() {
    const next = !paused;
    setPaused(next);
    document.documentElement.dataset.motion = next ? "off" : "on";
  }
  return (
    <>
      <div ref={progress} className="reading-progress" aria-hidden="true" />
      <button
        className="motion-toggle"
        onClick={toggle}
        aria-pressed={paused}
        aria-label={
          paused ? "Animationen einschalten" : "Animationen pausieren"
        }
      >
        {paused ? <Play size={13} /> : <Pause size={13} />}{" "}
        <span>{paused ? "Bewegung an" : "Bewegung aus"}</span>
      </button>
    </>
  );
}
