import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";

const russianRailG = localFont({
  src: './fonts/RussianRail G Pro Regular_0.otf',
  variable: '--font-ru-rail'
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Сверхпровод",
  description: "Создано командой PRO MTT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" >
      <body className={`${inter.variable} ${russianRailG.variable}`}>
        {children}
      </body>
    </html>
  );
}
