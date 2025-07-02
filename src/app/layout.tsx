import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "0xLabs-Org | Building the Future of Web3 and AI",
  description:
    "0xLabs-Org is a micro-startup studio focused on creating smart, secure, and scalable digital tools using Blockchain and AI. Join us in building powerful dApps, AI SaaS, DeFi products, and more.",
  keywords: [
    "0xLabs",
    "Web3",
    "Blockchain",
    "AI",
    "Decentralized",
    "SaaS",
    "AI Assistants",
    "Crypto Tools",
    "Startup Studio",
    "AI SaaS",
    "DeFi",
    "0xLabs Web3 AI",
  ],
  authors: [{ name: "0xLabs Team" }],
  creator: "0xLabs",
  openGraph: {
    title: "0xLabs | Building the Future of Web3 and AI",
    description:
      "Explore innovative products by 0xLabs—where Blockchain meets AI. Build with us.",
    url: "https://0xlabs.org", // change to actual domain
    siteName: "0xLabs",
    images: [
      {
        url: "https://0xlabs.org/og-image.png", // customize your OG image
        width: 1200,
        height: 630,
        alt: "0xLabs Web3 AI Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@0xLabsOrg",
    title: "0xLabs | Building the Future of Web3 and AI",
    description:
      "We create next-gen Blockchain and AI products. Join our builder community.",
    images: ["https://0xlabs.org/twitter-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-screen w-screen overflow-x-hidden`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
