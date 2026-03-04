"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock3, Headphones } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Diagnóstico gratuito",
    description: "Analiso o problema sem compromisso antes de qualquer cobrança.",
    color: "text-emerald-400",
  },
  {
    icon: Clock3,
    title: "Atendimento rápido",
    description: "Resposta em até 2 horas via WhatsApp. Urgências atendidas no mesmo dia.",
    color: "text-cyan-400",
  },
  {
    icon: Headphones,
    title: "Suporte pós-serviço",
    description: "Acompanhamento por 7 dias após qualquer serviço realizado.",
    color: "text-amber-400",
  },
  {
    icon: MapPin,
    title: "Atendimento presencial",
    description: "Visita domiciliar ou empresarial com agendamento flexível.",
    color: "text-violet-400",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-28 relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] mb-3">
              // SOBRE MIM
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              TECNOLOGIA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                SEM COMPLICAÇÃO
              </span>
            </h2>
            <div className="space-y-4 font-body text-slate-400 leading-relaxed">
              <p>
                Sou Felipe Santos, técnico em T.I. com mais de 8 anos resolvendo
                problemas reais de pessoas e empresas. Comecei consertando o
                computador dos vizinhos, hoje atendo clientes em toda a região.
              </p>
              <p>
                Acredito que tecnologia precisa ser acessível. Por isso, explico
                cada passo do serviço em linguagem simples, sem juridiquês técnico
                — e cobro um preço justo e transparente.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Windows", "Linux", "macOS", "Redes", "Segurança", "Cloud"].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 font-mono text-xs text-slate-400 border border-border px-3 py-2 hover:border-cyan-400/40 hover:text-cyan-300 transition-all group"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, description, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 bg-surface border border-border hover:border-cyan-400/30 transition-all group card-shine"
              >
                <div className={`${color} mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-cyan-100 transition-colors">
                  {title}
                </h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
