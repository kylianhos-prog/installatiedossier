import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import LogoStrip from "@/components/marketing/LogoStrip";
import Problem from "@/components/marketing/Problem";
import StatsBand from "@/components/marketing/StatsBand";
import PraktijkBand from "@/components/marketing/PraktijkBand";
import Features from "@/components/marketing/Features";
// HowItWorks removed - the hero already shows "Plak QR → Klant scant → Heel dossier"
// as flow chips. The dedicated section repeated the same 3 steps without depth.
import Showcase from "@/components/marketing/Showcase";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import QrHighlight from "@/components/marketing/QrHighlight";
import Testimonials from "@/components/marketing/Testimonials";
import LeadMagnet from "@/components/marketing/LeadMagnet";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import CallToAction from "@/components/marketing/CallToAction";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import ScrollProgressNav from "@/components/marketing/ScrollProgressNav";

/**
 * Pagina-opbouw volgens de TIPS-formule (IMU / Winstgevende Website Formule):
 *
 *   T · Tempt     → Hero, LogoStrip, Problem (pain)
 *   I · Influence → StatsBand (autoriteit), Testimonials
 *   P · Persuade  → Features (USPs), Showcase (3 portalen)
 *   S · Sell      → LeadMagnet (weggever), Pricing, FAQ, CallToAction
 */
export default function HomePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ─── TEMPT - verleiden ──────────────────────── */}
      <Hero />
      <LogoStrip />
      <Problem />

      {/* ─── INFLUENCE - autoriteit + social proof ──── */}
      <StatsBand />
      <PraktijkBand />

      {/* ─── PERSUADE - overtuigen ──────────────────── */}
      <Features />
      <Showcase />
      <ProductShowcase />
      <QrHighlight />
      <Testimonials />

      {/* ─── SELL - verkopen ────────────────────────── */}
      <LeadMagnet />
      <Pricing />
      <FAQ />
      <CallToAction />

      <Footer />
      <ScrollProgressNav />
      <RevealMount />
    </main>
  );
}
