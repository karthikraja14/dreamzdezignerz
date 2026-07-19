import type { Metadata } from "next";
import { Inter, Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dreamz Dezignerz | Interior • Construction • Renovation",
  description:
    "Transform your vision into reality with Dreamz Dezignerz. End-to-end interior design, construction, renovation & project management services. Real-time project tracking powered by Vystra.",
  keywords: [
    "interior design", "construction company", "home renovation",
    "architecture", "project management", "Chennai", "Tamil Nadu",
  ],
  openGraph: {
    title: "Dreamz Dezignerz | Interior • Construction • Renovation",
    description: "End-to-end construction, interior design & project management with live tracking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
