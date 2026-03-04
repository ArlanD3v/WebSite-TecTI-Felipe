# Felipe Santos T.I. — Site Pessoal

Site profissional para serviços de T.I., construído com **Next.js 15**, **Tailwind CSS** e **Framer Motion**.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** — estilização utilitária
- **Framer Motion** — animações
- **Lucide React** — ícones
- **Google Fonts**: Rajdhani (display), Syne (body), JetBrains Mono

## Estrutura (Clean Architecture)

```
felipe-ti/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Layout raiz com metadados SEO globais
│   ├── page.tsx            # Página principal com JSON-LD Schema
│   ├── globals.css         # Estilos globais e animações
│   ├── sitemap.ts          # Sitemap automático
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # HeroSection, StatsSection, ServicesSection,
│   │                         PriceTableSection, AboutSection, ContactSection
│   └── ui/                 # Componentes reutilizáveis (CategoryBadge, etc.)
├── lib/
│   ├── config.ts           # Configurações do site (URL, email, WhatsApp)
│   ├── services.ts         # Dados de serviços e categorias
│   └── utils.ts            # Utilitários (cn, clsx+twMerge)
└── public/                 # Assets estáticos
```

## Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

## Personalização

### 1. Dados de contato
Edite `lib/config.ts`:
```ts
export const siteConfig = {
  whatsapp: "5511999999999",  // Número com DDI+DDD
  email: "seu@email.com",
  url: "https://seusite.com",
};
```

### 2. Serviços e preços
Edite `lib/services.ts` — adicione, remova ou ajuste os preços no array `services`.

### 3. SEO
- Metadados Open Graph e Twitter estão em `app/layout.tsx`
- JSON-LD Schema.org está em `app/page.tsx`
- Sitemap gerado automaticamente em `/sitemap.xml`
- Coloque `og-image.png` (1200×630px) em `public/`

## SEO Features

- ✅ Metadata API do Next.js (title, description, OG, Twitter)
- ✅ JSON-LD estruturado (LocalBusiness + OfferCatalog)
- ✅ Sitemap automático
- ✅ robots.txt
- ✅ Google Fonts com `display: swap`
- ✅ Viewport e theme-color configurados
- ✅ Semântica HTML correta (section, main, h1/h2/h3)
