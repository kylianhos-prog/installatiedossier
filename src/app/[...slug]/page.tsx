import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import { getAllPageSlugs, getPageContent } from "@/lib/pages";

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  return getAllPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageContent(slug);
  if (!page) return { title: "Pagina niet gevonden | Installatiedossier" };
  return {
    title: `${page.title} | Installatiedossier`,
    description: page.intro,
  };
}

export default async function MarketingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getPageContent(slug);
  if (!page) notFound();

  const isOrange = (page.tone ?? "orange") === "orange";
  const accentVar = isOrange
    ? "var(--color-brand-orange)"
    : "var(--color-brand-blue)";
  const squareClass = isOrange ? "bg-brand-orange" : "bg-brand-blue";

  return (
    <main className="bg-white">
      <Navbar />

      {/* ─── Header ──────────────────────────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 pb-12 pt-16 md:px-12 md:pb-16 md:pt-24 lg:px-20">
        <div className="relative mx-auto max-w-[1040px]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
              <span className={`block h-2.5 w-2.5 ${squareClass}`} />
              {page.kicker}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-[rgba(13,15,26,0.24)]">
              ID / {page.kicker.toUpperCase()}
            </span>
          </div>

          <h1 className="mt-8 text-[32px] font-black leading-[1.06] tracking-[-0.03em] text-ink md:text-[48px]">
            {page.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-[16.5px] leading-[1.65] text-gray md:text-[18px]">
            {page.intro}
          </p>
        </div>
      </section>

      {/* ─── Body ────────────────────────────────────── */}
      {(page.sections?.length || page.cards?.length) && (
        <section className="relative bg-white px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
          <div className="mx-auto max-w-[1040px]">
            {page.sections && page.sections.length > 0 && (
              <div className="flex flex-col gap-12">
                {page.sections.map((s) => (
                  <div key={s.heading} className="reveal">
                    <h2 className="text-[22px] font-black tracking-[-0.02em] text-ink md:text-[26px]">
                      {s.heading}
                    </h2>
                    {s.body && (
                      <p className="mt-4 max-w-[64ch] text-[16px] leading-[1.8] text-ink/80 md:text-[17px]">
                        {s.body}
                      </p>
                    )}
                    {s.bullets && (
                      <ul className="mt-5 flex flex-col gap-3">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-[16px] leading-[1.7] text-ink/80 md:text-[17px]"
                          >
                            <span
                              className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0"
                              style={{ background: accentVar }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Cards grid */}
            {page.cards && page.cards.length > 0 && (
              <div className="reveal-group mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {page.cards.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="group flex flex-col rounded-[18px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[17px] font-black leading-[1.2] tracking-[-0.02em] text-ink">
                        {c.title}
                      </h3>
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-gray transition-colors group-hover:border-ink group-hover:text-ink">
                        <ArrowUpRight size={14} strokeWidth={2.4} />
                      </span>
                    </div>
                    <p className="mt-2.5 text-[13.5px] leading-[1.6] text-gray">
                      {c.body}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── CTA ─────────────────────────────────────── */}
      {page.cta && (
        <section className="relative overflow-hidden mesh-dark grain px-5 py-16 text-white md:px-12 md:py-20 lg:px-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="relative mx-auto flex max-w-[1040px] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[46ch]">
              <h2 className="text-[24px] font-black leading-[1.1] tracking-[-0.02em] md:text-[30px]">
                Klaar om je dossier op orde te krijgen?
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/65">
                14 dagen gratis proberen - geen creditcard nodig.
              </p>
            </div>
            <Link
              href={page.cta.href}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-[12px] bg-brand-orange px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_36px_-8px_rgba(232,105,44,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
            >
              {page.cta.label}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}

      <Footer />
      <RevealMount />
    </main>
  );
}
