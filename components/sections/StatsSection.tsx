"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/services";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const id = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(Math.round(current));
      if (current >= target) clearInterval(id);
    }, duration / steps);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display font-bold text-5xl md:text-6xl text-white tabular-nums">
      {count}
      <span className="text-cyan-400">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 bg-abyss border-y border-border overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/3 via-transparent to-cyan-400/3" />

      {/* Horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map(({ label, value, suffix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-abyss px-8 py-10 flex flex-col gap-2 group hover:bg-surface transition-colors duration-300"
            >
              <Counter target={value} suffix={suffix} />
              <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mt-2">
                {label}
              </p>
              <div className="h-px w-0 group-hover:w-full bg-cyan-400/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
