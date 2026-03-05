"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clock3, HandshakeIcon, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Formação técnica",
    description: "Graduado em Engenharia de Computação com 6+ anos de experiência prática.",
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    glow: "rgba(34,211,238,0.08)",
  },
  {
    icon: Clock3,
    title: "Atendimento rápido",
    description: "Resposta ágil e foco na solução definitiva, sem enrolação.",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    glow: "rgba(52,211,153,0.08)",
  },
  {
    icon: Lightbulb,
    title: "Linguagem simples",
    description: "Explico cada etapa sem termos técnicos desnecessários — você entende tudo.",
    color: "text-amber-400",
    border: "border-amber-400/20",
    glow: "rgba(251,191,36,0.08)",
  },
  {
    icon: HandshakeIcon,
    title: "Compromisso real",
    description: "Preço justo, transparência total e compromisso com sua satisfação.",
    color: "text-violet-400",
    border: "border-violet-400/20",
    glow: "rgba(167,139,250,0.08)",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left: bio — ocupa 3 colunas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] mb-3">
              // SOBRE MIM
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-8 leading-tight">
              TECNOLOGIA QUE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                FACILITA
              </span>
              <br />
              SUA VIDA
            </h2>

            {/* Bio com destaque no primeiro parágrafo */}
            <div className="space-y-5">
              <p className="font-body text-base text-slate-300 leading-relaxed border-l-2 border-cyan-400/40 pl-4">
                Sou <strong className="text-white">Felipe Santos</strong>, Técnico em Tecnologia da Informação e Comunicação,
                graduado em <strong className="text-cyan-400">Engenharia de Computação</strong>, com mais de{" "}
                <strong className="text-white">6 anos de experiência</strong> ajudando pessoas e empresas a resolverem
                problemas tecnológicos de forma rápida e eficiente.
              </p>

              <p className="font-body text-sm text-slate-500 leading-relaxed">
                Minha trajetória começou oferecendo suporte a vizinhos e amigos, e ao longo dos anos transformei
                essa dedicação em um serviço profissional que hoje atende clientes em toda a região. Cada atendimento
                é realizado com responsabilidade, transparência e foco na solução definitiva do problema.
              </p>

              <p className="font-body text-sm text-slate-500 leading-relaxed">
                Acredito que a tecnologia existe para facilitar a vida das pessoas, e não para gerar dúvidas ou
                complicações. Por isso, explico cada etapa do serviço de forma clara e objetiva — você entende
                exatamente o que está sendo feito e o motivo de cada procedimento.
              </p>

              <p className="font-body text-sm text-slate-400 leading-relaxed font-medium">
                Se você busca um profissional sério, acessível e comprometido com resultados, será um prazer atender você.
              </p>
            </div>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Engenharia de Computação", "Windows", "Linux", "Redes", "Segurança"].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] text-slate-400 border border-border px-3 py-1.5 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: pillars — ocupa 2 colunas */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map(({ icon: Icon, title, description, color, border, glow }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`p-5 bg-surface border ${border} group card-shine`}
                style={{ boxShadow: `0 0 30px ${glow}` }}
              >
                <div className={`${color} mb-3`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-sm text-white mb-1 group-hover:text-cyan-100 transition-colors">
                  {title}
                </h3>
                <p className="font-body text-xs text-slate-500 leading-relaxed">
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
