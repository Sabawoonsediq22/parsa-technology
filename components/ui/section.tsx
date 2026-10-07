import type { ReactNode } from "react";
import Reveal from "./reveal";

type SectionProps = {
  id?: string;
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
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <div>
              {label ? <p className="eyebrow mb-4">— {label}</p> : null}
              {title ? (
                <h2 className="display-title text-4xl md:text-6xl lg:text-7xl">
                  {title}
                </h2>
              ) : null}
            </div>
            {action}
          </Reveal>
        ) : null}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
