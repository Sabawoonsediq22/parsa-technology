import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import Cta from "@/components/ui/cta";
import ProjectCard from "@/components/cards/project-card";
import FeaturedProject from "@/components/projects/featured-project";
import Reveal from "@/components/ui/reveal";
import { getFeaturedProjects, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work from Parsa Technology — attendance systems, clinic management platforms, business software, websites, mobile apps and desktop tools.",
};

export default function ProjectsPage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <PageHero
        label="Projects"
        meta={`2025 — ${new Date().getFullYear()}`}
        title={
          <>
            Work in the <span className="accent-italic">wild</span>.
          </>
        }
        intro="Real products running for real teams — a tour through what we've designed, built and kept alive long after launch."
      />

      <Section label="Featured projects" title="Built for the real world.">
        <div className="space-y-16 md:space-y-24">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={projects.indexOf(project)}
              flipped={index % 2 === 1}
            />
          ))}
        </div>
      </Section>

      <Section
        label="Project grid"
        title="More of our work."
        action={
          <p className="hidden text-sm text-muted md:block">
            {projects.length} projects
          </p>
        }
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05} y={32}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta
        label="Start something"
        headline={
          <>
            Let&apos;s build your <span className="accent-italic">next</span>{" "}
            project.
          </>
        }
      />
    </>
  );
}
