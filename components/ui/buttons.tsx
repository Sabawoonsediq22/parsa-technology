import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "group/btn inline-flex items-center justify-center gap-3 rounded-none border text-sm font-medium leading-none transition-colors duration-300";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 group-hover/btn:translate-x-1 ${className}`}
    >
      <path
        d="M1 7h11M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

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
      className={`${base} border-accent bg-accent px-6 py-4 text-white hover:border-foreground hover:bg-foreground hover:text-background ${className}`}
    >
      {children}
      <Arrow />
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
      className={`${base} border-border px-6 py-4 text-foreground hover:border-accent hover:text-accent ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  direction = "right",
  className = "",
}: {
  href: string;
  children: ReactNode;
  direction?: "down" | "right";
  className?: string;
}) {
  const path =
    direction === "down" ? "M7 1v11M3 8l4 4 4-4" : "M1 7h11M8 3l4 4-4 4";

  return (
    <Link
      href={href}
      className={`group/arrow inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent ${className}`}
    >
      <span className="flex h-11 w-11 items-center justify-center border border-border transition-colors group-hover/arrow:border-accent group-hover/arrow:bg-accent group-hover/arrow:text-white">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d={path}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
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
      className={`link-slide inline-block text-sm font-medium text-muted transition-colors hover:text-accent ${className}`}
    >
      {children}
    </Link>
  );
}
