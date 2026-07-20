import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dreamz Dezignerz is a Chennai-based design-and-build studio delivering interiors, construction and renovation end-to-end — with transparent process and live project tracking.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
