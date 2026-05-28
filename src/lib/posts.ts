/* ════════════════════════════════════════════════════════
   BLOG CONTENT - kennisbank voor installateurs
   Eén bron voor /blog (index) en /blog/[slug] (detail).
   ════════════════════════════════════════════════════════ */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] };

export type Author = {
  name: string;
  role: string;
  initials: string;
  color: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  dateLabel: string;
  readingTime: string;
  author: Author;
  accent: "orange" | "blue";
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: Block[];
};

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const MAUD: Author = {
  name: "Maud Dekkers",
  role: "Compliance-lead",
  initials: "MD",
  color: "#2A5CBA",
};
const DAAN: Author = {
  name: "Daan Vermeer",
  role: "Product",
  initials: "DV",
  color: "#E8692C",
};
const SVEN: Author = {
  name: "Sven de Wit",
  role: "Oprichter",
  initials: "SW",
  color: "#0E8A4A",
};

export const posts: Post[] = [
  {
    slug: "wkb-2026-wat-verandert-er",
    title: "Wkb in 2026: wat verandert er voor installateurs?",
    excerpt:
      "De Wet kwaliteitsborging draait inmiddels op volle toeren. We zetten de praktische gevolgen voor jouw oplevering op een rij - zonder juridisch jargon.",
    category: "Wetgeving",
    date: "2026-05-12",
    dateLabel: "12 mei 2026",
    readingTime: "7 min",
    author: MAUD,
    accent: "blue",
    image: UNSPLASH("1450101499163-c8848c66ca85"),
    imageAlt: "Installateur ondertekent een opleverdocument",
    featured: true,
    body: [
      {
        type: "p",
        text: "De Wet kwaliteitsborging voor het bouwen (Wkb) is geen toekomstmuziek meer - hij is gewoon de norm. Toch lopen veel installatiebedrijven nog tegen dezelfde vragen aan: wat moet er nu echt in het dossier, wie is waarvoor verantwoordelijk, en hoe voorkom je dat een oplevering blijft hangen op een ontbrekend papiertje?",
      },
      {
        type: "p",
        text: "In dit artikel houden we het praktisch. Geen wetsartikelen uit het hoofd, maar wat het concreet betekent voor de manier waarop jij je werk vastlegt en overdraagt.",
      },
      { type: "h2", text: "Het consumentendossier is verplicht" },
      {
        type: "p",
        text: "Het belangrijkste voor de installatiebranche: bij oplevering lever je een dossier op waarmee de klant kan aantonen dat het werk voldoet aan de voorschriften. Denk aan tekeningen, productverklaringen, de eindcontrole en een gebruiksaanwijzing van de installatie.",
      },
      {
        type: "p",
        text: "Dat dossier hoeft technisch niet ingewikkeld te zijn, maar het moet wél compleet, vindbaar en overdraagbaar zijn. Een map op een bureaublad of een reeks losse mails voldoet in de praktijk zelden.",
      },
      {
        type: "quote",
        text: "Een dossier dat je niet binnen dertig seconden kunt tonen, bestaat voor een inspecteur eigenlijk niet.",
        cite: "Maud Dekkers, Compliance-lead",
      },
      { type: "h2", text: "Wat dit betekent voor je werkproces" },
      {
        type: "ul",
        items: [
          "Leg vast tijdens het werk, niet achteraf - foto's en formulieren op de bouwplek schelen uren administratie.",
          "Koppel documenten aan het object, niet aan een persoon of mailbox die later vertrekt.",
          "Zorg dat de klant het dossier zelf kan inzien, ook over acht jaar nog.",
          "Houd een audit-trail bij: wie heeft wat wanneer toegevoegd of gewijzigd.",
        ],
      },
      {
        type: "p",
        text: "Precies hier helpt een digitaal dossier. Door alles aan het object te koppelen en achter één QR-code te ontsluiten, is het dossier altijd actueel en overdraagbaar - of de oplevering nu vandaag is of pas volgend jaar.",
      },
      { type: "h2", text: "Begin klein, maar begin nu" },
      {
        type: "p",
        text: "Je hoeft niet je hele archief in één weekend te digitaliseren. Begin met de lopende projecten en bouw van daaruit verder. De winst zit in consistentie: één manier van vastleggen die je hele team volgt.",
      },
    ],
  },
  {
    slug: "scios-scope-8-en-10-uitgelegd",
    title: "SCIOS Scope 8 en 10: het verschil simpel uitgelegd",
    excerpt:
      "Scope 8 of Scope 10? Veel installateurs halen ze door elkaar. Een heldere uitleg met voorbeelden uit de praktijk.",
    category: "Keuringen",
    date: "2026-04-28",
    dateLabel: "28 apr 2026",
    readingTime: "5 min",
    author: DAAN,
    accent: "orange",
    image: UNSPLASH("1621905251189-08b45d6a269e"),
    imageAlt: "Monteur werkt aan een elektrische installatie",
    body: [
      {
        type: "p",
        text: "SCIOS is het kwaliteitssysteem voor inspectie en onderhoud van technische installaties. De 'scopes' bepalen welk type installatie je mag keuren. Twee daarvan komen het vaakst voorbij bij installateurs: Scope 8 en Scope 10.",
      },
      { type: "h2", text: "Scope 8: stookinstallaties" },
      {
        type: "p",
        text: "Scope 8 gaat over het onderhoud en de inspectie van stookinstallaties op gas, olie of biomassa. Denk aan cv-ketels, luchtverwarmers en grotere verwarmingstoestellen. De focus ligt op veilige verbranding en correcte afvoer van rookgassen.",
      },
      { type: "h2", text: "Scope 10: elektrisch materieel" },
      {
        type: "p",
        text: "Scope 10 draait om de inspectie van elektrische installaties en arbeidsmiddelen op brandrisico. Het is sterk gekoppeld aan de eisen die verzekeraars stellen. Waar Scope 8 over verbranding gaat, gaat Scope 10 over elektra.",
      },
      {
        type: "quote",
        text: "Onthoud het simpel: Scope 8 is vuur, Scope 10 is stroom.",
        cite: "Daan Vermeer, Product",
      },
      { type: "h2", text: "Waarom de logboeken zo belangrijk zijn" },
      {
        type: "ul",
        items: [
          "Een keuring zonder logboek is lastig aantoonbaar bij een verzekeraar of inspectie.",
          "Per scope gelden eigen intervallen en bevindingen - door elkaar halen kost je een herinspectie.",
          "Digitale logboeken per object voorkomen dat een rapport zoekraakt tussen twee servicebeurten in.",
        ],
      },
      {
        type: "p",
        text: "In Installatiedossier houd je de Scope 8- en Scope 10-logboeken per object bij, inclusief bevindingen en hersteltermijnen. Zo staat het juiste rapport altijd bij de juiste installatie.",
      },
    ],
  },
  {
    slug: "van-schoenendoos-naar-qr-dossier",
    title: "Van schoenendoos naar QR-dossier: digitaliseer je oplevering",
    excerpt:
      "Mappen, USB-sticks en losse mails. Zo stap je in vijf concrete stappen over naar een digitaal dossier dat je klant zelf kan scannen.",
    category: "Digitalisering",
    date: "2026-04-15",
    dateLabel: "15 apr 2026",
    readingTime: "6 min",
    author: SVEN,
    accent: "orange",
    image: UNSPLASH("1581092160562-40aa08e78837"),
    imageAlt: "Technische tekeningen en gereedschap op een werktafel",
    body: [
      {
        type: "p",
        text: "Bijna elk installatiebedrijf herkent het: een schoenendoos vol papieren, een usb-stick in een la, en een mailbox waarin je nog terug moet zoeken welke tekening nu de laatste versie was. Het werkt - tot een klant na drie jaar belt en je het dossier niet meer terugvindt.",
      },
      {
        type: "p",
        text: "Digitaliseren klinkt groot, maar je kunt het opknippen in behapbare stappen. Dit is de route die wij installateurs zien volgen.",
      },
      { type: "h2", text: "Stap 1 - Kies één plek" },
      {
        type: "p",
        text: "Bepaal waar het dossier voortaan leeft. Niet drie systemen naast elkaar, maar één bron waar elk document terechtkomt. Dat voorkomt de eeuwige vraag 'waar stond dat ook alweer?'.",
      },
      { type: "h2", text: "Stap 2 - Koppel aan het object" },
      {
        type: "p",
        text: "Hang elk document aan het pand of de installatie, niet aan een persoon. Vertrekt er een monteur, dan blijft het dossier gewoon staan.",
      },
      { type: "h2", text: "Stap 3 - Leg vast op de bouwplek" },
      {
        type: "p",
        text: "Laat monteurs foto's, formulieren en handtekeningen direct ter plekke vastleggen. Werk dat 's avonds nog moet worden 'overgetypt' verdwijnt vanzelf.",
      },
      { type: "h2", text: "Stap 4 - Plak de QR-code" },
      {
        type: "p",
        text: "Eén sticker in de meterkast geeft de klant toegang tot het complete dossier - zonder app, zonder login. Het maakt je oplevering meteen professioneel.",
      },
      { type: "h2", text: "Stap 5 - Bouw rustig je archief op" },
      {
        type: "quote",
        text: "Je hoeft niet alles in één keer over te zetten. Begin bij de lopende klussen en laat het archief meegroeien.",
        cite: "Sven de Wit, Oprichter",
      },
      {
        type: "p",
        text: "Het mooiste neveneffect: een gescande QR-code is ook een ingang voor service. Klanten die hun dossier bekijken, vinden meteen de knop om onderhoud te plannen.",
      },
    ],
  },
  {
    slug: "5-fouten-consumentendossier",
    title: "5 fouten in het consumentendossier (en hoe je ze voorkomt)",
    excerpt:
      "Een incompleet dossier kost tijd, geld en soms een herinspectie. Dit zijn de vijf missers die we het vaakst zien.",
    category: "Praktijk",
    date: "2026-03-30",
    dateLabel: "30 mrt 2026",
    readingTime: "5 min",
    author: MAUD,
    accent: "blue",
    image: UNSPLASH("1454165804606-c3d57bc86b40"),
    imageAlt: "Twee mensen bespreken documenten aan een bureau",
    body: [
      {
        type: "p",
        text: "Een consumentendossier valt of staat bij volledigheid. Toch zien we steeds dezelfde vijf fouten terugkomen - stuk voor stuk te voorkomen met een beetje structuur.",
      },
      { type: "h2", text: "1. Geen versiebeheer" },
      {
        type: "p",
        text: "Drie tekeningen met bijna dezelfde naam en niemand weet welke definitief is. Houd één actuele versie aan en archiveer de rest zichtbaar.",
      },
      { type: "h2", text: "2. Documenten aan personen gekoppeld" },
      {
        type: "p",
        text: "Staat het dossier in de mailbox van de monteur, dan verdwijnt het zodra die vertrekt. Koppel alles aan het object.",
      },
      { type: "h2", text: "3. De eindcontrole ontbreekt" },
      {
        type: "p",
        text: "Foto's en handleidingen zijn er wel, maar de aftekening van de eindcontrole niet. Juist dat document maakt het dossier aantoonbaar.",
      },
      { type: "h2", text: "4. Niet overdraagbaar naar de klant" },
      {
        type: "p",
        text: "Een dossier dat alleen jij kunt openen, helpt de klant niet. Zorg dat het zelfstandig en zonder login te raadplegen is.",
      },
      { type: "h2", text: "5. Achteraf invullen" },
      {
        type: "quote",
        text: "Wat je niet op de bouwplek vastlegt, kost je 's avonds dubbel zoveel tijd - of het komt er nooit meer in.",
        cite: "Maud Dekkers, Compliance-lead",
      },
      {
        type: "p",
        text: "De rode draad: leg vast tijdens het werk, koppel aan het object en maak het overdraagbaar. Doe je dat consequent, dan is een herinspectie zelden nog nodig.",
      },
    ],
  },
  {
    slug: "nen-1010-eindcontrole-checklist",
    title: "NEN 1010-keuring: de checklist voor je eindcontrole",
    excerpt:
      "Wat hoort er écht in een NEN 1010-eindcontrole? Een praktische checklist die je direct kunt gebruiken.",
    category: "Keuringen",
    date: "2026-03-18",
    dateLabel: "18 mrt 2026",
    readingTime: "8 min",
    author: DAAN,
    accent: "blue",
    image: UNSPLASH("1558618666-fcd25c85cd64"),
    imageAlt: "Vakman voert een precisiecontrole uit",
    body: [
      {
        type: "p",
        text: "NEN 1010 is de norm voor laagspanningsinstallaties. Bij oplevering hoort een eindcontrole die bestaat uit een visuele inspectie en een reeks metingen. Hieronder een praktische checklist om niets te vergeten.",
      },
      { type: "h2", text: "Visuele inspectie" },
      {
        type: "ul",
        items: [
          "Zijn de juiste beschermingsmiddelen toegepast en correct gekozen?",
          "Is de installatie deugdelijk en volgens fabrikantvoorschriften aangelegd?",
          "Zijn aansluitpunten, leidingen en verdelers correct gemarkeerd?",
          "Is documentatie zoals schema's en verdelerstaten aanwezig?",
        ],
      },
      { type: "h2", text: "Metingen" },
      {
        type: "ul",
        items: [
          "Doorverbinding van beschermingsleidingen.",
          "Isolatieweerstand van de installatie.",
          "Werking van de aardlekbeveiliging.",
          "Spanningsval en kortsluitstroom waar van toepassing.",
        ],
      },
      {
        type: "quote",
        text: "Een meting zonder vastlegging is een meting die je later opnieuw mag doen.",
        cite: "Daan Vermeer, Product",
      },
      { type: "h2", text: "Vastleggen en overdragen" },
      {
        type: "p",
        text: "Verzamel de resultaten in één rapport en koppel dat aan het object. Zo staat de eindcontrole bij de installatie - vindbaar voor jou, de klant en een eventuele inspecteur.",
      },
      {
        type: "p",
        text: "In Installatiedossier vul je de NEN 1010-eindcontrole digitaal in en wordt het rapport automatisch onderdeel van het consumentendossier. Geen losse pdf's meer die kwijtraken.",
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): Post {
  return posts.find((p) => p.featured) ?? getAllPosts()[0];
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  const current = getPost(slug);
  if (!current) return getAllPosts().slice(0, limit);
  const sameCategory = getAllPosts().filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const rest = getAllPosts().filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
