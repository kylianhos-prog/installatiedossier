import { SectionHeader } from "./SectionChrome";
import { Monitor, Smartphone, QrCode, Check, Camera, FileText } from "lucide-react";

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="blueprint-warm relative overflow-hidden bg-cream px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(at 50% 0%, rgba(232,105,44,0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(42,92,186,0.10) 0px, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeader
          className="reveal mb-12 md:mb-16"
          index="04"
          label="Drie portalen"
          tone="orange"
          title={
            <>
              Eén dossier.<br />
              <span className="hl-stroke">Drie&nbsp;deuren.</span>
            </>
          }
          sub="Kantoor stuurt aan. Monteur uploadt vanaf de bouwplek. Klant scant en ziet alles. Eén bron - drie kanten."
        />

        <div className="reveal-group grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* A · Beheerder (Desktop) */}
          <PortalCard
            num="A"
            label="Beheerder"
            sub="Kantoor"
            icon={Monitor}
            color="blue"
            title="De stuurkamer."
            body="Alle dossiers, alle monteurs, alle audits - in één overzicht. Werkt op jouw eigen subdomein."
            features={[
              "5 projectstatussen + audit-trail",
              "Document-verval waarschuwingen",
              "Koppelt met Snelstart, ServiceM8",
            ]}
            mock={<DesktopMock />}
          />

          {/* B · Monteur (Mobile) */}
          <PortalCard
            num="B"
            label="Monteur"
            sub="Bouwplek · offline"
            icon={Smartphone}
            color="blue"
            title="De bouw-app."
            body="Foto, formulier, handtekening. Werkt offline op zolder, in de kruipruimte, op de werf."
            features={[
              "Offline modus + sync",
              "Spraak-naar-notitie",
              "Wkb-checks self-fill",
            ]}
            mock={<MobileMock />}
          />

          {/* C · Klant (QR-scan) */}
          <PortalCard
            num="C"
            label="Klant"
            sub="Geen login"
            icon={QrCode}
            color="orange"
            title="Het scan-portaal."
            body="QR-code op de meterkast → compleet dossier. Geen app-download, geen account. 8 jaar geldig."
            features={[
              "Werkt op elke telefoon",
              "Optionele pincode-bescherming",
              "Plan-onderhoud knop → leads",
            ]}
            mock={<QRMock />}
          />
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PORTAL CARD
   ════════════════════════════════════════════════════════ */
function PortalCard({
  num,
  label,
  sub,
  icon: Icon,
  color,
  title,
  body,
  features,
  mock,
}: {
  num: string;
  label: string;
  sub: string;
  icon: typeof Monitor;
  color: "blue" | "orange";
  title: string;
  body: string;
  features: readonly string[];
  mock: React.ReactNode;
}) {
  const accentClr =
    color === "orange" ? "var(--color-brand-orange)" : "var(--color-brand-blue)";
  const accentBg =
    color === "orange" ? "var(--color-brand-orange-lt)" : "var(--color-brand-blue-lt)";

  return (
    <div
      className="group relative overflow-hidden rounded-[20px] border border-border bg-white transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow:
          "0 1px 0 rgba(13,15,26,0.04), 0 16px 40px -16px rgba(13,15,26,0.10)",
      }}
    >
      {/* Mock area */}
      <div
        className="relative overflow-hidden p-5"
        style={{
          background:
            color === "orange"
              ? "linear-gradient(180deg, #FFF6F0 0%, #FFFFFF 100%)"
              : "linear-gradient(180deg, #EFF4FC 0%, #FFFFFF 100%)",
          minHeight: "240px",
        }}
      >
        {mock}
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{
              background: accentBg,
              color: accentClr,
            }}
          >
            <span
              className="block h-1.5 w-1.5 rounded-full"
              style={{ background: accentClr }}
            />
            {num} · {label}
          </span>
          <Icon size={16} className="text-gray-lt" />
        </div>

        <div className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-lt">
          {sub}
        </div>

        <h3 className="mt-4 text-[24px] font-black leading-[1.1] tracking-[-0.02em] text-ink md:text-[26px]">
          {title}
        </h3>

        <p className="mt-3 text-[14.5px] leading-[1.6] text-gray">{body}</p>

        <ul className="mt-5 flex flex-col gap-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink"
            >
              <span
                className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: accentClr }}
              >
                <Check size={10} className="text-white" strokeWidth={3.5} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MOCKS - A: Desktop dashboard
   ════════════════════════════════════════════════════════ */
