import { PlannerProvider } from "@/components/planner-provider";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Planner } from "@/components/sections/planner";
import { Process } from "@/components/sections/process";
import { Solutions } from "@/components/sections/solutions";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Solutions />
      <Process />
      <PlannerProvider>
        <Planner />
      </PlannerProvider>
      <AboutTeaser />
      <FinalCta />
    </>
  );
}
