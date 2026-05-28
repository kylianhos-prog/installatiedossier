"use client";

import { useEffect, useState } from "react";

/* ════════════════════════════════════════════════════════
   SCROLL-PROGRESS NAV - editorial hoofdstuk-rail (desktop).
   Volgt de actieve sectie en springt bij klik. Sluit aan op
   de "NN / 07" nummering van de SectionHeaders.
   ════════════════════════════════════════════════════════ */

const chapters = [
  { num: "01", id: "problem", label: "Wat het kost" },
  { num: "02", id: "stats", label: "Live cijfers" },
  { num: "03", id: "features", label: "Functies" },
  { num: "04", id: "showcase", label: "Drie portalen" },
  { num: "05", id: "testimonials", label: "Net begonnen" },
  { num: "06", id: "pricing", label: "Prijzen" },
  { num: "07", id: "faq", label: "Vraag & antwoord" },
];

export default function ScrollProgressNav() {
  const [active, setActive] = useState<string>("problem");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      // Flip the active chapter once a section crosses the viewport's middle band.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));

    // Only show the rail once past the hero (so it doesn't float over it).
    const hero = document.getElementById("hero");
    let heroIo: IntersectionObserver | null = null;
    if (hero) {
      heroIo = new IntersectionObserver(
        ([e]) => setVisible(!e.isIntersecting),
        { threshold: 0 }
      );
      heroIo.observe(hero);
    } else {
      setVisible(true);
    }

    return () => {
      io.disconnect();
      heroIo?.disconnect();
    };
  }, []);

  function jump(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Hoofdstukken"
      className={[
        "fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 xl:flex",
        "transition-opacity duration-500",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      {chapters.map((c) => {
        const isActive = active === c.id;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => jump(c.id)}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center justify-end gap-3 py-1"
          >
            {/* Label - alleen op hover, zodat de rail strak aan de rand blijft */}
            <span className="pointer-events-none translate-x-2 whitespace-nowrap font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {c.label}
            </span>

            {/* Nummer */}
            <span
              className={[
                "font-mono text-[10.5px] font-bold tabular-nums transition-colors duration-300",
                isActive ? "text-brand-orange" : "text-gray-lt group-hover:text-ink",
              ].join(" ")}
            >
              {c.num}
            </span>

            {/* Tick - verlengt + kleurt bij active */}
            <span
              className={[
                "h-px rounded-full transition-all duration-300",
                isActive
                  ? "w-7 bg-brand-orange"
                  : "w-4 bg-[rgba(13,15,26,0.25)] group-hover:w-6 group-hover:bg-ink",
              ].join(" ")}
            />
          </button>
        );
      })}
    </nav>
  );
}
