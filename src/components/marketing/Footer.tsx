import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  ShieldCheck,
  Lock,
  Globe,
} from "lucide-react";

/* ════════════════════════════════════════════════════════
   FOOTER - serieuze-SaaS variant.
   5 link-kolommen + trust-strip + nieuwsbrief + sub-footer.
   ════════════════════════════════════════════════════════ */

const columns: {
  heading: string;
  items: { href: string; label: string }[];
}[] = [
  {
    heading: "Product",
    items: [
      { href: "/functies", label: "Functies" },
      { href: "/#pricing", label: "Prijzen" },
      { href: "/voor", label: "Voor wie" },
      { href: "/integraties", label: "Integraties" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "/changelog", label: "Changelog" },
      { href: "/#demo", label: "Demo aanvragen" },
      { href: "/login", label: "Inloggen" },
    ],
  },
  {
    heading: "Oplossingen",
    items: [
      { href: "/voor/zzp", label: "Voor zzp'ers" },
      { href: "/voor/installatiebedrijven", label: "Installatiebedrijven" },
      { href: "/voor/vve-beheerders", label: "VvE-beheerders" },
      { href: "/voor/projectontwikkelaars", label: "Projectontwikkelaars" },
      { href: "/oplossingen/wkb-compliance", label: "Wkb-compliance" },
      { href: "/oplossingen/meterkast-documentatie", label: "Meterkast-dossier" },
      { href: "/oplossingen/onderhoudsdossiers", label: "Onderhoudsdossiers" },
    ],
  },
  {
    heading: "Bronnen",
    items: [
      { href: "/blog", label: "Blog" },
      { href: "/kennisbank", label: "Kennisbank" },
      { href: "/qr-codes-printen", label: "QR-codes printen" },
      { href: "/stickers-aanvragen", label: "QR-stickers bestellen" },
      { href: "/wkb-gids", label: "Wkb-gids" },
      { href: "/klantverhalen", label: "Klantverhalen" },
      { href: "/webinars", label: "Webinars" },
      { href: "/templates", label: "Templates" },
      { href: "/faq", label: "FAQ" },
      { href: "/api", label: "API-documentatie" },
      { href: "/status", label: "Status" },
    ],
  },
  {
    heading: "Bedrijf",
    items: [
      { href: "/over-ons", label: "Over ons" },
      { href: "/team", label: "Team" },
      { href: "/vacatures", label: "Vacatures" },
      { href: "/pers", label: "Pers & media" },
      { href: "/partners", label: "Partners" },
      { href: "/contact", label: "Contact" },
      { href: "#nieuwsbrief", label: "Nieuwsbrief" },
    ],
  },
  {
    heading: "Juridisch",
    items: [
      { href: "/privacy", label: "Privacybeleid" },
      { href: "/cookiebeleid", label: "Cookiebeleid" },
      { href: "/voorwaarden", label: "Algemene voorwaarden" },
      { href: "/verwerkersovereenkomst", label: "Verwerkersovereenkomst" },
      { href: "/security", label: "Beveiliging" },
      { href: "/avg", label: "AVG / GDPR" },
      { href: "/sla", label: "SLA" },
      { href: "/responsible-disclosure", label: "Responsible disclosure" },
    ],
  },
];

const badges = [
  { icon: ShieldCheck, label: "ISO 27001" },
  { icon: Lock, label: "AVG · GDPR" },
  { icon: Globe, label: "Hosted in EU" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/installatiedossier", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/installatiedossier", icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@installatiedossier", icon: TikTokIcon },
  { label: "Facebook", href: "https://www.facebook.com/installatiedossier", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[700px] -translate-x-1/2 opacity-50 blur-3xl"
        style={{ background: "rgba(232,105,44,0.18)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-20 lg:px-20">
        {/* ── Trust strip ── */}
        <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[14px] font-bold">
              Gebouwd voor installateurs in{" "}
              <span className="text-brand-orange">NL &amp; BE</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold text-white/70"
                >
                  <Icon size={12} className="text-brand-orange" />
                  {b.label}
                </span>
              );
            })}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold text-white/70">
              🇳🇱 Made in NL
            </span>
          </div>
        </div>

        {/* ── Brand + newsletter ── */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/brand.png"
              alt="Installatiedossier"
              width={220}
              height={70}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-[42ch] text-[14.5px] leading-[1.65] text-white/65">
              Het digitale logboek voor installatiebedrijven. Eén QR-code op de
              meterkast, het complete dossier erachter - klaar voor Wkb, SCIOS,
              NEN 1010 en BRL 100.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div id="nieuwsbrief">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-orange">
              Nieuwsbrief
            </span>
            <h3 className="mt-2.5 text-[20px] font-black leading-[1.2] tracking-[-0.01em] md:text-[22px]">
              Blijf op de hoogte van de Wkb
            </h3>
            <p className="mt-2 max-w-[40ch] text-[14px] leading-[1.55] text-white/60">
              Eén mail per maand met praktische updates over wetgeving, keuringen
              en het product. Geen spam.
            </p>
            <div className="mt-5 flex max-w-md flex-col gap-2.5 sm:flex-row">
              <input
                type="email"
                placeholder="naam@installateur.nl"
                className="flex-1 rounded-[11px] border border-white/15 bg-white/[0.05] px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:border-brand-orange focus:bg-white/[0.08] focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-brand-orange px-5 py-3 text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
              >
                Inschrijven
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Link columns ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="text-[14px] text-white/70 transition-colors hover:text-brand-orange"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Sub-footer ── */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Legal + company info */}
            <div className="flex flex-col gap-1.5 text-[12.5px] text-white/50">
              <span>
                © {new Date().getFullYear()} Installatiedossier B.V. · Parelweg
                11, 1812 RS Alkmaar
              </span>
              <span className="font-mono text-[11.5px] tracking-wide text-white/40">
                KvK 92481753 · BTW NL866042191B01
              </span>
            </div>

            {/* Language switcher */}
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-bold text-white">
                NL
              </span>
              <span className="px-3 py-1 text-[12px] font-semibold text-white/35">
                EN
              </span>
              <span className="px-3 py-1 text-[12px] font-semibold text-white/35">
                DE
              </span>
            </div>
          </div>

          <p className="text-[12px] leading-relaxed text-white/35">
            Installatiedossier is een handelsnaam van Installatiedossier B.V. Alle
            rechten voorbehouden. Servers gehost in Nederland (Amsterdam).
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Inline TikTok-icoon (niet aanwezig in lucide) */
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.4-2.5 5.6-5.6 5.6A5.5 5.5 0 0 1 5.4 14a5.4 5.4 0 0 1 6-5.4v2.7a2.8 2.8 0 0 0-3.3 2.7c0 1.6 1.2 2.7 2.7 2.7 1.6 0 2.8-1.2 2.8-3.1V3h2.9Z" />
    </svg>
  );
}
