import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Projects from "@/components/home/projects";
import Process from "@/components/home/process";
import Stack from "@/components/home/stack";
import Testimonials from "@/components/home/testimonials";
import Insights from "@/components/home/insights";
import Cta from "@/components/ui/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Stack />
      <Testimonials />
      <Cta
        headline={
          <>
            Have a <span className="accent-italic">project</span> to build?
          </>
        }
      />
      <Insights />
    </>
  );
}
