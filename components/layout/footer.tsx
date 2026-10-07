import Link from "next/link";
import { site } from "@/lib/content";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 pb-12 pt-20 md:px-12 md:pt-28">
      <div className="shell">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="display-title text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Let&apos;s build software that{" "}
              <span className="accent-italic">helps you grow</span>.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block font-display text-lg font-light underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent md:text-xl"
            >
              {site.email}
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-8">
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

          <div className="md:col-span-2">
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

          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">
              Contact
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {site.location}
              <br />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-accent"
              >
                {site.email}
              </a>
              <br />
              <a
                href={`tel:${site.phoneHref}`}
                className="transition-colors hover:text-accent"
              >
                {site.phone}
              </a>
            </p>
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
