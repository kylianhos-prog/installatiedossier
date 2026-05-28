import {
  FileText,
  Users,
  Smartphone,
  BarChart3,
  Lock,
  QrCode,
} from "lucide-react";
import { SectionHeader } from "./SectionChrome";

const features = [
  {
    icon: FileText,
    title: "Slim documentbeheer",
    body: "Sla op, organiseer en haal alle installatiedocumenten direct op. PDF, DWG, XLSX - elk formaat, volledig doorzoekbaar met slimme auto-tagging.",
  },
  {
    icon: Users,
    title: "Klant- en projectportalen",
    body: "Geef klanten hun eigen merkgebonden portaal met realtime toegang tot documenten, voortgangsfoto's en installatiehandleidingen. Geen mailketens meer.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first veldwerk",
    body: "Je team werkt overal vanaf elk apparaat. Foto's uploaden, werk loggen en opleveringen aftekenen - direct vanaf de bouwplek.",
  },
  {
    icon: BarChart3,
    title: "Rapporten & logboeken",
    body: "Automatische daglogs, inspectierapporten en installatielogboeken. Genereer professionele PDF-rapporten voor klanten in één klik.",
  },
  {
    icon: Lock,
    title: "Rolgebaseerde toegang",
    body: "Stel precieze rechten in voor beheerders, medewerkers en klanten. Gevoelige installatiedocumenten blijven beschermd met enterprise-grade beveiliging.",
  },
  {
    icon: QrCode,
    title: "QR-codes voor elke locatie",
    body: "Genereer QR-codes voor apparatuur en projectlocaties. Direct alerts wanneer klanten documenten bekijken, goedkeuren of becommentariëren.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="blueprint relative overflow-hidden bg-white px-5 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="relative mx-auto max-w-[1320px]">
        <SectionHeader
          className="reveal"
          index="03"
          label="Functies"
          tone="blue"
          title={
            <>
              Gebouwd voor{" "}
              <span className="text-brand-blue">installatieprofessionals</span>
            </>
          }
          sub="Elke functie ontworpen voor de installatie- en bouwbranche - geen generieke software, maar gereedschap dat de norm kent."
        />

        {/* 3×2 uniform grid - cream cards */}
        <div className="reveal-group mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof FileText;
  title: string;
  body: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-[18px] bg-cream p-8 transition-all duration-300 hover:-translate-y-1 md:p-10"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {/* Subtle hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-blue/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Icon tile */}
      <div
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-white text-brand-blue md:h-14 md:w-14"
        style={{
          boxShadow:
            "0 1px 0 rgba(13,15,26,0.04), 0 4px 12px -2px rgba(13,15,26,0.06)",
        }}
      >
        <Icon size={20} strokeWidth={2.2} />
      </div>

      {/* Title */}
      <h3 className="relative mt-7 text-[20px] font-black leading-[1.15] tracking-[-0.02em] text-ink md:text-[22px]">
        {title}
      </h3>

      {/* Body */}
      <p className="relative mt-3 text-[14.5px] leading-[1.6] text-gray md:text-[15px]">
        {body}
      </p>
    </div>
  );
}
