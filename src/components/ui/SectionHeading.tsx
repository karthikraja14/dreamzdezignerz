import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "mb-14",
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {label && (
        <div className={cn("section-kicker", centered && "justify-center")}>{label}</div>
      )}
      <TextReveal as="h2" text={title} className="display-heading" />
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-[0.95rem] leading-7 text-slate">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
