import Link from "next/link";
import ProjectCard from "@/components/cards/project-card";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  const preview = projects.slice(0, 4);

  return (
    <Section
      label="Our work"
      title="Selected projects"
      action={<p className="hidden text-sm text-muted md:block">2025 — {new Date().getFullYear()}</p>}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {preview.map((project, index) => (
          <Reveal
            key={project.slug}
            y={40}
            delay={index * 0.05}
            className={index % 2 === 1 ? "md:mt-24" : undefined}
          >
            <ProjectCard project={project} index={index} showSummary={false} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center md:mt-24">
        <Link
          href="/projects"
          className="font-display text-xl font-light italic transition-colors hover:text-accent md:text-2xl"
        >
          Browse all projects →
        </Link>
      </Reveal>
    </Section>
  );
}
