"use client";

import { ArrowRight, Clock, ShieldCheck, MessageSquareText } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden mesh-dark grain px-5 py-24 text-white md:px-12 md:py-32 lg:px-20"
    >
      {/* Subtle gradient seal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side at 50% 50%, rgba(232,105,44,0.30) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="reveal mb-10 flex items-center gap-4 md:mb-14">
          <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
            <span className="block h-2.5 w-2.5 bg-brand-orange" />
            Begin · 15 minuten · gratis
          </span>
          <span className="h-px flex-1 bg-white/[0.12]" />
          <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-white/25">
            FIN
          </span>
        </div>

        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* LEFT - headline + copy + CTAs */}
          <div>
            <h2
              className="font-black leading-[1.0] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(32px, 4.4vw, 60px)" }}
            >
              <span className="block">15 minuten.</span>
              <span className="block">Geen <span className="hl-stroke">pitch</span>.</span>
              <span className="block">Wel een dossier.</span>
            </h2>

            <p className="mt-8 max-w-[40ch] text-[19px] leading-[1.55] text-white/75 md:text-[24px]">
              We pakken één lopend project van jou. Zetten het in onder jouw merk.
              Geven je de QR-sticker mee. Beslis daarna of het iets voor je is.
              Niet goed?{" "}
              <strong className="font-bold text-white">
                30 dagen geld terug - geen vragen.
              </strong>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-brand-orange px-7 py-4 text-[15.5px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
              >
                Plan een gesprek van 15 min
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#start"
                className="group inline-flex items-center gap-2 rounded-[12px] border border-white/20 bg-white/[0.04] px-7 py-4 text-[15.5px] font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.08]"
              >
                Of start direct →
              </a>
            </div>

            {/* Trust pillars */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              <TrustPillar
                icon={Clock}
                label="Eerste dossier live"
                value="11 : 42 min"
              />
              <TrustPillar
                icon={ShieldCheck}
                label="Garantie"
                value="30 dgn geld terug"
                accent
              />
              <TrustPillar
                icon={MessageSquareText}
                label="Support"
                value="WhatsApp < 24u"
              />
            </div>
          </div>

          {/* RIGHT - contact form card */}
          <div
            id="contact"
            className="relative rounded-[24px] border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 30px 60px -20px rgba(232,105,44,0.20)",
            }}
          >
            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-orange/30 blur-3xl"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Demo aanvragen
              </span>

              <h3 className="mt-4 text-[24px] font-black leading-[1.05] tracking-[-0.02em] text-white md:text-[28px]">
                Vul in. We bellen<br />
                binnen 1 werkdag.
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Sample form - wordt in productie gekoppeld.");
                }}
                className="mt-6 flex flex-col gap-4"
              >
                <Field
                  label="Naam"
                  type="text"
                  placeholder="Jouw naam"
                  required
                />
                <Field
                  label="Bedrijf"
                  type="text"
                  placeholder="Installatiebedrijf"
                  required
                />
                <Field
                  label="E-mail"
                  type="email"
                  placeholder="naam@bedrijf.nl"
                  required
                />

                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
                    Aantal monteurs
                  </label>
                  <select className="mt-1.5 w-full rounded-[10px] border border-white/15 bg-white/[0.05] px-4 py-3 text-[14.5px] text-white focus:border-brand-orange focus:bg-white/[0.08] focus:outline-none">
                    <option value="1">Alleen ik</option>
                    <option value="2-5">2 - 5</option>
                    <option value="6-15">6 - 15</option>
                    <option value="15+">15 +</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[11px] bg-brand-orange px-5 py-3.5 text-[14.5px] font-bold text-white shadow-[0_12px_28px_-6px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
                >
                  Plan een gesprek
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>

                <div className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Binnen 1 werkdag · geen spam · eerlijke deal
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPillar({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={[
          "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border",
          accent
            ? "border-brand-orange/40 bg-brand-orange/15 text-brand-orange"
            : "border-white/15 bg-white/[0.05] text-white/70",
        ].join(" ")}
      >
        <Icon size={16} strokeWidth={2.2} />
      </span>
      <div>
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
          {label}
        </div>
        <div className="mt-0.5 text-[16px] font-bold tracking-[-0.01em] text-white">
          {value}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-[10px] border border-white/15 bg-white/[0.05] px-4 py-3 text-[14.5px] text-white placeholder:text-white/35 focus:border-brand-orange focus:bg-white/[0.08] focus:outline-none"
      />
    </div>
  );
}
