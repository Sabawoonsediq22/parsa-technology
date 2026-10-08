import type { ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  separator?: ReactNode;
  ariaLabel?: string;
};

export default function Marquee({
  items,
  duration = 42,
  reverse = false,
  className = "",
  separator = "✳",
  ariaLabel,
}: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden={ariaLabel ? true : undefined}>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="whitespace-nowrap">{item}</span>
          <span className="mx-6 text-accent md:mx-8" aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`}
      aria-label={ariaLabel}
      role={ariaLabel ? "marquee" : undefined}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
