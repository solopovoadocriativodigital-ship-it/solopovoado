import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solo Povoado | Sistemas inteligentes para crescer",
  description:
    "Transformamos processos manuais em vendas organizadas usando marketing, automação e inteligência artificial.",
  openGraph: {
    title: "Solo Povoado",
    description:
      "Sistemas inteligentes para pequenas empresas, prestadores de serviço e negócios locais que querem crescer.",
    type: "website",
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
