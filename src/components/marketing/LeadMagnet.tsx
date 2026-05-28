"use client";

import { Download, FileText, ShieldCheck, Check } from "lucide-react";

export default function LeadMagnet() {
  return (
    <section
      id="lead-magnet"
      className="relative overflow-hidden mesh-dark grain px-5 py-24 text-white md:px-12 md:py-32 lg:px-20"
    >
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* LEFT - copy + form */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange">
              <Download size={12} strokeWidth={3} />
              Gratis download · PDF · 18 pagina's
            </span>

            <h2 className="h-section mt-6 text-white">
              De <span className="hl-stroke">Wkb-checklist</span>
              <br />
              die je morgen kan gebruiken.
            </h2>

            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.65] text-white/70 md:text-[17px]">
              Een 18-pagina PDF met de complete check-lijst voor consumentendossier
              GVK-1. Wat moet erin, wat is optioneel, en hoe houdt de inspectie het
              tegen het licht. Inclusief 3 templates.
            </p>

            {/* What you get */}
            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Volledige GVK-1 documentenlijst",
                "Eindkeuring + handtekening template",
                "ISDE-aanvraagblad voor klant",
                "F-gassen verklaring template",
              ].map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 text-[14px] text-white/85"
                >
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange">
                    <Check size={10} className="text-white" strokeWidth={3.5} />
                  </span>
                  {it}
                </li>
              ))}
            </ul>

            {/* Email form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Sample form - wordt in productie gekoppeld.");
              }}
              className="mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="naam@installateur.nl"
                className="flex-1 rounded-[11px] border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[14.5px] text-white placeholder:text-white/35 focus:border-brand-orange focus:bg-white/[0.08] focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-[11px] bg-brand-orange px-5 py-3.5 text-[14px] font-bold text-white shadow-[0_10px_24px_-6px_rgba(232,105,44,0.45)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
              >
                <Download
                  size={15}
                  className="transition-transform group-hover:translate-y-px"
                />
                Stuur me de PDF
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/45">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={11} className="text-brand-orange" />
                Geen spam · 1 mail per maand
              </span>
              <span>·</span>
              <span>Uitschrijven · 1 klik</span>
            </div>
          </div>

          {/* RIGHT - PDF cover mockup */}
          <div className="relative flex items-center justify-center py-8">
            <PdfCoverMock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PDF COVER MOCKUP - Stripe-tier polish
   ════════════════════════════════════════════════════════ */
function PdfCoverMock() {
  return (
    <div className="relative">
      {/* Glow behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10"
        style={{
          background:
            "radial-gradient(closest-side at 50% 50%, rgba(232,105,44,0.30), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Stack of pages behind (perspective) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[16px] bg-white/85"
        style={{
          transform: "rotate(-4deg) translateX(-16px) translateY(8px)",
          boxShadow: "0 20px 40px -16px rgba(13,15,26,0.40)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[16px] bg-cream"
        style={{
          transform: "rotate(2deg) translateX(8px) translateY(4px)",
          boxShadow: "0 24px 48px -16px rgba(13,15,26,0.30)",
        }}
      />

      {/* Front cover */}
      <div
        className="relative w-[320px] overflow-hidden rounded-[16px] bg-white p-8 md:w-[360px]"
        style={{
          aspectRatio: "210 / 297",
          boxShadow:
            "0 40px 80px -20px rgba(13,15,26,0.45), 0 20px 40px -10px rgba(232,105,44,0.25), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute inset-x-0 top-0 h-2 bg-brand-orange" />

        {/* Sticker corner */}
        <div className="absolute -right-3 -top-3 z-10 rotate-12 rounded-md bg-ink px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-brand-orange shadow-lg">
          v3 · 2026
        </div>

        {/* Inner */}
        <div className="relative mt-6 flex h-full flex-col">
          {/* Brand mark */}
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-blue text-[12px] font-black text-white">
              ID
            </span>
            <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-gray">
              Installatiedossier
            </span>
          </div>

          <div className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-orange">
            Gratis · 18 pagina's
          </div>

          {/* Title */}
          <h3
            className="mt-3 font-black leading-[0.95] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}
          >
            Wkb GVK-1
            <br />
            <span className="text-brand-orange">checklist</span>
            <br />
            2026.
          </h3>

          <p className="mt-3 text-[12.5px] leading-[1.5] text-gray">
            De complete documenten-lijst voor consumenten-dossier - getoetst door
            Stichting Vakwerk.
          </p>

          {/* Chapter teaser */}
          <div className="mt-auto border-t border-border pt-4">
            <div className="font-mono text-[8.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
              Inhoud
            </div>
            <ul className="mt-2 space-y-1">
              {[
                "01 · Wkb-grondslag",
                "02 · Verplichte stukken",
                "03 · Eindkeuring",
                "04 · 3× template",
              ].map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 text-[10px] text-ink"
                >
                  <FileText
                    size={9}
                    className="text-brand-orange"
                    strokeWidth={2.4}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
