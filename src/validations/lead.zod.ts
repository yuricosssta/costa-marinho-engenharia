// src/validations/lead.zod.ts
import { z } from 'zod';

export const createLeadSchema = z.object({
  name: z.string().min(2, 'O nome é obrigatório e deve ter no mínimo 2 caracteres.'),
  phone: z.string().regex(/^\d{10,11}$/, 'Informe um telefone válido com DDD (apenas números).'),
  serviceType: z.enum(['CONSTRUCTION', 'PROJECT', 'REPORT'], { message: 'Selecione o tipo de serviço.' }),
  description: z.string().optional(),
});

export type CreateLeadDto = z.infer<typeof createLeadSchema>;