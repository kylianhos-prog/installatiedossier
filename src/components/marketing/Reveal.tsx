"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal + count-up engine.
 *
 * - `.reveal`        → fades up when it enters the viewport
 * - `.reveal-group`  → staggers its direct children one-by-one
 * - `[data-countup]` → animates a number from 0 → target on first view
 *
 * Visible-by-default fallback: if JS never runs, nothing stays hidden.
 * Drop <RevealMount /> once anywhere in the page tree.
 */
export default function RevealMount() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const html = document.documentElement;
    const vh = window.innerHeight;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-group")
    );

    /* ── Pre-mark elements already in (or near) the viewport so they
          don't flash when we enable the hidden state. ── */
    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92) el.classList.add("in");
    });

    /* ── Enable the hidden state for everything below the fold. ── */
    if (!prefersReduced) html.classList.add("js-reveal-ready");

    /* ── Reveal observer ── */
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    /* ── Safety net: never leave anything hidden after 2.2s ── */
    const safety = setTimeout(() => {
      targets.forEach((el) => el.classList.add("in"));
    }, 2200);

    /* ─────────────────────────────────────────────
       COUNT-UP - [data-countup] with text like
       "340+", "187K", "2.240", "99,9%", "€1.780"
       ───────────────────────────────────────────── */
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-countup]")
    );

    function parse(raw: string) {
      const prefix = (raw.match(/^[^\d-]*/)?.[0] ?? "").trim();
      const suffix = (raw.match(/[^\d.,\s]*$/)?.[0] ?? "").trim();
      let mult = 1;
      if (/K$/i.test(suffix)) mult = 1000;
      if (/M$/i.test(suffix)) mult = 1_000_000;
      const numStr = raw
        .replace(/[^\d.,]/g, "")
        .replace(/\./g, "")
        .replace(",", ".");
      const target = (parseFloat(numStr) || 0) * mult;
      const decimals = /,/.test(raw) && !/K|M/i.test(suffix) ? 1 : 0;
      return { prefix, suffix, target, mult, decimals };
    }

    function format(value: number, p: ReturnType<typeof parse>) {
      let body: string;
      if (p.mult >= 1000) {
        body = (value / p.mult).toFixed(value / p.mult >= 100 ? 0 : 1);
        body = body.replace(/\.0$/, "");
      } else if (p.decimals) {
        body = value.toFixed(1).replace(".", ",");
      } else {
        body = Math.round(value).toLocaleString("nl-NL");
      }
      return p.prefix + body + p.suffix;
    }

    function runCount(el: HTMLElement) {
      if (el.dataset.counted) return;
      el.dataset.counted = "1";
      const raw = el.dataset.countup || el.textContent || "";
      const p = parse(raw);
      if (!p.target) return;
      if (prefersReduced) {
        el.textContent = raw;
        return;
      }
      // For percentage values (uptime, conversion rates, etc.) animating from 0
      // shows semantically wrong values mid-flight (e.g. "8,5%" uptime). Start
      // close to target so the animation feels like "honing in" not "starting broken".
      const isPercent = /%/.test(raw);
      const startRatio = isPercent ? 0.9 : 0;
      const dur = 1500;
      const start = performance.now();
      function step(now: number) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const value = p.target * (startRatio + (1 - startRatio) * eased);
        el.textContent = format(value, p);
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = raw; // snap to exact original
      }
      requestAnimationFrame(step);
    }

    const countIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            runCount(e.target as HTMLElement);
            countIo.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => countIo.observe(el));

    return () => {
      io.disconnect();
      countIo.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return null;
}
