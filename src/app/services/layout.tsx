import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, residential & commercial construction, renovation, architecture, landscape design and project management — everything under one roof.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
