"use client";

import { useState } from "react";
import { LayoutGrid, FolderOpen, Smartphone, ArrowRight } from "lucide-react";
import BrowserFrame from "./BrowserFrame";
import DashboardMock from "./DashboardMock";
import DocumentsMock from "./DocumentsMock";
import MobilePortalMock from "./MobilePortalMock";

/* ════════════════════════════════════════════════════════
   PRODUCT SHOWCASE - "Zo ziet het eruit". Eén rustig podium
   met een toggle: het beheerder-dashboard en documentenscherm
   (desktop) en het klant-portaal (mobiel). Clean + on-brand.
   ════════════════════════════════════════════════════════ */

type View = "dashboard" | "documenten" | "mobiel";

const tabs: {
  k: View;
  label: string;
  icon: typeof LayoutGrid;
  url: string;
  caption: string;
}[] = [
  {
    k: "dashboard",
    label: "Dashboard",
    icon: LayoutGrid,
    url: "installatiedossier.nl/dashboard",
    caption:
      "Jouw kantoor: één overzicht van alle projecten, documenten en portaaltoegangen.",
  },
  {
    k: "documenten",
    label: "Documenten",
    icon: FolderOpen,
    url: "installatiedossier.nl/projecten/rijksmuseum",
    caption:
      "Per object netjes gemapt: certificaten, tekeningen, schema's en handleidingen.",
  },
  {
    k: "mobiel",
    label: "Klant-portaal",
    icon: Smartphone,
    url: "installatiedossier.nl/p/rijksmuseum",
    caption:
      "Wat je klant ziet na het scannen van de QR-code: alle documenten, zonder app of login.",
  },
];

export default function ProductShowcase() {
  const [view, setView] = useState<View>("dashboard");
  const active = tabs.find((t) => t.k === view)!;

  return (
    <section
      id="product"
      className="blueprint relative overflow-hidden bg-white px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Soft mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(at 80% 0%, rgba(42,92,186,0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(232,105,44,0.06) 0px, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Label row */}
        <div className="reveal flex items-center gap-4">
          <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
            <span className="block h-2.5 w-2.5 bg-brand-blue" />
            In de praktijk
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="reveal mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <h2 className="h-section text-ink">
            Geen demo-praat.<br />
            <span className="hl-stroke">Dit is de echte software.</span>
          </h2>
          <p className="max-w-[48ch] text-[15.5px] leading-[1.65] text-gray md:text-[16.5px]">
            Jij beheert alles vanaf je kantoor. Je klant scant de QR-code en ziet
            het dossier op de telefoon. Schakel hieronder tussen de schermen.
          </p>
        </div>

        {/* Toggle + creatieve "klik hier" hint */}
        <div className="reveal mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const Icon = t.icon;
              const on = t.k === view;
              return (
                <button
                  key={t.k}
                  type="button"
                  onClick={() => setView(t.k)}
                  className={[
                    "inline-flex items-center gap-2 rounded-[12px] border px-4 py-2.5 text-[13.5px] font-bold transition-all",
                    on
                      ? "border-transparent bg-brand-blue text-white shadow-[0_12px_28px_-10px_rgba(42,92,186,0.5)]"
                      : "border-border bg-white text-gray hover:-translate-y-0.5 hover:border-brand-blue/40 hover:text-ink",
                  ].join(" ")}
                  aria-pressed={on}
                >
                  <Icon size={15} strokeWidth={2.3} />
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Handgetekend pijltje dat naar de knoppen wijst */}
          <span
            aria-hidden="true"
            className="anim-hint-nudge inline-flex select-none items-center gap-1.5 text-brand-orange"
          >
            <svg
              viewBox="0 0 48 28"
              width="44"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M46 18 C 36 27, 18 25, 6.5 14" />
              <path d="M6.5 14 L 16 10" />
              <path d="M6.5 14 L 14 23" />
            </svg>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
              Klik &amp; wissel zelf
            </span>
          </span>
        </div>

        {/* Stage */}
        <div className="reveal mt-7">
          {view === "mobiel" ? (
            <div className="flex justify-center rounded-[18px] border border-border bg-gradient-to-b from-cream/50 to-white px-5 py-10 md:py-14">
              <MobilePortalMock />
            </div>
          ) : (
            <BrowserFrame url={active.url}>
              {view === "dashboard" ? <DashboardMock /> : <DocumentsMock />}
            </BrowserFrame>
          )}

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[60ch] text-[14px] leading-[1.6] text-gray">
              {active.caption}
            </p>
            <a
              href="#demo"
              className="group inline-flex flex-shrink-0 items-center gap-2 rounded-[12px] bg-brand-orange px-5 py-3 text-[14px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
            >
              Bekijk een live demo
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
