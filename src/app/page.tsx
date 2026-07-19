import { HeroCinematic } from "@/components/home/HeroCinematic";
import { MarqueeBand } from "@/components/home/MarqueeBand";
import { ServicesScroll } from "@/components/home/ServicesScroll";
import { StatsScroll } from "@/components/home/StatsScroll";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <MarqueeBand />
      <ServicesScroll />
      <StatsScroll />
      <ProjectsShowcase />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}