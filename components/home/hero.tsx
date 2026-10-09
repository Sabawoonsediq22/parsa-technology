"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OutlineLink, PrimaryLink } from "@/components/ui/buttons";

const headline = ["Software", "that", "drives"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-18 pt-32 md:pb-28 md:pt-40">
      <div
        className="blueprint absolute inset-0"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(120% 90% at 70% 10%, black 20%, transparent 80%)",
        }}
      />
      <div
        className="absolute -right-32 top-10 h-104 w-104 rounded-full blur-[130px]"
        aria-hidden="true"
        style={{ backgroundColor: "var(--app-glow)" }}
      />

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
          <p className="text-sm text-muted">
            Software development company — websites, web apps, mobile apps &amp;
            desktop apps
          </p>
        </motion.div>

        <div className="mt-8 md:mt-10">
          <h1 className="display-title text-[clamp(3rem,10.5vw,9.5rem)] leading-[0.88]">
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
              growth.
            </motion.span>
          </h1>

        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-10 flex flex-col gap-8 pt-7 md:mt-14 md:flex-row md:items-start md:justify-between"
        >
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We design and build <strong>websites</strong>, <strong>web apps</strong>, <strong>mobile apps</strong>,
            <strong>desktop apps</strong>, and <strong>digital solutions</strong> that solve real business
            problems.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryLink href="/contact">Start Project</PrimaryLink>
            <OutlineLink href="/projects">Projects</OutlineLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