function DesktopMock() {
  return (
    <div className="relative h-full">
      {/* Browser-style mini frame */}
      <div className="rounded-lg bg-white shadow-[0_10px_30px_-10px_rgba(13,15,26,0.18)]">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-2 font-mono text-[9px] uppercase tracking-widest text-gray-lt">
            jouwbedrijf.installatiedossier.nl
          </span>
        </div>

        <div className="grid grid-cols-[80px_1fr]">
          {/* Sidebar */}
          <div className="bg-brand-blue p-2 text-white">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-white text-[9px] font-black text-brand-blue">
                JB
              </span>
              <span className="text-[9px] font-black tracking-tight">
                Jouw bedrijf
              </span>
            </div>
            <div className="space-y-1">
              <div className="rounded bg-brand-orange px-1.5 py-1 text-[8px] font-bold">
                ▦ Dashboard
              </div>
              <div className="px-1.5 py-1 text-[8px] text-white/70">▤ Projecten</div>
              <div className="px-1.5 py-1 text-[8px] text-white/70">▢ Documenten</div>
              <div className="px-1.5 py-1 text-[8px] text-white/70">⊞ QR Codes</div>
            </div>
          </div>

          {/* Main */}
          <div className="p-3">
            <div className="text-[10px] font-black tracking-tight text-ink">
              Dashboard
            </div>
            <div className="mt-1.5 text-[8px] text-gray">
              Beheer · 3 projecten · 11 documenten
            </div>

            {/* KPIs */}
            <div className="mt-2.5 grid grid-cols-3 gap-1">
              {[
                ["3", "PROJ"],
                ["11", "DOCS"],
                ["3", "PORTAAL"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded bg-brand-blue px-1.5 py-1 text-white"
                >
                  <div className="text-[10px] font-black leading-none">{v}</div>
                  <div className="mt-0.5 font-mono text-[7px] uppercase opacity-70">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            {/* Activity bars */}
            <div className="mt-3 space-y-1">
              {[
                ["R. Smit · Westerstraat 14", "2m"],
                ["Wkb-export · 0241", "14m"],
                ["M. de Boer · 0418", "31m"],
              ].map(([t, w]) => (
                <div
                  key={t}
                  className="flex items-center justify-between rounded border border-border bg-cream/50 px-1.5 py-1 text-[8px]"
                >
                  <span className="text-ink">{t}</span>
                  <span className="font-mono text-gray-lt">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MOCK B: Mobile monteur app
   ════════════════════════════════════════════════════════ */
function MobileMock() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div
        className="relative w-[200px] rounded-[28px] bg-ink p-2"
        style={{
          boxShadow:
            "0 24px 48px -16px rgba(13,15,26,0.30), 0 8px 16px -4px rgba(13,15,26,0.15)",
        }}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/80" />

        <div className="overflow-hidden rounded-[22px] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pb-1 pt-7 text-[8px] font-bold text-ink">
            <span>09:42</span>
            <span>●●●</span>
          </div>

          {/* Header */}
          <div className="border-b border-border bg-cream/60 px-3 py-2">
            <div className="font-mono text-[7px] uppercase tracking-widest text-gray">
              Oplevering 0241
            </div>
            <div className="text-[11px] font-black text-ink">Westerstraat 14</div>
          </div>

          {/* Steps */}
          <div className="space-y-1.5 p-2.5">
            <StepRow icon={Camera} label="Foto's installatie" status="12 ✓" done />
            <StepRow icon={FileText} label="Conformiteit" status="✓ Klaar" done />
            <StepRow icon={Check} label="Eindkeuring" status="! Open" warn />

            <button
              className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-md bg-brand-orange py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-white"
              style={{
                boxShadow: "0 4px 12px -2px rgba(232,105,44,0.45)",
              }}
            >
              Lever op ▸
            </button>

            <div className="pt-1.5 text-center font-mono text-[7px] uppercase tracking-widest text-gray-lt">
              Sync pending · offline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepRow({
  icon: Icon,
  label,
  status,
  done = false,
  warn = false,
}: {
  icon: typeof Camera;
  label: string;
  status: string;
  done?: boolean;
  warn?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border bg-white px-2 py-1.5">
      <div className="flex items-center gap-1.5">
        <Icon size={9} className="text-gray" />
        <span className="text-[9px] font-medium text-ink">{label}</span>
      </div>
      <span
        className={[
          "font-mono text-[7.5px] font-bold uppercase tracking-widest",
          done ? "text-[#0E8A4A]" : warn ? "text-brand-orange-dk" : "text-gray-lt",
        ].join(" ")}
      >
        {status}
      </span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MOCK C: QR-sticker + scan preview
   ════════════════════════════════════════════════════════ */
function QRMock() {
  return (
    <div className="relative flex h-full items-center justify-center gap-3">
      {/* QR Sticker */}
      <div
        className="relative w-[120px] rounded-[14px] bg-brand-orange p-2.5"
        style={{
          transform: "rotate(-5deg)",
          boxShadow: "0 20px 36px -10px rgba(232,105,44,0.45)",
        }}
      >
        <div className="flex items-center justify-between pb-1.5 font-mono text-[7.5px] font-bold uppercase tracking-widest text-white">
          <span>Scan</span>
          <span>0241</span>
        </div>
        <div className="rounded bg-white p-1.5">
          <svg
            viewBox="0 0 21 21"
            shapeRendering="crispEdges"
            className="block h-auto w-full"
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
        </div>
        <div className="flex items-center justify-between pt-1.5 font-mono text-[7.5px] font-bold uppercase tracking-widest text-white">
          <span>Wkb ✓</span>
          <span>NL</span>
        </div>
      </div>

      {/* Phone preview */}
      <div
        className="relative w-[120px] rounded-[18px] bg-ink p-1.5"
        style={{
          transform: "rotate(4deg)",
          boxShadow: "0 20px 36px -10px rgba(13,15,26,0.30)",
        }}
      >
        <div className="absolute left-1/2 top-1.5 z-10 h-2.5 w-12 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="overflow-hidden rounded-[14px] bg-white">
          <div className="border-b border-border bg-cream/60 px-2 pb-1 pt-5">
            <div className="font-mono text-[6px] uppercase tracking-widest text-gray">
              dossier.jouwbedrijf.nl
            </div>
            <div className="mt-0.5 text-[9px] font-black text-ink">Westerstraat 14</div>
          </div>
          <div className="space-y-1 p-1.5">
            {["CV · Remeha", "PV · 14×425W", "WP · Daikin", "24 docs · Wkb ✓"].map(
              (t, i) => (
                <div
                  key={t}
                  className={[
                    "rounded px-1.5 py-1 text-[7px]",
                    i === 3
                      ? "bg-brand-orange font-bold text-white"
                      : "border border-border bg-white text-ink",
                  ].join(" ")}
                >
                  {t}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
