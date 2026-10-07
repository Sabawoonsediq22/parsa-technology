import type { Project } from "@/lib/content";
import Visual from "../ui/visual";

type ProjectCardProps = {
  project: Project;
  index: number;
  showSummary?: boolean;
  ratio?: string;
};

export default function ProjectCard({
  project,
  index,
  showSummary = true,
  ratio,
}: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group">
      <Visual
        index={number}
        year={project.year}
        ratio={ratio}
        className="mb-5"
      />
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl font-light leading-snug transition-colors group-hover:text-accent md:text-2xl">
          {project.name}
        </h3>
        <span className="shrink-0 text-xs text-muted md:text-sm">
          {project.tag}
        </span>
      </div>
      {showSummary ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
      ) : null}
    </article>
  );
}
