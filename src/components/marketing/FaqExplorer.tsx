"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  Search,
  Plus,
  HelpCircle,
  Tag,
  FileText,
  Users,
  ShieldCheck,
  Code2,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import type { FaqGroup } from "@/lib/faqs";

const ICONS = {
  general: HelpCircle,
  pricing: Tag,
  documents: FileText,
  portals: Users,
  security: ShieldCheck,
  technical: Code2,
} as const;

export default function FaqExplorer({
  groups,
  total,
}: {
  groups: FaqGroup[];
  total: number;
}) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");
  const [openKey, setOpenKey] = useState<string | null>(
    `${groups[0].id}:0`
  );

  const q = query.trim().toLowerCase();
  const effectiveCat = q ? "all" : activeCat;

  const visibleGroups = useMemo(() => {
    return groups
      .filter((g) => effectiveCat === "all" || g.id === effectiveCat)
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) =>
            !q ||
            it.q.toLowerCase().includes(q) ||
            it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, effectiveCat, q]);

  const resultCount = visibleGroups.reduce((n, g) => n + g.items.length, 0);

  const stats = [
    { label: "Vragen", value: String(total) },
    { label: "Categorieën", value: String(groups.length) },
    { label: "Opgelost", value: "98%" },
    { label: "Reactietijd", value: "< 4u" },
  ];

  return (
    <>
      {/* ─── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-dark grain text-white">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-14 md:px-12 md:pb-20 md:pt-20 lg:px-20">
          {/* Label row */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
              <span className="block h-2.5 w-2.5 bg-brand-orange" />
              Support
            </span>
            <span className="h-px flex-1 bg-white/[0.12]" />
            <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-white/25">
              ID / FAQ
            </span>
          </div>

          <div className="mx-auto mt-10 max-w-[760px] text-center">
            <h1 className="text-[34px] font-black leading-[1.04] tracking-[-0.035em] md:text-[56px]">
              Veelgestelde{" "}
              <span className="text-brand-orange">vragen</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[52ch] text-[15.5px] leading-[1.6] text-white/65 md:text-[17px]">
              Antwoorden op de meest gestelde vragen over Installatiedossier.
              Staat je vraag er niet bij? Ons team helpt je verder.
            </p>

            {/* Search */}
            <div className="relative mx-auto mt-8 max-w-[520px]">
              <Search
                size={18}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek een vraag…"
                className="w-full rounded-full border border-white/15 bg-white/[0.06] py-4 pl-14 pr-5 text-[15px] text-white placeholder:text-white/40 backdrop-blur-sm focus:border-brand-orange focus:bg-white/[0.1] focus:outline-none"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink/40 p-5 text-center backdrop-blur-sm">
                <div className="text-[26px] font-black tracking-[-0.03em] tabular-nums text-white md:text-[32px]">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Content ─────────────────────────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-16">
          {/* Category sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
              Categorieën
            </div>
            <nav className="mt-4 flex flex-col gap-1">
              <CategoryButton
                label="Alle vragen"
                count={total}
                active={activeCat === "all"}
                onClick={() => {
                  setActiveCat("all");
                  setQuery("");
                }}
              />
              {groups.map((g) => {
                const Icon = ICONS[g.iconKey];
                return (
                  <CategoryButton
                    key={g.id}
                    label={g.label}
                    count={g.items.length}
                    icon={<Icon size={15} strokeWidth={2.2} />}
                    active={activeCat === g.id && !q}
                    onClick={() => {
                      setActiveCat(g.id);
                      setQuery("");
                    }}
                  />
                );
              })}
            </nav>

            {/* Still have questions mini-card */}
            <div className="mt-6 overflow-hidden rounded-[16px] bg-ink p-5 text-white">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                Geen antwoord?
              </div>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-white/70">
                We zitten in Alkmaar en reageren binnen 4 uur.
              </p>
              <a
                href="mailto:info@installatiedossier.nl"
                className="mt-4 inline-flex items-center gap-2 rounded-[10px] bg-brand-orange px-4 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
              >
                Mail support
                <ArrowRight size={14} />
              </a>
            </div>
          </aside>

          {/* Questions */}
          <div>
            {q && (
              <div className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-gray-lt">
                {resultCount} {resultCount === 1 ? "resultaat" : "resultaten"} voor
                “{query}”
              </div>
            )}

            {visibleGroups.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-[18px] border border-dashed border-border bg-white px-6 py-20 text-center">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gray-lt">
                  Geen resultaten
                </span>
                <p className="mt-3 max-w-[36ch] text-[15px] leading-[1.6] text-gray">
                  Geen vraag gevonden. Probeer een andere zoekterm of mail ons
                  rechtstreeks.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveCat("all");
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5"
                >
                  Wis filters
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-12">
                {visibleGroups.map((g) => {
                  const Icon = ICONS[g.iconKey];
                  return (
                    <div key={g.id} id={g.id}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand-orange-lt text-brand-orange">
                          <Icon size={17} strokeWidth={2.2} />
                        </span>
                        <h2 className="text-[19px] font-black tracking-[-0.02em] text-ink md:text-[22px]">
                          {g.label}
                        </h2>
                        <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-gray-lt">
                          {String(g.items.length).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-4 border-t border-ink/10">
                        {g.items.map((item, i) => {
                          const key = `${g.id}:${i}`;
                          return (
                            <FaqRow
                              key={key}
                              question={item.q}
                              answer={item.a}
                              open={openKey === key}
                              onToggle={() =>
                                setOpenKey(openKey === key ? null : key)
                              }
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Still have questions ────────────────────── */}
      <section className="relative overflow-hidden mesh-dark grain px-5 py-20 text-white md:px-12 md:py-28 lg:px-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative mx-auto max-w-[1100px] text-center">
          <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-orange">
            Nog vragen?
          </span>
          <h2 className="mt-3 text-[28px] font-black leading-[1.08] tracking-[-0.025em] md:text-[40px]">
            We helpen je graag verder.
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[15.5px] leading-[1.6] text-white/65 md:text-[17px]">
            Geen ticketsysteem, geen wachtmuziek. Echte mensen in Alkmaar die
            de installatiebranche kennen.
          </p>

          <div className="mx-auto mt-10 grid max-w-[820px] grid-cols-1 gap-4 sm:grid-cols-3">
            <SupportCard
              icon={<MessageSquare size={20} strokeWidth={2.2} />}
              label="WhatsApp"
              value="Reactie < 4 uur"
              href="https://wa.me/31558080641"
            />
            <SupportCard
              icon={<Mail size={20} strokeWidth={2.2} />}
              label="E-mail"
              value="info@installatiedossier.nl"
              href="mailto:info@installatiedossier.nl"
            />
            <SupportCard
              icon={<Phone size={20} strokeWidth={2.2} />}
              label="Bel ons"
              value="+31 (0)55 - 808 06 41"
              href="tel:+31558080641"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════ */
function CategoryButton({
  label,
  count,
  icon,
  active,
  onClick,
}: {
  label: string;
  count: number;
  icon?: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-left text-[13.5px] font-semibold transition-colors",
        active
          ? "bg-ink text-white"
          : "text-gray hover:bg-cream hover:text-ink",
      ].join(" ")}
    >
      {icon && (
        <span className={active ? "text-brand-orange" : "text-gray-lt"}>
          {icon}
        </span>
      )}
      <span className="flex-1">{label}</span>
      <span
        className={[
          "font-mono text-[10.5px] font-bold tabular-nums",
          active ? "text-white/50" : "text-gray-lt",
        ].join(" ")}
      >
        {String(count).padStart(2, "0")}
      </span>
    </button>
  );
}

function FaqRow({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span
          className={[
            "text-[16px] font-bold leading-[1.35] tracking-[-0.01em] transition-colors md:text-[17.5px]",
            open ? "text-brand-orange" : "text-ink group-hover:text-brand-blue",
          ].join(" ")}
        >
          {question}
        </span>
        <span
          className={[
            "mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all",
            open
              ? "rotate-45 border-brand-orange bg-brand-orange text-white"
              : "border-ink/15 text-ink group-hover:border-brand-orange",
          ].join(" ")}
        >
          <Plus size={14} strokeWidth={2.5} />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? "400px" : "0", opacity: open ? 1 : 0 }}
      >
        <p className="pb-6 pr-10 text-[14.5px] leading-[1.7] text-gray md:text-[15.5px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

function SupportCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-brand-orange/15 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
        {icon}
      </span>
      <div>
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
          {label}
        </div>
        <div className="mt-1 text-[14px] font-bold text-white">{value}</div>
      </div>
    </a>
  );
}
