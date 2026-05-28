"use client";

import { useState } from "react";
import { Plus, MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionChrome";

const faqs = [
  {
    q: "Kan ik maandelijks opzeggen?",
    a: "Ja. Maandelijks opzegbaar - geen contracten, geen kleine lettertjes. Plus: 30 dagen geld terug bij start. Stop je later? Je krijgt een ZIP met alle dossiers (PDF + originelen) per mail. Bestaande QR-codes blijven 90 dagen doorverwijzen naar een statische export.",
  },
  {
    q: "Werkt de QR-scan zonder dat de klant inlogt?",
    a: "Ja. De QR linkt naar een unieke pagina met lees-rechten - geen wachtwoord, geen app-download. Vertrouwelijke documenten kun je optioneel achter een 4-cijferige pincode zetten. Werkt op elke telefoon, ook tablet en desktop.",
  },
  {
    q: "Hoe werkt de Wkb-export precies?",
    a: "Eén klik op je dossier → automatische generatie van een Wkb GVK-1 consumentendossier in PDF. Inclusief tekeningen, productverklaringen, eindcontrole en gebruiksaanwijzing. Onze template is getoetst door Stichting Vakwerk.",
  },
  {
    q: "Welke certificeringen ondersteunen jullie?",
    a: "Wkb GVK-1, SCIOS Scope 8 (gasleiding), SCIOS Scope 10 (centrale verwarming), NEN 1010 (elektra-keuringen), NEN 8025 (periodieke inspectie), BRL 100 (koolmonoxide-toestellen), F-gassen verklaring, en ISDE-aanvragen. Templates standaard inbegrepen.",
  },
  {
    q: "Hoe wordt mijn data beveiligd?",
    a: "Servers staan in Amsterdam, NL. AES-256 encryptie at-rest, TLS 1.3 in transit. AVG/GDPR verwerkersovereenkomst standaard. ISO 27001 gecertificeerd. Jaarlijkse penetratie-test door externe partij. 99,99 % uptime gegarandeerd.",
  },
  {
    q: "Werkt het ook voor ZZP'ers?",
    a: "Ja - het pakket Basis (€49) is geschikt vanaf 1 monteur. Veel ZZP'ers gebruiken het voor het opleverdossier richting klant. Plus: een eigen subdomein (dossier.jouwzaak.nl) maakt je oplevering instant professioneel.",
  },
  {
    q: "Hoe krijg ik bestaande dossiers in het systeem?",
    a: "Drag-and-drop per locatie, bulk-import via mappen, of via onze API. Tijdens onboarding (15 min) helpen we je op weg met de structuur. De meeste bedrijven hebben hun actieve dossiers in < 1 werkdag in het systeem.",
  },
  {
    q: "Wat als ik meer dan 250 objecten heb?",
    a: "Neem contact op - we kijken naar een maatwerk-oplossing. Voor de meeste installatiebedrijven is 250+ objecten ruim voldoende (denk: 50 woningen met 5 installaties per pand). Enterprise-tier heeft onbeperkte opslag.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="blueprint relative overflow-hidden bg-white px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeader
          className="reveal mb-12 md:mb-16"
          index="07"
          label="Vraag & antwoord"
          tone="orange"
          title={
            <>
              Antwoorden.<br />
              <span className="hl-stroke">Geen</span> marketing.
            </>
          }
          sub="Staat je vraag er niet bij? We zitten in Alkmaar - bel of mail. Geen ticket-systeem, geen wachtmuziek."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          {/* LEFT - direct contact */}
          <div>
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray-lt">
              Liever direct contact?
            </div>

            {/* Contact cards */}
            <div className="mt-5 space-y-3">
              <ContactCard
                icon={Mail}
                label="Email"
                value="info@installatiedossier.nl"
                href="mailto:info@installatiedossier.nl"
              />
              <ContactCard
                icon={Phone}
                label="Telefoon"
                value="+31 (0)55 - 808 06 41"
                href="tel:+31558080641"
              />
              <ContactCard
                icon={MessageSquare}
                label="WhatsApp"
                value="< 4 uur respons"
                href="https://wa.me/31558080641"
              />
            </div>

            <a
              href="/faq"
              className="group mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-ink transition-colors hover:text-brand-orange"
            >
              Bekijk alle veelgestelde vragen
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* RIGHT - accordion */}
          <div className="border-t border-ink/10">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                num={i + 1}
                question={item.q}
                answer={item.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-[14px] border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-orange/40"
      style={{
        boxShadow: "0 1px 0 rgba(13,15,26,0.04)",
      }}
    >
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-orange-lt text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
        <Icon size={16} strokeWidth={2.4} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray-lt">
          {label}
        </div>
        <div className="truncate text-[14px] font-bold text-ink">{value}</div>
      </div>
    </a>
  );
}

function FAQItem({
  num,
  question,
  answer,
  open,
  onToggle,
}: {
  num: number;
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
        className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors md:py-7"
      >
        <span className="flex items-start gap-5">
          <span
            className={[
              "mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.22em] transition-colors",
              open ? "text-brand-orange" : "text-gray-lt",
            ].join(" ")}
          >
            {String(num).padStart(2, "0")}
          </span>
          <span
            className={[
              "text-[18px] font-black leading-[1.2] tracking-[-0.015em] transition-colors md:text-[22px]",
              open ? "text-brand-orange" : "text-ink group-hover:text-brand-blue",
            ].join(" ")}
          >
            {question}
          </span>
        </span>
        <span
          className={[
            "mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all md:h-8 md:w-8",
            open
              ? "rotate-45 border-brand-orange bg-brand-orange text-white"
              : "border-ink/15 text-ink group-hover:border-brand-orange",
          ].join(" ")}
        >
          <Plus size={14} strokeWidth={2.5} />
        </span>
      </button>

      {/* Answer */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: open ? "320px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="pb-6 pl-12 pr-12 text-[14.5px] leading-[1.65] text-gray md:text-[15.5px] md:pb-8">
          {answer}
        </p>
      </div>
    </div>
  );
}
