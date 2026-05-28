/* ════════════════════════════════════════════════════════
   PRAKTIJK BAND - echte foto's uit het veld. Warmt de pagina
   op en koppelt de software aan het echte installatiewerk.
   Bewust weinig tekst: beeld doet het werk.
   ════════════════════════════════════════════════════════ */

const UNSPLASH = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const shots = [
  {
    id: "1621905251189-08b45d6a269e",
    label: "Op de klus",
    alt: "Monteur werkt aan een elektrische installatie",
  },
  {
    id: "1581092160562-40aa08e78837",
    label: "Tekeningen & schema's",
    alt: "Technische tekeningen en gereedschap op een werktafel",
  },
  {
    id: "1450101499163-c8848c66ca85",
    label: "Oplevering & keuring",
    alt: "Installateur ondertekent een opleverdocument",
  },
];

export default function PraktijkBand() {
  return (
    <section
      id="praktijk"
      className="blueprint-warm relative overflow-hidden bg-cream px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="relative mx-auto max-w-[1440px]">
        {/* Label row */}
        <div className="reveal flex items-center gap-4">
          <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
            <span className="block h-2.5 w-2.5 bg-brand-orange" />
            Uit de praktijk
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="reveal mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <h2 className="h-section text-ink">
            Gebouwd voor<br />
            <span className="hl-stroke">het echte werk.</span>
          </h2>
          <p className="max-w-[44ch] text-[15.5px] leading-[1.65] text-gray md:text-[16.5px]">
            Van de meterkast tot de oplevering - je dossier groeit mee met elke
            klus.
          </p>
        </div>

        {/* Photo grid */}
        <div className="reveal-group mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-14">
          {shots.map((s) => (
            <figure
              key={s.id}
              className="group relative overflow-hidden rounded-[18px] border border-black/[0.06]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(13,15,26,0.04), 0 24px 50px -22px rgba(13,15,26,0.28)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={UNSPLASH(s.id)}
                alt={s.alt}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Kleurbehandeling + leesbare onderlaag */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
              />
              <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange" />
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
