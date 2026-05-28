"use client";

import { useState, useMemo } from "react";
import {
  ArrowRight,
  AlertTriangle,
  TrendingDown,
  Users,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./SectionChrome";

/* ════════════════════════════════════════════════════════
   COST MATH - per monteur per maand (lineair geschaald)
   ════════════════════════════════════════════════════════
   Originele berekening voor 5 monteurs:
     - Documenten zoeken     : 1 u/week × 4,3 wk × 5 mt × €50 = €1.075  → €215 per mt
     - Herlevering kantoor   : ~5×/mnd × 0,5 u × €50           = €125    → €25  per mt
     - Herinspectie incompleet dossier (1/kw)                   = €300    → €60  per mt
     - Facturatie-vertraging                                    = €280    → €56  per mt
   Totaal per monteur per maand: ≈ €356
   ════════════════════════════════════════════════════════ */

const PER_MONTEUR = {
  search: 215,
  redeliver: 25,
  reinspect: 60,
  delay: 56,
} as const;

const PLAN_PRICE = 89; // Zakelijk per maand
const PLAN_NAME = "Zakelijk";

function calculate(monteurs: number) {
  const search = Math.round(monteurs * PER_MONTEUR.search);
  const redeliver = Math.round(monteurs * PER_MONTEUR.redeliver);
  const reinspect = Math.round(monteurs * PER_MONTEUR.reinspect);
  const delay = Math.round(monteurs * PER_MONTEUR.delay);
  const total = search + redeliver + reinspect + delay;
  const roi = Math.max(1, Math.round(total / PLAN_PRICE));
  return { search, redeliver, reinspect, delay, total, roi };
}

const fmt = (n: number) =>
  "€" + n.toLocaleString("nl-NL", { maximumFractionDigits: 0 });

export default function Problem() {
  const [monteurs, setMonteurs] = useState(5);
  const calc = useMemo(() => calculate(monteurs), [monteurs]);

  const rows = useMemo(
    () => [
      {
        title: "Monteurs zoeken documenten op locatie",
        detail: `${monteurs} ${
          monteurs === 1 ? "monteur" : "monteurs"
        } · 1 uur per week · €50 / uur`,
        amount: calc.search,
      },
      {
        title: "Kantoor levert dezelfde docs opnieuw",
        detail: `~${monteurs} herlevering per maand · 30 min per keer · €50 / uur`,
        amount: calc.redeliver,
      },
      {
        title: "Herinspectie bij incompleet dossier",
        detail: "1 keer per kwartaal per team · €600 - €1.200 per geval",
        amount: calc.reinspect,
      },
      {
        title: "Vertraging in facturatie",
        detail: "Gemiddeld 2 weken later betaald · rendement-verlies",
        amount: calc.delay,
      },
    ],
    [monteurs, calc]
  );

  return (
    <section
      id="problem"
      className="blueprint relative overflow-hidden bg-white px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Subtle bottom-fade mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(at 12% 90%, rgba(232,105,44,0.10) 0px, transparent 50%), radial-gradient(at 92% 10%, rgba(42,92,186,0.08) 0px, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px]">
        <SectionHeader
          className="reveal"
          index="01"
          label="Wat het kost"
          tone="orange"
          title={
            <>
              Reken het zelf uit -{" "}
              <span className="text-brand-orange">live</span>.
            </>
          }
          sub="Conservatieve cijfers, lineair per monteur. Sleep aan de slider en zie wat documentchaos jouw team per maand kost."
        />

        {/* SLIDER - interactive */}
        <div
          className="mx-auto mt-12 max-w-[1100px] rounded-[20px] border border-border bg-white p-6 md:mt-16 md:p-8"
          style={{
            boxShadow:
              "0 1px 0 rgba(13,15,26,0.04), 0 16px 40px -16px rgba(13,15,26,0.10)",
          }}
        >
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange-lt px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange">
                <Users size={12} strokeWidth={2.5} />
                Jouw team
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                <span
                  className="font-black tabular-nums leading-none tracking-[-0.04em] text-ink"
                  style={{ fontSize: "clamp(48px, 5.5vw, 72px)" }}
                >
                  {monteurs}
                </span>
                <span className="text-[15px] font-bold text-gray">
                  {monteurs === 1 ? "monteur" : "monteurs"}
                </span>
              </div>
            </div>

            <div className="hidden flex-col items-end gap-1 md:flex">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
                Geschat verlies
              </span>
              <span
                className="font-black tabular-nums leading-none tracking-[-0.04em] text-brand-orange"
                style={{ fontSize: "clamp(40px, 4.5vw, 56px)" }}
              >
                {fmt(calc.total)}
              </span>
              <span className="text-[12px] text-gray">per maand</span>
            </div>
          </div>

          {/* Slider */}
          <div className="mt-7">
            <div className="relative">
              {/* Track background */}
              <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-cream" />
              {/* Filled progress */}
              <div
                className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dk"
                style={{ width: `${((monteurs - 1) / 149) * 100}%` }}
              />
              <input
                type="range"
                min={1}
                max={150}
                step={1}
                value={monteurs}
                onChange={(e) => setMonteurs(Number(e.target.value))}
                className="problem-slider relative z-10 h-6 w-full cursor-pointer appearance-none bg-transparent"
                aria-label="Aantal monteurs"
              />
            </div>

            {/* Tick labels */}
            <div className="mt-3 flex justify-between font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
              <span>125</span>
              <span>150</span>
            </div>

            {/* Preset buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
                Snel:
              </span>
              {[1, 5, 10, 25, 50, 100].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setMonteurs(n)}
                  className={[
                    "rounded-full border px-3 py-1 text-[12px] font-bold transition-all",
                    monteurs === n
                      ? "border-brand-orange bg-brand-orange-lt text-brand-orange"
                      : "border-border bg-white text-gray hover:border-ink hover:text-ink",
                  ].join(" ")}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cost table - Stripe-tier card */}
        <div
          className="mx-auto mt-10 max-w-[1320px] overflow-hidden rounded-[20px] border border-border bg-white"
          style={{
            boxShadow:
              "0 1px 0 rgba(13,15,26,0.04), 0 24px 60px -20px rgba(13,15,26,0.16), 0 50px 100px -40px rgba(232,105,44,0.10)",
          }}
        >
          {/* Header row */}
          <div className="hidden grid-cols-[1fr_200px] items-center border-b border-border bg-cream/60 px-8 py-4 md:grid md:px-10">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-gray-lt">
              Verliespost
            </span>
            <span className="text-right font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-gray-lt">
              Per maand
            </span>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.title}
              className={[
                "group grid grid-cols-[1fr_auto] items-center gap-4 px-6 py-6 transition-colors duration-200 md:grid-cols-[1fr_240px] md:gap-8 md:px-10 md:py-7",
                i < rows.length - 1 ? "border-b border-border" : "",
                "hover:bg-[var(--color-brand-orange-lt)]/40",
              ].join(" ")}
            >
              <div className="min-w-0">
                <div className="text-[15.5px] font-bold leading-snug text-ink md:text-[17.5px]">
                  {r.title}
                </div>
                <div className="mt-1 text-[12.5px] leading-relaxed text-gray md:text-[13.5px]">
                  {r.detail}
                </div>
              </div>
              <div
                className="whitespace-nowrap text-right font-black tabular-nums tracking-[-0.035em] text-ink transition-colors group-hover:text-brand-orange-dk"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
              >
                {fmt(r.amount)}
              </div>
            </div>
          ))}

          {/* Total bar - dark */}
          <div className="relative grid grid-cols-[1fr_auto] items-center gap-4 overflow-hidden bg-ink px-6 py-8 text-white md:grid-cols-[1fr_320px] md:gap-8 md:px-10 md:py-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 90% 50%, rgba(232,105,44,0.18) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex items-center gap-3">
              <AlertTriangle
                size={22}
                className="text-brand-orange"
                strokeWidth={2.5}
              />
              <span className="text-[15px] font-bold uppercase tracking-[0.06em] md:text-[18px]">
                Totaal verlies · per maand
              </span>
            </div>
            <div
              className="relative whitespace-nowrap text-right font-black tabular-nums tracking-[-0.045em] text-brand-orange"
              style={{ fontSize: "clamp(34px, 4.6vw, 54px)" }}
            >
              {fmt(calc.total)}
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div
          className="mx-auto mt-8 grid max-w-[1320px] grid-cols-1 overflow-hidden rounded-[20px] border border-border bg-white md:grid-cols-[1.5fr_1fr]"
          style={{
            boxShadow:
              "0 1px 0 rgba(13,15,26,0.04), 0 24px 60px -20px rgba(13,15,26,0.14)",
          }}
        >
          <div className="p-8 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-lt px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">
              <span className="block h-1.5 w-1.5 rounded-full bg-brand-blue" />
              De rekening
            </span>
            <h3 className="mt-5 text-[22px] font-black leading-[1.05] tracking-[-0.03em] text-ink md:text-[30px]">
              {fmt(calc.total)} verlies.
              <br />
              <span className="text-brand-orange">€89 oplossing.</span>
            </h3>
            <p className="mt-4 max-w-[55ch] text-[14.5px] leading-[1.65] text-gray md:text-[16px]">
              Bij <strong className="font-bold text-ink">{monteurs}</strong>{" "}
              {monteurs === 1 ? "monteur" : "monteurs"} verlies je per maand
              gemiddeld {fmt(calc.total)} aan documentchaos.
              Installatiedossier {PLAN_NAME} kost €89 per maand.{" "}
              <strong className="font-bold text-ink">
                Terugverdiend in {Math.max(1, Math.round((30 / calc.roi) * 10) / 10)}{" "}
                dag{Math.round((30 / calc.roi) * 10) / 10 === 1 ? "" : "en"}.
              </strong>
            </p>
          </div>

          {/* ROI badge */}
          <div
            className="relative flex flex-col justify-between gap-5 overflow-hidden bg-brand-orange p-8 text-white md:p-10"
            style={{
              background:
                "linear-gradient(135deg, #E8692C 0%, #FF7E3F 50%, #D45A1E 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.25) 0%, transparent 50%)",
              }}
            />
            <div className="relative">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/80">
                Return on investment
              </span>
              <div
                className="mt-3 whitespace-nowrap font-black leading-[0.92] tracking-[-0.045em] tabular-nums"
                style={{ fontSize: "clamp(56px, 7vw, 92px)" }}
              >
                {calc.roi}×
              </div>
              <div className="mt-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/85">
                Per maand · {monteurs} {monteurs === 1 ? "monteur" : "monteurs"}
              </div>
            </div>
            <a
              href="#pricing"
              className="relative inline-flex items-center gap-2 self-start rounded-[11px] bg-white px-5 py-3 text-[13.5px] font-bold text-ink shadow-[0_8px_20px_-4px_rgba(13,15,26,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-4px_rgba(13,15,26,0.32)]"
            >
              Bekijk het pakket
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Sources */}
        <p className="mx-auto mt-6 max-w-[80ch] text-center font-mono text-[10.5px] font-medium uppercase leading-[1.7] tracking-[0.08em] text-gray-lt">
          Bronnen · ABN AMRO faalkosten bouw · Sharp tijdverlies documentbeheer
          (19 min / werknemer / dag) · USP faalkosten installateurs (10,1 % van omzet).
          Conservatieve cijfers, lineair geschaald.
        </p>
      </div>

      {/* Slider styling */}
      <style>{`
        .problem-slider {
          -webkit-appearance: none;
          appearance: none;
          outline: none;
        }
        .problem-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 26px;
          height: 26px;
          background: #fff;
          border: 3px solid var(--color-brand-orange);
          border-radius: 50%;
          cursor: grab;
          box-shadow: 0 4px 12px -2px rgba(232, 105, 44, 0.55);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .problem-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 18px -2px rgba(232, 105, 44, 0.70);
        }
        .problem-slider:active::-webkit-slider-thumb {
          cursor: grabbing;
          transform: scale(1.15);
        }
        .problem-slider::-moz-range-thumb {
          width: 26px;
          height: 26px;
          background: #fff;
          border: 3px solid var(--color-brand-orange);
          border-radius: 50%;
          cursor: grab;
          box-shadow: 0 4px 12px -2px rgba(232, 105, 44, 0.55);
        }
      `}</style>
    </section>
  );
}
