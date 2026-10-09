import type { ReactNode } from "react";

type VisualProps = {
  index: string;
  year?: string;
  label?: string;
  ratio?: string;
  className?: string;
  children?: ReactNode;
};

const dotGrid = Array.from({ length: 14 }, (_, col) =>
  Array.from({ length: 9 }, (_, row) => (
    <circle
      key={`${col}-${row}`}
      cx={col * 30 + 15}
      cy={row * 30 + 15}
      r="1.5"
      className="fill-foreground/20"
    />
  )),
).flat();

const diagonalLines = Array.from({ length: 34 }, (_, i) => {
  const x = i * 24 - 320;
  return (
    <path
      key={i}
      d={`M${x} 250 L${x + 250} 0`}
      className="stroke-foreground/10"
      strokeWidth="1"
    />
  );
});

const motifs = [
  <g key="arcs">
    <circle
      cx="320"
      cy="70"
      r="46"
      className="stroke-accent"
      strokeWidth="1.5"
    />
    <circle
      cx="320"
      cy="70"
      r="86"
      className="stroke-foreground/25"
      strokeWidth="1.5"
    />
    <circle
      cx="320"
      cy="70"
      r="126"
      className="stroke-foreground/12"
      strokeWidth="1.5"
    />
    <path
      d="M40 210c60-70 130-105 210-105"
      className="stroke-foreground/20"
      strokeWidth="1.5"
    />
    <path d="M40 40h60M40 40v60" className="stroke-accent" strokeWidth="1.5" />
  </g>,
  <g key="dots">
    {dotGrid}
    <rect
      x="248"
      y="34"
      width="92"
      height="92"
      className="fill-accent/30"
    />
    <rect
      x="248"
      y="34"
      width="92"
      height="92"
      className="stroke-accent"
      strokeWidth="1.5"
      fill="none"
    />
  </g>,
  <g key="lines">
    {diagonalLines}
    <path
      d="M-20 230 L230 -20"
      className="stroke-accent"
      strokeWidth="2"
    />
  </g>,
  <g key="bars">
    <rect x="48" y="150" width="54" height="66" className="fill-foreground/15" />
    <rect
      x="122"
      y="118"
      width="54"
      height="98"
      className="fill-foreground/25"
    />
    <rect x="196" y="86" width="54" height="130" className="fill-accent" />
    <rect
      x="270"
      y="54"
      width="54"
      height="162"
      className="fill-foreground/25"
    />
    <path
      d="M40 230h300"
      className="stroke-foreground/20"
      strokeWidth="1.5"
    />
  </g>,
];

export default function Visual({
  index,
  year,
  label,
  ratio = "pt-[62%]",
  className = "",
  children,
}: VisualProps) {
  const motif = motifs[parseInt(index, 10) % motifs.length] ?? motifs[0];

  return (
    <div
      className={`group/visual relative overflow-hidden border border-border bg-linear-to-br from-elevated via-surface to-background ${className}`}
    >
      <div className={`relative ${ratio}`}>
        <div className="absolute inset-0" aria-hidden="true">
          <div className="blueprint-fine absolute inset-0 opacity-60" />
          <div
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: "var(--app-glow)" }}
          />
          <svg
            className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover/visual:scale-105"
            viewBox="0 0 400 250"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            {motif}
          </svg>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10" />
        </div>

        <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/15 px-4 py-2.5 font-sans text-[10px] text-white/70">
          <span className="truncate">{label ?? "Parsa Technology"}</span>
          <span className="ml-3 shrink-0 text-accent">{year ?? index}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
          <span
            className="font-display text-5xl font-medium leading-none md:text-7xl"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)", color: "transparent" }}
          >
            {index}
          </span>
          <span className="mb-2 h-2 w-2 bg-accent" />
        </div>

        {children}
      </div>
    </div>
  );
}
