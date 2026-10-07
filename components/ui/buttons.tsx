import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm transition-colors duration-300";

export function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} bg-accent px-6 py-3 font-medium text-white hover:bg-accent/85 ${className}`}
    >
      {children}
    </Link>
  );
}

export function OutlineLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} border border-border px-6 py-3 text-foreground hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  direction = "down",
  className = "",
}: {
  href: string;
  children: ReactNode;
  direction?: "down" | "right";
  className?: string;
}) {
  const path =
    direction === "down" ? "M8 2v12M2 8l6 6 6-6" : "M2 8h12M9 3l5 5-5 5";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-sm transition-colors hover:text-accent ${className}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d={path}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-sm text-muted transition-colors hover:text-foreground ${className}`}
    >
      {children}
    </Link>
  );
}
