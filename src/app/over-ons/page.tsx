import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  KeyRound,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import { SectionHeader } from "@/components/marketing/SectionChrome";

export const metadata: Metadata = {
  title: "Over ons - Gebouwd voor installateurs | Installatiedossier",
  description:
    "Installatiedossier is gebouwd in Alkmaar voor installatiebedrijven in NL en BE. Lees over onze missie, principes en het team erachter.",
};

const facts = [
  { label: "Opgericht", value: "2026" },
  { label: "Thuisbasis", value: "Alkmaar" },
  { label: "Voor", value: "NL · BE" },
  { label: "Focus", value: "Installateurs" },
];

const values = [
  {
    icon: Zap,
    title: "Eenvoud wint",
    body: "Geen handleiding voor je klant, geen cursus voor je monteur. Werkt het niet binnen een minuut, dan deugt het niet.",
  },
  {
    icon: KeyRound,
    title: "Eigendom bij de klant",
    body: "Het dossier hoort bij het object - niet bij ons. Stop je ooit, dan krijg je alles mee in een ZIP. Geen gijzeling.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance zonder gedoe",
    body: "Wkb, SCIOS, NEN 1010 en BRL 100 zitten ingebakken. Jij doet je werk, het dossier regelt de aantoonbaarheid.",
  },
  {
    icon: MapPin,
    title: "Gebouwd in Nederland",
    body: "Servers in Amsterdam, support in Alkmaar. Geen ticketsysteem aan de andere kant van de wereld.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Opgericht in Alkmaar",
    body: "Gebouwd door en voor installateurs: één QR-code op de meterkast, het hele dossier erachter.",
  },
  {
    year: "Nu",
    title: "De eerste bedrijven aan boord",
    body: "We onboarden onze eerste installatiebedrijven persoonlijk en bouwen verder op hun werkpraktijk.",
  },
  {
    year: "Volgende",
    title: "Samen verder",
    body: "De roadmap bepalen we samen met onze early adopters - jouw wensen sturen wat we bouwen.",
  },
];

const team = [
  {
    name: "Sven de Wit",
    role: "Oprichter & CEO",
    initials: "SW",
    color: "#0E8A4A",
    line: "Voormalig werkvoorbereider. Bouwt het liefst dingen weg die niemand mist.",
  },
  {
    name: "Maud Dekkers",
    role: "Compliance-lead",
    initials: "MD",
    color: "#2A5CBA",
    line: "Vertaalt wetgeving naar knoppen die gewoon werken.",
  },
  {
    name: "Daan Vermeer",
    role: "Product",
    initials: "DV",
    color: "#E8692C",
    line: "Maakt complexe keuringen behapbaar op de bouwplek.",
  },
  {
    name: "Lisa Bakker",
    role: "Klantsucces",
    initials: "LB",
    color: "#1F2A44",
    line: "Eerste aanspreekpunt - reageert binnen vier uur.",
  },
  {
    name: "Tom Janssen",
    role: "Engineering",
    initials: "TJ",
    color: "#C9541C",
    line: "Zorgt dat het altijd werkt, ook offline in de kruipruimte.",
  },
  {
    name: "Nina Postma",
    role: "Onboarding",
    initials: "NP",
    color: "#2A5CBA",
    line: "Krijgt je hele archief in minder dan een werkdag live.",
  },
];

