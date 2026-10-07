import type { Project } from "@/lib/content";
import Reveal from "@/components/ui/reveal";
import Visual from "@/components/ui/visual";

type FeaturedProjectProps = {
  project: Project;
  index: number;
  flipped?: boolean;
};

export default function FeaturedProject({
  project,
  index,
  flipped = false,
}: FeaturedProjectProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      id={project.slug}
      className="grid items-start gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-12 md:pt-14"
    >
      <Reveal
        y={40}
        className={`md:col-span-7 ${flipped ? "md:order-2" : ""}`}
      >
        <Visual
          index={number}
          year={project.year}
          label={project.tag}
          ratio="pt-[68%] md:pt-[60%]"
        />
      </Reveal>

      <div className={`md:col-span-5 ${flipped ? "md:order-1" : ""}`}>
        <Reveal>
          <p className="eyebrow mb-4">Featured · {project.tag}</p>
          <h3 className="display-title text-3xl md:text-4xl lg:text-5xl">
            {project.name}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            {project.summary}
          </p>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-accent">
                Challenge
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {project.challenge}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-accent">
                Approach
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {project.approach}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-accent">
                Outcome
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {project.outcome}
              </dd>
            </div>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}
