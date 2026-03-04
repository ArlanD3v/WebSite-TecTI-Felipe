"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Tabela", href: "#tabela" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("pt-BR", { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-abyss/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-400/20 rounded rotate-45 group-hover:scale-110 transition-transform" />
              <Terminal size={14} className="relative text-cyan-400" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                FELIPE<span className="text-cyan-400">.</span>TI
              </span>
            </div>
          </a>

          {/* Center: system clock */}
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-500">
            <Zap size={10} className="text-emerald-400" />
            <span className="text-emerald-400">ONLINE</span>
            <span className="text-border">|</span>
            <span>{time}</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-body text-sm text-slate-400 hover:text-cyan-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-cyan-400 text-void font-display font-bold text-sm tracking-widest hover:bg-cyan-300 transition-all hover:shadow-cyan-glow"
            >
              CONTATO
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-abyss/98 backdrop-blur-xl md:hidden pt-20 px-8"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className="py-5 border-b border-border font-display text-2xl font-bold tracking-widest text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.label.toUpperCase()}
                </motion.a>
              ))}
              <motion.a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-8 py-4 bg-cyan-400 text-void text-center font-display font-bold tracking-widest text-lg"
              >
                FALAR NO WHATSAPP
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
