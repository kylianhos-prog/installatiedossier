/* ════════════════════════════════════════════════════════
   FAQ CONTENT - gegroepeerd per categorie
   Eén bron voor /faq (volledige pagina). Iconen worden in de
   client-component op `iconKey` gemapt zodat dit bestand puur
   data blijft.
   ════════════════════════════════════════════════════════ */

export type Faq = { q: string; a: string };

export type FaqGroup = {
  id: string;
  label: string;
  iconKey:
    | "general"
    | "pricing"
    | "documents"
    | "portals"
    | "security"
    | "technical";
  items: Faq[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "algemeen",
    label: "Algemeen",
    iconKey: "general",
    items: [
      {
        q: "Wat is Installatiedossier en voor wie is het?",
        a: "Installatiedossier is het digitale logboek voor installatiebedrijven in Nederland en België. Je koppelt alle documenten van een installatie aan één object en plakt een QR-code in de meterkast. De klant scant en ziet het complete dossier - zonder app en zonder login.",
      },
      {
        q: "Hoe verschilt dit van een gedeelde map of Google Drive?",
        a: "Een map is een verzameling bestanden; een dossier is gekoppeld aan het object, heeft een audit-trail en is via een QR-code direct te tonen aan klant of inspecteur. Daarnaast zitten Wkb-, SCIOS- en NEN-exports ingebouwd, zodat je niets handmatig hoeft samen te stellen.",
      },
      {
        q: "Werkt het ook offline?",
        a: "Ja. De monteurs-app werkt offline op zolder, in de kruipruimte of op de werf. Foto's, formulieren en handtekeningen synchroniseren automatisch zodra er weer verbinding is.",
      },
      {
        q: "Hoe lang duurt de onboarding voor een nieuw bedrijf?",
        a: "De setup duurt ongeveer 15 minuten. Tijdens de onboarding helpen we je met de mappenstructuur. De meeste bedrijven hebben hun actieve dossiers binnen één werkdag in het systeem.",
      },
      {
        q: "Werkt het ook voor ZZP'ers?",
        a: "Zeker. Het pakket Basis is geschikt vanaf één monteur. Veel ZZP'ers gebruiken het voor het opleverdossier richting klant - een eigen subdomein maakt je oplevering meteen professioneel.",
      },
    ],
  },
  {
    id: "prijzen",
    label: "Prijzen & abonnement",
    iconKey: "pricing",
    items: [
      {
        q: "Kan ik gratis uitproberen? Heb ik een creditcard nodig?",
        a: "Je test elk pakket 14 dagen gratis en vrijblijvend - geen creditcard nodig. Daarna kies je het pakket dat bij je past, maandelijks of voordeliger per jaar.",
      },
      {
        q: "Kan ik maandelijks opzeggen?",
        a: "Ja, maandelijks opzegbaar - geen langlopende contracten. Bij start geldt bovendien 30 dagen geld-terug-garantie.",
      },
      {
        q: "Wat gebeurt er met mijn dossiers als ik stop?",
        a: "Je krijgt een ZIP met alle dossiers (PDF's plus originelen) per mail. Bestaande QR-codes blijven 90 dagen doorverwijzen naar een statische export, zodat je klanten niet plots voor een dode link staan.",
      },
      {
        q: "Bieden jullie korting bij jaarlijkse betaling?",
        a: "Ja, bij jaarlijkse betaling krijg je tot 20% korting ten opzichte van maandelijks.",
      },
      {
        q: "Zijn er kortingen voor non-profit of onderwijs?",
        a: "Voor onderwijsinstellingen en non-profitorganisaties kijken we naar een passend tarief. Neem contact op, dan maken we een voorstel.",
      },
    ],
  },
  {
    id: "documenten",
    label: "Documenten & opslag",
    iconKey: "documents",
    items: [
      {
        q: "Welke bestandstypen worden ondersteund?",
        a: "Onder andere PDF, DWG, XLSX, DOCX en afbeeldingen (JPG/PNG). Elk formaat is doorzoekbaar met slimme auto-tagging.",
      },
      {
        q: "Hoe werkt versiebeheer?",
        a: "Upload je een nieuwe versie, dan wordt de oude automatisch gearchiveerd maar blijft terugvindbaar. Zo is er altijd één actuele versie en raak je nooit de geschiedenis kwijt.",
      },
      {
        q: "Kunnen klanten documenten digitaal ondertekenen of goedkeuren?",
        a: "Ja. Klanten kunnen documenten digitaal ondertekenen en opleveringen goedkeuren - de handtekening wordt onderdeel van het dossier.",
      },
      {
        q: "Is er full-text zoeken over alle documenten?",
        a: "Ja, je doorzoekt de volledige inhoud van je dossiers, ondersteund door automatische tagging per documenttype.",
      },
      {
        q: "Worden documenten geback-upt?",
        a: "Dagelijkse back-ups op servers in Amsterdam (NL), met versleuteling at-rest. Je data is altijd veilig en herstelbaar.",
      },
    ],
  },
  {
    id: "portalen",
    label: "Portalen & toegang",
    iconKey: "portals",
    items: [
      {
        q: "Moeten klanten een account aanmaken om hun dossier te zien?",
        a: "Nee. De QR-code linkt naar een unieke pagina met leesrechten - geen wachtwoord, geen app-download. Vertrouwelijke documenten kun je optioneel achter een 4-cijferige pincode zetten.",
      },
      {
        q: "Kan ik het klantportaal in mijn eigen huisstijl zetten?",
        a: "Ja. Op de hogere pakketten werk je met een eigen subdomein, je eigen logo en je eigen kleur. Klanten denken vaak dat je het zelf gebouwd hebt.",
      },
      {
        q: "Hoeveel klantportalen kan ik aanmaken?",
        a: "Dat hangt af van je pakket. Op de zakelijke en Enterprise-pakketten is het aantal portalen onbeperkt.",
      },
      {
        q: "Kan ik bijhouden wanneer klanten documenten bekijken?",
        a: "Ja. Je ziet wanneer een dossier wordt geopend en krijgt optioneel een melding zodra een klant documenten bekijkt of becommentarieert.",
      },
      {
        q: "Wat is het verschil tussen beheerder, monteur en klant?",
        a: "De beheerder stuurt vanuit kantoor alles aan, de monteur uploadt vanaf de bouwplek (ook offline), en de klant bekijkt het dossier via de QR-code. Eén bron, drie rollen met eigen rechten.",
      },
    ],
  },
  {
    id: "beveiliging",
    label: "Beveiliging & privacy",
    iconKey: "security",
    items: [
      {
        q: "Is Installatiedossier AVG/GDPR-compliant?",
        a: "Ja. Een verwerkersovereenkomst is standaard inbegrepen en alle data wordt verwerkt en opgeslagen binnen de EU.",
      },
      {
        q: "Hoe wordt mijn data versleuteld?",
        a: "AES-256-versleuteling at-rest en TLS 1.3 tijdens transport. Servers staan in Amsterdam, NL.",
      },
      {
        q: "Kan ik tweefactor-authenticatie inschakelen?",
        a: "Ja, tweefactor-authenticatie (2FA) is beschikbaar. Op Enterprise voegen we SSO en SCIM toe voor centraal gebruikersbeheer.",
      },
      {
        q: "Verkopen of delen jullie mijn data?",
        a: "Nee. We verkopen of delen je data nooit met derden. Jij blijft eigenaar van je dossiers.",
      },
      {
        q: "Welke uptime-garantie geven jullie?",
        a: "We garanderen 99,99% uptime, onderbouwd met een SLA op de zakelijke pakketten. De actuele status is altijd publiek in te zien op onze statuspagina.",
      },
    ],
  },
  {
    id: "technisch",
    label: "Technisch & API",
    iconKey: "technical",
    items: [
      {
        q: "Heeft Installatiedossier een REST API?",
        a: "Ja. Op Enterprise krijg je toegang tot onze REST API, plus SSO en SCIM voor integratie met je eigen systemen.",
      },
      {
        q: "Kan ik koppelen met mijn boekhoud- of servicesoftware?",
        a: "Er zijn standaardkoppelingen met onder andere Snelstart en ServiceM8. Andere koppelingen zijn mogelijk via de API.",
      },
      {
        q: "Is er een native mobiele app?",
        a: "Ja, er is een native app voor iOS en Android voor je monteurs. Je klant heeft niets nodig - die gebruikt gewoon de browser via de QR-code.",
      },
      {
        q: "Welke browsers worden ondersteund?",
        a: "Alle moderne browsers: Chrome, Safari, Edge en Firefox - op desktop, tablet en telefoon.",
      },
      {
        q: "Bieden jullie een on-premise of data-residency optie?",
        a: "Data-residency in Nederland is standaard. Een on-premise of custom data-residency opzet is bespreekbaar op Enterprise.",
      },
    ],
  },
];

export const totalFaqs = faqGroups.reduce((n, g) => n + g.items.length, 0);
