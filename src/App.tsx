import './index.css';
import React from 'react';
import { EvaluationTool } from './components/EvaluationTool';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

const App: React.FC = () => {
  const scrollToEvaluate = () => {
    document.getElementById('avaliar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-[#e0e0e0] text-zinc-900 overflow-x-hidden">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#e0e0e0]/80 backdrop-blur-md shadow-[0_4px_12px_#b8b8b8]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
    
    {/* Lado Esquerdo: Novo Logo e Slogan */}
    <div className="flex items-center gap-4">
      {/* Logo Z oficial do seu app  */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transform -rotate-3 hover:rotate-0 transition-all duration-300 border border-white/20">
        <span className="text-white font-black text-2xl sm:text-3xl font-serif italic drop-shadow-md select-none">Z</span> 
      </div>
      
      {/* Novo Nome e Slogan */}
      <div className="flex flex-col">
        <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase italic text-zinc-900 leading-none">
          ZMaps
        </span>
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 leading-none mt-1">
          Guarujá
        </span>
      </div>
    </div>

    {/* Lado Direito: Botão mantido */}
    <Button 
      variant="secondary" 
      className="hidden sm:block !py-2 !px-6 !text-xs !shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff]" 
      onClick={scrollToEvaluate}
    >
      Avaliação Grátis
    </Button>
  </div>
</nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase italic text-zinc-900 leading-[1.15] tracking-tight">
  A temporada do <span className="text-blue-600">Guarujá</span> começou...
</h1>
          <p className="text-lg md:text-2xl text-zinc-600 font-bold max-w-3xl mx-auto leading-tight">
            O Google Maps mudou. Se você não está seguindo as novas diretrizes, você está invisível para os turistas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button onClick={scrollToEvaluate} className="!text-xl md:!text-2xl !px-8 md:!px-12 w-full sm:w-auto">
              Avaliar meu restaurante agora
            </Button>
          </div>
        </div>
      </section>

      {/* Change Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-10">
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-none italic text-zinc-900">
                O Google Maps deixou de ser um simples mapa.
              </h2>
              <p className="text-zinc-600 text-lg md:text-xl leading-snug font-medium">
                Agora o Google avalia negócios como vitrines vivas. Quem ignora isso perde clientes para a concorrência.
              </p>
              <ul className="space-y-4 md:space-y-6 text-zinc-800 font-black uppercase tracking-tight text-base md:text-lg">
                <li className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 md:w-8 md:h-8 bg-[#e0e0e0] shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] flex-shrink-0 flex items-center justify-center rounded-lg text-blue-600 text-xs md:text-sm">✓</span>
                  Principal máquina de vendas local.
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 md:w-8 md:h-8 bg-[#e0e0e0] shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] flex-shrink-0 flex items-center justify-center rounded-lg text-blue-600 text-xs md:text-sm">✓</span>
                  Apareça no topo das buscas.
                </li>
              </ul>
            </div>
            <div className="bg-[#e0e0e0] shadow-[inset_6px_6px_12px_#b8b8b8,inset_-6px_-6px_12px_#ffffff] p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] space-y-6">
              <p className="text-2xl md:text-4xl font-black italic leading-tight text-zinc-800">
                "95% dos perfis do Guarujá estão desatualizados e perdendo dinheiro."
              </p>
              <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Vantagem para quem agir agora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-black uppercase italic leading-none text-zinc-900">O jogo mudou.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Card Antigo */}
            <div className="bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] p-8 md:p-12 rounded-[2rem] space-y-4 opacity-70">
              <h3 className="text-2xl font-black uppercase italic text-zinc-500">O Antigo</h3>
              <p className="text-zinc-600 font-medium">Fotos de 2018 e sem respostas. Turista desconfia e vai embora.</p>
            </div>
            {/* Card Otimizado */}
            <div className="bg-[#e0e0e0] shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff] p-8 md:p-12 rounded-[2rem] space-y-4 border-2 border-blue-600/20">
              <h3 className="text-2xl font-black uppercase italic text-blue-600">O Otimizado</h3>
              <p className="text-zinc-700 font-bold">Vitrine magnética. Fotos que dão fome e engajamento real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="py-12 md:py-32 px-4">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 bg-[#2563eb] py-12 md:py-20 rounded-[2.5rem] md:rounded-[4rem] shadow-[15px_15px_30px_#b8b8b8] text-white">
          <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.9] italic">
            A janela está fechando.
          </h2>
          <Button variant="secondary" onClick={scrollToEvaluate} className="!text-blue-600 !px-8 md:!px-16 !py-4 md:!py-6 !text-lg md:!text-2xl !rounded-2xl w-full sm:w-auto">
            Ver se estou perdendo clientes
          </Button>
        </div>
      </section>

      {/* Tool Section */}
      <section id="avaliar" className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-6xl font-black uppercase italic text-zinc-900">Pare de adivinhar.</h2>
          </div>
          <div className="w-full overflow-hidden">
             <EvaluationTool />
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Tool Section */}
      <section id="avaliar" className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-6xl font-black uppercase italic text-zinc-900">Pare de adivinhar.</h2>
          </div>
          <div className="w-full overflow-hidden">
             <EvaluationTool />
          </div>
        </div>
      </section>

      {/* RODAPÉ PROFISSIONAL ZAPY */}
      <Footer />
    </div>
  );
};

export default App;