import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Defence Athletics — Lüks Spor & Yüksek Performans Kulübü",
  description:
    "İstanbul ve Dubai'nin en prestijli lokasyonlarında Boks, CrossFit, Pilates, Mobilite ve Kondisyon branşlarıyla zihin ve beden dönüşüm merkezi. Potansiyelini yeniden tanımla.",
  keywords:
    "lüks spor kulübü, boks, crossfit, pilates, mobilite, kondisyon, İstanbul, Dubai, premium fitness",
  openGraph: {
    title: "Defence Athletics — Lüks Spor & Yüksek Performans Kulübü",
    description:
      "Potansiyelini yeniden tanımla. İstanbul ve Dubai'nin seçkin lokasyonlarında elite spor deneyimi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
