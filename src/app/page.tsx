import { HeroCinematic } from "@/components/home/HeroCinematic";
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
      <ServicesScroll />
      <StatsScroll />
      <ProjectsShowcase />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}