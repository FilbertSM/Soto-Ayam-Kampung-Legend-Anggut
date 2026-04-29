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
  title: "Soto Ayam Kampung Legend Anggut | Kuliner Balikpapan",
  description: "Nikmati soto ayam kampung terdekat dan paling otentik di Balikpapan. Kuliner legendaris dengan resep asli Makassar.",
  openGraph: {
    title: "Soto Ayam Kampung Legend Anggut",
    description: "Kuliner otentik legendaris di Balikpapan. Pesan sekarang atau kunjungi kedai kami.",
    url: "https://maps.app.goo.gl/GYDn5LnSerBnbts66",
    siteName: "Soto Anggut",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Soto Ayam Kampung Legend Anggut",
  "image": "https://maps.app.goo.gl/GYDn5LnSerBnbts66",
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
