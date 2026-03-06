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
    label: "Presencial",
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
  {
    id: "formatacao-computador",
    name: "Formatação de Computador",
    description: "Backup (opcional), instalação limpa do sistema, drivers e programas básicos.",
    price: 135,
    category: "software",
    duration: "2–4h",
    popular: true,
  },
  {
    id: "manutencao-preventiva",
    name: "Manutenção Preventiva",
    description: "Limpeza física, verificação de hardware e otimização do sistema. Desktop ou Notebook.",
    price: 120,
    category: "hardware",
    duration: "1–2h",
    popular: true,
  },
  {
    id: "instalacao-softwares",
    name: "Instalação de Softwares",
    description: "Instalação de até 5 programas comuns (Office, navegadores, antivírus etc.).",
    price: 70,
    category: "software",
    duration: "30–60min",
  },
  {
    id: "remocao-virus",
    name: "Remoção de Vírus e Malware",
    description: "Análise completa e remoção de ameaças sem formatação.",
    price: 90,
    category: "security",
    duration: "1–2h",
    popular: true,
  },
  {
    id: "configuracao-impressora",
    name: "Configuração de Impressora",
    description: "Instalação, configuração e testes. USB ou Wi-Fi.",
    price: 80,
    category: "network",
    duration: "30–60min",
  },
  {
    id: "aula-informatica",
    name: "Aula Particular – Informática Básica",
    description: "Aula presencial de 1h ou 1h30. Pacotes com desconto disponíveis.",
    price: 110,
    priceNote: "por aula",
    category: "consulting",
    duration: "1h–1h30",
  },
  {
    id: "instalacao-so-licenca",
    name: "Instalação de S.O. com Licença",
    description: "Instalação + ativação do sistema operacional. Licença OEM vendida à parte.",
    price: 180,
    category: "software",
    duration: "2–3h",
  },
  {
    id: "atendimento-domicilio",
    name: "Atendimento a Domicílio",
    description: "Taxa extra para deslocamento dentro da cidade. Valor conforme localização.",
    price: "A consultar",
    category: "remote",
    duration: "Variável",
  },
  {
    id: "criacao-site-institucional",
    name: "Criação de Site Institucional",
    description: "Website, moderno e responsivo para apresentar sua empresa ou serviço profissionalmente na internet.",
    price: 800,
    category: "software",
    duration: "Sob consulta",
    popular: true,
  },
  {
    id: "dominio-hospedagem",
    name: "Registro de Domínio e Hospedagem",
    description: "Registro do seu domínio (.com.br, .com etc.) e configuração completa do serviço de hospedagem.",
    price: 150,
    category: "software",
    duration: "1–2h",
  },
  {
    id: "backup-nuvem",
    name: "Backup e Organização em Nuvem",
    description: "Configuração de backup no Google Drive ou OneDrive, organização de pastas e sincronização automática.",
    price: 120,
    category: "remote",
    duration: "1–2h",
  },
  {
    id: "email-profissional",
    name: "Configuração de E-mail Profissional",
    description: "Configuração completa no computador e celular, com sincronização, assinatura personalizada e organização básica.",
    price: 80,
    category: "network",
    duration: "30–60min",
  },
  {
    id: "upgrade-ssd",
    name: "Upgrade de SSD",
    description: "Instalação de SSD com clonagem do sistema atual ou instalação limpa. SSD não incluso.",
    price: 120,
    priceNote: "mão de obra",
    category: "hardware",
    duration: "1–2h",
  },
];

export const stats = [
  { label: "Clientes atendidos", value: 200, suffix: "+" },
  { label: "Anos de experiência", value: 6, suffix: "+" },
  { label: "Problemas resolvidos", value: 99, suffix: "%" },
  { label: "Disponibilidade", value: 24, suffix: "/7" },
];