"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config";

const contactOptions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Iniciar conversa",
    href: `https://wa.me/${siteConfig.whatsapp}?text=Olá! Preciso de suporte técnico.`,
    color: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.2)",
    borderColor: "rgba(52,211,153,0.3)",
    accent: "bg-emerald-400",
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "text-cyan-400",
    glowColor: "rgba(34,211,238,0.15)",
    borderColor: "rgba(34,211,238,0.25)",
    accent: "bg-cyan-400",
    external: false,
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden bg-abyss">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] mb-4">
            // ENTRE EM CONTATO
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            VAMOS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              RESOLVER
            </span>
            <br />
            SEU PROBLEMA?
          </h2>
          <p className="font-body text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
            Entre em contato agora. Diagnóstico gratuito, atendimento rápido e
            preço justo — garantido.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {contactOptions.map(({ icon: Icon, label, value, href, color, glowColor, borderColor, accent, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-4 p-8 border bg-surface relative overflow-hidden"
              style={{
                borderColor,
                boxShadow: `0 0 30px ${glowColor}`,
              }}
            >
              <div className={`${color} transition-transform group-hover:scale-110 duration-300`}>
                <Icon size={28} />
              </div>
              <div>
                <div className="font-mono text-xs text-slate-600 tracking-widest mb-1">
                  {label.toUpperCase()}
                </div>
                <div className={`font-display font-bold text-lg ${color}`}>
                  {value}
                </div>
              </div>
              {external && (
                <ExternalLink size={12} className={`${color} opacity-40`} />
              )}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </motion.a>
          ))}
        </div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-ring" />
          <span className="font-mono text-xs text-slate-500 tracking-widest">
            ATENDIMENTO SEG–SAB, 8H–20H · EMERGÊNCIAS 24/7
          </span>
        </motion.div>
      </div>
    </section>
  );
}
