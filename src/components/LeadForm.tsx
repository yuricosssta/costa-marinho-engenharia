// src/components/LeadForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createLeadSchema, type CreateLeadDto } from '@/validations/lead.zod';

export function LeadForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-4 rounded-sm border border-border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-primary">Solicite uma Avaliação</h3>

      <div>
        <label className="block text-sm font-medium text-foreground">Nome</label>
        <input
          {...register('name')}
          className="mt-1 block w-full rounded-md border border-input p-2 focus:border-primary focus:ring-primary"
        />
        {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">Telefone (Apenas números)</label>
        <input
          {...register('phone')}
          className="mt-1 block w-full rounded-md border border-input p-2 focus:border-primary focus:ring-primary"
        />
        {errors.phone && <span className="text-xs text-destructive">{errors.phone.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">Tipo de Serviço</label>
        <select
          {...register('serviceType')}
          className="mt-1 block w-full rounded-md border border-input p-2 focus:border-primary focus:ring-primary"
        >
          <option value="">Selecione...</option>
          <option value="CONSTRUCTION">Construção e Execução</option>
          <option value="PROJECT">Projetos Estruturais</option>
          <option value="REPORT">Laudo e Investigação Patológica</option>
        </select>
        {errors.serviceType && <span className="text-xs text-destructive">{errors.serviceType.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">Breve Descrição (Opcional)</label>
        <textarea
          {...register('description')}
          rows={3}
          className="mt-1 block w-full rounded-md border border-input p-2 focus:border-primary focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </button>
    </form>
  );
}