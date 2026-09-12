// src/app/page.tsx
import { Building, Camera, ChevronRight, FileText, LayoutTemplate, LineChart, ShieldAlert } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import { LeadForm } from '@/components/LeadForm';
import { LogoBloco } from '@/components/LogoBloco';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">

      {/* 1. Cabeçalho (Header) */}
      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center">
            <LogoBloco href={'/'} theme={'light'} />
          </div>
          <nav className="items-center gap-8 text-sm font-medium md:flex">
            {/* Esta div agora fica ESCONDIDA por padrão (celular) e APARECE como flex em telas md (computador) */}
            <div className="hidden md:flex gap-8">
              <Link href="#servicos" className="text-foreground transition-colors hover:text-primary">
                Serviços
              </Link>
              <Link href="#contato" className="text-foreground transition-colors hover:text-primary">
                Contato
              </Link>
            </div>

            <Link
              href="https://costamarinhoengenharia.grupocazua.com.br/login"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-primary-foreground transition-colors hover:bg-primary/80 whitespace-nowrap md:px-6"
            >
              {/* Texto visível APENAS em telas pequenas */}
              <span className="md:hidden">Login</span>

              {/* Texto visível APENAS em telas médias/grandes (computador) */}
              <span className="hidden md:inline">Área do Cliente</span>

              <ChevronRight className="h-4 w-4 shrink-0" />
            </Link>

          </nav>
        </div>
      </header>

      <main>
        {/* 2. Primeira Dobra (Hero Section) - Layout fluido e imersivo */}
        <section className="relative w-full min-h-dvh overflow-hidden border-b border-border bg-background">
          <div className="relative w-full min-h-dvh z-0">
            <div className="relative w-full min-h-dvh bg-secondary">
              <Image
                src="/assets/hero-obra.webp"
                alt="Execução de obra gerenciada pela Costa Marinho"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />

              {/* Gradiente sutil para legibilidade do texto */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-transparent md:from-primary/90 md:via-primary/70 md:to-transparent" />

              {/* Conteúdo textual sobreposto à imagem */}
              <div className="absolute inset-0 z-10 flex items-center px-4 md:px-12 lg:px-24">
                <div className="max-w-2xl space-y-6 text-white">
                  <h1 className="text-3xl leading-tight font-bold tracking-tight drop-shadow-lg md:text-4xl lg:text-5xl">
                    Engenharia e Construção com Rigor Técnico
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed font-normal text-white/90 drop-shadow-md md:text-xl">
                    Projetos estruturais, investigações patológicas e execução de obras. Monitoramento em tempo real do avanço físico-financeiro via ecossistema Cazuá.
                  </p>
                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <Link
                      href="#contato"
                      className="rounded-sm bg-white px-6 py-3.5 text-center font-semibold text-primary drop-shadow-lg transition-colors hover:bg-white/90"
                    >
                      Solicitar Avaliação Técnico
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
            </div>

            <ScrollIndicator
              href="#cazua"
              ariaLabel="Rolar para a seção de Cazua"
            // colorClass="text-primary/60 group-hover:text-primary"
            />

          </div>
        </section>

        {/* 3. O Diferencial Tecnológico (Seção Cazuá) - Layout assimétrico e fluido */}
        <section
          id="cazua"
          className="relative bg-background md:min-h-dvh flex items-center py-2 md:py-0 scroll-mt-10 overflow-hidden"
        >
          <div className="mx-auto max-w-7xl w-full px-4 relative z-10">

            {/* Elemento decorativo de fundo sutil */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl lg:block -z-10" />

            <div className="grid items-center gap-8 md:grid-cols-12 lg:gap-16">

              {/* Imagem do Sistema Cazuá - Agora fluida e sem caixa rígida */}
              <div className="relative order-2 md:order-1 md:col-span-6 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                <Image
                  src="/assets/template-cazua.webp"
                  alt="Interface do Sistema Cazuá - Dashboard de monitoramento de obras"
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  priority
                  className="object-contain md:object-cover rounded-xl drop-shadow-2xl"
                />
                {/* Badge flutuante alinhado de forma mais discreta */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-border bg-background/95 px-3 py-1.5 text-xs font-medium text-primary shadow-md backdrop-blur-sm select-none">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Dados em Tempo Real
                </div>
              </div>

              {/* Conteúdo textual - Compactado verticalmente para caber na dobra da tela */}
              <div className="order-1 md:order-2 md:col-span-6 lg:pl-4 space-y-2">
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-medium text-primary w-fit">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Tecnologia Própria
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                  Transparência e Controle de Dados
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
                  A Costa Marinho Engenharia opera sob infraestrutura tecnológica própria. O SaaS Cazuá garante acesso ininterrupto aos parâmetros da sua obra:
                </p>

                {/* Lista de Recursos Ultra-Compacta (Estilo Linha/Row para economizar espaço vertical) */}
                <div className="space-y-1 pt-1">
                  {/* Card 1 */}
                  <div className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card">
                    <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20 shrink-0">
                      <Camera className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-foreground mb-0.5">Diário de Obra Digital</strong>
                      <span className="block text-sm leading-relaxed text-muted-foreground">Relatórios fotográficos e registro descritivo de atividades executadas in loco.</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card">
                    <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20 shrink-0">
                      <LineChart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-foreground mb-0.5">Avanço Físico-Financeiro</strong>
                      <span className="block text-sm leading-relaxed text-muted-foreground">Acompanhamento de curva S, equalizando cronograma planejado e realizado.</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card">
                    <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20 shrink-0">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-foreground mb-0.5">Gestão de Documentos e Projetos</strong>
                      <span className="block text-sm leading-relaxed text-muted-foreground">Repositório centralizado para laudos, projetos básicos, executivos e ARTs.</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-1">
                  <Link
                    href="#contato"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3 group"
                  >
                    Ver demonstração do sistema
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <ScrollIndicator
            href="#servicos"
            ariaLabel="Rolar para a seção de Serviços"
            colorClass="text-primary/60 group-hover:text-primary"
          />
        </section>

        {/* 4. Linha de Serviços - Blocos Estruturais */}
        <section
          id="servicos"
          className="relative bg-secondary border-y min-h-dvh flex items-center border-border py-2 md:py-0 scroll-mt-10 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-16 border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold text-primary">Escopo de Atuação Técnica</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">Soluções de engenharia civil pautadas em normativas vigentes e precisão estrutural.</p>
            </div>

            <div className="grid gap-px border border-border bg-border md:grid-cols-3 transition-all duration-300">

              {/* CARD 1 */}
              <div className="group flex h-full flex-col bg-card p-10 transition-colors duration-300 hover:bg-primary">
                <Building className="mb-6 h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                <h3 className="mb-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                  Execução e Gerenciamento
                </h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/90">
                  Construção operada sob matriz de fiscalização rigorosa. Aplicamos parâmetros de controle de qualidade e gestão de suprimentos para garantir o cumprimento de baseline em projetos corporativos e residenciais de alto padrão.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="group flex h-full flex-col bg-card p-10 transition-colors duration-300 hover:bg-primary">
                <LayoutTemplate className="mb-6 h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                <h3 className="mb-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                  Projetos Estruturais
                </h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/90">
                  Dimensionamento de estruturas em concreto armado e fundações. Foco irrestrito em segurança normativa (ABNT NBR 6118) aliado à otimização quantitativa de aço e concreto para viabilidade econômica.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="group flex h-full flex-col bg-card p-10 transition-colors duration-300 hover:bg-primary">
                <ShieldAlert className="mb-6 h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                <h3 className="mb-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                  Engenharia Diagnóstica
                </h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/90">
                  Investigação patológica, emissão de laudos periciais e diagnóstico de falhas construtivas. Especificação técnica de reforços estruturais e soluções definitivas para anomalias em edificações.
                </p>
              </div>
            </div>
          </div>
          <ScrollIndicator
            href="#autoridade"
            ariaLabel="Rolar para a seção de Autoridade e Experiência Técnica"
            colorClass="text-primary/60 group-hover:text-primary"
          />
        </section>

        {/* 5. Autoridade e Experiência Técnica - Fundação (Bloco Sólido) */}
        <section
          id="autoridade"
          className="relative min-h-dvh border-b-8 border-primary-foreground/10 bg-primary py-24 text-primary-foreground scroll-mt-10 overflow-hidden">
          <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
            <h2 className="font-heading text-3xl font-bold">Protocolos de Fiscalização aplicados à Iniciativa Privada.</h2>
            <p className="font-sans text-lg leading-relaxed text-primary-foreground/80">
              Operamos com a expertise adquirida na coordenação e fiscalização de obras de alta complexidade. A Costa Marinho Engenharia implementa matrizes de risco, planejamento estratégico e rastreabilidade documental ponta a ponta, assegurando integridade e conformidade ao investimento.
            </p>
          </div>
          <ScrollIndicator
            href="#contato"
            ariaLabel="Rolar para a seção de Contato"
          // colorClass="text-primary/60 group-hover:text-primary"
          />
        </section>
      </main>

      <footer
        id="contato"
        className="relative bg-foreground py-12 text-background scroll-mt-20 overflow-hidden md:min-h-dvh md:flex md:flex-col md:justify-between md:py-16"
      >
        <div className="mx-auto max-w-7xl w-full px-4 space-y-12 md:space-y-16 flex-1 flex flex-col justify-center">

          {/* Bloco Superior: Formulário de Captura Horizontal */}
          <div className="border-t-4 border-primary bg-background p-6 md:p-10 text-foreground shadow-2xl">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">

              {/* Chamada do Formulário */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-xl font-bold text-primary tracking-tight md:text-2xl">
                  Como podemos ajudar você?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Insira seus dados para receber o contato do nosso setor de engenharia.
                </p>
              </div>
              {/* Formulário de Captura */}
              <div className="md:col-span-8">
                <LeadForm className="grid gap-4 sm:grid-cols-3 md:items-center" />
              </div>

            </div>
          </div>

          {/* Bloco Inferior: Informações da Empresa (Lado a Lado no Desktop) */}
          <div className="grid gap-8 border-t border-muted-foreground/20 pt-10 md:grid-cols-12 md:items-start md:gap-12">

            {/* Coluna do Logo */}
            <div className="md:col-span-4 flex flex-col justify-between h-full">
              <LogoBloco href={'/'} theme={'light'} className="w-44 md:w-52" />
            </div>

            {/* Coluna das Informações em Grid Compacto */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-muted md:col-span-8 md:grid-cols-4">
              <div>
                <strong className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-background/70">Registro CREA</strong>
                <span className="text-background font-medium">nº 0001670638</span>
              </div>
              <div>
                <strong className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-background/70">CNPJ</strong>
                <span className="text-background font-medium">59.864.378/0001-86</span>
              </div>
              <div>
                <strong className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-background/70">Endereço</strong>
                <span className="text-background font-medium block">Conselheiro Lafaiete, MG</span>
              </div>
              <div>
                <strong className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-background/70">Contato Técnico</strong>
                <span className="text-background font-medium block">contato@costamarinho.com.br</span>
              </div>
            </div>

          </div>
        </div>

        {/* Direitos Autorais e Créditos (Rodapé do Rodapé) */}
        <div className="mx-auto w-full max-w-7xl border-t border-muted-foreground/10 px-4 pt-6 mt-12 text-xs text-muted/60 flex flex-col items-center justify-between gap-2 md:mt-0 md:flex-row">
          <p>© {new Date().getFullYear()} Costa Marinho Engenharia. Todos os direitos reservados.</p>
          <p>Operado pelo Sistema Cazuá.</p>
        </div>
      </footer>

    </div>
  );
}