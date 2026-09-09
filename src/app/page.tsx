import { Building, Camera, ChevronRight, FileText, LayoutTemplate, LineChart, ShieldAlert } from 'lucide-react';
// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

import { LeadForm } from '@/components/LeadForm';
import { LogoBloco } from '@/components/LogoBloco';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">

      {/* 1. Cabeçalho (Header) */}
      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center">
            <LogoBloco href={'/'} theme={'light'} />
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="#servicos" className="text-foreground transition-colors hover:text-primary">
              Serviços
            </Link>
            <Link href="#contato" className="text-foreground transition-colors hover:text-primary">
              Contato
            </Link>
            <Link
              href="https://costamarinhoengenharia.grupocazua.com.br/login"
              className="flex items-center gap-2 rounded-sm bg-primary px-6 py-2.5 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Área do Cliente
              <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* 2. Primeira Dobra (Hero Section) - Layout fluido e imersivo */}
        <section className="relative w-full overflow-hidden border-b border-border bg-background">
          <div className="mx-auto max-w-7xl">
            
            {/* Imagem Hero fluida - ocupa largura total no mobile, metade no desktop com texto sobreposto */}
            <div className="relative h-[450px] w-full bg-secondary md:h-[550px] md:h-[600px] lg:h-[650px]">
              <Image
                src="/assets/hero-obra.webp"
                alt="Execução de obra gerenciada pela Costa Marinho"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority 
                className="object-cover"
              />
              {/* Gradiente sutil para legibilidade do texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent md:from-primary/80 md:via-primary/40 md:to-transparent" />
              
              {/* Conteúdo textual sobreposto à imagem */}
              <div className="absolute inset-0 z-10 flex items-center px-4 md:px-12 lg:px-24">
                <div className="max-w-2xl space-y-6 text-white">
                  <div className="mb-4 h-1 w-12 bg-white/80" />
                  <h1 className="text-3xl leading-tight font-bold tracking-tight drop-shadow-lg md:text-4xl lg:text-5xl">
                    Engenharia e Construção com Rigor Técnico.
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed font-normal text-white/90 drop-shadow-md md:text-xl">
                    Projetos estruturais, investigações patológicas e execução de obras. Monitoramento em tempo real do avanço físico-financeiro via ecossistema Cazuá.
                  </p>
                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <Link
                      href="#contato"
                      className="rounded-sm bg-white px-6 py-3.5 text-center font-semibold text-primary drop-shadow-lg transition-colors hover:bg-white/90"
                    >
                      Solicitar Avaliação Técnica
                    </Link>
                    <Link
                      href="#cazua"
                      className="rounded-sm border-2 border-white/50 px-6 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
                    >
                      Especificações do Sistema
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Detalhe geométrico sutil no canto */}
              <div className="pointer-events-none absolute right-0 bottom-0 h-24 w-24 border-r-2 border-b-2 border-white/20 md:right-8 md:bottom-8" />
            </div>

            {/* Indicador de scroll sutil */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce md:right-12 md:bottom-12 md:left-auto md:translate-x-0">
              <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

          </div>
        </section>

        {/* 3. O Diferencial Tecnológico (Seção Cazuá) - Layout assimétrico e fluido */}
        <section id="cazua" className="relative bg-background py-24">
          <div className="mx-auto max-w-7xl px-4">
            
            {/* Elemento decorativo de fundo sutil */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl lg:block" />
            
            <div className="relative grid items-start gap-12 md:grid-cols-12">
              
              {/* Imagem do Sistema Cazuá - fluida, sem container rígido */}
              <div className="relative order-2 md:order-1 md:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:aspect-[3/4]">
                  <Image
                    src="/assets/template-cazua.webp"
                    alt="Interface do Sistema Cazuá - Dashboard de monitoramento de obras"
                    fill
                    className="object-contain p-6 transition-transform duration-700 hover:scale-[1.02] md:p-10"
                  />
                  {/* Badge flutuante indicando "Live" */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-border bg-white/90 px-3 py-1.5 text-xs font-medium text-primary shadow-lg backdrop-blur-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    Dados em Tempo Real
                  </div>
                </div>
                {/* Elementos decorativos flutuantes */}
                <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full border-2 border-primary/20 blur-xl lg:block" />
                <div className="absolute top-20 -right-8 hidden h-24 w-24 rounded-full border-2 border-primary/10 blur-xl lg:block" />
              </div>

              {/* Conteúdo textual */}
              <div className="order-1 space-y-8 pt-8 md:order-2 md:col-span-6 md:pt-0 lg:pl-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Tecnologia Própria
                </div>
                <h2 className="flex items-center gap-4 text-3xl font-bold text-primary md:text-4xl">
                  <span className="hidden h-1 w-8 bg-primary sm:block"></span>
                  Transparência e Controle de Dados
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A Costa Marinho Engenharia opera sob infraestrutura tecnológica própria. O SaaS Cazuá garante acesso ininterrupto aos parâmetros da sua obra:
                </p>

                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <Camera className="h-5 w-5 text-primary" />
                    </div>
                    <strong className="mb-2 block text-foreground">Diário de Obra Digital</strong>
                    <span className="block text-sm text-muted-foreground">Relatórios fotográficos e registro descritivo de atividades executadas in loco.</span>
                  </div>
                  <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <LineChart className="h-5 w-5 text-primary" />
                    </div>
                    <strong className="mb-2 block text-foreground">Avanço Físico-Financeiro</strong>
                    <span className="block text-sm text-muted-foreground">Acompanhamento de curva S, equalizando cronograma planejado e realizado.</span>
                  </div>
                  <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg sm:col-span-2">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block text-foreground">Gestão de Documentos e Projetos</strong>
                        <span className="text-sm text-muted-foreground">Repositório centralizado para laudos, projetos básicos, executivos e ARTs.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA sutil */}
                <Link
                  href="#contato"
                  className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
                >
                  Ver demonstração do sistema
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Linha de Serviços - Blocos Estruturais */}
        <section id="servicos" className="border-y border-border bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-16 border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold text-primary">Escopo de Atuação Técnica</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">Soluções de engenharia civil pautadas em normativas vigentes e precisão estrutural.</p>
            </div>

            {/* Grid imitando malha estrutural */}
            <div className="grid gap-px border border-border bg-border md:grid-cols-3">
              <div className="flex h-full flex-col bg-card p-10 transition-colors hover:bg-background">
                <Building className="mb-6 h-10 w-10 text-primary" />
                <h3 className="mb-4 text-xl font-bold text-foreground">Execução e Gerenciamento</h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  Construção operada sob matriz de fiscalização rigorosa. Aplicamos parâmetros de controle de qualidade e gestão de suprimentos para garantir o cumprimento de baseline em projetos corporativos e residenciais de alto padrão.
                </p>
              </div>
              <div className="flex h-full flex-col bg-card p-10 transition-colors hover:bg-background">
                <LayoutTemplate className="mb-6 h-10 w-10 text-primary" />
                <h3 className="mb-4 text-xl font-bold text-foreground">Projetos Estruturais</h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  Dimensionamento de estruturas em concreto armado e fundações. Foco irrestrito em segurança normativa (ABNT NBR 6118) aliado à otimização quantitativa de aço e concreto para viabilidade econômica.
                </p>
              </div>
              <div className="flex h-full flex-col bg-card p-10 transition-colors hover:bg-background">
                <ShieldAlert className="mb-6 h-10 w-10 text-primary" />
                <h3 className="mb-4 text-xl font-bold text-foreground">Engenharia Diagnóstica</h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  Investigação patológica, emissão de laudos periciais e diagnóstico de falhas construtivas. Especificação técnica de reforços estruturais e soluções definitivas para anomalias em edificações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Autoridade e Experiência Técnica - Fundação (Bloco Sólido) */}
        <section className="border-b-8 border-primary-foreground/10 bg-primary py-24 text-primary-foreground">
          <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
            <h2 className="font-heading text-3xl font-bold">Protocolos de Fiscalização aplicados à Iniciativa Privada.</h2>
            <p className="font-sans text-lg leading-relaxed text-primary-foreground/80">
              Operamos com a expertise adquirida na coordenação e fiscalização de obras de alta complexidade. A Costa Marinho Engenharia implementa matrizes de risco, planejamento estratégico e rastreabilidade documental ponta a ponta, assegurando integridade e conformidade ao investimento.
            </p>
          </div>
        </section>
      </main>

      {/* 6. Rodapé (Footer) e Captura */}
      <footer id="contato" className="bg-foreground py-16 text-background">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-4 md:grid-cols-2">
          <div className="space-y-8">
            {/* O LogoBloco já possui tratamento para dark theme caso configurado via props */}
            <LogoBloco href={'/'} theme={'dark'} className="w-48" />
            <div className="grid grid-cols-2 gap-4 text-sm text-muted">
              <div>
                <strong className="mb-1 block text-background">Registro CREA</strong>
                <span>MG-000000</span>
              </div>
              <div>
                <strong className="mb-1 block text-background">CNPJ</strong>
                <span>00.000.000/0000-00</span>
              </div>
              <div className="col-span-2">
                <strong className="mb-1 block text-background">Endereço</strong>
                <span>Conselheiro Lafaiete, MG</span>
              </div>
              <div className="col-span-2">
                <strong className="mb-1 block text-background">Contato Técnico</strong>
                <span>contato@costamarinho.com.br</span>
              </div>
            </div>
          </div>

          <div className="rounded-sm border-t-4 border-primary bg-background p-8 text-foreground shadow-lg">
            <h3 className="mb-6 text-xl font-bold text-primary">Iniciar Especificação Técnica</h3>
            <LeadForm />
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between border-t border-muted-foreground/30 px-4 pt-8 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Costa Marinho Engenharia. Todos os direitos reservados.</p>
          <p>Operado pelo Sistema Cazuá.</p>
        </div>
      </footer>
    </div>
  );
}