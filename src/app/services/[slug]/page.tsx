import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePageClient } from "./ServicePageClient";
import { ServiceJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Dreamz Dezignerz`,
      description: service.short,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} />
      <ServicePageClient service={service} />
    </>
  );
}
