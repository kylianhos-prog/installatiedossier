import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Printer,
  Layers,
  Droplets,
  QrCode,
  Download,
  ShieldCheck,
  MapPin,
  ScanLine,
  Check,
  Sun,
  Ruler,
  SquareDashed,
} from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import QrLabel from "@/components/marketing/QrLabel";

export const metadata: Metadata = {
  title: "QR-codes printen: de complete gids | Installatiedossier",
  description:
    "Welke printer, welk materiaal en welk formaat voor een QR-sticker die jaren meegaat in de meterkast. Stap voor stap, met praktische tips.",
};

/* ── Brand QR ── */
function QrSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 21 21"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      <rect width="21" height="21" fill="#fff" />
      <g fill="#0D0F1A">
        <rect x="0" y="0" width="5" height="5" />
        <rect x="1" y="1" width="3" height="3" fill="#fff" />
        <rect x="2" y="2" width="1" height="1" />
        <rect x="16" y="0" width="5" height="5" />
        <rect x="17" y="1" width="3" height="3" fill="#fff" />
        <rect x="18" y="2" width="1" height="1" />
        <rect x="0" y="16" width="5" height="5" />
        <rect x="1" y="17" width="3" height="3" fill="#fff" />
        <rect x="2" y="18" width="1" height="1" />
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
      <rect x="9" y="9" width="3" height="3" fill="#E8692C" />
    </svg>
  );
}

const methods = [
  {
    icon: Printer,
    title: "Labelprinter",
    badge: "Aanrader",
    body: "Brother QL- of Zebra-labelprinter met een vinyl labelrol. Print on-demand per object, direct krasvast.",
    points: ["Geen nasnijden", "Watervast vinyl", "Ideaal voor losse stickers"],
  },
  {
    icon: Layers,
    title: "Laser + vinyl",
    body: "Een gewone laserprinter op zelfklevende A4-vinylvellen. Watervast en krasvast zonder extra laminaat.",
    points: ["Meerdere per vel", "Zelf op maat snijden", "Lage kosten per sticker"],
  },
  {
    icon: Droplets,
    title: "Inkjet + laminaat",
    body: "Heb je alleen een inkjet? Print op vinyl én lamineer altijd - inkjet-inkt loopt anders uit bij vocht.",
    points: ["Altijd lamineren", "Of beschermhoesje", "Niet zonder laag"],
  },
];

/* dura: 1-3 = duurzaamheid voor de meterkast (8+ jaar) */
const printers = [
  {
    name: "Zebra ZD421 / ZD621",
    type: "Thermal transfer",
    width: "104 mm",
    dura: 3,
    best: "Professioneel en zeer krasvast. Met resin-lint op polyester gaat dit jaren mee.",
  },
  {
    name: "Brother P-touch PT-P900W",
    type: "Laminaat-tape (TZe)",
    width: "36 mm",
    dura: 3,
    best: "Kleine, extreem robuuste labels. Water-, UV- en krasbestendig.",
  },
  {
    name: "Epson LabelWorks LW-PX800",
    type: "Laminaat-tape",
    width: "36 mm",
    dura: 3,
    best: "Industriële labelmaker, ook draadloos en onderweg te gebruiken.",
  },
  {
    name: "Brother QL-1110NWB",
    type: "Direct thermal (DK)",
    width: "103 mm",
    dura: 2,
    best: "Brede QR-labels via wifi. Kies wél de film/duurzame DK-labels.",
  },
  {
    name: "Brother QL-820NWB",
    type: "Direct thermal (DK)",
    width: "62 mm",
    dura: 2,
    best: "Compacte, betaalbare on-demand printer voor losse stickers.",
  },
  {
    name: "Laserprinter + vinyl-A4",
    type: "Toner op vinyl",
    width: "A4",
    dura: 2,
    best: "Meerdere stickers per vel, lage kosten. Zelf op maat snijden.",
  },
];

const steps = [
  { n: "01", icon: QrCode, title: "Genereer", body: "Maak de QR-code per object aan in Installatiedossier." },
  { n: "02", icon: Download, title: "Exporteer", body: "Download als PDF of PNG op hoge resolutie." },
  { n: "03", icon: Printer, title: "Print", body: "Op zelfklevend vinyl of een labelrol - geen papier." },
  { n: "04", icon: ShieldCheck, title: "Bescherm", body: "Lamineer of kies weerbestendig materiaal." },
  { n: "05", icon: MapPin, title: "Plak", body: "Op ooghoogte in de meterkast, schoon en vlak." },
];

const rules = [
  { icon: Ruler, title: "Formaat 4 - 5 cm", body: "Minimaal 3 x 3 cm. Groter scant sneller, ook bij weinig licht." },
  { icon: SquareDashed, title: "Quiet zone", body: "Houd een witte rand rondom de code - print nooit tot de rand." },
  { icon: Sun, title: "Mat, geen glans", body: "Glanzend materiaal geeft reflectie en mislukte scans." },
  { icon: ScanLine, title: "Hoog contrast", body: "Donkere code op een witte ondergrond. Geen kleur-op-kleur." },
];

