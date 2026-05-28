import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  QrCode,
  Smartphone,
  FileCheck2,
} from "lucide-react";
import { SectionEyebrowLeft } from "./SectionChrome";
import HeroDashboardGlass from "./HeroDashboardGlass";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink text-white">
      {/* Aurora gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 12% 10%, rgba(232,105,44,0.28) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 92% 80%, rgba(42,92,186,0.32) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 50% 100%, rgba(232,105,44,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Dotted grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 100% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Top accent line */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 pb-12 pt-10 md:gap-12 md:px-12 md:pb-16 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-20 lg:pb-20 lg:pt-16">
        {/* LEFT - copy */}
        <div>
          <SectionEyebrowLeft tone="orange">
            Digitaal logboek voor installateurs · NL / BE
          </SectionEyebrowLeft>

          {/* H1 - sharper, communicates WHAT + HOW + SPEED in 2 lines */}
          <h1 className="h-mass mt-5 text-white">
            <span className="block">Eén QR-code op de meterkast.</span>
            <span className="block">
              Heel het dossier in{" "}
              <span className="text-brand-orange">3&nbsp;seconden</span>.
            </span>
          </h1>

          {/* 3-staps flow - de 3-seconden uitleg (mobiel: verticaal met pijl omlaag) */}
          <div className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {[
              { icon: Sparkles, label: "Plak QR" },
              { icon: Smartphone, label: "Klant scant" },
              { icon: FileCheck2, label: "Heel dossier" },
            ].map((s, i) => (
              <FlowStep
                key={s.label}
                icon={s.icon}
                label={s.label}
                showArrow={i < 2}
              />
            ))}
          </div>

          <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.55] text-white/65 md:text-[16px]">
            Geen login, geen app voor je klant. Klaar voor{" "}
            <strong className="font-bold text-white">Wkb</strong>,{" "}
            <strong className="font-bold text-white">SCIOS</strong>,{" "}
            <strong className="font-bold text-white">NEN 1010</strong> en{" "}
            <strong className="font-bold text-white">BRL 100</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-[11px] bg-brand-orange px-5 py-3 text-[14.5px] font-bold text-white shadow-[0_14px_34px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
            >
              Start gratis proefperiode
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#how"
              className="group inline-flex items-center gap-2 rounded-[11px] border border-white/15 bg-white/[0.04] px-5 py-3 text-[14.5px] font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
            >
              <Play size={12} className="fill-current" />
              Bekijk hoe het werkt
            </a>
          </div>

          {/* Trust line - eerlijke beloften, geen verzonnen reviews */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/8 pt-5 text-[12.5px] font-medium text-white/70">
            {["14 dagen gratis", "Geen creditcard", "Maandelijks opzegbaar"].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    size={14}
                    className="text-[#34D399]"
                    strokeWidth={2.4}
                  />
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT - dashboard mockup */}
        <div className="relative flex items-center justify-center">
          <DashboardMockup />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   FLOW STEP - Plak / Scan / Klaar mini-chips
   ════════════════════════════════════════════════════════ */
function FlowStep({
  icon: Icon,
  label,
  showArrow,
}: {
  icon: typeof QrCode;
  label: string;
  showArrow: boolean;
}) {
  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
          <Icon size={11} strokeWidth={2.5} />
        </span>
        {label}
      </span>
      {showArrow && (
        <ArrowRight
          size={12}
          strokeWidth={2.5}
          className="flex-shrink-0 rotate-90 text-white/30 sm:rotate-0"
        />
      )}
    </>
  );
}

/* ════════════════════════════════════════════════════════
   DASHBOARD MOCKUP - Figma-tier polish
   ════════════════════════════════════════════════════════ */
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[640px]">
      {/* Glow behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10"
        style={{
          background:
            "radial-gradient(closest-side at 50% 50%, rgba(42,92,186,0.30), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Hoofdpaneel - donker glas dashboard dat opgaat in de hero */}
      <HeroDashboardGlass />

      {/* Secundaire klant-view - telefoon die het dossier scant */}
      <PhoneScanAnimation />
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   PHONE SCAN ANIMATION - toont QR-scan flow live
   ════════════════════════════════════════════════════════ */
function PhoneScanAnimation() {
  return (
    <div className="absolute -left-3 -bottom-8 z-30 md:-left-10 md:-bottom-10">
      {/* Label - markeert dit als de klant-view naast het kantoor-dashboard */}
      <span className="absolute -top-6 left-1 z-10 inline-flex items-center whitespace-nowrap rounded-full bg-brand-orange px-2.5 py-1 font-mono text-[8.5px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_18px_-6px_rgba(232,105,44,0.7)]">
        Wat je klant ziet
      </span>
      <div
        className="w-[96px] md:w-[108px]"
        style={{
          filter:
            "drop-shadow(0 24px 44px rgba(13,15,26,0.5)) drop-shadow(0 12px 20px rgba(232,105,44,0.28))",
          transform: "rotate(-5deg)",
        }}
      >
        {/* Phone frame */}
      <div
        className="relative rounded-[26px] bg-[#0a0a0a] p-[5px]"
        style={{
          aspectRatio: "9 / 17",
        }}
      >
        {/* Notch */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-10 h-3 w-[44%] -translate-x-1/2 rounded-full bg-black"
        />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-white">
          {/* URL bar / brand */}
          <div className="flex items-center justify-between border-b border-border bg-cream/70 px-2.5 pb-1 pt-5">
            <span className="font-mono text-[8px] uppercase tracking-widest text-gray-lt">
              id.nl / 0241
            </span>
            <span className="anim-pulse-dot h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          </div>

          {/* QR scanner area */}
          <div className="relative bg-ink px-3 py-3">
            <div className="font-mono text-[8px] uppercase tracking-widest text-white/55">
              Scan QR
            </div>
            <div className="mt-1.5 text-[11px] font-black leading-tight text-white">
              Westerstraat 14
            </div>

            {/* QR + scan-beam container */}
            <div className="relative mt-2 overflow-hidden rounded-md bg-white p-2">
              <MiniQr />
              {/* Animated orange beam */}
              <div
                aria-hidden="true"
                className="anim-scan-beam pointer-events-none absolute left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(232,105,44,0) 0%, rgba(232,105,44,1) 50%, rgba(232,105,44,0) 100%)",
                  boxShadow:
                    "0 0 14px 2px rgba(232,105,44,0.85), 0 0 32px 6px rgba(232,105,44,0.45)",
                }}
              />
            </div>

            {/* Status text - cycles "Scannen..." → "Geopend ✓" */}
            <div className="relative mt-2 h-3.5">
              <span className="anim-status-a absolute inset-0 flex items-center justify-center gap-1 font-mono text-[8.5px] font-bold uppercase tracking-widest text-brand-orange">
                <span className="block h-1 w-1 animate-ping rounded-full bg-brand-orange" />
                Scannen…
              </span>
              <span className="anim-status-b absolute inset-0 flex items-center justify-center gap-1 font-mono text-[8.5px] font-bold uppercase tracking-widest text-[#34D399]">
                <CheckCircle2 size={9} strokeWidth={3} />
                Geopend
              </span>
            </div>
          </div>

          {/* Document preview */}
          <div className="space-y-0.5 p-2">
            {[
              ["📄", "Tekening", "#10B981"],
              ["📐", "Wkb-eindkeur", "#E8692C"],
              ["🔒", "Onderhoud", "#10B981"],
            ].map(([ic, label, dot]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-[5px] border border-border bg-white px-1.5 py-1"
              >
                <span className="text-[8px] font-medium text-ink">
                  {ic} {label}
                </span>
                <span
                  className="block h-1 w-1 rounded-full"
                  style={{ background: dot as string }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

/* Mini-QR - kleinere variant zonder rand */
function MiniQr() {
  return (
    <svg
      viewBox="0 0 21 21"
      shapeRendering="crispEdges"
      className="block h-auto w-full"
      aria-hidden="true"
    >
      <rect width="21" height="21" fill="#fff" />
      <g fill="#0D0F1A">
        {/* Finder corners */}
        <rect x="0" y="0" width="5" height="5" />
        <rect x="1" y="1" width="3" height="3" fill="#fff" />
        <rect x="2" y="2" width="1" height="1" />
        <rect x="16" y="0" width="5" height="5" />
        <rect x="17" y="1" width="3" height="3" fill="#fff" />
        <rect x="18" y="2" width="1" height="1" />
        <rect x="0" y="16" width="5" height="5" />
        <rect x="1" y="17" width="3" height="3" fill="#fff" />
        <rect x="2" y="18" width="1" height="1" />
        {/* Random data */}
        <rect x="7" y="2" width="1" height="1" />
        <rect x="9" y="3" width="1" height="1" />
        <rect x="11" y="2" width="1" height="1" />
        <rect x="13" y="3" width="1" height="1" />
        <rect x="6" y="6" width="2" height="2" />
        <rect x="10" y="7" width="1" height="2" />
        <rect x="12" y="6" width="2" height="1" />
        <rect x="7" y="9" width="2" height="1" />
        <rect x="10" y="10" width="2" height="1" />
        <rect x="13" y="9" width="1" height="2" />
        <rect x="7" y="12" width="1" height="2" />
        <rect x="9" y="13" width="2" height="1" />
        <rect x="12" y="12" width="2" height="2" />
        <rect x="7" y="15" width="2" height="1" />
        <rect x="10" y="16" width="1" height="2" />
        <rect x="13" y="15" width="1" height="1" />
        <rect x="15" y="13" width="1" height="2" />
        <rect x="17" y="14" width="2" height="1" />
        <rect x="15" y="17" width="2" height="1" />
        <rect x="18" y="17" width="1" height="2" />
      </g>
      {/* Brand center dot */}
      <rect x="9" y="9" width="3" height="3" fill="#E8692C" />
    </svg>
  );
}

