import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Defence & Athletics | Profesyonel Dövüş Sporları Kulübü",
  description: "Defence Athletics olarak kickboks, muay thai, pilates, crossfit ve daha fazlası ile profesyonel antrenman deneyimi sunuyoruz. İstanbul genelinde 7 şube.",
  keywords: "kickboks, muay thai, pilates, crossfit, spor salonu, istanbul, defence athletics",
  openGraph: {
    title: "Defence & Athletics | Profesyonel Dövüş Sporları Kulübü",
    description: "İstanbul'un en iyi dövüş sporları kulübü. 7 şube, profesyonel antrenörler.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
