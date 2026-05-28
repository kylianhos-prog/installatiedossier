---
name: Installatiedossier
colors:
  surface: '#FFFFFF'
  surface-cream: '#F7F4F0'
  surface-cream-warm: '#EDE9E3'
  surface-ink: '#0D0F1A'
  surface-ink-2: '#131626'
  surface-ink-3: '#1C2035'
  on-surface: '#0D0F1A'
  on-surface-variant: '#6B7280'
  on-surface-muted: '#9CA3AF'
  on-surface-inverse: '#FFFFFF'
  outline: '#E5E7EB'
  primary: '#E8692C'
  primary-dk: '#C9541C'
  primary-lt: '#FFF0E8'
  on-primary: '#FFFFFF'
  secondary: '#2A5CBA'
  secondary-dk: '#1A3E8C'
  secondary-lt: '#EBF0FA'
  on-secondary: '#FFFFFF'
  success: '#10B981'
  success-bright: '#34D399'
  warning: '#FBBF24'
  danger: '#FF5F57'
  info: '#5B8AFF'
typography:
  display-mass:
    fontFamily: Satoshi
    fontSize: 62px
    fontWeight: '900'
    lineHeight: 65px
    letterSpacing: -0.035em
  display-section:
    fontFamily: Satoshi
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-card:
    fontFamily: Satoshi
    fontSize: 22px
    fontWeight: '900'
    lineHeight: 26px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Satoshi
    fontSize: 16.5px
    fontWeight: '400'
    lineHeight: 27px
    letterSpacing: '0'
  body-base:
    fontFamily: Satoshi
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 23px
    letterSpacing: '0'
  body-bold:
    fontFamily: Satoshi
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 23px
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.22em
  label-pill:
    fontFamily: Satoshi
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.16em
  stat-display:
    fontFamily: Satoshi
    fontSize: 56px
    fontWeight: '900'
    lineHeight: 56px
    letterSpacing: -0.045em
rounded:
  xs: 6px
  sm: 8px
  md: 11px
  lg: 16px
  xl: 20px
  pill: 100px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  section-y-mobile: 96px
  section-y-desktop: 128px
  gutter: 20px
  margin-mobile: 20px
  margin-tablet: 48px
  margin-desktop: 80px
  max-width-content: 1320px
  max-width-wide: 1440px
---

## Brand & Style

Installatiedossier is a B2B SaaS for Dutch and Belgian installation professionals — a digital logbook that connects QR-coded meter cabinets to complete installation records. The brand voice is **dry, confident, and editorial** — like a technical manual written by someone who respects your time. It rejects "playful SaaS pastel" entirely in favor of a **blueprint-meets-Vercel** aesthetic: technical drawing energy fused with modern terminal polish.

The visual language is built on three structural moves: **dark ink panels** that feel like a draftsman's table at night, **warm cream surfaces** with subtle blueprint grids that evoke a printed installation schema, and **decisive orange highlights** that mark exactly where action happens. Where most SaaS marketing reaches for gradient mush and pastel softness, this brand reaches for **monospace labels, hairline rules, and section indices** — every page reads like a chapter in a precision technical document. The metaphor is consistent end-to-end: this is not software, this is **the dossier itself**.

## Colors

