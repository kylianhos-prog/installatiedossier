import { SectionHeader } from "./SectionChrome";
import { TrendingUp, Users, ScanLine, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Actieve installateurs",
    value: "340+",
    delta: "+18 deze maand",
    accent: "blue" as const,
  },
  {
    icon: ScanLine,
    label: "QR-scans per maand",
    value: "187K",
    delta: "+18 % vs vorig",
    accent: "blue" as const,
  },
  {
    icon: TrendingUp,
    label: "Live dossiers",
    value: "2.240",
    delta: "+12 % vs vorig",
    accent: "blue" as const,
  },
  {
    icon: Shield,
    label: "Uptime · 12 maanden",
    value: "99,99 %",
    delta: "ISO 27001",
    accent: "green" as const,
  },
] as const;

export default function StatsBand() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden mesh-dark grain text-white"
    >
      {/* Top + bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <SectionHeader
          className="reveal mb-12 md:mb-16"
          index="02"
          label="Live cijfers · mei 2026"
          tone="blue"
          light
          title={
            <>
              Niet zomaar een tool.<br />
              <span className="hl-stroke">De&nbsp;norm</span>.
            </>
          }
          sub="Sinds 2023 vertrouwen installatiebedrijven in NL en BE op Installatiedossier. Geen pitch - gewoon cijfers."
        />

        {/* Stats grid */}
        <div className="reveal-group grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            const accentClr =
              s.accent === "green"
                ? "#34D399"
                : "#5B8AFF";
            return (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] md:p-7"
                style={{
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 0 rgba(13,15,26,0.4)",
                }}
              >
                {/* Decorative accent corner */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: accentClr }}
                />

                {/* Icon */}
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-[10px]"
                  style={{
                    background: `${accentClr}22`,
                    color: accentClr,
                    border: `1px solid ${accentClr}44`,
                  }}
                >
                  <Icon size={18} strokeWidth={2.2} />
                </div>

                {/* Label */}
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 md:text-[10.5px]">
                  {s.label}
                </div>

                {/* Big number - counts up on first view */}
                <div
                  data-countup={s.value}
                  className="mt-2 font-black leading-[0.95] tracking-[-0.04em] tabular-nums text-white"
                  style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
                >
                  {s.value}
                </div>

                {/* Decorative chart bars */}
                <div className="mt-4 flex items-end gap-1 h-5">
                  {[3, 5, 4, 7, 5, 8, 6, 9, 8, 10, 9, 12].map((h, j) => (
                    <div
                      key={j}
                      className="flex-1 rounded-[1px] transition-all duration-500"
                      style={{
                        height: `${(h / 12) * 100}%`,
                        background: accentClr,
                        opacity: 0.18 + (j / 12) * 0.6,
                      }}
                    />
                  ))}
                </div>

                {/* Delta */}
                <div
                  className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: accentClr }}
                >
                  <span className="text-current">↑</span>{" "}
                  <span className="text-white/72">{s.delta}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
