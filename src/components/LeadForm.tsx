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
      // Integração direta com a API do Cazuá
      const response = await fetch('/api/cazua/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Falha ao registrar lead');
      reset();
      alert('Solicitação enviada com sucesso. Nossa equipe de engenharia entrará em contato.');
    } catch (error) {
      console.error('Erro na submissão do lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-wrap gap-x-4 gap-y-6 items-end w-full ${className}`}
    >
      {/* Campo: Nome */}
      <div className="relative">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
          Nome
        </label>
        <input
          {...register('name')}
          placeholder="Seu nome completo"
          className="block w-full min-w-0 rounded-md border border-input p-2.5 text-sm bg-background focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden"
        />
        {errors.name && (
          <span className="absolute -bottom-5 left-0 text-[10px] font-medium text-destructive truncate max-w-full">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Campo: Telefone */}
      <div className="relative">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
          Telefone
        </label>
        <input
          {...register('phone')}
          placeholder="(31) 99999-9999"
          className="block w-full rounded-md border border-input p-2.5 text-sm bg-background focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden"
        />
        {errors.phone && (
          <span className="absolute -bottom-5 left-0 text-[10px] font-medium text-destructive truncate max-w-full">
            {errors.phone.message}
          </span>
        )}
      </div>

      {/* Campo: Tipo de Serviço */}
      <div className="relative">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
          Serviço Pretendido
        </label>
        <select
          {...register('serviceType')}
          className="block w-full rounded-md border border-input p-2.5 text-sm bg-background text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden"
        >
          <option value="">Selecione...</option>
          <option value="CONSTRUCTION">Construção e Execução</option>
          <option value="PROJECT">Projetos Estruturais</option>
          <option value="REPORT">Laudo e Diagnóstico</option>
        </select>
        {errors.serviceType && (
          <span className="absolute -bottom-5 left-0 text-[10px] font-medium text-destructive truncate max-w-full">
            {errors.serviceType.message}
          </span>
        )}
      </div>

      {/* Breve Descrição (Ocupa a largura total abaixo dos inputs) */}
      <div className="sm:col-span-2 lg:col-span-4 relative">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
          Detalhes da Solicitação (Opcional)
        </label>
        <textarea
          {...register('description')}
          rows={2}
          placeholder="Descreva brevemente o escopo da obra, necessidades do projeto ou problemas patológicos encontrados..."
          className="block w-full rounded-md border border-input p-2.5 text-sm bg-background focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden resize-y min-h-[160px]"
        />
      </div>

      {/* Botão de Envio (Alinhado na primeira linha junto com os inputs no desktop) */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70 cursor-pointer shadow-xs"
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Contato'}
        </button>
      </div>
    </form>
  );
}
