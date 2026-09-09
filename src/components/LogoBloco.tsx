import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';

import { cn } from '@/lib/utils';

const logoPropsSchema = z.object({
  className: z.string().optional(),
  href: z.string().default('/'),
  theme: z.enum(['light', 'dark', 'auto']).default('auto'),
});

export type LogoProps = z.infer<typeof logoPropsSchema>;

export function LogoBloco(props: LogoProps) {
  // Validação estrita das propriedades de entrada
  const { className, href, theme } = logoPropsSchema.parse(props);

  // Mapeamento de filtros de contraste para a imagem original em raster
  const themeClasses = {
    light: '',
    dark: 'brightness-0 invert', 
    auto: 'dark:brightness-0 dark:invert',
  };

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center rounded-md transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98]",
        className,
      )}
      aria-label="Página Inicial da Costa Marinho Engenharia"
    >
      <div className="relative h-12 w-[280px]">
        <Image
          src="/images/logo.png"
          alt="Logotipo Costa Marinho Engenharia"
          fill
          priority
          sizes="(max-width: 768px) 200px, 280px"
          className={cn("object-contain", themeClasses[theme])}
        />
      </div>
    </Link>
  );
}