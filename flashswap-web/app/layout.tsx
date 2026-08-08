import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { SITE } from "@/lib/site";
import "./globals.css";

// Self-hosted variable fonts (latin subset) so builds never depend on the
// network (Google Fonts is fetched at build time by default, which breaks
// offline/CI builds). Files live in app/fonts/.
const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  // ← replace with your production domain once deployed
  metadataBase: new URL("https://flashsolanaswap.vercel.app"),
  title: `${SITE.name}: ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name}: ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    // SVG works for most modern scrapers; swap in a 1200×630 PNG for maximum compatibility
    images: [{ url: "/logo-horizontal.svg", width: 1220, height: 360, alt: SITE.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}: ${SITE.tagline}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#070B13",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">{children}</body>
    </html>
  );
}