export default function OverOnsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ─── Page header ─────────────────────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 pb-12 pt-16 md:px-12 md:pb-16 md:pt-24 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
              <span className="block h-2.5 w-2.5 bg-brand-orange" />
              Over ons
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-[rgba(13,15,26,0.24)]">
              ID / TEAM
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <h1 className="h-section text-ink">
              Gebouwd door installateurs,<br />
              voor{" "}
              <span className="hl-stroke">installateurs</span>.
            </h1>
            <p className="max-w-[48ch] text-[15.5px] leading-[1.65] text-gray md:text-[16.5px]">
              We zagen te veel goede vakmensen verzuipen in mappen, mails en
              losse pdf's. Installatiedossier maakt het opleverdossier zo simpel
              dat het er gewoon altijd is.
            </p>
          </div>

          {/* Facts strip */}
          <div className="reveal-group mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-border bg-border md:mt-16 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-white p-6 md:p-7">
                <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
                  {f.label}
                </div>
                <div className="mt-2 text-[28px] font-black tracking-[-0.03em] text-ink tabular-nums md:text-[34px]">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 01 · Missie ─────────────────────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <SectionHeader
            className="reveal"
            index="01"
            total="04"
            label="Onze missie"
            tone="orange"
            title={
              <>
                Waarom we dit{" "}
                <span className="text-brand-orange">gebouwd</span> hebben
              </>
            }
            sub="Een goede installatie verdient een goed dossier. Toch is dat in de praktijk vaak het sluitstuk dat blijft liggen."
          />

          <div className="reveal mt-12 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div className="space-y-5 text-[16.5px] leading-[1.8] text-ink/80 md:text-[17px]">
              <p>
                Onze oprichter werkte jaren als werkvoorbereider. Elke
                oplevering eindigde hetzelfde: avonden lang documenten
                verzamelen, tekeningen terugzoeken en hopen dat de klant de map
                niet zou kwijtraken.
              </p>
              <p>
                Toen de Wkb dichterbij kwam, werd het urgenter. Niet de techniek
                was het probleem - dat beheersen installateurs als geen ander -
                maar het aantoonbaar máken van dat werk.
              </p>
              <p>
                Daarom bouwden we één simpel idee uit: koppel het dossier aan het
                object, zet er een QR-code op, en laat de klant het zelf
                bekijken. Geen app, geen login, geen gedoe.
              </p>
            </div>

            <blockquote
              className="flex flex-col justify-center rounded-[18px] bg-cream p-8 md:p-10"
              style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
            >
              <div className="border-l-[3px] border-brand-orange pl-5">
                <p className="text-[20px] font-bold leading-[1.4] tracking-[-0.01em] text-ink md:text-[23px]">
                  We willen dat het dossier het saaiste onderdeel van je dag is -
                  omdat het gewoon klopt.
                </p>
                <cite className="mt-4 block font-mono text-[11px] font-bold uppercase not-italic tracking-[0.16em] text-gray">
                  - Sven de Wit, oprichter
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── 02 · Waarden ────────────────────────────── */}
      <section className="blueprint-warm relative overflow-hidden bg-cream px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <SectionHeader
            className="reveal"
            index="02"
            total="04"
            label="Waar we voor staan"
            tone="blue"
            title={
              <>
                Onze <span className="text-brand-blue">principes</span>
              </>
            }
            sub="Vier uitgangspunten die elke beslissing sturen - van een knop in de app tot ons contract."
          />

          <div className="reveal-group mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group rounded-[18px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 md:p-8"
                  style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-brand-blue-lt text-brand-blue">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-black tracking-[-0.02em] text-ink md:text-[19px]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-gray">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 03 · Tijdlijn ───────────────────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <SectionHeader
            className="reveal"
            index="03"
            total="04"
            label="Tijdlijn"
            tone="orange"
            title={
              <>
                Van idee naar de{" "}
                <span className="text-brand-orange">norm</span>
              </>
            }
            sub="In drie jaar van het eerste QR-dossier naar honderden installatiebedrijven in twee landen."
          />

          <div className="reveal-group mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="relative rounded-[18px] border border-border bg-white p-7 md:p-8"
                style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
              >
                <div className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                  {t.year}
                </div>
                <div
                  className="mt-3 h-px w-full"
                  style={{ background: "var(--color-border)" }}
                />
                <h3 className="mt-4 text-[17px] font-black leading-[1.2] tracking-[-0.02em] text-ink md:text-[18px]">
                  {t.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.6] text-gray">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04 · Team ───────────────────────────────── */}
      <section className="blueprint-warm relative overflow-hidden bg-cream px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <SectionHeader
            className="reveal"
            index="04"
            total="04"
            label="Het team"
            tone="blue"
            title={
              <>
                De mensen <span className="text-brand-blue">erachter</span>
              </>
            }
            sub="Een klein team in Alkmaar met een achtergrond in de bouw, techniek en software."
          />

          <div className="reveal-group mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex items-start gap-4 rounded-[18px] border border-border bg-white p-6 md:p-7"
                style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
              >
                <span
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-black text-white"
                  style={{ background: m.color }}
                >
                  {m.initials}
                </span>
                <div className="min-w-0">
                  <div className="text-[15.5px] font-black tracking-[-0.01em] text-ink">
                    {m.name}
                  </div>
                  <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-orange">
                    {m.role}
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.55] text-gray">
                    {m.line}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA band ────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-dark grain px-5 py-20 text-white md:px-12 md:py-28 lg:px-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[48ch]">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-orange">
              Kom langs
            </span>
            <h2 className="mt-3 text-[28px] font-black leading-[1.08] tracking-[-0.025em] md:text-[40px]">
              Liever even kennismaken?
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-white/65 md:text-[17px]">
              Vijftien minuten, geen pitch. We pakken één van jouw projecten en
              laten zien hoe het dossier eruitziet.
            </p>
          </div>
          <Link
            href="/#demo"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-[12px] bg-brand-orange px-7 py-4 text-[15px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
          >
            Plan een gesprek
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
      <RevealMount />
    </main>
  );
}
