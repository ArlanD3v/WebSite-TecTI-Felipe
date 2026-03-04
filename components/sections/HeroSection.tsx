"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, Shield, Wifi, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/config";

const floatingIcons = [
  { Icon: Cpu, x: "15%", y: "25%", delay: 0, size: 18 },
  { Icon: Shield, x: "82%", y: "20%", delay: 0.3, size: 16 },
  { Icon: Wifi, x: "75%", y: "65%", delay: 0.6, size: 20 },
  { Icon: Terminal, x: "10%", y: "70%", delay: 0.9, size: 14 },
];

const statusItems = [
  { label: "SISTEMA", value: "ONLINE", color: "text-emerald-400" },
  { label: "SUPORTE", value: "ATIVO", color: "text-cyan-400" },
  { label: "RESP.", value: "< 2H", color: "text-amber-400" },
];

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Mouse-tracking radial gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(34,211,238,0.06), transparent 60%)`,
        }}
      />

      {/* Top diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-cyan-400/5 to-transparent" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1.2, duration: 0.5 }}
          className="absolute hidden lg:flex items-center justify-center"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="p-3 border border-border bg-surface/60 backdrop-blur-sm"
          >
            <Icon size={size} className="text-cyan-400/60" />
          </motion.div>
        </motion.div>
      ))}

      {/* Vertical scan line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent hidden xl:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent hidden xl:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* System status bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-6 mb-16 flex-wrap"
        >
          {statusItems.map(({ label, value, color }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-600 tracking-widest">{label}</span>
              <span className={`font-mono text-xs font-bold tracking-widest ${color}`}>
                {value}
              </span>
              <div className={`w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")} pulse-ring`} />
            </div>
          ))}
        </motion.div>

        {/* Main headline */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] mb-4"
          >
            // SERVIÇOS DE TECNOLOGIA DA INFORMAÇÃO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-5xl md:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6"
          >
            <span className="block text-white">SUPORTE</span>
            <span className="block text-white">T.I. QUE</span>
            <span className="block relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 glow-cyan">
                FUNCIONA
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-transparent origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="font-body text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mt-8 mb-12"
          >
            Formatação, manutenção, redes e segurança. Atendimento rápido com
            preços transparentes — sem surpresas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Olá, gostaria de um orçamento!`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-cyan-400 text-void font-display font-bold tracking-widest text-sm overflow-hidden hover:shadow-cyan-glow transition-all duration-300"
            >
              <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
              <div className="absolute inset-0 bg-white translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300 opacity-10" />
            </a>
            <a
              href="#tabela"
              className="px-8 py-4 border border-border text-slate-400 font-display font-semibold tracking-widest text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
            >
              VER PREÇOS
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} className="text-cyan-400/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
