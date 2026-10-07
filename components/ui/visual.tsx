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
      className="fill-white/10"
    />
  )),
).flat();

const diagonalLines = Array.from({ length: 34 }, (_, i) => {
  const x = i * 24 - 320;
  return (
    <path
      key={i}
      d={`M${x} 250 L${x + 250} 0`}
      className="stroke-white/[0.07]"
      strokeWidth="1.5"
    />
  );
});

const motifs = [
  <g key="arcs">
    <circle
      cx="320"
      cy="70"
      r="46"
      className="stroke-accent/50"
      strokeWidth="1.5"
    />
    <circle
      cx="320"
      cy="70"
      r="86"
      className="stroke-white/10"
      strokeWidth="1.5"
    />
    <circle
      cx="320"
      cy="70"
      r="126"
      className="stroke-white/6"
      strokeWidth="1.5"
    />
    <path
      d="M40 210c60-70 130-105 210-105"
      className="stroke-white/10"
      strokeWidth="1.5"
    />
  </g>,
  <g key="dots">
    {dotGrid}
    <rect
      x="248"
      y="34"
      width="92"
      height="92"
      rx="16"
      className="fill-accent/25"
    />
  </g>,
  <g key="lines">
    {diagonalLines}
    <path
      d="M-20 230 L230 -20"
      className="stroke-accent/45"
      strokeWidth="2"
    />
  </g>,
  <g key="bars">
    <rect
      x="48"
      y="150"
      width="54"
      height="66"
      rx="6"
      className="fill-white/10"
    />
    <rect
      x="122"
      y="118"
      width="54"
      height="98"
      rx="6"
      className="fill-white/[0.14]"
    />
    <rect
      x="196"
      y="86"
      width="54"
      height="130"
      rx="6"
      className="fill-accent/60"
    />
    <rect
      x="270"
      y="54"
      width="54"
      height="162"
      rx="6"
      className="fill-white/[0.14]"
    />
    <path d="M40 230h300" className="stroke-white/10" strokeWidth="1.5" />
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
      className={`relative overflow-hidden rounded-2xl border border-border bg-linear-to-br from-elevated via-surface to-background ${className}`}
    >
      <div className={`relative ${ratio}`}>
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <svg
            className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
            viewBox="0 0 400 250"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            {motif}
          </svg>
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end justify-between gap-4 p-5 md:p-6">
          <div>
            <span className="font-display text-5xl font-light leading-none text-white md:text-7xl">
              {index}
            </span>
            {label ? (
              <p className="mt-3 text-xs uppercase tracking-widest text-white/70">
                {label}
              </p>
            ) : null}
          </div>
          {year ? <span className="text-xs text-white/70">{year}</span> : null}
        </div>

        {children}
      </div>
    </div>
  );
}
