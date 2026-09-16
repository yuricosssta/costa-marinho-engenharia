// src/components/LeadForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createLeadSchema, type CreateLeadDto } from '@/validations/lead.zod';

interface LeadFormProps {
  className?: string;
}

export function LeadForm({ className = "" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateLeadDto>({
    resolver: zodResolver(createLeadSchema),
  });

  const onSubmit = async (data: CreateLeadDto) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/cazua/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Falha ao registrar lead');
      }

      const { whatsappUrl } = await response.json();
      reset();
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erro na submissão do lead:', error);
      alert(error instanceof Error ? error.message : 'Erro ao enviar solicitação');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex w-full flex-wrap items-end gap-x-4 gap-y-6 ${className}`}
    >
      {/* Campo: Nome */}
      <div className="relative">
        <label className="mb-1 block text-xs font-semibold tracking-wider text-foreground uppercase">
          Nome
        </label>
        <input
          {...register('name')}
          placeholder="Seu nome completo"
          className="block w-full min-w-0 rounded-md border border-input bg-background p-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden"
        />
        {errors.name && (
          <span className="absolute -bottom-5 left-0 max-w-full truncate text-[10px] font-medium text-destructive">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Campo: Telefone */}
      <div className="relative">
        <label className="mb-1 block text-xs font-semibold tracking-wider text-foreground uppercase">
          Telefone
        </label>
        <input
          {...register('phone')}
          placeholder="(31) 99999-9999"
          className="block w-full rounded-md border border-input bg-background p-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden"
        />
        {errors.phone && (
          <span className="absolute -bottom-5 left-0 max-w-full truncate text-[10px] font-medium text-destructive">
            {errors.phone.message}
          </span>
        )}
      </div>

      {/* Campo: Tipo de Serviço */}
      <div className="relative">
        <label className="mb-1 block text-xs font-semibold tracking-wider text-foreground uppercase">
          Serviço Pretendido
        </label>
        <select
          {...register('serviceType')}
          className="block w-full rounded-md border border-input bg-background p-2.5 text-sm text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden"
        >
          <option value="">Selecione...</option>
          <option value="CONSTRUCTION">Construção e Execução</option>
          <option value="PROJECT">Projetos de Engenharia</option>
          <option value="REPORT">Laudo e Diagnóstico</option>
        </select>
        {errors.serviceType && (
          <span className="absolute -bottom-5 left-0 max-w-full truncate text-[10px] font-medium text-destructive">
            {errors.serviceType.message}
          </span>
        )}
      </div>

      {/* Breve Descrição (Ocupa a largura total abaixo dos inputs) */}
      <div className="relative sm:col-span-2 lg:col-span-4">
        <label className="mb-1 block text-xs font-semibold tracking-wider text-foreground uppercase">
          Detalhes da Solicitação (Opcional)
        </label>
        <textarea
          {...register('description')}
          rows={2}
          placeholder="Descreva brevemente o escopo da obra, necessidades do projeto ou problemas patológicos encontrados no imóvel..."
          className="block min-h-[160px] w-full resize-y rounded-md border border-input bg-background p-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden"
        />
      </div>

      {/* Botão de Envio (Alinhado na primeira linha junto com os inputs no desktop) */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Contato'}
        </button>
      </div>
    </form>
  );
}
