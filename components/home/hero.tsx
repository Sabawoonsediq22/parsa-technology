"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OutlineLink, PrimaryLink } from "@/components/ui/buttons";
import Marquee from "@/components/ui/marquee";
import { services, site } from "@/lib/content";

const headline = ["Software", "that", "helps", "businesses"];

const specs = [
  { key: "Status", value: site.availability },
  { key: "Setup", value: site.location },
  { key: "Services", value: `${site.services.length} disciplines` },
  { key: "Direct", value: site.email },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-32 md:pt-40">
      <div
        className="blueprint absolute inset-0"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(120% 90% at 70% 10%, black 20%, transparent 80%)",
        }}
      />
      <div
        className="absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full blur-[130px]"
        aria-hidden="true"
        style={{ backgroundColor: "var(--app-glow)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden grid-cols-12 md:grid"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="border-r border-border/50 last:border-r-0" />
        ))}
      </div>

      <div className="shell relative flex flex-1 flex-col justify-end px-6 md:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span
            className="inline-block h-2 w-2 animate-pulse bg-accent"
            aria-hidden="true"
          />
          <p className="eyebrow">
            Software development company — websites, web apps, mobile &amp;
            desktop software
          </p>
        </motion.div>

        <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12 md:gap-8">
          <h1 className="display-title text-[clamp(3rem,10.5vw,9.5rem)] leading-[0.88] md:col-span-9">
            {headline.map((word, index) => (
              <Fragment key={word}>
                <motion.span
                  className="inline-block"
                  initial={reduceMotion ? false : { opacity: 0, y: "0.4em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + index * 0.07, ease }}
                >
                  {word}
                </motion.span>{" "}
              </Fragment>
            ))}
            <motion.span
              className="mark inline-block"
              initial={reduceMotion ? false : { opacity: 0, y: "0.4em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + headline.length * 0.07,
                ease,
              }}
            >
              grow.
            </motion.span>
          </h1>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="self-end border-t border-border pt-5 md:col-span-3 md:border-l md:border-t-0 md:pl-6 md:pt-0 [overflow-wrap:anywhere]"
          >
            <dl className="space-y-4">
              {specs.map((spec) => (
                <div key={spec.key}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {spec.key}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-muted">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-10 flex flex-col gap-8 border-t border-border pt-7 md:mt-14 md:flex-row md:items-start md:justify-between"
        >
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We design and build websites, web applications, mobile apps,
            desktop software, and digital solutions that solve real business
            problems.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryLink href="/contact">Start Project</PrimaryLink>
            <OutlineLink href="/projects">View Projects</OutlineLink>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-10 border-t border-border bg-surface/70 py-4 backdrop-blur-sm md:mt-14">
        <Marquee
          ariaLabel="Services"
          duration={38}
          items={services.map((service) => (
            <span
              key={service.title}
              className="font-display text-lg uppercase tracking-tight text-muted md:text-2xl"
            >
              {service.title}
            </span>
          ))}
        />
      </div>
    </section>
  );
}
