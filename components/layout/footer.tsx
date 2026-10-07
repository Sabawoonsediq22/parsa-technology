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

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 pb-12 pt-20 md:px-12 md:pt-28">
      <div className="shell">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="display-title text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="accent-italic">worth keeping</span>.
            </h2>
            <PrimaryLink href="/contact" className="mt-4">Start Project</PrimaryLink>
          </div>

          <div className="md:col-span-2 md:col-start-5">
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              {site.services.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/#services"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-9">
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">
              Follow
            </p>
            <ul className="space-y-2 text-sm">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">
              Contact
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-muted">
              <li className="flex items-start gap-2 wrap-break-word">
                <svg {...iconProps}>
                  <path d="M8 14.5s4.75-4.02 4.75-8A4.75 4.75 0 0 0 3.25 6.5c0 3.98 4.75 8 4.75 8Z" />
                  <circle cx="8" cy="6.4" r="1.75" />
                </svg>
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-2 wrap-break-word">
                <svg {...iconProps}>
                  <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.5" />
                  <path d="m2.5 4.5 5.5 4 5.5-4" />
                </svg>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 wrap-break-word">
                <svg {...iconProps}>
                  <path d="M3 3.5c0-.55.45-1 1-1h1.8c.45 0 .85.3.97.74l.6 2.2a1 1 0 0 1-.32 1.03l-1 .9a9.5 9.5 0 0 0 3.5 3.5l.9-1a1 1 0 0 1 1.03-.32l2.2.6c.44.12.74.52.74.97V12c0 .55-.45 1-1 1A9.5 9.5 0 0 1 3 3.5Z" />
                </svg>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.availability}</p>
        </div>
      </div>
    </footer>
  );
}
