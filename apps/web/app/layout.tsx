import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { HistoryProvider } from "@/context/HistoryProvider";

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
  description: "Создано командой PROfessionals",
  applicationName: "Сверхпровод",
  appleWebApp: {
    capable: true,
    title: "Сверхпровод",
    statusBarStyle: "default",
  },
  icons: {
    apple: "/icons/icon-180.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${russianRailG.variable} ${inter.className}`}>
      <body className="overflow-x-clip">
        <HistoryProvider>
          {children}
        </HistoryProvider>
      </body>
    </html>
  );
}