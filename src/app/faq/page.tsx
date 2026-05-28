import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import FaqExplorer from "@/components/marketing/FaqExplorer";
import { faqGroups, totalFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Veelgestelde vragen | Installatiedossier",
  description:
    "Antwoorden op vragen over Installatiedossier: prijzen, documenten, portalen, beveiliging en techniek. Voor installatiebedrijven in NL en BE.",
};

export default function FaqPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <FaqExplorer groups={faqGroups} total={totalFaqs} />
      <Footer />
      <RevealMount />
    </main>
  );
}
