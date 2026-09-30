import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#12100e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juliavianadiniz.adv.br"),
  title: "Advogada Poços de Caldas | Julia Viana Diniz Advocacia",
  description:
    "Advocacia de alto padrão e atendimento humanizado conduzido pela Dra. Julia Viana Diniz. Especialista em Direito Previdenciário (Salário-Maternidade e Aposentadorias), Família e Sucessões, e Direito do Trabalho. Atendimento presencial na Rua Barros Cobra, 667 - Centro, Poços de Caldas/MG e on-line em todo o Brasil.",
  keywords: [
    "Dra. Julia Viana Diniz",
    "Julia Viana Diniz Advogada",
    "Julia Viana Diniz Advocacia",
    "advogada em Poços de Caldas",
    "advogada Poços de Caldas",
    "Rua Barros Cobra Poços de Caldas",
    "direito previdenciário Poços de Caldas",
    "salário maternidade Poços de Caldas",
    "advogada previdenciária Minas Gerais",
    "direito de família Poços de Caldas",
    "direito do trabalho Poços de Caldas",
    "advogada trabalhista Poços de Caldas",
    "consulta jurídica Poços de Caldas",
  ],
  authors: [{ name: "Dra. Julia Viana Diniz" }],
  creator: "Julia Viana Diniz Advocacia",
  publisher: "Julia Viana Diniz Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/icon.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [
      { url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.juliavianadiniz.adv.br",
    title: "Advogada Poços de Caldas | Julia Viana Diniz Advocacia",
    description:
      "Antes de dizer se existe um direito, eu preciso conhecer a sua história. Atendimento humanizado, escuta ativa e dedicação exclusiva a cada causa em Poços de Caldas e em todo o Brasil.",
    siteName: "Julia Viana Diniz Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 2172,
        height: 724,
        alt: "Julia Viana Diniz Advocacia — Poços de Caldas - MG",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" />
      </head>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
