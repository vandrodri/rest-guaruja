import React from 'react';

interface FormattedReportProps {
  analysis: string;
  restaurantName: string;
}

export const FormattedReport: React.FC<FormattedReportProps> = ({ analysis, restaurantName }) => {
  // Parse do texto da IA
  const sections = analysis.split(/(?=\d️⃣)/g).filter(s => s.trim());
  
  const formatSection = (text: string) => {
    // Remove emojis numerados
    const cleanText = text.replace(/\d️⃣\s*/g, '');
    
    // Separa título do conteúdo
    const lines = cleanText.split('\n').filter(l => l.trim());
    if (lines.length === 0) return null;
    
    const title = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();
    
    return { title, content };
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      
      // Lista com travessão
      if (trimmed.startsWith('-')) {
        const [boldPart, ...rest] = trimmed.substring(1).split(':');
        return (
          <div key={idx} className="flex gap-3 mb-3">
            <span className="text-blue-600 font-black text-xl flex-shrink-0">•</span>
            <div>
              <strong className="font-black text-zinc-800">{boldPart.trim()}:</strong>
              <span className="text-zinc-700 ml-1">{rest.join(':').trim()}</span>
            </div>
          </div>
        );
      }
      
      // Parágrafo normal
      return (
        <p key={idx} className="mb-3 text-zinc-700 leading-relaxed">
          {trimmed}
        </p>
      );
    }).filter(Boolean);
  };

  const getSectionIcon = (index: number) => {
    const icons = ['📊', '🎯', '⚠️', '💡', '📈', '🚀'];
    return icons[index] || '📌';
  };

  const getSectionColor = (index: number) => {
    const colors = [
      'from-blue-500/10 to-blue-600/5 border-blue-200',
      'from-purple-500/10 to-purple-600/5 border-purple-200',
      'from-orange-500/10 to-orange-600/5 border-orange-200',
      'from-cyan-500/10 to-cyan-600/5 border-cyan-200',
      'from-green-500/10 to-green-600/5 border-green-200',
      'from-indigo-500/10 to-indigo-600/5 border-indigo-200'
    ];
    return colors[index] || colors[0];
  };

  return (
    <div className="space-y-8">
      
      {/* HEADER DO RELATÓRIO */}
      <div className="bg-gradient-to-br from-[#e0e0e0] to-[#d8d8d8] shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff] rounded-3xl p-6 md:p-8 border-2 border-blue-600/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo e Título */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transform -rotate-3 hover:rotate-0 transition-all duration-300 border border-white/20 flex-shrink-0">
              <span className="text-white font-black text-4xl font-serif italic drop-shadow-md select-none">Z</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-zinc-800 tracking-tight leading-none">
                Relatório Estratégico
              </h2>
              <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-wide mt-1">
                Google Maps na Mão
              </p>
            </div>
          </div>
          
          {/* Info do Restaurante */}
          <div className="bg-white/50 backdrop-blur rounded-2xl px-4 py-3 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] text-center md:text-right">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Restaurante</p>
            <p className="text-base font-black text-zinc-800">{restaurantName}</p>
            <p className="text-xs text-zinc-500 mt-1">
              {new Date().toLocaleDateString('pt-BR', { 
                day: '2-digit', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* CONTEÚDO DO RELATÓRIO */}
      <div className="space-y-6">
        {sections.map((section, index) => {
          const parsed = formatSection(section);
          if (!parsed) return null;
          
          const { title, content } = parsed;
          
          return (
            <div 
              key={index}
              className={`bg-gradient-to-br ${getSectionColor(index)} shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff] rounded-2xl p-6 md:p-8 border-2 transition-all hover:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.05)]`}
            >
              {/* Título da Seção */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-zinc-200">
                <span className="text-2xl">{getSectionIcon(index)}</span>
                <h3 className="text-lg md:text-xl font-black text-zinc-800 uppercase tracking-tight">
                  {title}
                </h3>
              </div>
              
              {/* Conteúdo da Seção */}
              <div className="text-sm md:text-base">
                {content.includes('-') ? (
                  <div className="space-y-2">
                    {formatContent(content)}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {formatContent(content)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
};