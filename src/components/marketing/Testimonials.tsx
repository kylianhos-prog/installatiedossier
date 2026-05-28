import { Rocket, MessageCircle, Route, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionChrome";

/* ════════════════════════════════════════════════════════
   "NET BEGONNEN" - eerlijk alternatief voor reviews. We zijn
   net gestart en hebben nog geen klantreviews; in plaats van
   verzonnen quotes tonen we transparantie + early-adopter
   voordelen. Geen nep social proof.
   ════════════════════════════════════════════════════════ */

const perks = [
  {
    icon: Rocket,
    title: "Persoonlijke onboarding",
    body: "We zetten samen je eerste dossier live. Geen wachtrij - direct contact met het team dat het bouwt.",
  },
  {
    icon: MessageCircle,
    title: "Korte lijnen",
    body: "Een vraag of een wens? Je praat rechtstreeks met de makers, niet met een ticketsysteem aan de andere kant van de wereld.",
  },
  {
    icon: Route,
    title: "Jij stuurt de roadmap",
    body: "Als een van de eersten bepaal je mee wat we bouwen. Jouw werkpraktijk is onze blauwdruk.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="blueprint relative overflow-hidden bg-white px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeader
          className="reveal mb-12 md:mb-16"
          index="05"
          label="Net begonnen"
          tone="orange"
          title={
            <>
              Nog geen reviews.<br />
              <span className="hl-stroke">Wel volledige transparantie.</span>
            </>
          }
          sub="We zijn in 2026 van start gegaan. In plaats van verzonnen quotes laten we je liever de échte software zien - en nodigen we je uit om een van de eerste installatiebedrijven te zijn."
        />

        <div className="reveal-group grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-[20px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 md:p-8"
                style={{
                  boxShadow:
                    "0 1px 0 rgba(13,15,26,0.04), 0 16px 40px -16px rgba(13,15,26,0.08)",
                }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-brand-blue-lt text-brand-blue">
                  <Icon size={22} strokeWidth={2.1} />
                </span>
                <h3 className="mt-5 text-[19px] font-black tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-gray">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="reveal mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-[12px] bg-brand-orange px-6 py-3.5 text-[14.5px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
          >
            Word een van de eersten
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#product"
            className="text-[14px] font-bold text-brand-blue hover:underline"
          >
            Of bekijk eerst de software →
          </a>
        </div>
      </div>
    </section>
  );
}
