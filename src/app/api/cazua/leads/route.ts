import { createLeadSchema, type CreateLeadDto } from '@/validations/lead.zod';

function buildWhatsAppMessage(data: CreateLeadDto): string {
  const serviceTypeLabels: Record<string, string> = {
    CONSTRUCTION: 'Construção e Execução',
    PROJECT: 'Projetos de Engenharia',
    REPORT: 'Laudo e Diagnóstico',
  };

  const lines = [
    'Costa Marinho Engenharia',
    // '',
    `Nome: ${data.name}`,
    `Telefone: ${data.phone}`,
    `Serviço: ${serviceTypeLabels[data.serviceType] || data.serviceType}`,
  ];

  if (data.description?.trim()) {
    lines.push(`Descrição: ${data.description.trim()}`);
  } else {
    lines.push('Descrição: Não informada');
  }

  return lines.join('\n');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = createLeadSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        { error: 'Dados inválidos', details: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validation.data;

    const toNumber = process.env.WHATSAPP_TO_NUMBER;
    if (!toNumber) {
      console.error('WHATSAPP_TO_NUMBER not configured');
      return Response.json(
        { error: 'Configuração de WhatsApp ausente no servidor' },
        { status: 500 }
      );
    }

    const message = buildWhatsAppMessage(data);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${toNumber}?text=${encodedMessage}`;

    return Response.json({ whatsappUrl });
  } catch (error) {
    console.error('Erro ao processar lead:', error);
    return Response.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}