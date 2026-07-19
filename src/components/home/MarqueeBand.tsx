import { Marquee } from "@/components/motion/Marquee";

const WORDS = [
  "Interior Design",
  "Turnkey Construction",
  "Renovation",
  "Architecture",
  "3D Visualization",
  "Project Management",
  "Landscape",
  "Commercial Fit-out",
];

export function MarqueeBand() {
  return (
    <section className="relative border-y border-white/[0.07] bg-dark py-7" aria-hidden>
      <Marquee gap="2.5rem">
        {WORDS.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-[family-name:var(--font-heading)] text-2xl font-light italic text-light/70 md:text-3xl">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
