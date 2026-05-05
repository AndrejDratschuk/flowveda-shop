import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, Inter } from "next/font/google";
import MetaPixel from "@/components/tracking/MetaPixel";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowVeda® — Own the Moment Before",
  description: "A daily nootropic that supports calm, focused awareness, so you can recognize the moment before reaction and choose how you respond.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "FlowVeda® — Own the Moment Before",
    description: "A daily nootropic that supports calm, focused awareness, so you can recognize the moment before reaction and choose how you respond.",
    url: "https://flowveda.co/shop",
    siteName: "FlowVeda®",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable} ${inter.variable}`}>
      <body className="font-body text-fv-charcoal antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
