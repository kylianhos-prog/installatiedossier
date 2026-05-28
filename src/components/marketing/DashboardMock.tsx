import {
  FileText,
  Search,
  Plus,
  Upload,
  UserPlus,
  Briefcase,
  ExternalLink,
  UserCheck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import AppSidebar from "./AppSidebar";

/* ════════════════════════════════════════════════════════
   DASHBOARD MOCK - clean, gebrande nabouw van het echte
   beheerder-dashboard. Lichte app-UI (in een BrowserFrame).
   ════════════════════════════════════════════════════════ */

const stats = [
  { icon: Briefcase, value: "3", label: "Totaal Projecten" },
  { icon: FileText, value: "11", label: "Totaal Documenten" },
  { icon: ExternalLink, value: "3", label: "Portaal Toegangen" },
  { icon: UserCheck, value: "0", label: "Actieve Klanten" },
];

const activity = [
  { who: "User", what: "Document geüpload naar", obj: "Rijksmuseum", date: "15-5-2026" },
  { who: "User", what: "Document geüpload naar", obj: "Rotterdam, NL", date: "5-5-2026" },
  { who: "User", what: "Document geüpload naar", obj: "Rijksmuseum", date: "4-5-2026" },
];

/* Zachte, rand-loze kaart - subtiele schaduw i.p.v. harde border,
   zodat het dashboard minder "blokkerig" oogt. */
const card =
  "rounded-[16px] bg-white ring-1 ring-ink/[0.04] shadow-[0_1px_2px_rgba(13,15,26,0.04),0_12px_30px_-18px_rgba(13,15,26,0.14)]";

export default function DashboardMock() {
  return (
    <div className="flex min-h-[440px] w-full bg-cream/40 text-ink">
      {/* ── Sidebar ── */}
      <AppSidebar active="dashboard" />

      {/* ── Main ── */}
      <div className="min-w-0 flex-1">
        {/* Topbar */}
        <div className="flex items-center gap-3 border-b border-border bg-white px-4 py-2.5 md:px-5">
          <span className="text-[15px] font-black tracking-[-0.01em] text-ink">
            Dashboard
          </span>
          <div className="ml-2 hidden flex-1 items-center gap-2 rounded-full border border-border bg-cream/50 px-3 py-1.5 md:flex">
            <Search size={12} className="text-gray-lt" />
            <span className="text-[10px] text-gray-lt">
              Zoek projecten, documenten...
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden items-center gap-1 text-[10px] font-bold text-gray lg:flex">
              🇳🇱 Nederlands <ChevronDown size={11} />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-[9px] font-black text-white">
              KH
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 p-4 md:p-5">
          {/* Welkom + acties */}
          <div
            className={`flex flex-col gap-4 ${card} p-5 md:flex-row md:items-center md:justify-between`}
          >
            <div>
              <div className="text-[18px] font-black tracking-[-0.02em] text-ink">
                Welkom terug!
              </div>
              <div className="mt-1 text-[10.5px] text-gray">
                Dit gebeurt er vandaag met uw installatieprojecten.
              </div>
            </div>
            <div className="flex gap-2">
              <Action icon={Plus} label="Nieuw Project" tone="blue" />
              <Action icon={Upload} label="Document" tone="orange" />
              <Action icon={UserPlus} label="Klant" tone="green" />
            </div>
          </div>

          {/* Stat-paneel - één kaart met fijne scheidingslijnen i.p.v. losse blokken */}
          <div className={`grid grid-cols-2 overflow-hidden lg:grid-cols-4 ${card}`}>
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={[
                    "flex flex-col gap-3 p-4 md:p-5",
                    i > 0 ? "lg:border-l lg:border-ink/[0.06]" : "",
                    i >= 2 ? "border-t border-ink/[0.06] lg:border-t-0" : "",
                  ].join(" ")}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-brand-blue-lt text-brand-blue">
                    <Icon size={16} />
                  </span>
                  <div>
                    <div className="text-[24px] font-black leading-none tabular-nums text-ink">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[9px] font-medium text-gray">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Activity + right column */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
            {/* Recente activiteit */}
            <div className={`${card} p-5`}>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-black text-ink">
                  Recente Activiteit
                </span>
                <span className="text-[9px] font-bold text-brand-blue">
                  Toon Alles
                </span>
              </div>
              <div className="mt-3 flex flex-col">
                {activity.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-t border-ink/[0.05] py-2.5 first:border-t-0 first:pt-0"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-blue-lt text-brand-blue">
                      <FileText size={13} />
                    </span>
                    <div className="min-w-0 flex-1 leading-tight">
                      <div className="truncate text-[10px] text-ink">
                        <span className="font-bold text-brand-blue">
                          {a.who}
                        </span>{" "}
                        {a.what}{" "}
                        <span className="font-bold">{a.obj}</span>
                      </div>
                      <div className="mt-0.5 text-[8.5px] text-gray-lt">
                        {a.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health + storage */}
            <div className="flex flex-col gap-4">
              <div className={`${card} p-5`}>
                <div className="text-[11px] font-black text-ink">
                  Systeemgezondheid
                </div>
                <div className="mt-3 flex flex-col gap-2.5">
                  {["Cloud Opslag", "Klantportalen"].map((h) => (
                    <div key={h} className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10B981]/12">
                        <CheckCircle2 size={13} className="text-[#10B981]" />
                      </span>
                      <div className="leading-tight">
                        <div className="text-[10px] font-bold text-ink">{h}</div>
                        <div className="text-[8px] text-gray">Operationeel</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-[16px] p-5 text-white shadow-[0_12px_30px_-18px_rgba(42,92,186,0.6)]"
                style={{
                  background: "linear-gradient(150deg, #2A5CBA 0%, #1A3E8C 100%)",
                }}
              >
                <div className="text-[11px] font-black">Opslaggebruik</div>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-[11px] font-bold">8.85 MB van 2 GB</span>
                  <span className="text-[10px] font-bold text-white/70">0%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[3%] rounded-full bg-white" />
                </div>
                <div className="mt-3 rounded-[10px] bg-white py-2 text-center text-[9.5px] font-bold text-brand-blue">
                  Opslag Upgraden
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Action({
  icon: Icon,
  label,
  tone,
}: {
  icon: typeof Plus;
  label: string;
  tone: "blue" | "orange" | "green";
}) {
  const color =
    tone === "blue"
      ? "text-brand-blue bg-brand-blue-lt"
      : tone === "orange"
      ? "text-brand-orange bg-brand-orange-lt"
      : "text-[#0E8A4A] bg-[#10B981]/12";
  return (
    <div className="flex w-[72px] flex-col items-center gap-1.5 rounded-[12px] bg-cream/70 px-2 py-3 text-center ring-1 ring-ink/[0.03]">
      <span className={`flex h-7 w-7 items-center justify-center rounded-[9px] ${color}`}>
        <Icon size={13} strokeWidth={2.4} />
      </span>
      <span className="text-[8.5px] font-bold leading-tight text-ink">
        {label}
      </span>
    </div>
  );
}
