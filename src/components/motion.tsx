"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Fade-up wrapper — animates a single element into view on scroll   */
/* ------------------------------------------------------------------ */

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger container + child — for card groups                       */
/* ------------------------------------------------------------------ */

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({ children, className, once = true }: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero entrance — fade up + slide for page-load animations          */
/* ------------------------------------------------------------------ */

interface HeroEntranceProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function HeroEntrance({ children, className, delay = 0 }: HeroEntranceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  CountUp — animates a number from 0 to target when in view         */
/* ------------------------------------------------------------------ */

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function CountUp({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
