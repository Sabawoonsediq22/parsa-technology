"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/section";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = testimonials[active];

  useEffect(() => {
    if (reduceMotion || testimonials.length < 2) return;
    const timer = window.setTimeout(
      () => setActive((value) => (value + 1) % testimonials.length),
      8000,
    );
    return () => window.clearTimeout(timer);
  }, [active, reduceMotion]);

  return (
    <Section index="05" label="What clients say" title="Trusted by teams that ship.">
      <div className="reg-marks relative grid border border-border md:grid-cols-12">
        <div className="relative overflow-hidden p-7 md:col-span-7 md:p-10 lg:col-span-8 lg:p-14">
          <p className="font-sans text-[11px] text-accent">
            Testimonial {String(active + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </p>

          <AnimatePresence mode="wait">
            <motion.figure
              key={current.name}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="display-title mt-6 text-[clamp(1.4rem,3vw,2.75rem)] leading-[1.15]">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5 font-sans text-[11px] text-muted">
                <span className="text-foreground">{current.name}</span>
                <span className="mx-2 text-accent">/</span>
                {current.role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="grid min-w-0 border-t border-border md:col-span-5 md:border-l md:border-t-0 lg:col-span-4">
          {testimonials.map((testimonial, index) => {
            const isActive = index === active;
            return (
              <button
                key={testimonial.name}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(index)}
                className={`group flex min-w-0 items-center gap-4 border-b border-border p-5 text-left transition-colors duration-300 last:border-b-0 md:p-6 ${
                  isActive ? "bg-elevated" : "hover:bg-elevated/60"
                }`}
              >
                <span
                  className={`h-full w-[3px] self-stretch transition-colors duration-300 ${
                    isActive ? "bg-accent" : "bg-transparent group-hover:bg-accent/40"
                  }`}
                  aria-hidden="true"
                />
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="h-12 w-12 shrink-0 border border-border object-cover grayscale transition-all duration-300 md:h-14 md:w-14"
                />
                <span className="min-w-0 flex-1">
                  <span className="display-title block truncate text-base md:text-lg">
                    {testimonial.name}
                  </span>
                  <span className="mt-1 block truncate font-sans text-[10px] text-muted">
                    {testimonial.role}
                  </span>
                </span>
                <span
                  className={`ml-auto font-sans text-[11px] transition-colors ${
                    isActive ? "text-accent" : "text-muted/50"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
