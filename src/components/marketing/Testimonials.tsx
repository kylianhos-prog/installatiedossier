import { Quote, Star, Wrench, Wind, Flame } from "lucide-react";
import { SectionHeader } from "./SectionChrome";

const testimonials = [
  {
    quote:
      "We hebben uitgerekend wat we kwijt waren aan zoekwerk en herinspecties. Ruim €1.500 per maand. Dit ding kost €89. De rest is wiskunde.",
    name: "Otto E.",
    role: "Eigenaar · installatiebedrijf",
    location: "Regio Apeldoorn · 8 monteurs",
    avatar: "O",
    icon: Wrench,
    color: "#E8692C",
    stats: [
      { label: "Administratietijd", value: "-62%" },
      { label: "Eerste dossier live", value: "11:42" },
    ],
    featured: true,
  },
  {
    quote:
      "Twee servicebeurten binnen via gescande stickers bij klussen uit 2022. Het ding verdient zich terug terwijl ik koffie zet.",
    name: "Joep d.B.",
    role: "Mede-eigenaar · klimaattechniek",
    location: "Regio Rotterdam · 14 monteurs",
    avatar: "J",
    icon: Wind,
    color: "#2A5CBA",
    stats: [
      { label: "Service-omzet", value: "+18%" },
      { label: "Klanten gescand", value: "82%" },
    ],
  },
  {
    quote:
      "Eerst gedacht: tóch maar een tool erbij. Maar mijn klanten denken dat ik het zelf gebouwd heb - eigen subdomein, eigen logo, eigen kleur.",
    name: "Marco V.",
    role: "ZZP · warmtepomp-specialist",
    location: "Regio Utrecht · 1 monteur",
    avatar: "M",
    icon: Flame,
    color: "#0E8A4A",
    stats: [
      { label: "Setup-tijd", value: "1 uur" },
      { label: "Eerste klant", value: "Dag 2" },
    ],
  },
] as const;

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
          label="In de praktijk"
          tone="orange"
          title={
            <>
              Wat installateurs<br />
              <span className="hl-stroke">echt</span> zeggen.
            </>
          }
          sub={
            <>
              <span className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-brand-orange"
                    fill="currentColor"
                  />
                ))}
                <span className="ml-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gray">
                  4.9 / 5 · 187 reviews
                </span>
              </span>
              <span className="mt-3 block">
                Niet onze marketing - hun woorden. Drie klanten, drie maten
                bedrijf, hetzelfde resultaat.
              </span>
            </>
          }
        />

        <div className="reveal-group grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  location,
  icon: Icon,
  color,
  stats,
  featured,
}: {
  quote: string;
  name: string;
  role: string;
  location: string;
  icon: typeof Wrench;
  color: string;
  stats: readonly { label: string; value: string }[];
  featured?: boolean;
  index: number;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[20px] border bg-white p-7 transition-all duration-300 hover:-translate-y-1 md:p-8",
        featured ? "border-brand-orange/40" : "border-border",
      ].join(" ")}
      style={{
        boxShadow: featured
          ? "0 1px 0 rgba(13,15,26,0.04), 0 30px 60px -20px rgba(232,105,44,0.20)"
          : "0 1px 0 rgba(13,15,26,0.04), 0 16px 40px -16px rgba(13,15,26,0.08)",
      }}
    >
      {/* Decorative quote icon */}
      <div className="absolute -right-2 -top-2 opacity-[0.06]">
        <Quote size={120} className="rotate-180" strokeWidth={1.5} />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={14}
            className="text-brand-orange"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="relative mt-5 text-[15.5px] font-medium leading-[1.55] text-ink md:text-[17px]">
        <span className="text-brand-orange">"</span>
        {quote}
        <span className="text-brand-orange">"</span>
      </blockquote>

      {/* Stats */}
      <div className="relative mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-mono text-[9.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
              {s.label}
            </div>
            <div
              className="mt-1 font-black tabular-nums tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Author */}
      <div className="relative mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: color }}
        >
          <Icon size={18} strokeWidth={2.2} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[14.5px] font-bold text-ink">
            {name}
          </div>
          <div className="truncate text-[12px] text-gray">{role}</div>
          <div className="truncate font-mono text-[10px] uppercase tracking-widest text-gray-lt">
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}
