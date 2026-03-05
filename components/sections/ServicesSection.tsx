"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Star, X, MessageCircle } from "lucide-react";
import { services, type Service, type ServiceCategory, categoryMeta } from "@/lib/services";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { siteConfig } from "@/lib/config";

function PriceTag({ price, note }: { price: number | string; note?: string }) {
  if (typeof price === "string") {
    return <div className="font-mono text-amber-400 text-base font-medium">{price}</div>;
  }
  return (
    <div className="flex items-baseline gap-1 flex-wrap">
      <span className="font-mono text-[10px] text-slate-500">a partir de</span>
      <span className="font-mono text-xs text-emerald-400/60">R$</span>
      <span className="font-display font-bold text-xl text-emerald-400">
        {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </span>
      {note && <span className="font-mono text-[10px] text-slate-500">/{note}</span>}
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [selected, setSelected] = useState(false);
  const waMessage = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${service.name}`);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07, duration: 0.5 }}
        className="card-shine relative bg-surface border border-border group hover:border-cyan-400/40 transition-all duration-300 flex flex-col"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
        whileHover={{ y: -3 }}
      >
        {service.popular && (
          <div className="absolute -top-px left-4 px-3 py-1 bg-amber-400 text-void font-mono text-[9px] font-bold tracking-widest flex items-center gap-1">
            <Star size={8} fill="currentColor" />
            POPULAR
          </div>
        )}

        <div className="p-6 flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-3">
            <CategoryBadge category={service.category} />
            {service.duration && (
              <div className="flex items-center gap-1 font-mono text-[10px] text-slate-600 shrink-0">
                <Clock size={10} />
                {service.duration}
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-100 transition-colors leading-tight mb-2">
              {service.name}
            </h3>
            <p className="font-body text-sm text-slate-500 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <PriceTag price={service.price} note={service.priceNote} />

            {/* Botão orçamento */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-emerald-400/30 text-emerald-400 font-mono text-[11px] tracking-widest hover:bg-emerald-400 hover:text-[#040810] transition-all duration-200"
            >
              <MessageCircle size={12} />
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </div>

        {/* Hover bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </motion.div>
    </>
  );
}

const allCategories = Object.keys(categoryMeta) as ServiceCategory[];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <div className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] mb-3">
            // CATÁLOGO DE SERVIÇOS
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            O QUE POSSO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              RESOLVER
            </span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 font-mono text-xs tracking-widest transition-all duration-200 border ${
              activeCategory === "all"
                ? "border-cyan-400 text-cyan-400 bg-cyan-400/10"
                : "border-border text-slate-500 hover:border-slate-500 hover:text-slate-300"
            }`}
          >
            TODOS
          </button>
          {allCategories.map((cat) => {
            const meta = categoryMeta[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-xs tracking-widest transition-all duration-200 border ${
                  isActive
                    ? `border-current ${meta.color} bg-current/10`
                    : "border-border text-slate-500 hover:border-slate-500 hover:text-slate-300"
                }`}
              >
                {meta.label.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center font-mono text-xs text-slate-600 tracking-wider"
        >
          * Valores são estimativas. O orçamento final é confirmado após diagnóstico gratuito.
        </motion.p>
      </div>
    </section>
  );
}
