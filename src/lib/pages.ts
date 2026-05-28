/* ════════════════════════════════════════════════════════
   CONTENT REGISTRY - alle footer-/marketingpagina's.
   Eén bron, gerenderd door app/[...slug]/page.tsx, zodat geen
   enkele footer-link een dode link is. Elke pagina is een echte,
   indexeerbare landingspagina (goed voor SEO).
   ════════════════════════════════════════════════════════ */

export type PageSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type PageCard = {
  href: string;
  title: string;
  body: string;
};

export type PageContent = {
  slug: string;
  kicker: string;
  title: string;
  intro: string;
  tone?: "orange" | "blue";
  sections?: PageSection[];
  cards?: PageCard[];
  cta?: { label: string; href: string; note?: string };
};

const DEMO_CTA = { label: "Plan een demo", href: "/#demo" } as const;
const START_CTA = { label: "Start gratis", href: "/#pricing" } as const;

export const pages: PageContent[] = [
  /* ───────────────── PRODUCT ───────────────── */
  {
    slug: "functies",
    kicker: "Product",
    tone: "blue",
    title: "Alles wat je nodig hebt voor je dossier",
    intro:
      "Van het eerste document tot de QR-code op de meterkast: Installatiedossier bundelt alles wat een installatiebedrijf nodig heeft om werk vast te leggen, te delen en aantoonbaar te maken.",
    sections: [
      {
        heading: "Slim documentbeheer",
        bullets: [
          "Elk bestandstype: PDF, DWG, XLSX en foto's, volledig doorzoekbaar",
          "Automatische versiebeheer en tagging per documenttype",
          "Gekoppeld aan het object, niet aan een persoon of mailbox",
        ],
      },
      {
        heading: "Klant- en projectportalen",
        bullets: [
          "Eigen subdomein en huisstijl (white-label)",
          "QR-toegang zonder app of login voor je klant",
          "Inzage-logging: zie wanneer een dossier wordt bekeken",
        ],
      },
      {
        heading: "Compliance ingebouwd",
        bullets: [
          "Wkb GVK-1 export in één klik",
          "SCIOS Scope 8 + 10 logboeken",
          "NEN 1010-eindcontrole en BRL 100",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "voor",
    kicker: "Voor wie",
    tone: "orange",
    title: "Gemaakt voor jouw vakgebied",
    intro:
      "Of je nu zzp'er bent of een bedrijf met vijftig monteurs runt - Installatiedossier past zich aan jouw discipline en omvang aan. Kies je situatie.",
    cards: [
      { href: "/voor/zzp", title: "ZZP-installateurs", body: "Professioneel opleveren zonder overhead." },
      { href: "/voor/installatiebedrijven", title: "Installatiebedrijven", body: "Grip op 5 tot 50 monteurs en alle dossiers." },
      { href: "/voor/vve-beheerders", title: "VvE-beheerders", body: "Alle installaties per complex op één plek." },
      { href: "/voor/projectontwikkelaars", title: "Projectontwikkelaars", body: "Oplever- en consumentendossiers per woning." },
      { href: "/voor/elektricien", title: "Elektriciens", body: "NEN 1010-keuringen en meterkastdossiers." },
      { href: "/voor/warmtepomp", title: "Warmtepomp-installateurs", body: "ISDE, F-gassen en onderhoud in één dossier." },
      { href: "/voor/ventilatie", title: "Ventilatie", body: "Inregelrapporten en onderhoudslogboeken." },
      { href: "/voor/sanitair", title: "Sanitair & loodgieters", body: "Leidingschema's en opleverbewijs per pand." },
      { href: "/voor/hvac", title: "HVAC", body: "Complete klimaatinstallaties, compleet vastgelegd." },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "integraties",
    kicker: "Product",
    tone: "blue",
    title: "Werkt samen met je bestaande tools",
    intro:
      "Installatiedossier sluit aan op de software die je al gebruikt. We breiden het aantal koppelingen continu uit - mist er één, dan bouwen we mee via de API.",
    sections: [
      {
        heading: "Beschikbaar",
        bullets: [
          "Microsoft Outlook & Microsoft 365",
          "Google Workspace (Drive, Agenda)",
          "Resend voor transactionele e-mail",
          "Snelstart (boekhouding)",
          "ServiceM8 (planning & service)",
        ],
      },
      {
        heading: "Via de API",
        body: "Met onze REST API koppel je Installatiedossier aan vrijwel elk systeem - van ERP tot je eigen klantportaal.",
      },
    ],
    cta: { label: "Bekijk de API", href: "/api" },
  },
  {
    slug: "roadmap",
    kicker: "Product",
    tone: "orange",
    title: "Publieke roadmap",
    intro:
      "We bouwen in de open lucht. Hieronder zie je waar we nu aan werken en wat eraan komt. Mis je iets? Laat het ons weten.",
    sections: [
      {
        heading: "Nu in ontwikkeling",
        bullets: [
          "Bulk-import van bestaande dossiers via mappenstructuur",
          "Uitgebreide audit-trail met exporteerbaar logboek",
          "Spraak-naar-notitie in de monteurs-app",
        ],
      },
      {
        heading: "Binnenkort",
        bullets: [
          "Tweerichtingskoppeling met Snelstart",
          "Geavanceerde rollen en rechten per project",
          "Klant-pincode per documenttype",
        ],
      },
      {
        heading: "Later",
        bullets: [
          "Engelse en Duitse interface",
          "Mobiele offline-modus 2.0",
          "Open webhooks-platform",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "changelog",
    kicker: "Product",
    tone: "blue",
    title: "Changelog",
    intro:
      "Elke verbetering die we uitbrengen, vind je hier terug. We releasen klein en vaak.",
    sections: [
      {
        heading: "v3.4 - mei 2026",
        bullets: [
          "Nieuw: blueprint-stijl dossieroverzicht",
          "Sneller zoeken over alle documenten",
          "Verbeterde QR-scanpagina op mobiel",
        ],
      },
      {
        heading: "v3.3 - april 2026",
        bullets: [
          "SCIOS Scope 10 logboek toegevoegd",
          "Inzage-meldingen per e-mail",
          "Diverse bugfixes in de oplever-flow",
        ],
      },
      {
        heading: "v3.2 - maart 2026",
        bullets: [
          "White-label kleuren per bedrijf",
          "Export naar ZIP met originelen",
        ],
      },
    ],
  },
  {
    slug: "login",
    kicker: "Account",
    tone: "blue",
    title: "Inloggen",
    intro:
      "Het inlogscherm voor bestaande klanten opent in de applicatie. Nog geen account? Start een gratis proefperiode van 14 dagen - geen creditcard nodig.",
    cta: { label: "Start gratis proefperiode", href: "/#pricing" },
  },

  /* ───────────────── OPLOSSINGEN ───────────────── */
  {
    slug: "voor/zzp",
    kicker: "Oplossing",
    tone: "orange",
    title: "Voor zzp-installateurs",
    intro:
      "Als zelfstandige lever je hetzelfde kwaliteitswerk als de grote bedrijven - en dat mag je dossier laten zien. Met een eigen subdomein oogt je oplevering meteen professioneel.",
    sections: [
      {
        heading: "Waarom zzp'ers kiezen voor Installatiedossier",
        bullets: [
          "Professioneel opleveren met je eigen logo en kleur",
          "Geen overhead: klaar in 15 minuten",
          "Wkb-dossier richting klant in één klik",
          "Betaalbaar pakket vanaf één monteur",
        ],
      },
    ],
    cta: START_CTA,
  },
  {
    slug: "voor/installatiebedrijven",
    kicker: "Oplossing",
    tone: "orange",
    title: "Voor installatiebedrijven",
    intro:
      "Met 5 tot 50 monteurs verlies je zonder structuur al snel grip op je dossiers. Installatiedossier geeft kantoor, monteur en klant elk hun eigen ingang op dezelfde bron.",
    sections: [
      {
        heading: "Grip op je hele operatie",
        bullets: [
          "Audit-trail per dossier en per gebruiker",
          "Rolgebaseerde toegang voor team en klant",
          "Koppelingen met Snelstart en ServiceM8",
          "Document-vervalwaarschuwingen",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "voor/vve-beheerders",
    kicker: "Oplossing",
    tone: "blue",
    title: "Voor VvE-beheerders",
    intro:
      "Beheer je meerdere complexen? Houd alle installaties, keuringen en onderhoudsdossiers per gebouw overzichtelijk bij elkaar - en deel ze met bestuur en bewoners via een QR-code.",
    sections: [
      {
        heading: "Alles per complex",
        bullets: [
          "Installaties en keuringen gebundeld per pand",
          "Onderhoudshistorie altijd terugvindbaar",
          "Inzage voor bestuur zonder gedoe",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "voor/projectontwikkelaars",
    kicker: "Oplossing",
    tone: "blue",
    title: "Voor projectontwikkelaars",
    intro:
      "Lever bij nieuwbouw of renovatie per woning een compleet consumentendossier op. Inclusief Wkb-bewijs, tekeningen en gebruiksaanwijzingen - klaar voor overdracht.",
    sections: [
      {
        heading: "Schaalbaar opleveren",
        bullets: [
          "Consumentendossier (GVK-1) per woning",
          "Eén QR-sticker per meterkast",
          "Overdraagbaar aan koper en VvE",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "voor/elektricien",
    kicker: "Oplossing",
    tone: "orange",
    title: "Voor elektriciens",
    intro:
      "Van NEN 1010-eindcontrole tot het meterkastdossier: leg je elektrawerk vast op de plek waar het gebeurt en lever het aantoonbaar op.",
    sections: [
      {
        heading: "Speciaal voor elektrawerk",
        bullets: [
          "NEN 1010-eindcontrole digitaal invullen",
          "Meterkastdossier achter een QR-code",
          "Keuringsrapporten gekoppeld aan het object",
        ],
      },
    ],
    cta: START_CTA,
  },
  {
    slug: "voor/warmtepomp",
    kicker: "Oplossing",
    tone: "orange",
    title: "Voor warmtepomp-installateurs",
    intro:
      "Warmtepompen vragen om nauwkeurige documentatie: ISDE-aanvragen, F-gassenverklaringen en onderhoud. Houd het allemaal bij elkaar in één dossier per installatie.",
    sections: [
      {
        heading: "Compleet warmtepompdossier",
        bullets: [
          "ISDE-aanvraagblad voor de klant",
          "F-gassenverklaring als template",
          "Onderhoudslogboek per toestel",
        ],
      },
    ],
    cta: START_CTA,
  },
  {
    slug: "voor/ventilatie",
    kicker: "Oplossing",
    tone: "blue",
    title: "Voor ventilatie-installateurs",
    intro:
      "Leg inregelrapporten, metingen en onderhoud per installatie vast. Toon bewoners en opdrachtgevers eenvoudig aan dat het systeem correct is opgeleverd.",
    sections: [
      {
        heading: "Ventilatie, vastgelegd",
        bullets: [
          "Inregelrapporten per woning of unit",
          "Onderhoudslogboek met intervallen",
          "Gebruiksaanwijzing voor de bewoner",
        ],
      },
    ],
    cta: START_CTA,
  },
  {
    slug: "voor/sanitair",
    kicker: "Oplossing",
    tone: "blue",
    title: "Voor sanitair & loodgieters",
    intro:
      "Bewaar leidingschema's, foto's en opleverbewijs per pand. Zo vind je bij een lekkage of verbouwing in seconden terug hoe het ooit is aangelegd.",
    sections: [
      {
        heading: "Altijd terugvindbaar",
        bullets: [
          "Leidingschema's gekoppeld aan het adres",
          "Foto's van de aanleg vóór de wand dichtging",
          "Opleverbewijs richting klant",
        ],
      },
    ],
    cta: START_CTA,
  },
  {
    slug: "voor/hvac",
    kicker: "Oplossing",
    tone: "orange",
    title: "Voor HVAC-installateurs",
    intro:
      "Complete klimaatinstallaties verdienen complete documentatie. Combineer verwarming, koeling en ventilatie in één overzichtelijk dossier per gebouw.",
    sections: [
      {
        heading: "Eén dossier voor het hele klimaat",
        bullets: [
          "Verwarming, koeling en ventilatie gebundeld",
          "Keuringen en logboeken per component",
          "Servicegeschiedenis voor de beheerder",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "oplossingen/wkb-compliance",
    kicker: "Oplossing",
    tone: "orange",
    title: "Wkb-compliance zonder gedoe",
    intro:
      "De Wet kwaliteitsborging vraagt om een aantoonbaar, overdraagbaar dossier. Installatiedossier bouwt dat automatisch op terwijl je werkt.",
    sections: [
      {
        heading: "Van werk naar bewijs",
        bullets: [
          "Consumentendossier (GVK-1) in één klik",
          "Vastleggen op de bouwplek, niet achteraf",
          "Overdraagbaar aan klant en inspecteur via QR",
        ],
      },
    ],
    cta: { label: "Download de Wkb-gids", href: "/wkb-gids" },
  },
  {
    slug: "oplossingen/meterkast-documentatie",
    kicker: "Oplossing",
    tone: "blue",
    title: "Meterkast-documentatie",
    intro:
      "Eén QR-sticker in de meterkast ontsluit het complete dossier van een pand. Geen app, geen login - gewoon scannen en zien.",
    sections: [
      {
        heading: "De meterkast als ingang",
        bullets: [
          "QR-code gekoppeld aan het object",
          "Acht jaar geldig en altijd actueel",
          "Optionele pincode voor gevoelige stukken",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "oplossingen/onderhoudsdossiers",
    kicker: "Oplossing",
    tone: "blue",
    title: "Onderhoudsdossiers",
    intro:
      "Houd de complete onderhoudshistorie per installatie bij. Plan terugkerend onderhoud en zet gescande QR-codes om in nieuwe serviceopdrachten.",
    sections: [
      {
        heading: "Onderhoud dat zichzelf terugverdient",
        bullets: [
          "Volledige servicegeschiedenis per object",
          "Onderhoudsintervallen en herinneringen",
          "Plan-onderhoud-knop voor de klant",
        ],
      },
    ],
    cta: DEMO_CTA,
  },

  /* ───────────────── BRONNEN ───────────────── */
  {
    slug: "kennisbank",
    kicker: "Bronnen",
    tone: "blue",
    title: "Kennisbank & help center",
    intro:
      "Praktische uitleg over alles in Installatiedossier - van je eerste dossier tot geavanceerde koppelingen. Staat je antwoord er niet bij, dan helpt support je binnen 4 uur.",
    sections: [
      {
        heading: "Populaire onderwerpen",
        bullets: [
          "Aan de slag: je eerste dossier in 15 minuten",
          "QR-codes plaatsen en beheren",
          "Wkb-export instellen",
          "Gebruikers en rechten beheren",
        ],
      },
    ],
    cta: { label: "Naar de FAQ", href: "/faq" },
  },
  {
    slug: "wkb-gids",
    kicker: "Bronnen",
    tone: "orange",
    title: "De Wkb-gids voor installateurs",
    intro:
      "Een gratis whitepaper van 18 pagina's met de complete checklist voor het consumentendossier GVK-1: wat moet erin, wat is optioneel, en hoe houdt de inspectie het tegen het licht.",
    sections: [
      {
        heading: "Wat je krijgt",
        bullets: [
          "Volledige GVK-1 documentenlijst",
          "Eindkeuring + handtekening template",
          "ISDE-aanvraagblad en F-gassenverklaring",
          "Drie kant-en-klare templates",
        ],
      },
    ],
    cta: { label: "Ontvang de gids", href: "#nieuwsbrief" },
  },
  {
    slug: "klantverhalen",
    kicker: "Bronnen",
    tone: "orange",
    title: "Klantverhalen",
    intro:
      "Hoe gebruiken installatiebedrijven Installatiedossier in de praktijk? Lees hoe collega's tijd besparen en hun oplevering professionaliseren.",
    sections: [
      {
        heading: "Uitgelicht",
        bullets: [
          "Engberts Installatie - 62% minder administratietijd",
          "Klimaattechniek De Boer - 18% meer service-omzet",
          "Warmtepomp-specialist Veltman - in één uur opgezet",
        ],
      },
    ],
    cta: DEMO_CTA,
  },
  {
    slug: "webinars",
    kicker: "Bronnen",
    tone: "blue",
    title: "Webinars",
    intro:
      "Live en on-demand sessies over de Wkb, keuringen en het digitaliseren van je oplevering. Stel je vragen rechtstreeks aan ons team.",
    sections: [
      {
        heading: "Eerstvolgende sessies",
        bullets: [
          "Wkb in de praktijk - elke eerste dinsdag van de maand",
          "Van schoenendoos naar QR-dossier (on-demand)",
          "SCIOS Scope 8 & 10 uitgelegd (on-demand)",
        ],
      },
    ],
    cta: { label: "Schrijf je in", href: "#nieuwsbrief" },
  },
  {
    slug: "templates",
    kicker: "Bronnen",
    tone: "orange",
    title: "Gratis templates",
    intro:
      "Download kant-en-klare sjablonen die je direct kunt gebruiken - of je nu klant bent of niet. Een goed begin van een compleet dossier.",
    sections: [
      {
        heading: "Beschikbare downloads",
        bullets: [
          "Wkb GVK-1 documentenlijst",
          "Eindkeuring met handtekeningveld",
          "ISDE-aanvraagblad",
          "F-gassenverklaring",
        ],
      },
    ],
    cta: { label: "Download via de nieuwsbrief", href: "#nieuwsbrief" },
  },
  {
    slug: "api",
    kicker: "Bronnen",
    tone: "blue",
    title: "API-documentatie",
    intro:
      "Koppel Installatiedossier aan je eigen systemen met onze REST API. Beschikbaar op het Enterprise-pakket, met SSO en SCIM voor centraal beheer.",
    sections: [
      {
        heading: "Wat je kunt bouwen",
        bullets: [
          "Dossiers en documenten programmatisch aanmaken",
          "QR-codes genereren per object",
          "Webhooks voor inzage- en upload-events (binnenkort)",
        ],
      },
      {
        heading: "Authenticatie",
        body: "De API werkt met persoonlijke API-tokens en OAuth 2.0. Volledige referentie beschikbaar voor Enterprise-klanten.",
      },
    ],
    cta: { label: "Praat met sales", href: "/contact" },
  },
  {
    slug: "status",
    kicker: "Bronnen",
    tone: "blue",
    title: "Systeemstatus",
    intro:
      "Realtime overzicht van de beschikbaarheid van Installatiedossier. Alle systemen zijn momenteel operationeel.",
    sections: [
      {
        heading: "Diensten",
        bullets: [
          "Web-applicatie - operationeel",
          "QR-scanpagina's - operationeel",
          "API - operationeel",
          "Uploads & opslag - operationeel",
          "E-mailmeldingen - operationeel",
        ],
      },
      {
        heading: "Uptime (laatste 90 dagen)",
        body: "99,99% gemiddelde beschikbaarheid. Geplande onderhoudsvensters worden vooraf aangekondigd via de nieuwsbrief.",
      },
    ],
  },

  /* ───────────────── BEDRIJF ───────────────── */
  {
    slug: "team",
    kicker: "Bedrijf",
    tone: "orange",
    title: "Ons team",
    intro:
      "Een klein team in Alkmaar met een achtergrond in de bouw, techniek en software. We kennen de installatiebranche van binnenuit.",
    sections: [
      {
        heading: "De mensen erachter",
        bullets: [
          "Sven de Wit - Oprichter & CEO",
          "Maud Dekkers - Compliance-lead",
          "Daan Vermeer - Product",
          "Lisa Bakker - Klantsucces",
          "Tom Janssen - Engineering",
          "Nina Postma - Onboarding",
        ],
      },
    ],
    cta: { label: "Meer over ons", href: "/over-ons" },
  },
  {
    slug: "vacatures",
    kicker: "Bedrijf",
    tone: "blue",
    title: "Werken bij Installatiedossier",
    intro:
      "We groeien rustig en met de juiste mensen. Op dit moment hebben we geen openstaande vacatures - maar goede mensen maken altijd indruk.",
    sections: [
      {
        heading: "Open sollicitatie",
        body: "Denk je dat je ons team verder helpt, in product, engineering of klantsucces? Stuur je verhaal naar werken@installatiedossier.nl. We lezen alles.",
      },
    ],
    cta: { label: "Mail je open sollicitatie", href: "mailto:werken@installatiedossier.nl" },
  },
  {
    slug: "pers",
    kicker: "Bedrijf",
    tone: "blue",
    title: "Pers & media",
    intro:
      "Schrijf je over de Wkb, digitalisering in de bouw of de installatiebranche? We praten je graag bij en leveren beeldmateriaal aan.",
    sections: [
      {
        heading: "Media kit",
        bullets: [
          "Logo's in diverse formaten",
          "Productschermen en beeldmateriaal",
          "Bedrijfsfeiten en cijfers",
        ],
      },
    ],
    cta: { label: "Mail de redactie", href: "mailto:pers@installatiedossier.nl" },
  },
  {
    slug: "partners",
    kicker: "Bedrijf",
    tone: "orange",
    title: "Partnerprogramma",
    intro:
      "Werk je met installatiebedrijven - als brancheorganisatie, softwareleverancier of adviseur? Samen helpen we de sector digitaliseren.",
    sections: [
      {
        heading: "Soorten partners",
        bullets: [
          "Integratiepartners (koppelingen via de API)",
          "Branche- en opleidingspartners",
          "Adviseurs en implementatiepartners",
        ],
      },
    ],
    cta: { label: "Word partner", href: "/contact" },
  },
  {
    slug: "contact",
    kicker: "Bedrijf",
    tone: "orange",
    title: "Neem contact op",
    intro:
      "Een vraag over functies, prijzen of een demo? Ons team in Alkmaar reageert binnen 4 uur op werkdagen.",
    sections: [
      {
        heading: "Direct contact",
        bullets: [
          "E-mail: info@installatiedossier.nl",
          "Telefoon: +31 (0)55 - 808 06 41",
          "WhatsApp: reactie binnen 4 uur",
          "Adres: Parelweg 11, 1812 RS Alkmaar",
        ],
      },
    ],
    cta: DEMO_CTA,
  },

  /* ───────────────── JURIDISCH ───────────────── */
  {
    slug: "privacy",
    kicker: "Juridisch",
    tone: "blue",
    title: "Privacybeleid",
    intro:
      "We gaan zorgvuldig om met je gegevens. Dit beleid legt in begrijpelijke taal uit welke gegevens we verwerken en waarom. Dit is een samenvatting; de volledige versie is op aanvraag beschikbaar.",
    sections: [
      {
        heading: "Welke gegevens",
        bullets: [
          "Accountgegevens (naam, e-mail, bedrijf)",
          "Documenten en dossiers die je uploadt",
          "Technische gegevens voor beveiliging en performance",
        ],
      },
      {
        heading: "Jouw rechten",
        body: "Je hebt recht op inzage, correctie en verwijdering van je gegevens. Stuur een verzoek naar privacy@installatiedossier.nl en we reageren binnen 30 dagen.",
      },
    ],
  },
  {
    slug: "cookiebeleid",
    kicker: "Juridisch",
    tone: "blue",
    title: "Cookiebeleid",
    intro:
      "We gebruiken zo min mogelijk cookies. Functionele cookies zijn nodig om de site te laten werken; analytische cookies plaatsen we alleen met je toestemming.",
    sections: [
      {
        heading: "Soorten cookies",
        bullets: [
          "Functioneel - noodzakelijk voor de werking",
          "Analytisch - geanonimiseerd, alleen met toestemming",
          "Geen advertentie- of trackingcookies van derden",
        ],
      },
    ],
  },
  {
    slug: "voorwaarden",
    kicker: "Juridisch",
    tone: "blue",
    title: "Algemene voorwaarden",
    intro:
      "De afspraken tussen jou en Installatiedossier B.V. bij gebruik van onze dienst. Hieronder de kern; de volledige voorwaarden zijn op aanvraag beschikbaar.",
    sections: [
      {
        heading: "De kern",
        bullets: [
          "Maandelijks opzegbaar, geen langlopende contracten",
          "30 dagen geld-terug-garantie bij start",
          "Je blijft eigenaar van je eigen dossiers",
          "Bij beëindiging ontvang je een volledige export",
        ],
      },
    ],
  },
  {
    slug: "verwerkersovereenkomst",
    kicker: "Juridisch",
    tone: "blue",
    title: "Verwerkersovereenkomst (DPA)",
    intro:
      "Als je persoonsgegevens via Installatiedossier verwerkt, sluiten we een verwerkersovereenkomst. Deze is standaard inbegrepen bij elk betaald pakket.",
    sections: [
      {
        heading: "Wat erin staat",
        bullets: [
          "Doel en aard van de verwerking",
          "Beveiligingsmaatregelen (AES-256, TLS 1.3)",
          "Subverwerkers en hun locatie (EU)",
          "Afspraken bij datalekken",
        ],
      },
    ],
    cta: { label: "Vraag de DPA aan", href: "mailto:privacy@installatiedossier.nl" },
  },
  {
    slug: "security",
    kicker: "Trust",
    tone: "orange",
    title: "Beveiliging",
    intro:
      "Jouw dossiers zijn vaak vertrouwelijk. Daarom nemen we beveiliging serieus, van versleuteling tot jaarlijkse penetratietests.",
    sections: [
      {
        heading: "Onze maatregelen",
        bullets: [
          "AES-256-versleuteling at-rest, TLS 1.3 in transit",
          "Servers in Amsterdam (NL), dagelijkse back-ups",
          "ISO 27001-gecertificeerd",
          "Tweefactor-authenticatie en SSO (Enterprise)",
          "Jaarlijkse penetratietest door een externe partij",
        ],
      },
    ],
    cta: { label: "Responsible disclosure", href: "/responsible-disclosure" },
  },
  {
    slug: "avg",
    kicker: "Trust",
    tone: "blue",
    title: "AVG / GDPR",
    intro:
      "Installatiedossier is volledig AVG/GDPR-conform. Alle gegevens worden binnen de Europese Unie verwerkt en opgeslagen.",
    sections: [
      {
        heading: "Hoe we voldoen",
        bullets: [
          "Verwerkersovereenkomst standaard inbegrepen",
          "Dataverwerking en -opslag binnen de EU",
          "Recht op inzage, correctie en verwijdering",
          "Geen verkoop of deling van gegevens met derden",
        ],
      },
    ],
  },
  {
    slug: "sla",
    kicker: "Trust",
    tone: "blue",
    title: "Service Level Agreement",
    intro:
      "Op de zakelijke en Enterprise-pakketten leggen we onze beschikbaarheid vast in een SLA. Zo weet je waar je op kunt rekenen.",
    sections: [
      {
        heading: "Onze garanties",
        bullets: [
          "99,99% uptime op jaarbasis",
          "Aangekondigde onderhoudsvensters",
          "Incident-response binnen vastgelegde termijnen",
          "Publieke statuspagina",
        ],
      },
    ],
    cta: { label: "Bekijk de status", href: "/status" },
  },
  {
    slug: "responsible-disclosure",
    kicker: "Trust",
    tone: "orange",
    title: "Responsible disclosure",
    intro:
      "Heb je een kwetsbaarheid gevonden? Meld het verantwoord, dan lossen we het samen op. We waarderen meldingen van beveiligingsonderzoekers.",
    sections: [
      {
        heading: "Hoe te melden",
        bullets: [
          "Mail je bevinding naar security@installatiedossier.nl",
          "Geef ons redelijk de tijd om het op te lossen",
          "Misbruik geen data en verstoor de dienst niet",
        ],
      },
      {
        heading: "Onze belofte",
        body: "We reageren binnen 5 werkdagen, houden je op de hoogte en vermelden je - met toestemming - in onze hall of fame.",
      },
    ],
  },
];

export function getPageContent(slugParts: string[]): PageContent | undefined {
  const slug = slugParts.join("/");
  return pages.find((p) => p.slug === slug);
}

export function getAllPageSlugs(): string[][] {
  return pages.map((p) => p.slug.split("/"));
}
