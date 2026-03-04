"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, Star } from "lucide-react";
import { services, categoryMeta, type ServiceCategory } from "@/lib/services";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { siteConfig } from "@/lib/config";

function formatPrice(price: number | string, note?: string) {
  if (typeof price === "string") return { main: price, note: undefined };
  return { main: `R$ ${price.toLocaleString("pt-BR")}`, note };
}

// Agrupa serviços por categoria
const grouped = Object.keys(categoryMeta).reduce((acc, cat) => {
  const items = services.filter((s) => s.category === cat);
  if (items.length) acc[cat as ServiceCategory] = items;
  return acc;
}, {} as Record<ServiceCategory, typeof services>);

function MobileAccordion() {
  const [openCat, setOpenCat] = useState<ServiceCategory | null>(null);

  return (
    <div className="border border-border overflow-hidden">
      {(Object.entries(grouped) as [ServiceCategory, typeof services][]).map(([cat, items], gi) => {
        const meta = categoryMeta[cat];
        const isOpen = openCat === cat;
        const lowestPrice = items.reduce((min, s) => {
          if (typeof s.price === "number") return Math.min(min, s.price);
          return min;
        }, Infinity);

        return (
          <div key={cat} className="border-b border-border last:border-0">
            {/* Accordion header */}
            <button
              onClick={() => setOpenCat(isOpen ? null : cat)}
              className="w-full flex items-center justify-between px-5 py-4 bg-surface hover:bg-panel transition-colors"
            >
              <div className="flex items-center gap-3">
                <CategoryBadge category={cat} />
                <span className="font-mono text-xs text-slate-500">
                  {items.length} serviço{items.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {lowestPrice !== Infinity && (
                  <span className="font-mono text-xs text-slate-600">
                    a partir de{" "}
                    <span className="text-emerald-400 font-bold">
                      R$ {lowestPrice}
                    </span>
                  </span>
                )}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} className={meta.color} />
                </motion.div>
              </div>
            </button>

            {/* Accordion body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {items.map((service, i) => {
                    const { main, note } = formatPrice(service.price, service.priceNote);
                    return (
                      <div
                        key={service.id}
                        className="flex items-start justify-between px-5 py-4 border-t border-border/50 bg-abyss gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            {service.popular && (
                              <Star size={10} className="text-amber-400 fill-amber-400 shrink-0" />
                            )}
                            <span className="font-body font-semibold text-sm text-slate-200 truncate">
                              {service.name}
                            </span>
                          </div>
                          {service.duration && (
                            <div className="flex items-center gap-1 mt-1">
                              <Clock size={10} className="text-slate-600" />
                              <span className="font-mono text-[10px] text-slate-600">{service.duration}</span>
                            </div>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <div className={`font-display font-bold text-base ${typeof service.price === "string" ? "text-amber-400" : "text-emerald-400"}`}>
                            {main}
                          </div>
                          {note && (
                            <div className="font-mono text-[10px] text-slate-600">/{note}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function DesktopTable() {
  const tableRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: tableRef,
    offset: ["start end", "end start"],
  });
  const scanY = useTransform(scrollYProgress, [0, 1], ["-5%", "105%"]);

  return (
    <div ref={tableRef} className="relative border border-border overflow-hidden">
      <motion.div
        className="absolute left-0 right-0 h-8 pointer-events-none z-10"
        style={{
          top: scanY,
          background: "linear-gradient(to bottom, transparent, rgba(34,211,238,0.04), transparent)",
        }}
      />

      {/* Table header */}
      <div className="grid grid-cols-12 bg-surface border-b border-border px-6 py-4">
        <div className="col-span-5 font-mono text-xs text-slate-500 tracking-widest">SERVIÇO</div>
        <div className="col-span-3 font-mono text-xs text-slate-500 tracking-widest">CATEGORIA</div>
        <div className="col-span-2 font-mono text-xs text-slate-500 tracking-widest hidden lg:block">DURAÇÃO</div>
        <div className="col-span-4 lg:col-span-2 font-mono text-xs text-slate-500 tracking-widest text-right">PREÇO</div>
      </div>

      {services.map((service, i) => {
        const { main, note } = formatPrice(service.price, service.priceNote);
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.03 }}
            className="grid grid-cols-12 px-6 py-4 border-b border-border/50 group hover:bg-surface/80 transition-all duration-200"
          >
            <div className="col-span-5 pr-4">
              <div className="flex items-center gap-2 mb-1">
                {service.popular && <span className="font-mono text-[9px] text-amber-400">★</span>}
                <span className="font-body font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                  {service.name}
                </span>
              </div>
              <p className="font-body text-xs text-slate-600 line-clamp-1">{service.description}</p>
            </div>
            <div className="col-span-3 flex items-center">
              <CategoryBadge category={service.category} />
            </div>
            <div className="col-span-2 hidden lg:flex items-center">
              <span className="font-mono text-xs text-slate-600">{service.duration ?? "—"}</span>
            </div>
            <div className="col-span-4 lg:col-span-2 flex items-center justify-end gap-1 flex-wrap">
              <span className={`font-display font-bold text-base ${typeof service.price === "string" ? "text-amber-400" : "text-emerald-400"}`}>
                {main}
              </span>
              {note && <span className="font-mono text-[10px] text-slate-600">/{note}</span>}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function PriceTableSection() {
  return (
    <section id="tabela" className="py-16 md:py-28 bg-abyss relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="font-mono text-xs text-amber-400/60 tracking-[0.3em] mb-3">
              // TABELA DE PREÇOS
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
              PREÇOS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                TRANSPARENTES
              </span>
            </h2>
          </div>
          <p className="font-body text-slate-500 text-sm max-w-xs leading-relaxed">
            Sem taxas ocultas. Orçamento gratuito antes de qualquer serviço.
          </p>
        </motion.div>

        {/* Mobile: accordion por categoria */}
        <div className="md:hidden">
          <MobileAccordion />
        </div>

        {/* Desktop: tabela completa */}
        <div className="hidden md:block">
          <DesktopTable />
        </div>

        {/* Footer CTA */}
        <div className="mt-4 px-4 md:px-6 py-5 border border-border bg-surface flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-600 tracking-wider text-center sm:text-left">
            * Preços válidos para atendimento na região. Consulte disponibilidade.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Olá! Quero um orçamento personalizado.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-amber-400/40 text-amber-400 font-display font-bold text-xs tracking-widest hover:bg-amber-400 hover:text-void transition-all duration-300 whitespace-nowrap"
          >
            ORÇAMENTO PERSONALIZADO
          </a>
        </div>
      </div>
    </section>
  );
}