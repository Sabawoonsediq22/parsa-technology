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
    <article className="group h-full">
      <Visual index={number} year={project.year} ratio={ratio} className="mb-5 rounded" />
      <div className="flex items-start justify-between gap-4 border-t border-border pt-4 transition-colors group-hover:border-accent">
        <div className="min-w-0">
          <h3 className="font-display font-medium tracking-tight text-balance text-xl transition-colors duration-300 group-hover:text-accent md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 text-xs font-medium text-muted">
            {project.tag}
          </p>
        </div>
        <span
          className="shrink-0 text-base text-muted/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
          aria-hidden="true"
        >
          →
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
