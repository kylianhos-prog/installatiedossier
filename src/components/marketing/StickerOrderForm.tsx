"use client";

import {
  useMemo,
  useState,
  type ReactNode,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
} from "react";
import { ArrowRight, Check, CheckCircle2, Truck } from "lucide-react";

/* ════════════════════════════════════════════════════════
   STICKER ORDER FORM
   Vlakke prijs: € 10 per sticker, excl. verzendkosten,
   levering binnen 3 werkdagen. Verwerkt GEEN betaling -
   bij versturen volgt een offerte + betaallink.
   ════════════════════════════════════════════════════════ */

const STICKER_PRICE = 10; // per sticker, excl. btw en verzendkosten

const FORMATS = [
  { id: "40", label: "40 × 40 mm" },
  { id: "50", label: "50 × 50 mm (aanrader)" },
];

const FINISHES = [
  { id: "vinyl", label: "Gelamineerd vinyl (standaard)" },
  { id: "polyester", label: "Polyester - extra robuust" },
];

const PRESETS = [10, 25, 50, 100];

const eur = (n: number) =>
  "€ " + n.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function StickerOrderForm() {
  const [qty, setQty] = useState(25);
  const [finish, setFinish] = useState("vinyl");
  const [branding, setBranding] = useState(false);
  const [sent, setSent] = useState(false);

  const calc = useMemo(() => {
    const q = Math.max(1, Number.isFinite(qty) ? qty : 0);
    return { q, total: q * STICKER_PRICE };
  }, [qty]);

  if (sent) {
    return (
      <div
        className="rounded-[20px] border border-border bg-white p-8 text-center md:p-12"
        style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/15 text-[#10B981]">
          <CheckCircle2 size={28} strokeWidth={2.2} />
        </span>
        <h2 className="mt-5 text-[24px] font-black tracking-[-0.02em] text-ink md:text-[28px]">
          Bedankt - je aanvraag staat klaar
        </h2>
        <p className="mx-auto mt-3 max-w-[46ch] text-[15px] leading-[1.6] text-gray">
          We sturen je binnen 1 werkdag een offerte met betaallink. Er wordt nu
          niets afgeschreven. Na akkoord drukken we je stickers en heb je ze
          binnen 3 werkdagen in huis.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-[11px] border border-ink bg-white px-5 py-3 text-[14px] font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
        >
          Nieuwe aanvraag
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-8">
      {/* ── Form ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="rounded-[20px] border border-border bg-white p-7 md:p-8"
        style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
      >
        {/* Aantal */}
        <FieldLabel>Aantal stickers</FieldLabel>
        <div className="flex flex-wrap items-center gap-2.5">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value || "0", 10))}
            className="w-28 rounded-[11px] border border-border bg-white px-4 py-3 text-[15px] font-bold tabular-nums text-ink focus:border-brand-orange focus:outline-none"
          />
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setQty(n)}
                className={[
                  "rounded-full border px-3.5 py-2 text-[13px] font-bold transition-all",
                  qty === n
                    ? "border-brand-orange bg-brand-orange-lt text-brand-orange"
                    : "border-border bg-white text-gray hover:border-ink hover:text-ink",
                ].join(" ")}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Formaat + afwerking */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel>Formaat</FieldLabel>
            <Select defaultValue="50" name="formaat">
              {FORMATS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <FieldLabel>Afwerking</FieldLabel>
            <Select
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              name="afwerking"
            >
              {FINISHES.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Branding */}
        <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-[12px] border border-border bg-cream/50 p-4 transition-colors hover:border-ink/20">
          <input
            type="checkbox"
            checked={branding}
            onChange={(e) => setBranding(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-brand-orange"
          />
          <span className="text-[13.5px] leading-snug text-ink">
            <span className="font-bold">Eigen huisstijl</span> - logo en kleur op
            de sticker
          </span>
        </label>

        {/* Contact */}
        <div className="mt-7 border-t border-border pt-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <FieldLabel>Bedrijfsnaam</FieldLabel>
              <Input required name="bedrijf" placeholder="Installatiebedrijf" />
            </div>
            <div>
              <FieldLabel>Naam</FieldLabel>
              <Input required name="naam" placeholder="Jouw naam" />
            </div>
            <div>
              <FieldLabel>E-mail</FieldLabel>
              <Input
                required
                type="email"
                name="email"
                placeholder="naam@bedrijf.nl"
              />
            </div>
            <div>
              <FieldLabel>Telefoon (optioneel)</FieldLabel>
              <Input type="tel" name="telefoon" placeholder="06 ..." />
            </div>
          </div>
          <div className="mt-5">
            <FieldLabel>Bezorgadres / opmerkingen (optioneel)</FieldLabel>
            <textarea
              name="opmerkingen"
              rows={3}
              placeholder="Bezorgadres, gewenste leverdatum of een specifiek subdomein."
              className="w-full rounded-[11px] border border-border bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-gray-lt focus:border-brand-orange focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-brand-orange px-6 py-4 text-[15px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk sm:w-auto"
        >
          Aanvraag versturen
          <ArrowRight size={16} />
        </button>
        <p className="mt-3 text-[12px] text-gray-lt">
          Je ontvangt eerst een offerte met betaallink. Er wordt nu niets
          afgeschreven.
        </p>
      </form>

      {/* ── Live samenvatting ── */}
      <aside
        className="rounded-[20px] border border-border bg-white p-7 lg:sticky lg:top-24"
        style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
      >
        <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
          Jouw indicatie
        </div>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-[40px] font-black leading-none tracking-[-0.04em] tabular-nums text-ink md:text-[48px]">
            {eur(calc.total)}
          </span>
        </div>
        <div className="mt-1.5 text-[13px] text-gray">
          {calc.q} stickers · {eur(STICKER_PRICE)} per stuk
        </div>
        <div className="mt-1 text-[12px] text-gray-lt">
          excl. btw en verzendkosten
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-blue-lt px-3 py-1.5 text-[12px] font-bold text-brand-blue">
          <Truck size={13} />
          Levering binnen 3 werkdagen
        </div>

        <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
          {[
            "Unieke QR-code per object",
            "Weerbestendig & krasvast",
            "Geprint en toegestuurd door ons",
            "Eigen huisstijl optioneel",
          ].map((it) => (
            <li
              key={it}
              className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink"
            >
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                <Check size={10} strokeWidth={3.5} />
              </span>
              {it}
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-border pt-5 text-[11.5px] leading-[1.55] text-gray-lt">
          Indicatie excl. btw en verzendkosten. De definitieve prijs staat in je
          offerte.
        </p>
      </aside>
    </div>
  );
}

/* ── Kleine velden-helpers ── */
function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <label className="mb-2 block font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-gray-lt">
      {children}
    </label>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-[11px] border border-border bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-gray-lt focus:border-brand-orange focus:outline-none"
    />
  );
}

function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full appearance-none rounded-[11px] border border-border bg-white px-4 py-3 pr-10 text-[14.5px] font-medium text-ink focus:border-brand-orange focus:outline-none"
      >
        {props.children}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-lt">
        ▾
      </span>
    </div>
  );
}
