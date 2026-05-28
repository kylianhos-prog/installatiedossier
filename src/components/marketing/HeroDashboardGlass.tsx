import {
  LayoutGrid,
  Folder,
  FileText,
  Users,
  QrCode,
  Search,
  Briefcase,
  ExternalLink,
  UserCheck,
  Cloud,
} from "lucide-react";

/* ════════════════════════════════════════════════════════
   HERO DASHBOARD (GLASS) - translucent, neutrale variant die
   opgaat in de donkere hero. Geen fel blauw; oranje is het
   enige accent. Alleen voor de hero - de showcase gebruikt
   het lichte DashboardMock.
   ════════════════════════════════════════════════════════ */

const nav = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: Folder, label: "Projecten" },
  { icon: FileText, label: "Documenten" },
  { icon: Users, label: "Klanten" },
  { icon: QrCode, label: "QR Codes" },
];

const stats = [
  { icon: Briefcase, value: "3", label: "Projecten" },
  { icon: FileText, value: "11", label: "Documenten" },
  { icon: ExternalLink, value: "3", label: "Portalen" },
  { icon: UserCheck, value: "0", label: "Klanten" },
];

const activity = [
  { obj: "Rijksmuseum", date: "15-5-2026" },
  { obj: "Rotterdam, NL", date: "5-5-2026" },
  { obj: "Rijksmuseum", date: "4-5-2026" },
];

export default function HeroDashboardGlass() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[20px] border border-white/10 backdrop-blur-xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 70px -24px rgba(0,0,0,0.6)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="ml-3 hidden flex-1 sm:block">
          <div className="mx-auto max-w-[260px] truncate rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-center font-mono text-[10px] text-white/45">
            installatiedossier.nl/dashboard
          </div>
        </div>
      </div>

      <div className="flex min-h-[400px]">
        {/* ── Sidebar (glass, neutraal) ── */}
        <aside className="hidden w-[156px] flex-shrink-0 flex-col border-r border-white/[0.08] p-3 sm:flex">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="grid grid-cols-2 gap-0.5 rounded-[6px] bg-white/90 p-1">
              <span className="block h-1.5 w-1.5 rounded-[1px] bg-ink/80" />
              <span className="block h-1.5 w-1.5 rounded-[1px] bg-ink/80" />
              <span className="block h-1.5 w-1.5 rounded-[1px] bg-brand-orange" />
              <span className="block h-1.5 w-1.5 rounded-[1px] bg-ink/80" />
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-black text-white">
                Installatie dossier
              </div>
              <div className="text-[7px] font-medium uppercase tracking-widest text-white/40">
                Beheerder
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="mt-5 flex flex-col gap-0.5">
            {nav.map((n) => {
              const Icon = n.icon;
              return (
                <span
                  key={n.label}
                  className={[
                    "flex items-center gap-2.5 rounded-[9px] px-2.5 py-2 text-[11px] font-medium",
                    n.active
                      ? "bg-brand-orange/15 text-brand-orange ring-1 ring-inset ring-brand-orange/30"
                      : "text-white/55",
                  ].join(" ")}
                >
                  <Icon size={14} strokeWidth={2.1} />
                  {n.label}
                </span>
              );
            })}
          </nav>

          {/* Storage chip */}
          <div className="mt-auto rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-3">
            <Cloud size={13} className="text-white/55" />
            <div className="mt-1.5 text-[12px] font-black leading-none text-white">
              8.9 MB
            </div>
            <div className="text-[7.5px] text-white/45">van 2 GB</div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[3%] rounded-full bg-brand-orange" />
            </div>
          </div>
        </aside>

        {/* ── Main ── */}
        <div className="min-w-0 flex-1 space-y-3.5 p-4 md:p-5">
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-black tracking-[-0.01em] text-white">
              Dashboard
            </span>
            <div className="ml-1 hidden flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 md:flex">
              <Search size={12} className="text-white/40" />
              <span className="text-[10px] text-white/40">Zoek projecten...</span>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[9px] font-black text-white ring-1 ring-white/15">
              KH
            </span>
          </div>

          {/* Welkom */}
          <div>
            <div className="text-[17px] font-black tracking-[-0.02em] text-white">
              Welkom terug!
            </div>
            <div className="mt-0.5 text-[10.5px] text-white/50">
              Dit gebeurt er vandaag met uw installatieprojecten.
            </div>
          </div>

          {/* Stat-paneel - één glaspaneel met fijne scheidingslijnen */}
          <div className="grid grid-cols-2 overflow-hidden rounded-[14px] border border-white/[0.08] bg-white/[0.03] lg:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={[
                    "flex flex-col gap-2.5 p-3.5",
                    i > 0 ? "lg:border-l lg:border-white/[0.07]" : "",
                    i >= 2 ? "border-t border-white/[0.07] lg:border-t-0" : "",
                  ].join(" ")}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white/10 text-white/80">
                    <Icon size={15} />
                  </span>
                  <div>
                    <div className="text-[22px] font-black leading-none tabular-nums text-white">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[8.5px] font-medium text-white/45">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recente activiteit */}
          <div className="rounded-[14px] border border-white/[0.08] bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-black text-white">
                Recente Activiteit
              </span>
              <span className="text-[9px] font-bold text-brand-orange">
                Toon Alles
              </span>
            </div>
            <div className="mt-2.5 flex flex-col">
              {activity.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border-t border-white/[0.06] py-2.5 first:border-t-0 first:pt-0"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-white/70">
                    <FileText size={13} />
                  </span>
                  <div className="min-w-0 flex-1 leading-tight">
                    <div className="truncate text-[10px] text-white/85">
                      Document geüpload naar{" "}
                      <span className="font-bold text-white">{a.obj}</span>
                    </div>
                    <div className="mt-0.5 text-[8.5px] text-white/40">
                      {a.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
