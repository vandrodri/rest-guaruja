
import React from 'react';
import { Button } from './Button';

export const AutomationCard: React.FC = () => {
  return (
    <div className="bg-[#e0e0e0] shadow-[12px_12px_24px_#b8b8b8,-12px_-12px_24px_#ffffff] text-zinc-900 p-12 rounded-[3rem] max-w-4xl mx-auto my-20 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 text-zinc-900">
        Pare de perder tempo com tarefas manuais.
      </h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl font-bold uppercase italic leading-tight text-blue-600">
          Perfil parado não gera vendas
        </p>
        <p className="text-lg md:text-xl font-semibold text-zinc-600">
          Automatize a gestão do seu Google Maps com nossa IA e mantenha sua vitrine digital trazendo clientes todos os dias.
        </p>
        <div className="pt-8">
          <Button 
            className="!w-full sm:!w-auto !text-2xl"
            onClick={() => window.open('https://zmaps.zapy.click', '_blank')}
          >
            TESTE GRÁTIS POR 7 DIAS
          </Button>
          <p className="mt-6 font-black uppercase tracking-[0.2em] text-sm text-zinc-400">
            Não precisa cartão
          </p>
        </div>
      </div>
    </div>
  );
};
