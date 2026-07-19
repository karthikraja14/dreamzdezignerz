import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, MapPin, Clock, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GALLERY = [
  "/images/site/interior-living.jpg",
  "/images/site/detail.jpg",
  "/images/site/modern-exterior.jpg",
  "/images/site/office.jpg",
];

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="gradient-mesh relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate hover:text-teal transition-colors mb-8">
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Portfolio</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-ink leading-tight mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-slate text-sm">
            <span className="flex items-center gap-2"><Ruler size={16} className="text-teal" />{project.specs.area}</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-teal" />{project.specs.duration}</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-teal" />{project.specs.type}</span>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Project gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {GALLERY.map((src, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-[4px] border border-ink/10 bg-light-alt">
                <Image
                  src={src}
                  alt={`${project.title} — view ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-image object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-ink mb-4">
              Interested in a Similar Project?
            </h2>
            <p className="text-slate mb-8">
              Let us create something equally stunning for you. Book a free consultation to discuss your vision.
            </p>
            <Button href="/contact" size="lg">Discuss Your Project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
