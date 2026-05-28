"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Search, TrendingUp } from "lucide-react";
import type { Post } from "@/lib/posts";
import PostCard from "./PostCard";

const PAGE_SIZE = 6;

const CATEGORY_ORDER = [
  "Wetgeving",
  "Keuringen",
  "Digitalisering",
  "Praktijk",
];

const MOST_READ_VIEWS = ["4.2k", "3.1k", "2.4k", "1.8k"];

export default function BlogExplorer({
  posts,
  allPosts,
}: {
  posts: Post[];
  allPosts: Post[];
}) {
  const [active, setActive] = useState<string>("Alle");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const present = new Set(posts.map((p) => p.category));
    return ["Alle", ...CATEGORY_ORDER.filter((c) => present.has(c))];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = active === "Alle" || p.category === active;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [posts, active, query]);

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;
  const mostRead = allPosts.slice(0, 4);

  function selectCategory(cat: string) {
    setActive(cat);
    setVisible(PAGE_SIZE);
  }

  return (
    <section className="blueprint-warm relative overflow-hidden bg-cream px-5 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="relative mx-auto max-w-[1440px]">
        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gray">
            <span className="block h-2.5 w-2.5 bg-brand-blue" />
            Alle artikelen
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] text-[rgba(13,15,26,0.24)]">
            {String(filtered.length).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
          </span>
        </div>

        {/* Filter bar */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => selectCategory(cat)}
                  className={[
                    "rounded-full border px-4 py-2 text-[13px] font-bold transition-all",
                    isActive
                      ? "border-ink bg-ink text-white"
                      : "border-border bg-white text-gray hover:border-ink hover:text-ink",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-xs lg:w-64">
            <Search
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-lt"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Zoek in artikelen…"
              className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-[13.5px] text-ink placeholder:text-gray-lt focus:border-brand-blue focus:outline-none"
            />
          </div>
        </div>

        {/* Layout: articles + sidebar */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_330px] lg:items-start lg:gap-12 md:mt-12">
          {/* Articles */}
          <div>
            {shown.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                  {shown.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>

                {hasMore && (
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      className="inline-flex items-center gap-2 rounded-full border border-ink bg-white px-6 py-3 text-[14px] font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                    >
                      Meer artikelen
                      <Plus size={15} strokeWidth={2.5} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-[18px] border border-dashed border-border bg-white px-6 py-20 text-center">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gray-lt">
                  Geen resultaten
                </span>
                <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.6] text-gray">
                  Geen artikelen gevonden voor deze selectie. Probeer een ander
                  onderwerp of zoekterm.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActive("Alle");
                    setQuery("");
                    setVisible(PAGE_SIZE);
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5"
                >
                  Toon alle artikelen
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
            {/* Newsletter */}
            <div
              className="relative overflow-hidden rounded-[18px] bg-ink p-6 text-white"
              style={{ boxShadow: "0 20px 44px -26px rgba(13,15,26,0.5)" }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-60 blur-3xl"
                style={{ background: "rgba(232,105,44,0.4)" }}
              />
              <div className="relative">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                  Nieuwsbrief
                </span>
                <h3 className="mt-2.5 text-[18px] font-black leading-[1.2] tracking-[-0.01em]">
                  Krijg artikelen in je inbox
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-white/60">
                  Nieuwe gidsen, één mail per maand. Geen spam, uitschrijven met
                  één klik.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <input
                    type="email"
                    placeholder="naam@installateur.nl"
                    className="w-full rounded-[10px] border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/35 focus:border-brand-orange focus:outline-none"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand-orange px-4 py-2.5 text-[13.5px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dk"
                  >
                    Inschrijven
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Popular topics */}
            <div
              className="rounded-[18px] border border-border bg-white p-6"
              style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
            >
              <h3 className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
                Populaire onderwerpen
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {CATEGORY_ORDER.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => selectCategory(cat)}
                    className={[
                      "rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-all",
                      active === cat
                        ? "border-brand-blue bg-brand-blue-lt text-brand-blue"
                        : "border-border bg-white text-gray hover:border-brand-blue hover:text-brand-blue",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Most read */}
            <div
              className="rounded-[18px] border border-border bg-white p-6"
              style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
            >
              <h3 className="flex items-center gap-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-gray-lt">
                <TrendingUp size={13} className="text-brand-orange" />
                Meest gelezen
              </h3>
              <ol className="mt-4 flex flex-col">
                {mostRead.map((p, i) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex items-start gap-3 border-t border-border py-3.5 first:border-t-0 first:pt-0"
                    >
                      <span className="font-mono text-[13px] font-black tabular-nums text-[rgba(13,15,26,0.18)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13.5px] font-bold leading-[1.3] text-ink transition-colors group-hover:text-brand-orange">
                          {p.title}
                        </span>
                        <span className="mt-1 block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gray-lt">
                          {MOST_READ_VIEWS[i]} weergaven
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            {/* Author spotlight */}
            <div
              className="relative overflow-hidden rounded-[18px] border border-border bg-cream p-6"
              style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-black text-white"
                  style={{ background: "#0E8A4A" }}
                >
                  SW
                </span>
                <div className="leading-tight">
                  <div className="text-[14px] font-black text-ink">
                    Sven de Wit
                  </div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-brand-orange">
                    Oprichter · hoofdauteur
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[13px] leading-[1.6] text-gray">
                Voormalig werkvoorbereider. Schrijft over Wkb, digitalisering en
                de praktijk op de bouwplek - zonder jargon.
              </p>
              <Link
                href="/over-ons"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors hover:text-brand-orange"
              >
                Over het team
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
