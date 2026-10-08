import Link from "next/link";
import ProjectCard from "@/components/cards/project-card";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { TextLink } from "@/components/ui/buttons";
import { projects } from "@/lib/content";

export default function Projects() {
  const preview = projects.slice(0, 4);

  return (
    <Section
      index="02"
      label="Our work"
      title="Selected projects"
      action={<TextLink href="/projects">All projects →</TextLink>}
    >
      <div className="hide-scrollbar -mx-6 snap-x snap-mandatory overflow-x-auto pb-3 md:-mx-12">
        <div className="flex w-max gap-5 px-6 md:gap-6 md:px-12">
          {preview.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.05}
              y={32}
              className="w-[80vw] shrink-0 snap-start sm:w-[58vw] md:w-[46vw] lg:w-[35vw]"
            >
              <ProjectCard project={project} index={index} showSummary={false} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border pt-6 md:flex-row md:items-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Drag / scroll →
        </p>
        <Link
          href="/projects"
          className="group/browse inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
        >
          Browse all projects
          <span className="flex h-10 w-10 items-center justify-center border border-border transition-colors group-hover/browse:border-accent group-hover/browse:bg-accent group-hover/browse:text-white">
            →
          </span>
        </Link>
      </div>
    </Section>
  );
}
