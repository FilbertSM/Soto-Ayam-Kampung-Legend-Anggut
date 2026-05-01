import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://sotoanggut.me"),
  title: "Soto Ayam Kampung Legend Anggut | Kuliner Balikpapan",
  description: "Nikmati soto ayam kampung terdekat dan paling otentik di Balikpapan. Kuliner legendaris dengan resep asli Makassar.",
  keywords: ["soto ayam", "soto ayam kampung", "soto balikpapan", "kuliner balikpapan", "soto makassar", "soto ayam terdekat", "soto legend"],
  openGraph: {
    title: "Soto Ayam Kampung Legend Anggut | Balikpapan",
    description: "Kuliner otentik legendaris di Balikpapan. Pesan sekarang atau kunjungi kedai kami.",
    url: "/",
    siteName: "Soto Anggut",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soto Ayam Kampung Legend Anggut Kedai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soto Ayam Kampung Legend Anggut | Balikpapan",
    description: "Kuliner otentik legendaris di Balikpapan. Pesan sekarang atau kunjungi kedai kami.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg", // Though ideally a PNG is better for Apple Touch Icon, this acts as a fallback.
  },
  alternates: {
    canonical: "/",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Soto Ayam Kampung Legend Anggut",
  "image": "https://sotoanggut.me/og-image.png",
  "@id": "https://maps.app.goo.gl/GYDn5LnSerBnbts66",
  "url": "https://maps.app.goo.gl/GYDn5LnSerBnbts66",
  "telephone": "+6289678243688",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Pemuda II No.60, Damai",
    "addressLocality": "Kec. Balikpapan Kota, Kota Balikpapan",
    "addressRegion": "Kalimantan Timur",
    "postalCode": "76114",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2695166,
    "longitude": 116.8574575
  },
  "hasMap": "https://maps.app.goo.gl/GYDn5LnSerBnbts66",
  "sameAs": [
    "https://maps.app.goo.gl/GYDn5LnSerBnbts66"
  ],
  "servesCuisine": "Indonesian, Soto Ayam Kampung"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
