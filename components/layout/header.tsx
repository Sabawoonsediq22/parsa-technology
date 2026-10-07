"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ThemeToggle from "@/components/theme/theme-toggle";
import { site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between px-6 py-4 md:px-12 md:py-5">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3 font-display text-lg tracking-tight md:text-xl"
        >
          <Image
            src="/favicon.svg"
            alt=""
            width={36}
            height={36}
            loading="eager"
            className="h-8 w-8 md:h-9 md:w-9"
          />
          {site.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full border border-border px-4 py-2 text-sm transition-all hover:border-accent hover:bg-accent hover:text-white md:inline-block"
          >
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <nav
              aria-label="Mobile"
              className="shell flex flex-col gap-1 px-6 py-6"
            >
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`border-b border-border py-4 font-display text-2xl font-light transition-colors ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/85"
              >
                Start Project
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
