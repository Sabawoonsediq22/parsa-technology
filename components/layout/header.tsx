"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import ThemeToggle from "@/components/theme/theme-toggle";
import { site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent"
        aria-hidden="true"
      />

      <div className="shell flex items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/favicon.svg"
            alt=""
            width={36}
            height={36}
            loading="eager"
            className="h-8 w-8 md:h-9 md:w-9"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-medium tracking-tight md:text-xl">
              Parsa
            </span>
            <span className="mt-1 text-xs font-medium text-muted">
              Technology
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex xl:gap-10"
        >
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative text-sm font-medium transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden lg:inline-flex">
            <ThemeToggle />
          </span>
          <Link
            href="/contact"
            className="hidden border border-accent bg-accent px-5 py-3 text-sm font-medium leading-none text-white transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background md:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex items-center gap-2 border border-border px-4 py-3 text-sm font-medium leading-none transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <span className="flex h-2.5 w-2.5 flex-col justify-between">
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.25 rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.25 -rotate-45" : ""
                }`}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen overflow-y-auto border-t border-border bg-background lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="shell flex flex-col px-6 py-4 md:px-12"
            >
              {site.nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`group flex items-baseline gap-5 py-5 ${
                    index < site.nav.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-xs font-medium text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display font-medium tracking-tight text-balance text-3xl leading-none transition-colors md:text-4xl ${
                      pathname === item.href
                        ? "text-accent"
                        : "group-hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="flex flex-col gap-2 py-6 text-sm text-muted">
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
                <a href={`tel:${site.phoneHref}`} className="hover:text-accent">
                  {site.phone}
                </a>
              </div>
              <div className="border-t border-border py-6">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
