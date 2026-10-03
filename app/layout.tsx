import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JP Stone & Landscapes | Interlock, Stone Masonry & Retaining Walls in Georgetown, ON",
  description:
    "Georgetown stone mason and landscape contractor. Interlock driveways and patios, stone steps and entryways, retaining walls and repairs. 15+ years experience, 5.0 on Google. Call Jay at (905) 703-6329.",
  openGraph: {
    title: "JP Stone & Landscapes | Georgetown Interlock & Stone Masonry",
    description:
      "Interlock, stone masonry and retaining walls in Georgetown and Halton Hills. Designed with you, priced line by line. Call (905) 703-6329.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${zilla.variable} ${hanken.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
