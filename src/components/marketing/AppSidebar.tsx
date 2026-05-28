import {
  LayoutGrid,
  Folder,
  FileText,
  Users,
  ListChecks,
  QrCode,
  Settings,
  Cloud,
} from "lucide-react";

/* ════════════════════════════════════════════════════════
   APP SIDEBAR - gedeelde blauwe navigatiekolom voor de
   product-mockups (dashboard, documenten).
   ════════════════════════════════════════════════════════ */

type Key =
  | "dashboard"
  | "projecten"
  | "documenten"
  | "klanten"
  | "checklists"
  | "qr"
  | "instellingen";

const menuTop: { k: Key; icon: typeof LayoutGrid; label: string }[] = [
  { k: "dashboard", icon: LayoutGrid, label: "Dashboard" },
  { k: "projecten", icon: Folder, label: "Projecten" },
  { k: "documenten", icon: FileText, label: "Documenten" },
];

const menuBeheer: { k: Key; icon: typeof LayoutGrid; label: string }[] = [
  { k: "klanten", icon: Users, label: "Klanten" },
  { k: "checklists", icon: ListChecks, label: "Checklists" },
  { k: "qr", icon: QrCode, label: "QR Codes" },
  { k: "instellingen", icon: Settings, label: "Instellingen" },
];

export default function AppSidebar({ active }: { active: Key }) {
  return (
    <aside
      className="hidden w-[196px] flex-shrink-0 flex-col p-4 text-white sm:flex"
      style={{ background: "linear-gradient(180deg, #2A5CBA 0%, #1A3E8C 100%)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <span className="grid grid-cols-2 gap-0.5 rounded-[6px] bg-white p-1">
          <span className="block h-1.5 w-1.5 rounded-[1px] bg-brand-blue" />
          <span className="block h-1.5 w-1.5 rounded-[1px] bg-brand-blue" />
          <span className="block h-1.5 w-1.5 rounded-[1px] bg-brand-orange" />
          <span className="block h-1.5 w-1.5 rounded-[1px] bg-brand-blue" />
        </span>
        <div className="leading-tight">
          <div className="text-[12px] font-black">Installatie dossier</div>
          <div className="text-[8px] font-medium uppercase tracking-widest text-white/55">
            Beheerder Portal
          </div>
        </div>
      </div>

      <div className="mt-6 text-[8px] font-bold uppercase tracking-[0.16em] text-white/45">
        Beheerder menu
      </div>
      <nav className="mt-2 flex flex-col gap-0.5">
        {menuTop.map((m) => (
          <NavItem key={m.k} icon={m.icon} label={m.label} active={active === m.k} />
        ))}
      </nav>

      <div className="mt-5 text-[8px] font-bold uppercase tracking-[0.16em] text-white/45">
        Beheer
      </div>
      <nav className="mt-2 flex flex-col gap-0.5">
        {menuBeheer.map((m) => (
          <NavItem key={m.k} icon={m.icon} label={m.label} active={active === m.k} />
        ))}
      </nav>

      {/* Storage card */}
      <div className="mt-auto rounded-[10px] bg-white/[0.08] p-3">
        <Cloud size={14} className="text-white/70" />
        <div className="mt-1.5 text-[14px] font-black leading-none">8.9 MB</div>
        <div className="text-[8px] text-white/55">van 2 GB gebruikt</div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-[3%] rounded-full bg-brand-orange" />
        </div>
        <div className="mt-2.5 rounded-[7px] bg-white py-1.5 text-center text-[9px] font-bold text-brand-blue">
          Opslag Upgraden
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: typeof LayoutGrid;
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={[
        "flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-[11px] font-medium",
        active
          ? "bg-brand-orange text-white shadow-[0_6px_16px_-4px_rgba(232,105,44,0.6)]"
          : "text-white/70",
      ].join(" ")}
    >
      <Icon size={14} strokeWidth={2.2} />
      {label}
    </span>
  );
}
