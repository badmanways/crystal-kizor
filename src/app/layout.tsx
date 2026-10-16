import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crystalkizor.com"),
  title: "Crystal Kizor",
  description:
    "Crystal Kizor is the Lead Principal at Studio COKA and the founder of an interconnected ecosystem advancing African architecture, functional design (ELEvated), professional education (The Effective Architect), and youth transformation (AKO Alliance, Alive and Free).",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Crystal Kizor",
    "Studio COKA",
    "ELEvated",
    "The Effective Architect",
    "TEA",
    "AKO Alliance",
    "Alive and Free",
    "Climate-Responsive Architecture",
    "African Design",
    "Sustainable Architecture Africa",
  ],
  openGraph: {
    title: "Crystal Kizor",
    description:
      "Seven expressions. Three pillars. One foundational mission: Intentional building. Explore Studio COKA, ELEvated, The Effective Architect (TEA), AKO Alliance, and Alive and Free.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Crystal Kizor Personal Brand Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Kizor",
    description:
      "Explore the Crystal Kizor ecosystem: Studio COKA, ELEvated, The Effective Architect (TEA), AKO Alliance, and Alive and Free.",
    images: ["/images/hero-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#EFECE6] text-[#1C1B19] font-sans selection:bg-[#3F5243] selection:text-[#F7F5F0]">
        {children}
      </body>
    </html>
  );
}
