import {
  FileText,
  Search,
  Upload,
  Folder,
  FolderOpen,
  Image as ImageIcon,
  ListChecks,
  QrCode,
  Info,
  Users,
  Pencil,
  Download,
  Trash2,
  ChevronDown,
} from "lucide-react";
import AppSidebar from "./AppSidebar";

/* ════════════════════════════════════════════════════════
   DOCUMENTS MOCK - clean, gebrande nabouw van het echte
   project-/documentenscherm. Lichte app-UI (in een BrowserFrame).
   ════════════════════════════════════════════════════════ */

const stats = [
  { icon: FileText, value: "4", label: "Documenten" },
  { icon: ImageIcon, value: "1", label: "Foto's" },
  { icon: Users, value: "2", label: "Team" },
  { icon: Folder, value: "5", label: "Mappen" },
];

const tabs = [
  { label: "Documenten", icon: FileText, active: true },
  { label: "Foto's", icon: ImageIcon },
  { label: "Checklists", icon: ListChecks },
  { label: "QR Toegang", icon: QrCode },
  { label: "Projectinfo", icon: Info },
  { label: "Contacten", icon: Users },
];

const folders = [
  { label: "Alle Documenten", count: 4, active: true },
  { label: "Certificaten", count: 1 },
  { label: "Handleidingen", count: 1 },
  { label: "Installatieschema's", count: 1 },
  { label: "Installatietekeningen", count: 1 },
];

const groups = [
  {
    group: "Certificaten",
    files: [{ name: "meetrapport Rijksmuseum.pdf", size: "350,08 KB" }],
  },
  {
    group: "Installatietekeningen",
    files: [
      { name: "installatietekening beganegrond Rijksmuseum.pdf", size: "98 KB" },
    ],
  },
  {
    group: "Installatieschema's",
    files: [{ name: "Installatieschema HKL Rijksmuseum.pdf", size: "376,76 KB" }],
  },
  {
    group: "Handleidingen",
    files: [{ name: "Hybride pomp Rijksmuseum.pdf", size: "4,14 MB" }],
  },
];

export default function DocumentsMock() {
  return (
    <div className="flex min-h-[440px] w-full bg-cream/40 text-ink">
      {/* ── Sidebar ── */}
      <AppSidebar active="projecten" />

      {/* ── Main ── */}
      <div className="min-w-0 flex-1">
        {/* Topbar */}
        <div className="flex items-center gap-3 border-b border-border bg-white px-4 py-2.5 md:px-5">
          <div className="leading-tight">
            <div className="text-[14px] font-black tracking-[-0.01em] text-ink">
              Rijksmuseum
            </div>
            <div className="text-[9px] text-gray-lt">Amsterdam, NL · Actief</div>
          </div>
          <div className="ml-2 hidden flex-1 items-center gap-2 rounded-full border border-border bg-cream/50 px-3 py-1.5 md:flex">
            <Search size={12} className="text-gray-lt" />
            <span className="text-[10px] text-gray-lt">Zoek in documenten...</span>
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
        <div className="space-y-3.5 p-4 md:p-5">
          {/* Stat chips */}
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 rounded-[12px] border border-border bg-white p-3"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] bg-brand-blue-lt text-brand-blue">
                    <Icon size={15} />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[18px] font-black tabular-nums text-ink">
                      {s.value}
                    </div>
                    <div className="text-[9px] font-medium text-gray">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tab bar */}
          <div className="flex flex-wrap gap-1.5 rounded-[12px] border border-border bg-white p-1.5">
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <span
                  key={t.label}
                  className={[
                    "inline-flex items-center gap-1.5 rounded-[8px] px-2.5 py-1.5 text-[10px] font-bold",
                    t.active
                      ? "bg-brand-orange text-white shadow-[0_6px_16px_-6px_rgba(232,105,44,0.6)]"
                      : "text-gray hover:bg-cream/60",
                  ].join(" ")}
                >
                  <Icon size={12} strokeWidth={2.2} />
                  {t.label}
                </span>
              );
            })}
          </div>

          {/* Folders + documents */}
          <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[200px_1fr]">
            {/* Folders panel */}
            <div className="rounded-[14px] border border-border bg-white p-3">
              <div className="px-1 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-lt">
                Mappen
              </div>
              <div className="mt-2 flex flex-col gap-0.5">
                {folders.map((f) => (
                  <span
                    key={f.label}
                    className={[
                      "flex items-center gap-2 rounded-[8px] px-2.5 py-2 text-[10.5px] font-medium",
                      f.active
                        ? "bg-brand-blue-lt text-brand-blue"
                        : "text-gray hover:bg-cream/60",
                    ].join(" ")}
                  >
                    {f.active ? (
                      <FolderOpen size={13} strokeWidth={2.2} />
                    ) : (
                      <Folder size={13} strokeWidth={2.2} />
                    )}
                    <span className="min-w-0 flex-1 truncate">{f.label}</span>
                    <span
                      className={[
                        "rounded-full px-1.5 py-0.5 text-[8px] font-bold tabular-nums",
                        f.active
                          ? "bg-brand-blue text-white"
                          : "bg-cream text-gray-lt",
                      ].join(" ")}
                    >
                      {f.count}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Documents list */}
            <div className="rounded-[14px] border border-border bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-black text-ink">
                  Alle Documenten
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-[9px] bg-brand-orange px-3 py-1.5 text-[10px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(232,105,44,0.6)]">
                  <Upload size={12} strokeWidth={2.4} />
                  Uploaden
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-3.5">
                {groups.map((g) => (
                  <div key={g.group}>
                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-lt">
                      {g.group}
                    </div>
                    <div className="mt-1.5 flex flex-col gap-1.5">
                      {g.files.map((file) => (
                        <div
                          key={file.name}
                          className="group flex items-center gap-2.5 rounded-[10px] border border-border bg-cream/30 px-2.5 py-2"
                        >
                          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[8px] bg-brand-orange-lt text-brand-orange">
                            <FileText size={14} />
                          </span>
                          <div className="min-w-0 flex-1 leading-tight">
                            <div className="truncate text-[10.5px] font-bold text-ink">
                              {file.name}
                            </div>
                            <div className="text-[8.5px] text-gray-lt">
                              PDF · {file.size}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <IconBtn icon={Pencil} />
                            <IconBtn icon={Download} />
                            <IconBtn icon={Trash2} danger />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBtn({
  icon: Icon,
  danger = false,
}: {
  icon: typeof Pencil;
  danger?: boolean;
}) {
  return (
    <span
      className={[
        "flex h-6 w-6 items-center justify-center rounded-[7px] border border-border bg-white",
        danger ? "text-[#DC2626]" : "text-gray",
      ].join(" ")}
    >
      <Icon size={11} strokeWidth={2.2} />
    </span>
  );
}
