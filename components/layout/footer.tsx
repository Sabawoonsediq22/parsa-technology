import Link from "next/link";
import { site } from "@/lib/content";
import { PrimaryLink } from "../ui/buttons";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const iconProps = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "mt-0.5 h-4 w-4 shrink-0 text-accent",
} as const;

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        {title}
      </p>
      <ul className="space-y-2.5 text-sm [overflow-wrap:anywhere]">{children}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell px-6 pb-10 pt-16 md:px-12 md:pb-14 md:pt-24">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="eyebrow mb-6">— {site.name}</p>
            <h2 className="display-title text-[clamp(2rem,4vw,3.5rem)] leading-[0.98]">
              Let&apos;s build something{" "}
              <span className="mark">worth keeping</span>.
            </h2>
          </div>
          <div className="md:col-span-4 lg:col-span-5 lg:justify-self-end">
            <PrimaryLink href="/contact">Start Project</PrimaryLink>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 md:mt-16 md:gap-x-10 lg:grid-cols-4">
          <Column title="Company">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-slide text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Services">
            {site.services.map((service) => (
              <li key={service.title}>
                <Link
                  href="/#services"
                  className="link-slide text-muted transition-colors hover:text-foreground"
                >
                  {service.short}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Follow">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="link-slide text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </Column>

          <Column title="Contact">
            <li className="flex items-start gap-2 leading-relaxed text-muted">
              <svg {...iconProps}>
                <path d="M8 14.5s4.75-4.02 4.75-8A4.75 4.75 0 0 0 3.25 6.5c0 3.98 4.75 8 4.75 8Z" />
                <circle cx="8" cy="6.4" r="1.75" />
              </svg>
              <span className="min-w-0">{site.location}</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed text-muted">
              <svg {...iconProps}>
                <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.5" />
                <path d="m2.5 4.5 5.5 4 5.5-4" />
              </svg>
              <a
                href={`mailto:${site.email}`}
                className="min-w-0 transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2 leading-relaxed text-muted">
              <svg {...iconProps}>
                <path d="M3 3.5c0-.55.45-1 1-1h1.8c.45 0 .85.3.97.74l.6 2.2a1 1 0 0 1-.32 1.03l-1 .9a9.5 9.5 0 0 0 3.5 3.5l.9-1a1 1 0 0 1 1.03-.32l2.2.6c.44.12.74.52.74.97V12c0 .55-.45 1-1 1A9.5 9.5 0 0 1 3 3.5Z" />
              </svg>
              <a
                href={`tel:${site.phoneHref}`}
                className="min-w-0 transition-colors hover:text-accent"
              >
                {site.phone}
              </a>
            </li>
          </Column>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
            {site.availability}
          </p>
          <a href="#main-content" className="transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </div>

      <div
        className="overflow-hidden border-t border-border"
        aria-hidden="true"
      >
        <p
          className="display-title whitespace-nowrap px-4 py-4 text-center text-[clamp(1.75rem,9vw,9rem)] leading-none tracking-[-0.04em] md:py-6"
          style={{
            WebkitTextStroke: "1px var(--app-border)",
            color: "transparent",
          }}
        >
          PARSATECHNOLOGY
        </p>
      </div>
    </footer>
  );
}
