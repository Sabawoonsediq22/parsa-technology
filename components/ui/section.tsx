import type { ReactNode } from "react";
import Reveal from "./reveal";

type SectionProps = {
  id?: string;
  index?: string;
  label?: string;
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  bordered?: boolean;
  className?: string;
  contentClassName?: string;
};

export default function Section({
  id,
  index,
  label,
  title,
  action,
  children,
  bordered = true,
  className = "",
  contentClassName = "",
}: SectionProps) {
  const hasHeader = Boolean(label || title || action);

  return (
    <section
      id={id}
      className={`section ${bordered ? "border-t border-border" : ""} ${className}`}
    >
      <div className="shell">
        {hasHeader ? (
          <Reveal className="mb-10 md:mb-16">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-b border-border pb-4">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                {index ? (
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    [ {index} ]
                  </span>
                ) : null}
                {label ? <p className="eyebrow">{label}</p> : null}
              </div>
              {action}
            </div>
            {title ? (
              <h2 className="display-title mt-6 text-[clamp(2.25rem,5.2vw,4.75rem)] leading-[0.94]">
                {title}
              </h2>
            ) : null}
          </Reveal>
        ) : null}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
