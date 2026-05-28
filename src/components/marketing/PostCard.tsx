import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const isOrange = post.accent === "orange";
  const chip = isOrange
    ? "bg-brand-orange text-white"
    : "bg-brand-blue text-white";
  const titleHover = isOrange
    ? "group-hover:text-brand-orange"
    : "group-hover:text-brand-blue";
  const arrowHover = isOrange
    ? "group-hover:border-brand-orange group-hover:text-brand-orange"
    : "group-hover:border-brand-blue group-hover:text-brand-blue";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[18px] border border-border bg-white transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 1px 0 rgba(13,15,26,0.04)" }}
    >
      {/* Cover image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,15,26,0.28) 0%, transparent 45%)",
          }}
        />
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] shadow-sm ${chip}`}
        >
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="whitespace-nowrap font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-gray-lt">
          {post.dateLabel} · {post.readingTime}
        </span>

        <h3
          className={`mt-3 text-[18px] font-black leading-[1.18] tracking-[-0.02em] text-ink transition-colors md:text-[20px] ${titleHover}`}
        >
          {post.title}
        </h3>

        <p className="mt-2.5 text-[14px] leading-[1.6] text-gray">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-3 pt-6">
          <span
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white"
            style={{ background: post.author.color }}
          >
            {post.author.initials}
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="truncate text-[13px] font-bold text-ink">
              {post.author.name}
            </div>
            <div className="truncate text-[11.5px] text-gray">
              {post.author.role}
            </div>
          </div>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-gray transition-colors duration-300 ${arrowHover}`}
          >
            <ArrowUpRight
              size={15}
              strokeWidth={2.4}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
