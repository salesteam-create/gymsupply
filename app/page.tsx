import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PlannerProvider } from "@/components/planner-provider";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Planner } from "@/components/sections/planner";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Testimonial } from "@/components/sections/testimonial";
import { WhyUs } from "@/components/sections/why-us";

export default function HomePage() {
  return (
    <PlannerProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Planner />
        <Projects />
        <Testimonial />
        <WhyUs />
        <Contact />
      </main>
      <SiteFooter />
    </PlannerProvider>
  );
}
