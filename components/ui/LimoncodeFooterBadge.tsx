'use client';

import { useState } from 'react';

// Inline SVG reproduz o ícone da Limoncode — sem dependência de imagem externa.
// Para usar em outros projetos: copie este arquivo inteiro, sem precisar de nenhuma config extra.

function LimonIcon({ hover }: { hover: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transition: 'transform 0.4s ease', transform: hover ? 'rotate(-12deg)' : 'rotate(0deg)' }}
    >
      {/* Corpo do limão */}
      <ellipse
        cx="50" cy="68" rx="42" ry="44"
        stroke={hover ? '#0B0B0C' : '#D7FF3D'}
        strokeWidth="7"
        fill="none"
        style={{ transition: 'stroke 0.3s ease' }}
      />
      {/* Folha */}
      <path
        d="M50 24 C54 14 68 10 72 18"
        stroke={hover ? '#0B0B0C' : '#D7FF3D'}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        style={{ transition: 'stroke 0.3s ease' }}
      />
      {/* Segmentos internos — vertical */}
      <line x1="50" y1="28" x2="50" y2="108" stroke={hover ? '#0B0B0C' : '#D7FF3D'} strokeWidth="5" strokeLinecap="round" style={{ transition: 'stroke 0.3s ease' }} />
      {/* Diagonal esquerda-cima → direita-baixo */}
      <line x1="12" y1="50" x2="88" y2="86" stroke={hover ? '#0B0B0C' : '#D7FF3D'} strokeWidth="5" strokeLinecap="round" style={{ transition: 'stroke 0.3s ease' }} />
      {/* Diagonal direita-cima → esquerda-baixo */}
      <line x1="88" y1="50" x2="12" y2="86" stroke={hover ? '#0B0B0C' : '#D7FF3D'} strokeWidth="5" strokeLinecap="round" style={{ transition: 'stroke 0.3s ease' }} />
      {/* Centro */}
      <circle cx="50" cy="68" r="5" fill={hover ? '#0B0B0C' : '#D7FF3D'} style={{ transition: 'fill 0.3s ease' }} />
    </svg>
  );
}

function ArrowUpRight({ hover }: { hover: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform: hover ? 'translate(2px, -2px)' : 'translate(0, 0)',
        opacity: hover ? 1 : 0.5,
      }}
    >
      <path
        d="M2 10L10 2M10 2H4M10 2V8"
        stroke={hover ? '#0B0B0C' : '#FAFAF7'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'stroke 0.3s ease' }}
      />
    </svg>
  );
}

interface LimoncodeFooterBadgeProps {
  /** Texto antes de "Limoncode". Padrão: "Desenvolvido pela" */
  label?: string;
  /** URL de destino. Padrão: https://limoncode.com */
  href?: string;
}

export function LimoncodeFooterBadge({
  label = 'Desenvolvido pela',
  href = 'https://limoncode.com',
}: LimoncodeFooterBadgeProps) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Desenvolvido pela Limoncode — abre em nova aba"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 18px 10px 14px',
        borderRadius: '999px',
        border: `1.5px solid ${hover ? '#D7FF3D' : '#2A2A2C'}`,
        background: hover ? '#D7FF3D' : '#0B0B0C',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease',
        boxShadow: hover ? '0 0 20px rgba(215, 255, 61, 0.25)' : '0 0 0 rgba(215,255,61,0)',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <LimonIcon hover={hover} />

      <span
        style={{
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: hover ? '#0B0B0C' : '#6B6B6B',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.02em',
          color: hover ? '#0B0B0C' : '#D7FF3D',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap',
        }}
      >
        Limoncode
      </span>

      <ArrowUpRight hover={hover} />
    </a>
  );
}