export default function QrPrintPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 pb-16 pt-16 md:px-12 md:pb-20 md:pt-24 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
              <span className="block h-2.5 w-2.5 bg-brand-orange" />
              Handleiding · QR-stickers
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-[rgba(13,15,26,0.24)]">
              ID / PRINT
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <h1 className="text-[34px] font-black leading-[1.04] tracking-[-0.035em] text-ink md:text-[52px]">
                QR-codes printen die{" "}
                <span className="hl-stroke">jaren</span> meegaan
              </h1>
              <p className="mt-5 max-w-[52ch] text-[16.5px] leading-[1.65] text-gray md:text-[18px]">
                Een sticker in de meterkast krijgt het zwaar: warmte, vocht,
                stof. Zo maak je een QR die scanbaar blijft - met of zonder
                eigen printer.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/stickers-aanvragen"
                  className="inline-flex items-center gap-2 rounded-[12px] bg-brand-orange px-6 py-3.5 text-[14.5px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
                >
                  Bestel voorbedrukte stickers
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center gap-2 rounded-[12px] border border-ink bg-white px-6 py-3.5 text-[14.5px] font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                >
                  Start gratis
                </Link>
              </div>
            </div>

            {/* Echt QR-label (zoals gegenereerd in de app) */}
            <div className="flex justify-center lg:justify-end">
              <QrLabel />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Print-methodes ───────────────────────────── */}
      <section className="blueprint-warm relative overflow-hidden bg-cream px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <SectionLabel num="01" total="03" label="Welke printer?" />
          <h2 className="mt-7 max-w-[20ch] text-[26px] font-black leading-[1.1] tracking-[-0.025em] text-ink md:text-[36px]">
            Drie manieren om te printen
          </h2>

          <div className="reveal-group mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="group relative flex flex-col rounded-[18px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 md:p-8"
                  style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
                >
                  {m.badge && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-brand-orange px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                      {m.badge}
                    </span>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-brand-blue-lt text-brand-blue">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 text-[19px] font-black tracking-[-0.02em] text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-gray">
                    {m.body}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                    {m.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink"
                      >
                        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                          <Check size={10} strokeWidth={3.5} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Concrete modellen op een rij */}
          <div className="reveal mt-14 md:mt-20">
            <h3 className="text-[20px] font-black tracking-[-0.02em] text-ink md:text-[24px]">
              Geschikte printers op een rij
            </h3>
            <p className="mt-2 max-w-[62ch] text-[14.5px] leading-[1.6] text-gray">
              Van professioneel tot betaalbaar - dit zijn modellen die labels
              maken die de meterkast aankunnen.
            </p>

            <div
              className="mt-6 overflow-hidden rounded-[18px] border border-border bg-white"
              style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
            >
              {/* Header (desktop) */}
              <div className="hidden grid-cols-[1.5fr_auto_1.7fr] gap-6 border-b border-border bg-cream/60 px-6 py-3.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-gray-lt sm:grid">
                <span>Printer</span>
                <span className="text-center">Duurzaamheid</span>
                <span>Beste voor</span>
              </div>

              {printers.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-1 gap-3 border-b border-border px-6 py-5 transition-colors last:border-b-0 hover:bg-cream/40 sm:grid-cols-[1.5fr_auto_1.7fr] sm:items-center sm:gap-6"
                >
                  <div>
                    <div className="text-[15px] font-black text-ink">
                      {p.name}
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand-blue-lt px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                        {p.type}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gray-lt">
                        max {p.width}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:justify-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className={[
                          "block h-2 w-2 rounded-full",
                          i < p.dura ? "bg-brand-orange" : "bg-border",
                        ].join(" ")}
                      />
                    ))}
                    <span className="ml-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gray-lt sm:hidden">
                      Duurzaamheid
                    </span>
                  </div>
                  <div className="text-[13.5px] leading-snug text-gray">
                    {p.best}
                  </div>
                </div>
              ))}
            </div>

            {/* Afgeraden */}
            <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13px] leading-[1.55] text-gray">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange">
                Let op
              </span>
              Afgeraden voor de meterkast: DYMO LabelWriter (papier, vervaagt) en
              een gewone inkjet zonder laminaat - niet bestand tegen vocht,
              warmte en slijtage.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Stap voor stap ───────────────────────────── */}
      <section className="relative overflow-hidden mesh-dark grain text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
              <span className="block h-2.5 w-2.5 bg-brand-orange" />
              Stap voor stap
            </span>
            <span className="h-px flex-1 bg-white/[0.12]" />
            <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-white/25">
              02 / 03
            </span>
          </div>
          <h2 className="mt-7 text-[26px] font-black leading-[1.1] tracking-[-0.025em] text-white md:text-[36px]">
            Van code naar sticker in vijf stappen
          </h2>

          <div className="relative mt-12 md:mt-16">
            {/* connector */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-[17px] z-0 hidden md:block"
            >
              <div
                className="relative mx-[10%] h-px"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, rgba(255,255,255,0.28) 0 6px, transparent 6px 12px)",
                }}
              >
                <span className="anim-flow-dot absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_12px_2px_rgba(232,105,44,0.85)]" />
              </div>
            </div>

            <div className="reveal-group grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.n} className="relative">
                    <div className="relative z-10 flex md:justify-center">
                      <span
                        className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-brand-orange/45 bg-ink font-mono text-[13px] font-bold text-brand-orange"
                        style={{ boxShadow: "0 0 0 6px var(--color-ink)" }}
                      >
                        {s.n}
                      </span>
                    </div>
                    <div className="mt-5 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm md:text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-orange/15 text-brand-orange ring-1 ring-brand-orange/25 md:mx-auto">
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                      <h3 className="mt-4 text-[16px] font-black tracking-[-0.01em] text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.55] text-white/60">
                        {s.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Formaat & materiaal (spec) ───────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <SectionLabel num="03" total="03" label="Formaat & materiaal" />
          <h2 className="mt-7 max-w-[22ch] text-[26px] font-black leading-[1.1] tracking-[-0.025em] text-ink md:text-[36px]">
            De vier regels van een scanbare sticker
          </h2>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 md:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            {/* Spec diagram */}
            <div className="flex justify-center">
              <div className="relative">
                {/* quiet-zone dashed frame */}
                <div className="rounded-[20px] border-2 border-dashed border-brand-blue/35 p-6">
                  <div
                    className="relative w-[240px] rounded-[14px] bg-white p-5 md:w-[280px]"
                    style={{
                      boxShadow:
                        "0 30px 60px -24px rgba(13,15,26,0.30), inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                  >
                    <QrSvg className="block h-auto w-full" />
                  </div>
                </div>
                {/* quiet-zone label */}
                <span className="absolute -left-2 -top-3 rounded-full bg-brand-blue px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-white">
                  Quiet zone
                </span>
                {/* dimension */}
                <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gray">
                  <span className="h-px w-8 bg-gray-lt" />
                  4 - 5 cm
                  <span className="h-px w-8 bg-gray-lt" />
                </div>
              </div>
            </div>

            {/* Rules checklist */}
            <div className="reveal-group grid grid-cols-1 gap-4 sm:grid-cols-2">
              {rules.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className="rounded-[16px] border border-border bg-white p-6"
                    style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-orange-lt text-brand-orange">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-4 text-[16px] font-black tracking-[-0.01em] text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-gray">
                      {r.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Test-callout ─────────────────────────────── */}
      <section className="relative bg-cream px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div
          className="relative mx-auto flex max-w-[1100px] flex-col items-start gap-5 overflow-hidden rounded-[22px] bg-ink p-8 text-white md:flex-row md:items-center md:gap-8 md:p-10"
          style={{ boxShadow: "0 30px 60px -28px rgba(13,15,26,0.4)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-50 blur-3xl"
            style={{ background: "rgba(232,105,44,0.3)" }}
          />
          <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[14px] bg-brand-orange/15 text-brand-orange ring-1 ring-brand-orange/25">
            <ScanLine size={24} strokeWidth={2.2} />
          </span>
          <div className="relative">
            <h3 className="text-[20px] font-black leading-[1.2] tracking-[-0.02em] md:text-[24px]">
              Test elke sticker vóór je plakt
            </h3>
            <p className="mt-2 max-w-[60ch] text-[14.5px] leading-[1.6] text-white/65 md:text-[16px]">
              Scan elke sticker één keer met je telefoon voordat je hem
              definitief plakt. Zo vang je een vlek, verkeerd formaat of
              beschadiging op vóór de oplevering - niet erna.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-dark grain px-5 py-20 text-white md:px-12 md:py-28 lg:px-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[46ch]">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-orange">
              Geen printer? Geen probleem
            </span>
            <h2 className="mt-3 text-[28px] font-black leading-[1.1] tracking-[-0.025em] md:text-[40px]">
              Wij printen je QR-stickers
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-white/65 md:text-[17px]">
              Liever kant-en-klare, weerbestendige stickers per object
              toegestuurd? Dat regelen we voor je - jij plakt alleen nog.
            </p>
          </div>
          <Link
            href="/stickers-aanvragen"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-[12px] bg-brand-orange px-7 py-4 text-[15px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
          >
            Vraag stickers aan
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
      <RevealMount />
    </main>
  );
}

/* ── Editorial section label ── */
function SectionLabel({
  num,
  total,
  label,
}: {
  num: string;
  total: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
        <span className="block h-2.5 w-2.5 bg-brand-orange" />
        {label}
      </span>
      <span className="h-px flex-1 bg-border" />
      <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-[rgba(13,15,26,0.24)]">
        {num} / {total}
      </span>
    </div>
  );
}
