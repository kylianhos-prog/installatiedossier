import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Installatiedossier - Digitaal logboek voor installateurs",
  description:
    "Digitaal logboek voor installatiebedrijven. Klant scant QR-code op meterkast en ziet alle documenten. Klaar voor Wkb, SCIOS en BRL 100. Plan een gesprek.",
  keywords: [
    "installatiemanagement",
    "documentbeheer",
    "Installatiedossier",
    "digitale dossiers",
    "installatie checklists",
    "Wkb",
    "SCIOS",
    "BRL 100",
  ],
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/brand.png",
  },
  openGraph: {
    title: "Installatiedossier - Digitaal logboek voor installateurs",
    description:
      "Klant scant QR-code op de meterkast en ziet alle installatiedocumenten. Klaar voor Wkb en SCIOS.",
    type: "website",
    locale: "nl_NL",
    url: "https://installatiedossier.nl",
    siteName: "Installatiedossier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Installatiedossier - Digitaal logboek voor installateurs",
  },
  alternates: {
    canonical: "https://installatiedossier.nl/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
