import React, { useState } from 'react';
import { FormattedReport } from './FormattedReport';
import { Button } from './Button';
import { analyzeRestaurantPresence } from './aiService';
import { EvaluationStep, type EvaluationStepType } from '../types';

export const EvaluationTool: React.FC = () => {
  // Ajustado para iniciar com o valor correto do objeto EvaluationStep
  const [step, setStep] = useState<EvaluationStepType>(EvaluationStep.IDLE);
  const [restaurantName, setRestaurantName] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [progress, setProgress] = useState(0);

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantName.trim()) return;

    setStep(EvaluationStep.ANALYZING);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => (prev < 90 ? prev + 10 : prev));
    }, 400);

    try {
      const result = await analyzeRestaurantPresence(restaurantName);
      const cleanedResult = result.replace(/[#*]/g, '');
      setAnalysis(cleanedResult);
      setProgress(100);
      setStep(EvaluationStep.RESULT);
    } catch (error) {
      console.error(error);
      setStep(EvaluationStep.IDLE);
    } finally {
      clearInterval(interval);
    }
  };

  return (
    <div id="avaliar" className="bg-[#e0e0e0] shadow-[inset_8px_8px_16px_#b8b8b8,inset_-8px_-8px_16px_#ffffff] p-6 md:p-12 rounded-[2.5rem] max-w-5xl mx-auto my-12 relative overflow-visible transition-all duration-500">
      
      {/* Barra de progresso no topo do card */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600/10 rounded-t-[2.5rem] overflow-hidden">
        <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* TELA INICIAL: BUSCA */}
      {step === EvaluationStep.IDLE && (
        <form onSubmit={handleStart} className="space-y-6 text-center max-w-2xl mx-auto py-8">
          <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-800">Avalie seu restaurante agora</h3>
          <p className="text-zinc-600 font-medium">Descubra em 30 segundos se o seu perfil no Google Maps está atraindo ou expulsando turistas.</p>
          
          <div className="space-y-6 relative z-10">
            <input 
              type="text" 
              placeholder="Nome do seu restaurante no Google Maps"
              className="w-full bg-[#e8e8e8] shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600/20 text-zinc-800 text-lg transition-all"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              required
            
            />
            <Button type="submit" fullWidth>
              AVALIAR MEU RESTAURANTE AGORA
            </Button>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-widest pt-4">
              <span className="flex items-center gap-1">✓ 100% Grátis</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">✓ Sem e-mail</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">✓ Sem cartão</span>
            </div>
          </div>
        </form>
      )}

      {/* TELA: ANALISANDO */}
      {step === EvaluationStep.ANALYZING && (
        <div className="text-center py-24 space-y-6 max-w-2xl mx-auto">
          <p className="text-2xl font-black animate-pulse uppercase tracking-tighter italic text-blue-600">
            {progress < 40 ? 'Escaneando banco de dados do Guarujá...' : progress < 80 ? 'Analisando densidade de atributos...' : 'Invocando estrategista de Growth...'}
          </p>
          <div className="w-full bg-[#e0e0e0] shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* TELA: RESULTADO */}
      {step === EvaluationStep.RESULT && (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700 py-4">
          <div className="flex justify-between items-center border-b border-zinc-300 pb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-blue-600">Relatório Estratégico</h3>
            <button 
              onClick={() => setStep(EvaluationStep.IDLE)}
              className="text-xs text-zinc-500 hover:text-blue-600 uppercase font-bold tracking-widest bg-[#e0e0e0] shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] px-4 py-2 rounded-xl transition-all active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff]"
            >
              Nova análise
            </button>
          </div>
          
          <div className="w-full">
  <FormattedReport 
    analysis={analysis}
    restaurantName={restaurantName}
  />
</div>
   

          <div className="pt-24 border-t border-zinc-300 space-y-12">
            <div className="bg-[#e0e0e0] shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff] p-8 md:p-16 rounded-[3.5rem] text-center space-y-10 border-2 border-blue-600/10">
              <div className="space-y-6">
                <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-zinc-900">
                  Pare de perder tempo com tarefas manuais.
                </h4>
                <p className="text-xl md:text-2xl font-bold uppercase italic text-blue-600">
                  Perfil parado não gera vendas
                </p>
                <p className="text-lg font-semibold text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                  Automatize a gestão do seu Google Maps com nossa IA e mantenha sua vitrine digital trazendo clientes todos os dias.
                </p>
              </div>
              <div className="pt-8">
                <Button 
                  fullWidth 
                  className="!text-2xl !py-8 !rounded-[2rem]"
                  onClick={() => window.open('https://zmaps.zapy.click', '_blank')}
                >
                  TESTE GRÁTIS POR 7 DIAS
                </Button>
                <p className="mt-8 font-black uppercase tracking-[0.2em] text-xs text-zinc-400">
                  Não precisa cartão de crédito para começar • Ativação Instantânea
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};