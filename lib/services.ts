export type ServiceCategory =
  | "software"
  | "hardware"
  | "network"
  | "security"
  | "remote"
  | "consulting";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number | string;
  priceNote?: string;
  category: ServiceCategory;
  duration?: string;
  popular?: boolean;
}

export interface CategoryMeta {
  label: string;
  color: string;
  glowColor: string;
  icon: string;
}

export const categoryMeta: Record<ServiceCategory, CategoryMeta> = {
  software: {
    label: "Software",
    color: "text-cyan-400",
    glowColor: "rgba(34,211,238,0.2)",
    icon: "Terminal",
  },
  hardware: {
    label: "Hardware",
    color: "text-amber-400",
    glowColor: "rgba(251,191,36,0.2)",
    icon: "Cpu",
  },
  network: {
    label: "Rede",
    color: "text-violet-400",
    glowColor: "rgba(167,139,250,0.2)",
    icon: "Network",
  },
  security: {
    label: "Segurança",
    color: "text-red-400",
    glowColor: "rgba(248,113,113,0.2)",
    icon: "ShieldCheck",
  },
  remote: {
    label: "Remoto",
    color: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.2)",
    icon: "MonitorSmartphone",
  },
  consulting: {
    label: "Consultoria",
    color: "text-sky-400",
    glowColor: "rgba(56,189,248,0.2)",
    icon: "Lightbulb",
  },
};

export const services: Service[] = [
  // Software
  {
    id: "formatacao-completa",
    name: "Formatação Completa",
    description: "Reinstalação do sistema operacional com backup de dados, drivers e configurações iniciais.",
    price: 120,
    priceNote: "inclui backup",
    category: "software",
    duration: "2–4h",
    popular: true,
  },
  {
    id: "instalacao-windows",
    name: "Instalação Windows / Linux",
    description: "Instalação limpa do sistema operacional com drivers, atualizações e otimização de inicialização.",
    price: 100,
    category: "software",
    duration: "1–3h",
  },
  {
    id: "remocao-virus",
    name: "Remoção de Vírus e Malware",
    description: "Varredura completa, remoção de ameaças e instalação de solução de segurança recomendada.",
    price: 80,
    category: "security",
    duration: "1–2h",
    popular: true,
  },
  {
    id: "instalacao-programas",
    name: "Instalação de Programas",
    description: "Configuração e instalação de softwares essenciais conforme necessidade do cliente.",
    price: 50,
    priceNote: "por sessão",
    category: "software",
    duration: "30–60min",
  },
  {
    id: "otimizacao-sistema",
    name: "Otimização de Sistema",
    description: "Limpeza de arquivos temporários, desfragmentação, configuração de inicialização e melhoria de performance.",
    price: 70,
    category: "software",
    duration: "1h",
  },
  // Hardware
  {
    id: "limpeza-interna",
    name: "Limpeza Interna (Notebook/PC)",
    description: "Desmontagem, limpeza de poeira, lubrificação de coolers e aplicação de pasta térmica.",
    price: 90,
    category: "hardware",
    duration: "1–2h",
    popular: true,
  },
  {
    id: "troca-pasta-termica",
    name: "Troca de Pasta Térmica",
    description: "Remoção da pasta antiga e aplicação de pasta de alta qualidade para reduzir temperaturas.",
    price: 60,
    category: "hardware",
    duration: "30–60min",
  },
  {
    id: "upgrade-hardware",
    name: "Upgrade de Hardware",
    description: "Instalação e configuração de memória RAM, SSD, placa de vídeo ou demais componentes.",
    price: 80,
    priceNote: "mão de obra",
    category: "hardware",
    duration: "1–2h",
  },
  {
    id: "recuperacao-dados",
    name: "Recuperação de Dados",
    description: "Recuperação de arquivos deletados ou de HD danificado. Diagnóstico gratuito.",
    price: "A consultar",
    category: "hardware",
    duration: "Variável",
  },
  // Network
  {
    id: "configuracao-rede",
    name: "Configuração de Rede Wi-Fi",
    description: "Configuração de roteador, extensores de sinal, QoS e segurança da rede doméstica ou empresarial.",
    price: 100,
    category: "network",
    duration: "1–2h",
  },
  {
    id: "cabeamento",
    name: "Cabeamento Estruturado",
    description: "Instalação e organização de cabos de rede com certificação e teste de conexão.",
    price: "A consultar",
    priceNote: "por ponto de rede",
    category: "network",
    duration: "Variável",
  },
  {
    id: "vpn",
    name: "Configuração de VPN",
    description: "Instalação e configuração de VPN pessoal ou empresarial para acesso seguro remoto.",
    price: 120,
    category: "security",
    duration: "1h",
  },
  // Remote
  {
    id: "suporte-remoto",
    name: "Suporte Remoto",
    description: "Atendimento via acesso remoto para resolução de problemas de software, configurações e dúvidas.",
    price: 60,
    priceNote: "por hora",
    category: "remote",
    duration: "Sob demanda",
    popular: true,
  },
  {
    id: "manutencao-mensal",
    name: "Plano Manutenção Mensal",
    description: "Manutenção preventiva mensal com suporte remoto ilimitado e prioridade no atendimento.",
    price: 150,
    priceNote: "por mês",
    category: "remote",
    duration: "Recorrente",
    popular: true,
  },
  // Consulting
  {
    id: "consultoria-ti",
    name: "Consultoria em T.I.",
    description: "Análise das necessidades tecnológicas da empresa ou residência com plano de ação personalizado.",
    price: 200,
    priceNote: "por projeto",
    category: "consulting",
    duration: "Variável",
  },
];

export const stats = [
  { label: "Clientes atendidos", value: 500, suffix: "+" },
  { label: "Anos de experiência", value: 8, suffix: "+" },
  { label: "Problemas resolvidos", value: 99, suffix: "%" },
  { label: "Disponibilidade", value: 24, suffix: "/7" },
];