The palette anchors on **Ink** (#0D0F1A) — a near-black with a cold blue undertone that powers hero and CTA sections — and **Cream** (#F7F4F0) — a warm, slightly desaturated off-white that replaces neutral grey across all light surfaces. The cream gives the brand its workshop / printed-paper warmth and separates it from cold tech-startup whites.

**Brand Orange** (#E8692C) is the singular action color. It marks: primary CTAs, the eyebrow square on every section header, the underline-stroke under highlighted words, the QR-scan beam, and live status indicators. It is reserved — never decorative. **Brand Blue** (#2A5CBA) is the supporting accent: dashboard KPIs, the "Meest gekozen" pricing ring, secondary chrome, and trustmark elements. Together orange + blue mirror the actual color of a Dutch utility cabinet sticker: orange warning + blue info.

Functional states use **Emerald** (#10B981 / #34D399) for verified/shared statuses, **Amber** (#FBBF24) for warnings, and **Coral Red** (#FF5F57) borrowed from the macOS traffic-light dots that decorate browser-frame mockups.

## Typography

The system is built on **Satoshi** at the entire weight range, with stylistic set `ss01` enabled — this gives the typography a slightly geometric, machined character without losing humanist warmth. Display weight is always **900 (Black)**; body weight defaults to **400** with **700** for emphasis. Tracking is aggressively tight on large headlines (`-0.035em` on H1, `-0.03em` on H2) — every display moment feels carved rather than typed.

A parallel **monospace track** (JetBrains Mono / SF Mono) runs through the entire system as a secondary voice. It appears in: section eyebrow labels, the `01 / 08` chapter indices, KPI metric labels, terminal blocks, technical sub-labels, and timestamp/ID strings. Mono text always sits at 9-11px, uppercase, with 0.18-0.22em tracking — it never tries to compete with the Satoshi voice, it annotates it. This dual-typeface system is what gives the brand its "technical document" feel.

Body copy runs at 15-16.5px with 1.55-1.65 line-height for breathable reading. Headlines use `text-balance` for natural wrapping. A signature move is the **orange highlight-stroke**: a flat orange bar painted under a single word inline (`linear-gradient` underline at 0.16em from the baseline) — used sparingly to mark the rhetorical pivot in a headline.

## Layout & Spacing

The layout uses a **4px baseline grid** with a generous spacing scale. Section vertical rhythm is large — `py-24` (96px) minimum on mobile, scaling to `py-32` (128px) on desktop — every section gets room to breathe. Content max-width is 1320-1440px so on large monitors the layout doesn't sprawl edge-to-edge.

The dominant section layout is a **2-column editorial grid**: a 1.5fr/1fr split where the left column carries the headline (H2 + highlight stroke) and the right column carries either a sub-paragraph, an action toggle, or a key statistic. This pattern repeats across the entire site and is what makes scrolling feel structured rather than random.

Every major section opens with a **chapter strip**: a horizontal hairline rule running edge-to-edge with the section eyebrow (orange square + uppercase mono label) on the left and the section index (`07 / 08`) on the right. This is the brand's strongest structural signature — it makes the marketing site read like a paginated reference document.

Card grids cascade 1 → 2 → 3/4 columns. Edge padding scales 20px → 48px → 80px from mobile to desktop. Touch targets stay at minimum 44px height (mobile) and 48px (desktop). The browser-frame mockup pattern is used wherever a product screenshot appears — never bare screenshots, always framed.

## Elevation & Depth

Depth is conveyed by **stacked surface tints + targeted glow** rather than heavy shadows. The hierarchy:

1. **Base layer**: Solid `Cream` or `Ink` — no shadow.
2. **Card layer**: White on cream with `ring-1 ring-border` + soft 16px/40px black shadow at 6% opacity. Featured/active cards get `ring-2 ring-brand-blue` and a colored shadow (`30px 60px -20px rgba(42,92,186,0.30)`).
3. **Floating element layer**: Hero notification chips and dashboard popovers get layered shadows: a tight 18px shadow at 36% black plus an outer 14px/36% orange or blue tint depending on context — creating a "lit-from-below" effect.
4. **Hero glow**: Behind product mockups, a `radial-gradient` blur (40px filter blur) provides ambient glow without committing to a hard shadow.

On dark sections, surfaces are layered via incremental `white/[0.04]` to `white/[0.08]` translucent layers with thin `border-white/8` outlines — this gives the "etched glass on a draftsman's table" feel without resorting to glassmorphism cliché.

## Shapes

The radius system is **precise, not playful**: 6/8/11/16/20px. The unusual 11px (`md`) is the workhorse — applied to CTAs, chips, KPI cards — and gives a deliberately "engineered" character distinct from the 8/12/16 default scale most SaaS uses. 

Interactive elements (buttons, action chips) use 11px or pill (100px) shapes. Cards and containers use 16-20px. Browser-frame mockups always use 20px outer + 14px inner radius. There are zero sharp 0px corners except in monospace labels and chapter rules.

## Components

### Buttons

Primary CTAs use a solid `brand-orange` fill with white text at weight 700, 11px radius, and a signature shadow: `0 14px 34px -8px rgba(232,105,44,0.55)` — a warm cast directly underneath. On hover: `-translate-y-0.5` lift and shift to `brand-orange-dk` (#C9541C). Secondary CTAs on dark backgrounds use `bg-white/[0.04]` with `border-white/15` and `backdrop-blur-sm`. Tertiary text-links are inline orange with no chrome.

### Cards & Surfaces

Default card: `rounded-[20px] bg-white p-7 ring-1 ring-border`. Featured cards: replace ring with `ring-2 ring-brand-blue` plus slight scale (`md:scale-[1.04]`). Cards on dark sections use `bg-white/[0.04] border-white/10` with inset white/[0.06] top hairline for depth. All cards have `transition-all duration-300 hover:-translate-y-1`.

### Browser-Frame Mockups

The signature product-mockup pattern. A 14-20px rounded white container with a top bar containing three macOS traffic-light dots (#FF5F57 / #FEBC2E / #28C840), a centered monospace title strip, and a hairline bottom border. Drops a layered shadow: `0 1px 0 black/4 inset, 0 30px 60px -20px black/20, 0 60px 120px -40px orange/15`. Used for every dashboard/screen mockup in the marketing.

### Terminal Blocks

A dark `bg-ink` block with monospace text (13.5px), 18px/22px padding, 12px radius, white/92% opacity body text, orange/55% punctuation marks, and accent colors: green (#4ADE80) for success, amber (#FBBF24) for warnings. Used to show config snippets, API responses, technical proof-points.

### Section Header (Chapter Strip)

The repeating structural component: horizontal hairline rule with a 10px orange square + monospace uppercase label on the left, and a `01 / 08` index in mono on the right. Beneath: a large H2 (`h-section`) with the orange highlight-stroke on the rhetorical pivot word, paired with a 48ch sub-paragraph (or toggle/action) to the right in a 1.5fr/1fr grid.

### Flow Chips

Small rounded-full pills (`gap-2 px-3 py-1.5`) with 11.5px uppercase tracked-out text, a 5px icon circle in `brand-orange/20` background, and a connecting arrow between chips. Used in the hero to compress a 3-step product flow into a single scannable row.

### KPI Cards (Dashboard)

10px radius, semi-transparent white surface on dark, with a 9px monospace uppercase label and a 20px tabular-nums weight-900 value. Each card carries a single accent color (orange / blue / emerald) tied to the metric category.

### Highlight Stroke

Not a component but a brand signature: an inline `span` with a flat 0.16em orange bar painted at the baseline via `linear-gradient` — used to mark the single most important word in a headline (e.g., "**perfecte** pakket", "_live_", "Drie **deuren**"). Never used on more than one word per heading.

## Motion

Motion is restrained and meaningful — never decorative. Five core animation patterns:

1. **Reveal-on-scroll**: All major content blocks fade up 24px over 0.7s with cubic-bezier(0.16, 1, 0.3, 1). Children in `reveal-group` stagger by 0.07s. Respects `prefers-reduced-motion`.
2. **Scan-beam**: A 3-pixel orange gradient bar sweeps top-to-bottom across QR mockups every 3.2s with a glow blur — communicates "live scanning". 
3. **Status cycle**: Two text blocks cross-fade with translateY on a 6.4s cycle ("Scannen…" → "Geopend ✓") to show the QR flow's end-state without user input.
4. **Notification slide**: Floating success notifications enter from below, dwell, exit upward over an 8s cycle with a 1.6s initial delay.
5. **Counter / hover**: CTAs lift `-translate-y-0.5` on hover with 0.2s transition. Arrow icons inside buttons shift right by 0.5 on hover.

All motion uses the same cubic-bezier(0.16, 1, 0.3, 1) "natural ease-out" curve. No bouncy, no spring, no rubber-band.

## Background Treatments

Three signature backgrounds repeat across sections:

1. **Blueprint Grid** — A double-layered 38px + 190px line grid in `rgba(42,92,186,0.06)` masked by a radial gradient that fades to transparent at the bottom. Applied to cream sections for the "technical drawing on draftsman paper" effect.
2. **Mesh Warm** — Three radial gradients (orange + blue + orange) layered over a 180° cream gradient, producing a soft, multi-source ambient warmth without committing to a hard color.
3. **Mesh Dark** — Same idea but on ink: subtle radial blooms of orange + blue at 16-18% opacity over an ink gradient. Used in CTA / footer-led sections.
4. **Grain Overlay** — An SVG fractal-noise overlay at 0.04 opacity with `mix-blend-multiply` for subtle paper-texture warmth.

## Voice & Copy Patterns

Headlines follow a **decisive, two-sentence rhythm**: a short declarative + a payoff. Examples: "Eén QR-code op de meterkast. / Heel het dossier in 3 seconden." or "€1.780 verlies. / €99 oplossing." Periods are mandatory at the end of each statement. Em-dashes and en-dashes are never used — always plain hyphens with spaces.

Sub-copy is conversational but never marketing-fluffy: "Geen pitch. Wel een dossier." / "Niet onze marketing - hun woorden." The voice acknowledges the reader's skepticism and answers it.

## Design System Notes for Stitch Generation

### Language to Use

When generating screens for this system, use phrases like:
- "Editorial technical document with chapter strips"
- "Blueprint-grid background on warm cream surface"
- "Hairline rule with monospace section index"
- "Orange highlight stroke under the pivot word"
- "Browser-frame mockup with macOS traffic-light dots"
- "Stacked translucent surfaces on ink, no glassmorphism"
- "Monospace eyebrow + Satoshi black display H2"

### Language to Avoid

- "Playful", "friendly", "approachable" — wrong register
- "Gradient mesh hero" without qualifying it as Stripe-style warm/dark
- "Cards with shadows" — too generic; specify ring-based instead
- "Eyebrow pill" — the pill form is legacy; default to the chapter-strip pattern
- "Colorful icons" — icons should be monochrome with single brand accent

### Component Prompts

Example prompts that produce on-brand screens:

1. *"Hero section: dark ink background with subtle orange+blue radial mesh, chapter strip eyebrow with orange square and monospace label, h-mass display headline in Satoshi 900 weight with one word underlined in orange highlight stroke, three flow chips in a row, two CTAs (solid orange primary with warm shadow + ghost secondary with white/10 border), trust line with avatar stack and star rating, dashboard browser-frame mockup on the right with floating notification card."*

2. *"Pricing section: warm cream surface with blueprint grid background, chapter strip 07 / 08 with orange marker, h-section headline 'Vind het [perfecte] pakket' with orange highlight on 'perfecte', four pricing cards in a row with the second card featured (ring-2 brand-blue, slight scale-up, 'Meest gekozen' chip on top), monospace pricing in tabular nums, check-mark feature lists with orange checks."*

3. *"Testimonial card: white surface with 20px radius and hairline ring border, large stat KPI in tabular-nums display weight at top in either orange or blue, person info at bottom with colored initial avatar (no photo), mono-uppercase location label, subtle hover lift."*

### Incremental Iteration

When iterating, preserve these non-negotiable signatures:
- Chapter-strip section headers with index/total
- Orange-square section markers (never circular)
- Monospace labels at 11px uppercase tracked
- The dual Satoshi + JetBrains Mono typeface system
- Cream + ink as the only background colors
- Orange as the singular action color
- Highlight-stroke under at most one word per headline

Iterate on: card density, mockup styles, chart treatments, micro-interactions, image cropping. Never iterate the brand grammar above.
