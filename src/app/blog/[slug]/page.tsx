import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import RevealMount from "@/components/marketing/Reveal";
import PostCard from "@/components/marketing/PostCard";
import {
  getAllPosts,
  getPost,
  getRelatedPosts,
  type Block,
} from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artikel niet gevonden | Installatiedossier" };
  return {
    title: `${post.title} | Installatiedossier`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const isOrange = post.accent === "orange";
  const accentVar = isOrange
    ? "var(--color-brand-orange)"
    : "var(--color-brand-blue)";
  const chip = isOrange
    ? "bg-brand-orange-lt text-brand-orange"
    : "bg-brand-blue-lt text-brand-blue";
  const related = getRelatedPosts(slug, 2);

  return (
    <main className="bg-white">
      <Navbar />

      {/* ─── Article header ──────────────────────────── */}
      <header className="blueprint relative overflow-hidden bg-white px-5 pb-10 pt-12 md:px-12 md:pb-14 md:pt-16 lg:px-20">
        <div className="relative mx-auto max-w-[760px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gray transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} />
            Terug naar blog
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${chip}`}
            >
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-gray-lt">
              <Clock size={12} /> {post.readingTime} leestijd
            </span>
          </div>

          <h1 className="mt-5 text-[30px] font-black leading-[1.08] tracking-[-0.03em] text-ink md:text-[44px]">
            {post.title}
          </h1>

          <p className="mt-5 text-[17px] leading-[1.6] text-gray md:text-[19px]">
            {post.excerpt}
          </p>

          {/* Author meta */}
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
            <span
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-black text-white"
              style={{ background: post.author.color }}
            >
              {post.author.initials}
            </span>
            <div className="leading-tight">
              <div className="text-[14px] font-bold text-ink">
                {post.author.name}
              </div>
              <div className="text-[12.5px] text-gray">
                {post.author.role} · {post.dateLabel}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Hero image ──────────────────────────────── */}
      <div className="relative bg-white px-5 pb-2 md:px-12 lg:px-20">
        <div
          className="mx-auto max-w-[1040px] overflow-hidden rounded-[20px] border border-border"
          style={{ boxShadow: "0 30px 60px -30px rgba(13,15,26,0.22)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </div>

      {/* ─── Article body ────────────────────────────── */}
      <article className="relative bg-white px-5 pb-20 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-[720px]">
          {post.body.map((block, i) => (
            <BlockRenderer key={i} block={block} accent={accentVar} />
          ))}

          {/* Author bio */}
          <div
            className="mt-14 flex flex-col gap-4 rounded-[18px] border border-border bg-cream p-7 sm:flex-row sm:items-center md:p-8"
            style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
          >
            <span
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-[16px] font-black text-white"
              style={{ background: post.author.color }}
            >
              {post.author.initials}
            </span>
            <div>
              <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
                Geschreven door
              </div>
              <div className="mt-1 text-[16px] font-black tracking-[-0.01em] text-ink">
                {post.author.name}
              </div>
              <div className="text-[13.5px] text-gray">
                {post.author.role} bij Installatiedossier
              </div>
            </div>
          </div>

          {/* Inline CTA */}
          <div
            className="mt-8 flex flex-col items-start gap-5 overflow-hidden rounded-[18px] bg-ink p-7 text-white md:flex-row md:items-center md:justify-between md:p-8"
            style={{ boxShadow: "0 24px 50px -28px rgba(13,15,26,0.45)" }}
          >
            <div className="max-w-[44ch]">
              <h3 className="text-[19px] font-black leading-[1.15] tracking-[-0.02em] md:text-[22px]">
                Zet je dossier vandaag nog op orde.
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-white/65">
                Probeer Installatiedossier 14 dagen gratis - geen creditcard
                nodig.
              </p>
            </div>
            <Link
              href="/#pricing"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-[11px] bg-brand-orange px-5 py-3.5 text-[14px] font-bold text-white shadow-[0_10px_24px_-6px_rgba(232,105,44,0.45)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
            >
              Bekijk de pakketten
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </article>

      {/* ─── Related posts ───────────────────────────── */}
      <section className="blueprint-warm relative overflow-hidden bg-cream px-5 py-20 md:px-12 md:py-24 lg:px-20">
        <div className="relative mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
              <span className="block h-2.5 w-2.5 bg-brand-orange" />
              Lees ook
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <RevealMount />
    </main>
  );
}

/* ════════════════════════════════════════════════════════
   BLOCK RENDERER
   ════════════════════════════════════════════════════════ */
function BlockRenderer({ block, accent }: { block: Block; accent: string }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 text-[23px] font-black leading-[1.2] tracking-[-0.02em] text-ink md:text-[28px]">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-5 text-[16.5px] leading-[1.8] text-ink/80 md:text-[17px]">
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote
          className="my-9 border-l-[3px] pl-6"
          style={{ borderColor: accent }}
        >
          <p className="text-[19px] font-bold leading-[1.45] tracking-[-0.01em] text-ink md:text-[22px]">
            {block.text}
          </p>
          {block.cite && (
            <cite className="mt-3 block font-mono text-[11px] font-bold uppercase not-italic tracking-[0.16em] text-gray">
              - {block.cite}
            </cite>
          )}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mt-6 flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[16.5px] leading-[1.7] text-ink/80 md:text-[17px]"
            >
              <span
                className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0"
                style={{ background: accent }}
              />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}
