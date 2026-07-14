import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://solopovoado.vercel.app";
const description =
  "Estratégia, marketing, landing pages, atendimento e automação para pequenas empresas organizarem oportunidades e processos comerciais.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Solo Povoado | Marketing, automação e processos comerciais",
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/solo-povoado-logo.jpg",
    apple: "/solo-povoado-logo.jpg",
  },
  openGraph: {
    title: "Solo Povoado | Marketing, automação e processos comerciais",
    description,
    url: siteUrl,
    siteName: "Solo Povoado",
    images: [
      {
        url: "/solo-povoado-logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Logo da Solo Povoado",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo Povoado | Marketing, automação e processos comerciais",
    description,
    images: ["/solo-povoado-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
