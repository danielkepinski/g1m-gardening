import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://g1more.co.uk"),
  title: "G1M Gardening | Lawn Maintenance & Strimming in Worcestershire",
  description:
    "Professional lawn maintenance, strimming and garden services across Worcester and Worcestershire. Get an instant garden estimate with the G1M quote calculator.",
  openGraph: {
    title: "G1M Gardening",
    description:
      "Professional lawn maintenance and strimming services in Worcestershire.",
    url: "https://g1more.co.uk",
    siteName: "G1M Gardening",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "G1M Gardening",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G1M Gardening",
    description:
      "Professional lawn maintenance and strimming services in Worcestershire.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
