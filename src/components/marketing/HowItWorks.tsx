import { QrCode, ScanLine, FolderOpen } from "lucide-react";
import { SectionHeader } from "./SectionChrome";

/* ════════════════════════════════════════════════════════
   HOE HET WERKT - hoofdstuk 04
   Donker proces-stappenplan (sticker → scan → dossier).
   Verbindingslijn met meelopende signaal-dot = beweging.
   ════════════════════════════════════════════════════════ */

const steps = [
  {
    n: "01",
    icon: QrCode,
    title: "Plak de QR-sticker",
    body: "Eén sticker in de meterkast, gekoppeld aan het object - niet aan een persoon. Geplaatst in tien seconden.",
    meta: "Plaatsing · 10 sec",
  },
  {
    n: "02",
    icon: ScanLine,
    title: "Klant scant",
    body: "Geen app, geen login, geen account. De camera opent direct het dossier op jouw eigen subdomein.",
    meta: "Geen app · geen login",
  },
  {
    n: "03",
    icon: FolderOpen,
    title: "Heel het dossier",
    body: "Tekeningen, keuringen, handleidingen en onderhoud - alles op één plek. Acht jaar geldig, altijd actueel.",
    meta: "Wkb · SCIOS · NEN 1010",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden mesh-dark grain text-white"
    >
      {/* Top + bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <SectionHeader
          className="reveal mb-14 md:mb-20"
          index="04"
          label="Hoe het werkt"
          tone="orange"
          light
          title={
            <>
              Van sticker tot dossier.<br />
              <span className="hl-stroke">Drie&nbsp;stappen.</span>
            </>
          }
          sub="Geen implementatietraject, geen handleiding voor je klant. Plakken, scannen, klaar - de rest doet het dossier zelf."
        />

        {/* Stepper */}
        <div className="relative">
          {/* Connector line (desktop) - met meelopende signaal-dot */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[17px] z-0 hidden md:block"
          >
            <div
              className="relative mx-[16.667%] h-px"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(255,255,255,0.28) 0 6px, transparent 6px 12px)",
              }}
            >
              <span className="anim-flow-dot absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_12px_2px_rgba(232,105,44,0.85)]" />
            </div>
          </div>

          <div className="reveal-group grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <StepCard key={s.n} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  n,
  icon: Icon,
  title,
  body,
  meta,
}: {
  n: string;
  icon: typeof QrCode;
  title: string;
  body: string;
  meta: string;
}) {
  return (
    <div className="relative">
      {/* Node - technische vierkante badge die op de connector zit */}
      <div className="relative z-10 flex md:justify-center">
        <span
          className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-brand-orange/45 bg-ink font-mono text-[13px] font-bold text-brand-orange"
          style={{ boxShadow: "0 0 0 6px var(--color-ink)" }}
        >
          {n}
        </span>
      </div>

      {/* Panel */}
      <div className="group relative mt-6 overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] md:p-8">
        {/* Ghost number watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-1 -top-7 select-none font-black leading-none tracking-tighter text-white/[0.045]"
          style={{ fontSize: "128px" }}
        >
          {n}
        </span>

        {/* Icon tile */}
        <div className="relative flex h-11 w-11 items-center justify-center rounded-[11px] bg-brand-orange/15 text-brand-orange ring-1 ring-brand-orange/25">
          <Icon size={20} strokeWidth={2.2} />
        </div>

        <h3 className="relative mt-5 text-[20px] font-black tracking-[-0.02em] text-white md:text-[22px]">
          {title}
        </h3>
        <p className="relative mt-3 text-[14.5px] leading-[1.6] text-white/65 md:text-[15px]">
          {body}
        </p>

        {/* Technical annotation */}
        <div className="relative mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/45">
          <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange" />
          {meta}
        </div>
      </div>
    </div>
  );
}
