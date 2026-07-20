import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with Dreamz Dezignerz. Book a free consultation for interior design, construction or renovation — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
