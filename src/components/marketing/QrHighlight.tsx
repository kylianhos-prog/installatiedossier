import Link from "next/link";
import { ArrowRight, Printer } from "lucide-react";
import QrLabel from "./QrLabel";

/* ════════════════════════════════════════════════════════
   QR-HIGHLIGHT - opvallende donkere band met het echte
   QR-label, doorverwijzing naar de printgids + bestelpagina.
   ════════════════════════════════════════════════════════ */

const qrSteps = [
  {
    n: "01",
    title: "Plak de sticker",
    body: "Eén QR in de meterkast, gekoppeld aan het object.",
  },
  {
    n: "02",
    title: "Klant scant",
    body: "Met de telefoon - geen app, geen login.",
  },
  {
    n: "03",
    title: "Dossier verschijnt",
    body: "Tekeningen, keuringen en onderhoud, direct in beeld.",
  },
];

export default function QrHighlight() {
  return (
    <section
      id="qr"
      className="relative overflow-hidden mesh-dark grain text-white"
    >
      {/* Top + bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Label row */}
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
            <span className="block h-2.5 w-2.5 bg-brand-orange" />
            QR-stickers
          </span>
          <span className="h-px flex-1 bg-white/[0.12]" />
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 md:mt-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Copy */}
          <div>
            <h2 className="h-section text-white">
              Eén sticker.<br />
              <span className="hl-stroke">Heel het dossier.</span>
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-[1.65] text-white/65 md:text-[17px]">
              De QR-code op de meterkast ontsluit alles - geen app, geen login.
              Print de stickers zelf met de juiste printer, of laat ze
              weerbestendig door ons drukken en toesturen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/qr-codes-printen"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-brand-orange px-6 py-3.5 text-[14.5px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
              >
                <Printer size={16} />
                Zo print je de QR-codes
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/stickers-aanvragen"
                className="group inline-flex items-center gap-2 rounded-[12px] border border-white/20 bg-white/[0.04] px-6 py-3.5 text-[14.5px] font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08]"
              >
                Of bestel ze kant-en-klaar
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/45">
              <span>€ 10 per sticker</span>
              <span className="text-white/20">·</span>
              <span>Levering binnen 3 werkdagen</span>
            </div>
          </div>

          {/* Echt QR-label met glow */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-0"
              style={{
                background:
                  "radial-gradient(closest-side at 55% 50%, rgba(232,105,44,0.28), transparent 72%)",
                filter: "blur(44px)",
              }}
            />
            <QrLabel className="relative rotate-[-1.5deg]" />
          </div>
        </div>

        {/* Zo werkt de QR-code - mini stappen */}
        <div className="mt-12 border-t border-white/10 pt-8 md:mt-16">
          <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-white/40">
            Zo werkt de QR-code
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {qrSteps.map((s) => (
              <div key={s.n} className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] border border-brand-orange/45 bg-white/[0.04] font-mono text-[12px] font-bold text-brand-orange">
                  {s.n}
                </span>
                <div>
                  <div className="text-[14.5px] font-bold text-white">
                    {s.title}
                  </div>
                  <div className="mt-0.5 text-[13px] leading-[1.5] text-white/55">
                    {s.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
