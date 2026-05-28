import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import StickerOrderForm from "@/components/marketing/StickerOrderForm";

export const metadata: Metadata = {
  title: "QR-stickers bestellen | Installatiedossier",
  description:
    "Vraag kant-en-klare, weerbestendige QR-stickers per object aan. Vul je aantal in voor een directe prijsindicatie - je ontvangt daarna een offerte met betaallink.",
};

export default function StickersAanvragenPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="blueprint relative overflow-hidden bg-white px-5 pb-20 pt-16 md:px-12 md:pb-24 md:pt-24 lg:px-20">
        <div className="relative mx-auto max-w-[1320px]">
          {/* Editorial label row */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
              <span className="block h-2.5 w-2.5 bg-brand-orange" />
              Bestellen · QR-stickers
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-[rgba(13,15,26,0.24)]">
              ID / ORDER
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <h1 className="h-section text-ink">
              Bestel je <span className="hl-stroke">QR-stickers</span>.
            </h1>
            <p className="max-w-[48ch] text-[15.5px] leading-[1.65] text-gray md:text-[16.5px]">
              Kant-en-klaar, weerbestendig en met een unieke code per object.
              Vul je aantal in voor een directe indicatie - je ontvangt daarna
              een offerte met betaallink.
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <StickerOrderForm />
          </div>
        </div>
      </section>

      <Footer />
      <RevealMount />
    </main>
  );
}
