import {
  Menu,
  MapPin,
  FileText,
  BarChart3,
  Image as ImageIcon,
  Folder,
  ChevronDown,
  Search,
} from "lucide-react";

/* ════════════════════════════════════════════════════════
   MOBILE PORTAL MOCK - clean, gebrande nabouw van wat de
   klant ziet na het scannen van de QR-code: het read-only
   documentenportaal op de telefoon.
   ════════════════════════════════════════════════════════ */

const groups = [
  { group: "Certificaten", file: "meetrapport Rijksmuseum.pdf" },
  { group: "Handleidingen", file: "Hybride pomp Rijksmuseum.pdf" },
  { group: "Installatieschema's", file: "Installatieschema HKL Rijksmuseum.pdf" },
  {
    group: "Installatietekeningen",
    file: "installatietekening beganegrond Rijksmuseum.pdf",
  },
];

export default function MobilePortalMock() {
  return (
    <div
      className="relative w-[300px] rounded-[44px] bg-ink p-[6px]"
      style={{
        boxShadow:
          "0 30px 60px -20px rgba(13,15,26,0.45), 0 10px 24px -8px rgba(13,15,26,0.3)",
      }}
    >
      {/* Dynamic island */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black"
      />

      <div className="overflow-hidden rounded-[38px] bg-[#F2EFEA]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pb-2 pt-4 text-[11px] font-bold text-ink">
          <span className="tabular-nums">15:13</span>
          <span className="flex items-center gap-1.5">
            <span className="flex h-3 w-6 items-center rounded-[3px] border border-ink/40 p-[1.5px]">
              <span className="block h-full w-[68%] rounded-[1px] bg-ink" />
            </span>
          </span>
        </div>

        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-black/[0.06] bg-white px-3 py-2.5">
          <Menu size={16} className="flex-shrink-0 text-ink" />
          <span className="min-w-0 flex-1 truncate text-[12.5px] font-black text-ink">
            Rijksmuseum, Amst...
          </span>
          <span className="inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-brand-blue/25 bg-brand-blue-lt px-2 py-1 text-[9.5px] font-bold text-brand-blue">
            <MapPin size={10} strokeWidth={2.4} /> Kaart
          </span>
          <span aria-hidden="true" className="flex-shrink-0 text-[12px]">
            🇳🇱
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1.5 px-3 py-2.5">
          <Tab icon={BarChart3} label="Dashboard" />
          <Tab icon={FileText} label="Documenten" badge="4" active />
          <Tab icon={ImageIcon} label="Foto's" />
        </div>

        {/* Documents card */}
        <div className="mx-3 mb-4 rounded-[16px] bg-white p-3 shadow-[0_1px_0_rgba(13,15,26,0.04)]">
          <div className="flex items-center gap-2">
            <FileText size={15} className="text-ink" />
            <span className="text-[13px] font-black text-ink">Documenten</span>
          </div>

          <div className="mt-2.5 flex items-center gap-2 rounded-[10px] bg-cream/70 px-3 py-2">
            <Search size={12} className="text-gray-lt" />
            <span className="text-[10.5px] text-gray-lt">Zoek documenten...</span>
          </div>

          <div className="mt-1">
            {groups.map((g) => (
              <div
                key={g.group}
                className="border-t border-black/[0.06] first:border-t-0"
              >
                <div className="flex items-center gap-1.5 pb-1 pt-2.5">
                  <ChevronDown size={13} className="text-brand-blue" />
                  <Folder size={13} className="text-brand-blue" strokeWidth={2.2} />
                  <span className="text-[11.5px] font-bold text-brand-blue">
                    {g.group}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 pb-2.5 pl-1.5">
                  <FileText
                    size={16}
                    className="flex-shrink-0 text-[#E11D48]"
                    strokeWidth={2}
                  />
                  <span className="min-w-0 flex-1 truncate text-[11px] font-bold text-ink">
                    {g.file}
                  </span>
                  <span className="flex-shrink-0 text-[10.5px] font-bold text-brand-blue">
                    Downloaden
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab({
  icon: Icon,
  label,
  badge,
  active = false,
}: {
  icon: typeof FileText;
  label: string;
  badge?: string;
  active?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-[10px] px-2 py-2 text-[10px] font-bold",
        active ? "bg-brand-blue-lt text-brand-blue" : "text-gray",
      ].join(" ")}
    >
      <Icon size={12} strokeWidth={2.2} />
      {label}
      {badge && (
        <span className="ml-0.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-brand-blue px-1 text-[8px] font-black text-white">
          {badge}
        </span>
      )}
    </span>
  );
}
