"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionChrome";

type BillingCycle = "monthly" | "yearly";

type Tier = {
  name: string;
  tagline: string;
  priceMonthly: string;
  priceYearly: string; // per maand, jaarlijks gefactureerd (20% korting)
  custom?: boolean;
  trial?: boolean;
  cta: string;
  ctaHref: string;
  features: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Basis",
    tagline: "Voor 1 - 3 monteurs",
    priceMonthly: "€49",
    priceYearly: "€39",
    trial: true,
    cta: "Kies Basis",
    ctaHref: "#demo",
    features: [
      "3 gebruikers · 10 GB opslag",
      "Onbeperkt projecten",
      "50 QR-codes per maand",
      "Eigen webadres (dossier.jouw.nl)",
      "Wkb-export (5 normen)",
    ],
  },
  {
    name: "Zakelijk",
    tagline: "Voor 4 - 15 monteurs",
    priceMonthly: "€89",
    priceYearly: "€71",
    trial: true,
    featured: true,
    cta: "Plan een demo",
    ctaHref: "#demo",
    features: [
      "15 gebruikers · 50 GB opslag",
      "200 QR-codes per maand",
      "SCIOS Scope 8 + 10 logboeken",
      "WhatsApp-hulp binnen 4 uur",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Voor grotere bedrijven & ketens",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    custom: true,
    cta: "Praat met sales",
    ctaHref: "#contact",
    features: [
      "Alles onbeperkt",
      "Eigen domein & huisstijl",
      "Koppelingen met je eigen systemen",
      "Vaste contactpersoon",
      "99,99% beschikbaar, voorrang bij storingen",
      "Je data gegarandeerd in Nederland",
    ],
  },
];

export default function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section
      id="pricing"
      className="blueprint-warm relative overflow-hidden bg-cream px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Subtle mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(at 50% 0%, rgba(232,105,44,0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(42,92,186,0.06) 0px, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        <SectionHeader
          className="reveal"
          index="06"
          label="Prijzen"
          tone="orange"
          title={
            <>
              Vind het <span className="text-brand-orange">perfecte</span> pakket
            </>
          }
          sub="Geen verborgen kosten, geen langlopende contracten. Start met 14 dagen gratis testen - geen creditcard nodig."
          action={
            <div className="flex flex-wrap items-center gap-3">
              {/* Maand/jaar toggle met heldere active-state */}
              <div className="relative inline-flex rounded-full border border-border bg-cream p-1">
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-1 top-1 w-[112px] rounded-full bg-ink shadow-[0_2px_8px_-2px_rgba(13,15,26,0.35)] transition-transform duration-300 ease-out"
                  style={{
                    transform:
                      cycle === "yearly" ? "translateX(112px)" : "translateX(0)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setCycle("monthly")}
                  aria-pressed={cycle === "monthly"}
                  className={[
                    "relative z-10 w-[112px] rounded-full py-1.5 text-[13px] font-bold transition-colors",
                    cycle === "monthly" ? "text-white" : "text-gray hover:text-ink",
                  ].join(" ")}
                >
                  Maandelijks
                </button>
                <button
                  type="button"
                  onClick={() => setCycle("yearly")}
                  aria-pressed={cycle === "yearly"}
                  className={[
                    "relative z-10 w-[112px] rounded-full py-1.5 text-[13px] font-bold transition-colors",
                    cycle === "yearly" ? "text-white" : "text-gray hover:text-ink",
                  ].join(" ")}
                >
                  Jaarlijks
                </button>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange-lt px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange">
                <Sparkles size={11} className="fill-current" />
                Bespaar 20% per jaar
              </span>
            </div>
          }
        />

        {/* Pricing grid */}
        <div className="reveal-group mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <PricingCard key={t.name} tier={t} cycle={cycle} />
          ))}
        </div>

        {/* Trust line below */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium text-gray">
          {[
            "14 dagen gratis testen",
            "Maandelijks opzegbaar",
            "Geen setup-kosten",
            "Onboarding < 15 min",
            "WhatsApp-support",
          ].map((it) => (
            <span key={it} className="flex items-center gap-1.5">
              <Check size={14} className="text-brand-orange" strokeWidth={3} />
              {it}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-[12px] text-gray-lt">
          Alle genoemde prijzen zijn exclusief btw.
        </p>
      </div>
    </section>
  );
}

function PricingCard({ tier, cycle }: { tier: Tier; cycle: BillingCycle }) {
  const price =
    tier.custom
      ? tier.priceMonthly
      : cycle === "yearly"
      ? tier.priceYearly
      : tier.priceMonthly;

  return (
    <div
      className={[
        "group relative flex flex-col rounded-[20px] bg-white p-7 transition-all duration-300 hover:-translate-y-1",
        tier.featured
          ? "ring-2 ring-brand-blue md:scale-[1.04] md:shadow-[0_30px_60px_-20px_rgba(42,92,186,0.30)]"
          : "ring-1 ring-border md:shadow-[0_16px_40px_-16px_rgba(13,15,26,0.06)]",
      ].join(" ")}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-blue px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_6px_16px_-4px_rgba(42,92,186,0.55)]">
          <Sparkles size={11} className="fill-current" />
          Meest gekozen
        </span>
      )}

      {/* Name + tagline */}
      <div>
        <h3 className="text-[20px] font-black tracking-[-0.02em] text-ink md:text-[22px]">
          {tier.name}
        </h3>
        <p className="mt-1.5 text-[13px] leading-snug text-gray">
          {tier.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mt-7 flex items-baseline gap-1">
        <span
          className="font-black tabular-nums leading-[0.95] tracking-[-0.045em] text-ink"
          style={{
            fontSize: tier.custom
              ? "clamp(34px, 4vw, 44px)"
              : "clamp(46px, 5.4vw, 60px)",
          }}
        >
          {price}
        </span>
        {!tier.custom && (
          <span className="text-[12.5px] font-medium text-gray">/ maand</span>
        )}
      </div>
      {tier.custom ? (
        <div className="mt-1 text-[12.5px] text-gray">op maat</div>
      ) : (
        <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gray-lt">
          {cycle === "yearly" ? "jaarlijks gefactureerd · excl. btw" : "excl. btw"}
        </div>
      )}

      {/* CTA */}
      <a
        href={tier.ctaHref}
        className={[
          "group/cta mt-7 inline-flex items-center justify-center gap-2 rounded-[11px] px-5 py-3 text-[13.5px] font-bold transition-all hover:-translate-y-0.5",
          tier.featured
            ? "bg-brand-blue text-white shadow-[0_10px_24px_-6px_rgba(42,92,186,0.45)] hover:bg-brand-blue-dk"
            : tier.custom
            ? "bg-brand-orange text-white shadow-[0_10px_24px_-6px_rgba(232,105,44,0.40)] hover:bg-brand-orange-dk"
            : "border border-ink bg-white text-ink hover:bg-ink hover:text-white",
        ].join(" ")}
      >
        {tier.cta}
        <ArrowRight
          size={14}
          className="transition-transform group-hover/cta:translate-x-0.5"
        />
      </a>

      {/* 14 dagen gratis - alleen op de abonnementen */}
      {tier.trial && (
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[12px] font-bold text-brand-orange">
          <Sparkles size={11} className="fill-current" />
          14 dagen gratis · geen creditcard
        </div>
      )}

      {/* Divider */}
      <div className="my-7 h-px bg-border" />

      {/* Features */}
      <ul className="flex flex-1 flex-col gap-3">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink"
          >
            <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
              <Check size={10} strokeWidth={3.5} />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
