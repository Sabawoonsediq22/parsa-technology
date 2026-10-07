"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OutlineLink, PrimaryLink } from "@/components/ui/buttons";

const headline = ["Software", "that", "helps", "businesses"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40">
      <div className="shell">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="eyebrow mb-8 flex items-center gap-3"
        >
          <span
            className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent"
            aria-hidden="true"
          />
          Software development company — websites, web apps, mobile &amp;
          desktop software
        </motion.p>

        <h1 className="display-title text-[clamp(3rem,13vw,11rem)] leading-[0.9]">
          {headline.map((word, index) => (
            <Fragment key={word}>
              <motion.span
                className="inline-block"
                initial={reduceMotion ? false : { opacity: 0, y: "0.45em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.07, ease }}
              >
                {word}
              </motion.span>{" "}
            </Fragment>
          ))}
          <motion.span
            className="accent-italic inline-block"
            initial={reduceMotion ? false : { opacity: 0, y: "0.45em" }}
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

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We design and build websites, web applications, mobile apps,
            desktop software, and digital solutions that solve real business
            problems.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryLink href="/contact">Start Project</PrimaryLink>
            <OutlineLink href="/projects">View Projects</OutlineLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
