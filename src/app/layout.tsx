import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${dmSans.variable} ${bebasNeue.variable} ${syne.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
