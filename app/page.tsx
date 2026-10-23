import { PlannerProvider } from "@/components/planner-provider";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Challenge } from "@/components/sections/challenge";
import { Equipment } from "@/components/sections/equipment";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Planner } from "@/components/sections/planner";
import { Process } from "@/components/sections/process";
import { ProjectSpotlight } from "@/components/sections/project-spotlight";
import { SelectionApproach } from "@/components/sections/selection-approach";
import { Solutions } from "@/components/sections/solutions";
import { Testimonials } from "@/components/sections/testimonials";
import { ValueThemes } from "@/components/sections/value-themes";

/*
 * The page tells one story: what we do, who it is for, why the choices
 * matter, proof, how it works, what we supply, and how to start.
 * Light and dark sections alternate so no two neighbours look alike.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Solutions />
      <Challenge />
      <ProjectSpotlight />
      <PlannerProvider>
        <Planner />
      </PlannerProvider>
      <Process />
      <Equipment />
      <ValueThemes />
      <SelectionApproach />
      <Testimonials />
      <AboutTeaser />
      <Faq />
      <FinalCta />
    </>
  );
}
