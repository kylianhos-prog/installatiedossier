"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#how", label: "Hoe het werkt" },
  { href: "/#features", label: "Product" },
  { href: "/#pricing", label: "Prijzen" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/over-ons", label: "Over ons" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full transition-all duration-300",
          // Translucent glass effect - works over both light AND dark sections.
          // Higher transparency lets the section beneath bleed through, avoiding the harsh white bar over dark hero.
          scrolled
            ? "bg-white/75 backdrop-blur-xl shadow-[0_1px_0_rgba(13,15,26,0.06),0_8px_32px_rgba(0,0,0,0.06)]"
            : "bg-white/40 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center gap-10 px-5 md:px-12 lg:px-20">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
            <Image
              src="/logo-on-light.png"
              alt="Installatiedossier"
              width={220}
              height={48}
              priority
              className="h-9 w-auto md:h-10"
            />
          </Link>

          {/* Desktop links */}
          <nav className="ml-auto hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-gray hover:text-brand-blue transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="ml-auto hidden items-center gap-2.5 lg:ml-0 lg:flex">
            <a
              href="/login"
              className="rounded-[var(--radius-sm)] border border-border bg-transparent px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Inloggen
            </a>
            <a
              href="/#demo"
              className="rounded-[var(--radius-sm)] bg-brand-orange px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(232,105,44,0.3)] transition-all hover:-translate-y-px hover:bg-brand-orange-dk"
            >
              Plan gesprek →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            className="ml-auto lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu sheet */}
      <div
        className={[
          "fixed inset-0 z-40 flex flex-col bg-white p-8 pt-24",
          "transition-all duration-500",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <li key={l.href} className="border-b border-border">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 text-[24px] font-bold text-ink"
              >
                <span>{l.label}</span>
                <span className="font-mono text-xs font-medium tracking-widest text-gray-lt">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3">
          <a
            href="/#demo"
            onClick={() => setOpen(false)}
            className="rounded-[var(--radius-md)] bg-brand-orange px-5 py-4 text-center text-[15px] font-bold text-white"
          >
            Plan een gesprek →
          </a>
          <a
            href="/login"
            onClick={() => setOpen(false)}
            className="rounded-[var(--radius-md)] border border-border px-5 py-4 text-center text-[15px] font-semibold text-ink"
          >
            Inloggen
          </a>
          <div className="mt-4 flex flex-col gap-1 text-xs font-medium uppercase tracking-widest text-gray">
            <a href="mailto:info@installatiedossier.nl">info@installatiedossier.nl</a>
            <a href="tel:+31558080641">+31 (0)55 - 808 06 41</a>
          </div>
        </div>
      </div>

      {/* Mobile sticky conversion bar - verschijnt na scrollen, nooit verstopt achter de hamburger */}
      <div
        className={[
          "fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-border bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden",
          "transition-transform duration-300 ease-out",
          scrolled && !open ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href="/#pricing"
          className="flex-1 rounded-[11px] border border-ink bg-white py-3 text-center text-[14px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Start gratis
        </a>
        <a
          href="/#demo"
          className="flex-1 rounded-[11px] bg-brand-orange py-3 text-center text-[14px] font-bold text-white shadow-[0_6px_18px_-4px_rgba(232,105,44,0.5)]"
        >
          Plan gesprek
        </a>
      </div>
    </>
  );
}
