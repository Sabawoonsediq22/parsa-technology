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
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                {index ? (
                  <span className="text-xs font-medium text-accent">
                    [ {index} ]
                  </span>
                ) : null}
                {label ? <p className="text-sm text-muted">{label}</p> : null}
              </div>
              {action}
            </div>
            {title ? (
              <h2 className="font-display font-medium tracking-tight text-balance mt-6 text-4xl md:text-6xl lg:text-7xl">
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
