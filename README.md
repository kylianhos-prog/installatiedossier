# Installatiedossier — Website

De marketingsite voor Installatiedossier.nl, los van de software (`instadocu-master/`).

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **TypeScript**
- **Satoshi** (via Fontshare CDN) — brand-font
- **lucide-react** — icoonset

Geen backend. Geen auth. Geen database. Alleen marketing.

## Eerste keer opstarten

```bash
cd ~/Desktop/installatiedossier.nl/installatiedossier-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project-structuur

```
installatiedossier-website/
├── public/                 # statische assets (logo's, foto's, favicon)
│   ├── brand.png           # full-color logo voor donkere bg
│   ├── brand-light.png     # logo voor lichte bg
│   ├── logo-on-light.png   # primair logo (Navbar)
│   ├── photo-installateurs.webp  # team-foto
│   └── images/
│       ├── Monogram.png
│       └── partners/       # partner-logo's voor de logostrip
├── src/
│   ├── app/
│   │   ├── globals.css     # design tokens via Tailwind @theme
│   │   ├── layout.tsx      # root layout + metadata
│   │   └── page.tsx        # homepage compositie
│   └── components/
│       └── marketing/
│           ├── Navbar.tsx
│           ├── Hero.tsx
│           ├── LogoStrip.tsx
│           ├── Footer.tsx
│           └── Reveal.tsx  # scroll-reveal helper
├── package.json
└── tsconfig.json
```

## Design-tokens

Gedefinieerd in `src/app/globals.css` via `@theme`. Gebruik in Tailwind als:

| Token | Gebruik | Kleur |
| --- | --- | --- |
| `bg-brand-blue` / `text-brand-blue` | Primaire merk-blauw | `#2A5CBA` |
| `bg-brand-orange` / `text-brand-orange` | Accent / CTA | `#E8692C` |
| `bg-cream` | Zachte achtergrond | `#F7F4F0` |
| `bg-ink` / `text-ink` | Donkere tekst / footer | `#0D0F1A` |
| `text-gray` | Body-tekst | `#6B7280` |
| `border-border` | Standaard rand | `#E5E7EB` |

## Volgende stappen

De homepage (`src/app/page.tsx`) heeft nu:

- ✅ Navbar (sticky, mobile menu)
- ✅ Hero (kop + dossier-card-stack)
- ✅ LogoStrip (partner-row)
- ✅ Footer (4-kolom, CTA-bovenkant)

Nog te bouwen — wachten op groen licht:

- [ ] Probleem-sectie (cost-calculator €1.780 / mnd verlies)
- [ ] Features (3-kolom productverhaal)
- [ ] HowItWorks (Plak / Vul / Klant scant / Audit)
- [ ] ForWho (Beheerder / Monteur / Klant)
- [ ] Showcase (echte product-screenshots uit jullie tool)
- [ ] Testimonials (klantcases)
- [ ] Pricing (€99 / mnd óf 4-tier — keuze open)
- [ ] FAQ
- [ ] Final CTA + demo-formulier

Plus losse pagina's: `/blog`, `/over-ons`, `/wkb`, `/scios`, etc.
