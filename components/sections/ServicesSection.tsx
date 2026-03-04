"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Star, X } from "lucide-react";
import { services, type Service, type ServiceCategory, categoryMeta } from "@/lib/services";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { siteConfig } from "@/lib/config";

function PriceTag({ price, note }: { price: number | string; note?: string }) {
  if (typeof price === "string") {
    return (
      <div className="font-mono text-amber-400 text-lg font-medium">{price}</div>
    );
  }
  return (
    <div className="flex items-baseline gap-1">
      <span className="font-mono text-xs text-emerald-400/60">R$</span>
      <span className="font-display font-bold text-2xl text-emerald-400 glow-emerald">
        {price.toLocaleString("pt-BR")}
      </span>
      {note && (
        <span className="font-mono text-xs text-slate-500">/{note}</span>
      )}
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07, duration: 0.5 }}
        onClick={() => setSelected(true)}
        className="card-shine relative bg-surface border border-border cursor-pointer group hover:border-cyan-400/40 transition-all duration-300"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
        whileHover={{ y: -3 }}
      >
        {service.popular && (
          <div className="absolute -top-px left-4 px-3 py-1 bg-amber-400 text-void font-mono text-[9px] font-bold tracking-widest flex items-center gap-1">
            <Star size={8} fill="currentColor" />
            POPULAR
          </div>
        )}

        <div className="p-6 flex flex-col gap-4 h-full">
          <div className="flex items-start justify-between gap-3">
            <CategoryBadge category={service.category} />
            {service.duration && (
              <div className="flex items-center gap-1 font-mono text-[10px] text-slate-600">
                <Clock size={10} />
                {service.duration}
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-100 transition-colors leading-tight mb-2">
              {service.name}
            </h3>
            <p className="font-body text-sm text-slate-500 leading-relaxed line-clamp-2">
              {service.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <PriceTag price={service.price} note={service.priceNote} />
            <span className="font-mono text-xs text-cyan-400/0 group-hover:text-cyan-400/60 transition-colors tracking-widest">
              VER DETALHES →
            </span>
          </div>
        </div>

        {/* Hover glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-void/80 backdrop-blur-md"
            onClick={() => setSelected(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-surface border border-border-bright p-8"
              style={{ boxShadow: "0 0 60px rgba(34,211,238,0.1)" }}
            >
              <button
                onClick={() => setSelected(false)}
                className="absolute top-4 right-4 text-slate-600 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <CategoryBadge category={service.category} size="md" />

              <h2 className="font-display font-bold text-3xl text-white mt-4 mb-3">
                {service.name}
              </h2>
              <p className="font-body text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-between p-4 bg-abyss border border-border mb-6">
                <div>
                  <div className="font-mono text-xs text-slate-600 tracking-widest mb-1">INVESTIMENTO</div>
                  <PriceTag price={service.price} note={service.priceNote} />
                </div>
                {service.duration && (
                  <div className="text-right">
                    <div className="font-mono text-xs text-slate-600 tracking-widest mb-1">DURAÇÃO</div>
                    <div className="font-display font-bold text-white">{service.duration}</div>
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Olá! Tenho interesse no serviço: ${service.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-cyan-400 text-void text-center font-display font-bold tracking-widest hover:bg-cyan-300 transition-colors"
              >
                SOLICITAR ESTE SERVIÇO
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const allCategories = Object.keys(categoryMeta) as ServiceCategory[];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");

  const filtered = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] mb-3">
            // CATÁLOGO DE SERVIÇOS
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            O QUE POSSO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              RESOLVER
            </span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
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
      </div>
    </section>
  );
}
