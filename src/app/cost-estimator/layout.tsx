import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost Estimator",
  description:
    "Get an instant, no-commitment estimate for your construction, interior or renovation project in a few quick steps.",
  alternates: { canonical: "/cost-estimator" },
};

export default function CostEstimatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
