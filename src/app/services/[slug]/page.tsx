import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import { ServicePageClient } from "./ServicePageClient";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return <ServicePageClient service={service} />;
}
