import { Check } from "lucide-react";

/* ════════════════════════════════════════════════════════
   NORMEN-STRIP - geen partnerlogo's (die suggereren samenwerking),
   maar de normen waarvoor het dossier gebouwd is. Eerlijk + sterk
   voor de installateursniche.
   ════════════════════════════════════════════════════════ */

const standards = [
  "Wkb GVK-1",
  "SCIOS Scope 8 + 10",
  "NEN 1010",
  "BRL 100",
  "F-gassen",
];

export default function LogoStrip() {
  return (
    <section
      aria-label="Ondersteunde normen"
      className="border-y border-border bg-white py-10 md:py-12"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 lg:px-20">
        <div className="reveal flex flex-col items-center gap-7 md:flex-row md:gap-12">
          <p className="flex-shrink-0 text-center font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.2em] text-gray md:max-w-[190px] md:text-left">
            Gebouwd voor de Nederlandse &amp; Belgische norm
          </p>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2.5 md:justify-end md:gap-3">
            {standards.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-cream/50 px-4 py-2 text-[13px] font-bold text-ink"
              >
                <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Check size={10} strokeWidth={3.5} />
                </span>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
