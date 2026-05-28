import type { ReactNode } from "react";

/* ════════════════════════════════════════════════════════
   SECTION HEADER - editorial "technical document" stijl.
   Label + index op een hairline-rule, grote kop eronder.
   Vervangt de generieke gecentreerde eyebrow-pill.
   ════════════════════════════════════════════════════════ */

type SectionHeaderProps = {
  /** Sectie-index, bv. "03" */
  index: string;
  /** Totaal aantal hoofdstukken, bv. "08" */
  total?: string;
  /** Mono-label, bv. "Functies" */
  label: string;
  /** Grote kop (mag JSX met accent-spans bevatten) */
  title: ReactNode;
  /** Subtekst rechts/onder */
  sub?: ReactNode;
  /** Donkere achtergrond? */
  light?: boolean;
  /** Accentkleur van het label-vierkant + index */
  tone?: "orange" | "blue";
  /** Extra actie rechts naast de titel (bv. een toggle) */
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  index,
  total = "07",
  label,
  title,
  sub,
  light = false,
  tone = "orange",
  action,
  className = "",
}: SectionHeaderProps) {
  const accent = tone === "orange" ? "var(--color-brand-orange)" : "var(--color-brand-blue)";
  const ruleColor = light ? "rgba(255,255,255,0.14)" : "var(--color-border)";
  const labelColor = light ? "rgba(255,255,255,0.62)" : "var(--color-gray)";
  const indexColor = light ? "rgba(255,255,255,0.32)" : "rgba(13,15,26,0.24)";
  const totalColor = light ? "rgba(255,255,255,0.20)" : "rgba(13,15,26,0.14)";

  return (
    <div className={className}>
      {/* Index row on a hairline rule */}
      <div className="flex items-center gap-4">
        <span
          className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: labelColor }}
        >
          <span
            className="block h-2.5 w-2.5"
            style={{ background: accent }}
          />
          {label}
        </span>
        <span
          className="h-px flex-1"
          style={{ background: ruleColor }}
        />
        <span
          className="whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.22em] tabular-nums"
          style={{ color: indexColor }}
        >
          {index}
          <span style={{ color: totalColor }}> / {total}</span>
        </span>
      </div>

      {/* Title + sub */}
      <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <h2 className={light ? "h-section text-white" : "h-section text-ink"}>
          {title}
        </h2>
        {(sub || action) && (
          <div className="flex flex-col gap-5">
            {sub && (
              <p
                className="max-w-[48ch] text-[15.5px] leading-[1.65] md:text-[16.5px]"
                style={{
                  color: light ? "rgba(255,255,255,0.62)" : "var(--color-gray)",
                }}
              >
                {sub}
              </p>
            )}
            {action}
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   Legacy eyebrow - pill stijl. Behouden voor backward-compat
   (Hero gebruikt SectionEyebrowLeft).
   ════════════════════════════════════════════════════════ */

type SectionEyebrowProps = {
  children?: ReactNode;
  tone?: "orange" | "blue";
  withDivider?: boolean;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  num?: string;
  eyebrow?: string;
  total?: string;
};

export function SectionEyebrow({
  children,
  tone = "orange",
  withDivider = false,
  align = "center",
  className = "",
  eyebrow,
}: SectionEyebrowProps) {
  const content = children ?? eyebrow ?? "";
  const pillStyles =
    tone === "orange"
      ? "border-brand-orange/20 bg-brand-orange-lt text-brand-orange"
      : "border-brand-blue/20 bg-brand-blue-lt text-brand-blue";
  const dividerColor = tone === "orange" ? "bg-brand-orange" : "bg-brand-blue";

  if (align === "left") {
    return (
      <span
        className={[
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]",
          pillStyles,
          className,
        ].join(" ")}
      >
        <span aria-hidden="true">✦</span>
        {content}
      </span>
    );
  }

  return (
    <div className={["flex flex-col items-center gap-3", className].join(" ")}>
      {withDivider && (
        <span aria-hidden="true" className={`block h-[3px] w-12 rounded-full ${dividerColor}`} />
      )}
      <span
        className={[
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]",
          pillStyles,
        ].join(" ")}
      >
        <span aria-hidden="true">✦</span>
        {content}
      </span>
    </div>
  );
}

export function SectionEyebrowLeft({
  children,
  tone = "orange",
}: {
  children: ReactNode;
  tone?: "orange" | "blue";
}) {
  return (
    <SectionEyebrow tone={tone} align="left">
      {children}
    </SectionEyebrow>
  );
}

/* Legacy no-ops */
export function Vuistregel(_props: {
  children?: ReactNode;
  light?: boolean;
  className?: string;
}): null {
  return null;
}
export function CornerMarks(_props: { light?: boolean }): null {
  return null;
}
