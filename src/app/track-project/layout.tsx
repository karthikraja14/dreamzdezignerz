import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Project",
  description:
    "Real-time visibility into your project's progress — photos, milestones and updates, anytime. Powered by Vystra.",
  alternates: { canonical: "/track-project" },
};

export default function TrackProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
