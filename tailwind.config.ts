import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#040810",
        abyss: "#070d1a",
        surface: "#0d1729",
        panel: "#111f35",
        border: "#1a2f50",
        "border-bright": "#1e3a62",
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          glow: "#22d3ee",
        },
        amber: {
          glow: "#fbbf24",
        },
        emerald: {
          glow: "#34d399",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "scan-line": "scan 4s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "flicker": "flicker 8s infinite",
        "data-flow": "dataflow 20s linear infinite",
        "grid-pan": "gridpan 30s linear infinite",
        "counter": "counter 1.5s ease-out forwards",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.8" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.6" },
          "99%": { opacity: "1" },
        },
        dataflow: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        gridpan: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "80px 80px" },
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 20px rgba(34, 211, 238, 0.3), 0 0 60px rgba(34, 211, 238, 0.1)",
        "cyan-subtle": "0 0 10px rgba(34, 211, 238, 0.15)",
        "amber-glow": "0 0 20px rgba(251, 191, 36, 0.3)",
        "panel": "0 4px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
        "scanline": "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
