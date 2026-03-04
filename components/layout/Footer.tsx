import { Terminal } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-void py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-400/20 rotate-45" />
            <Terminal size={11} className="relative text-cyan-400" />
          </div>
          <span className="font-display font-bold text-sm tracking-widest text-slate-400">
            FELIPE<span className="text-cyan-400">.</span>TI
          </span>
        </div>

        <p className="font-mono text-xs text-slate-700 tracking-wider">
          © {new Date().getFullYear()} Felipe Santos Serviços de T.I. — Todos os direitos reservados.
        </p>

        <div className="flex gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-xs text-slate-600 hover:text-cyan-400 transition-colors tracking-wider"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
