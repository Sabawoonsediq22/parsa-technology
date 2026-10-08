"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: "up" | "blur" | "scale";
};

const variants = {
  up: (y: number) => ({ opacity: 0, y }),
  blur: (y: number) => ({ opacity: 0, y, filter: "blur(8px)" }),
  scale: () => ({ opacity: 0, scale: 0.97 }),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  variant = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const hidden = variants[variant](y);

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : hidden}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
