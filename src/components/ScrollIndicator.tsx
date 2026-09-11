import Link from 'next/link';

interface ScrollIndicatorProps {
  /** Endereço de destino da seção (ex: "#cazua", "#contato") */
  href: string;
  /** Texto descritivo para leitores de tela de acessibilidade */
  ariaLabel: string;
  /** Opcional: Altera a cor padrão da seta (Padrão: text-white/60) */
  colorClass?: string;
}

// Modo de usar
{/* <ScrollIndicator 
  href="#servicos" 
  ariaLabel="Rolar para a seção de Serviços" 
  colorClass="text-primary/60 group-hover:text-primary" //opcional
/> */}


export default function ScrollIndicator({ 
  href, 
  ariaLabel, 
  colorClass = "text-white/60 group-hover:text-white" 
}: ScrollIndicatorProps) {
  return (
    <Link
      href={href}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group z-20 md:right-12 md:bottom-16 md:left-auto md:translate-x-0"
      aria-label={ariaLabel}
    >
      <svg
        className={`h-12 w-12 transition-colors ${colorClass}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </Link>
  );
}
