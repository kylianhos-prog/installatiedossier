import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import BlogExplorer from "@/components/marketing/BlogExplorer";
import { getAllPosts, getFeaturedPost } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog - Kennisbank voor installateurs | Installatiedossier",
  description:
    "Praktische kennis over Wkb, SCIOS, NEN 1010 en het digitaliseren van je opleverdossier. Geschreven voor installatiebedrijven.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const allPosts = getAllPosts();

  const isOrange = featured.accent === "orange";
  const accentVar = isOrange
    ? "var(--color-brand-orange)"
    : "var(--color-brand-blue)";
  const chip = isOrange
    ? "bg-brand-orange-lt text-brand-orange"
    : "bg-brand-blue-lt text-brand-blue";

  return (
    <main className="bg-white">
      <Navbar />

      {/* ─── Page header ─────────────────────────────── */}
      <section className="blueprint relative overflow-hidden bg-white px-5 pb-12 pt-16 md:px-12 md:pb-16 md:pt-24 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
              <span className="block h-2.5 w-2.5 bg-brand-orange" />
              Kennisbank
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-[rgba(13,15,26,0.24)]">
              ID / BLOG
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <h1 className="h-section text-ink">
              Kennis voor <span className="hl-stroke">installateurs</span>.
            </h1>
            <p className="max-w-[48ch] text-[15.5px] leading-[1.65] text-gray md:text-[16.5px]">
              Praktische artikelen over Wkb, SCIOS, NEN 1010 en het
              digitaliseren van je oplevering. Geen theorie - gewoon wat werkt
              op de bouwplek.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Featured post ───────────────────────────── */}
      <section className="relative bg-white px-5 pb-16 md:px-12 md:pb-20 lg:px-20">
        <Link
          href={`/blog/${featured.slug}`}
          className="reveal group relative mx-auto grid max-w-[1440px] grid-cols-1 overflow-hidden rounded-[22px] border border-border bg-white transition-all duration-300 hover:-translate-y-1 lg:grid-cols-[1.1fr_1fr]"
          style={{
            boxShadow:
              "0 1px 0 rgba(13,15,26,0.04), 0 30px 60px -28px rgba(13,15,26,0.18)",
          }}
        >
          {/* Copy */}
          <div className="order-2 flex flex-col p-8 md:p-12 lg:order-1">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${chip}`}
              >
                {featured.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-gray-lt">
                <BookOpen size={12} /> Uitgelicht
              </span>
            </div>

            <h2 className="mt-6 text-[26px] font-black leading-[1.08] tracking-[-0.025em] text-ink md:text-[36px]">
              {featured.title}
            </h2>

            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.65] text-gray md:text-[16.5px]">
              {featured.excerpt}
            </p>

            <div className="mt-auto flex items-center gap-3 pt-8">
              <span
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-black text-white"
                style={{ background: featured.author.color }}
              >
                {featured.author.initials}
              </span>
              <div className="leading-tight">
                <div className="text-[13.5px] font-bold text-ink">
                  {featured.author.name}
                </div>
                <div className="text-[12px] text-gray">
                  {featured.dateLabel} · {featured.readingTime}
                </div>
              </div>
              <span
                className="ml-auto inline-flex items-center gap-2 text-[14px] font-bold"
                style={{ color: accentVar }}
              >
                Lees artikel
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>

          {/* Cover image */}
          <div className="relative order-1 min-h-[260px] overflow-hidden lg:order-2 lg:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.image}
              alt={featured.imageAlt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(13,15,26,0.22) 0%, transparent 50%)",
              }}
            />
          </div>
        </Link>
      </section>

      {/* ─── Explorer (filters + grid + sidebar) ─────── */}
      <BlogExplorer posts={allPosts} allPosts={allPosts} />

      <Footer />
      <RevealMount />
    </main>
  );
}
