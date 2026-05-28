import type { ReactNode } from "react";

/* ════════════════════════════════════════════════════════
   BROWSER FRAME - chrome rond een product-mockup zodat het
   als een echte schermafbeelding leest.
   ════════════════════════════════════════════════════════ */

export default function BrowserFrame({
  url = "installatiedossier.nl/dashboard",
  children,
  className = "",
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-[14px] border border-black/10 bg-white",
        className,
      ].join(" ")}
      style={{
        boxShadow:
          "0 1px 0 rgba(13,15,26,0.04), 0 40px 80px -28px rgba(13,15,26,0.45)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-border bg-cream/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 hidden flex-1 sm:block">
          <div className="mx-auto max-w-[300px] truncate rounded-md border border-border bg-white px-3 py-1 text-center font-mono text-[10px] text-gray-lt">
            {url}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
