import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Volgrei - AI Workflow & Productivity App for Freelancers",
  description: "Volgrei is the execution workspace for freelancers. Task management, smart notes, and Grei - your AI agent - in one iOS app.",
  keywords: ["Volgrei", "volgrei app", "volgrei iOS", "productivity app freelancers", "AI workflow app", "task management freelancers", "Grei AI agent"],
  authors: [{ name: "Volgrei", url: "https://volgrei.com" }],
  creator: "Volgrei",
  publisher: "Volgrei",
  metadataBase: new URL("https://volgrei.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Volgrei - AI Workflow & Productivity App for Freelancers",
    description: "Volgrei is the execution workspace for freelancers. Task management, smart notes, and Grei - your AI agent - in one iOS app.",
    url: "https://volgrei.com",
    siteName: "Volgrei",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volgrei - AI Workflow & Productivity App for Freelancers",
    description: "Volgrei is the execution workspace for freelancers. Task management, smart notes, and Grei - your AI agent - in one iOS app.",
    creator: "@volgrei",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-[var(--font-inter)]">
        <Navbar />
        <main style={{ paddingTop: "65px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}