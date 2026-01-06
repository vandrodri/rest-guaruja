import React, { useState, useEffect } from 'react';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [modalConfig, setModalConfig] = useState<{ 
    isOpen: boolean; 
    title: string; 
    content: React.ReactNode 
  }>({
    isOpen: false,
    title: '',
    content: null
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  const openModal = (type: 'termos' | 'privacidade' | 'lgpd') => {
    const contents = {
      termos: {
        title: 'Termos de Uso',
        content: (
          <div className="space-y-4">
            <p><strong>1. Aceitação:</strong> Ao usar o ZMaps, você concorda com nossos termos.</p>
            <p><strong>2. Uso do Serviço:</strong> Nossa IA processa dados públicos para otimização de negócios locais.</p>
            <p><strong>3. Responsabilidade:</strong> Não garantimos resultados financeiros fixos, pois dependem do mercado.</p>
          </div>
        )
      },
      privacidade: {
        title: 'Política de Privacidade',
        content: (
          <div className="space-y-4">
            <p><strong>1. Dados:</strong> Coletamos apenas o necessário para o funcionamento da plataforma.</p>
            <p><strong>2. Segurança:</strong> Seus dados são criptografados e nunca vendidos a terceiros.</p>
            <p><strong>3. Cookies:</strong> Usamos cookies para melhorar sua navegação.</p>
          </div>
        )
      },
      lgpd: {
        title: 'Conformidade LGPD',
        content: (
          <div className="space-y-4">
            <p>Estamos em conformidade com a Lei Geral de Proteção de Dados.</p>
            <p>Você pode solicitar a exclusão de seus dados enviando um e-mail para <strong>zapy@zapy.click</strong>.</p>
          </div>
        )
      }
    };

    setModalConfig({ isOpen: true, ...contents[type] });
  };

  return (
    <>
      <style>{`
        footer ul li { display: list-item !important; list-style: none !important; }
        footer ul li a { display: inline !important; white-space: normal !important; }
      `}</style>

      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            
            <div className="max-w-xs">
               <div className="flex items-center gap-2 mb-3">
                 <div className="w-7 h-7 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md transform -rotate-3 text-white font-black italic">Z</div>
                 <span className="text-lg font-bold text-slate-800">ZMaps</span>
               </div>
               <p className="text-xs text-slate-500">Inteligência artificial para estratégias baseadas no Google Maps.</p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
                <button onClick={() => openModal('termos')} className="text-xs font-semibold text-slate-600 hover:text-indigo-600 uppercase tracking-widest transition-colors">Termos</button>
                <button onClick={() => openModal('privacidade')} className="text-xs font-semibold text-slate-600 hover:text-indigo-600 uppercase tracking-widest transition-colors">Privacidade</button>
                <button onClick={() => openModal('lgpd')} className="text-xs font-semibold text-slate-600 hover:text-indigo-600 uppercase tracking-widest transition-colors">LGPD</button>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest">
             <p>&copy; 2026 Zapy Marketing Local. Todos os direitos reservados.</p>
             <span className="bg-slate-50 px-2 py-1 rounded border border-slate-100">ZMaps AI Suite v1.0</span>
          </div>
        </div>
      </footer>

   {/* AVISO DE COOKIES */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
            <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur shadow-2xl rounded-2xl p-4 md:p-6 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-slate-800 p-2 rounded-lg hidden md:block">
                        <span className="text-2xl">🍪</span>
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm mb-1">Respeitamos sua privacidade</p>
                        <p className="text-slate-300 text-xs md:text-sm">
                            Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. 
                            Ao continuar, você concorda com nossa <a href="#" className="text-indigo-400 underline hover:text-indigo-300">Política de Privacidade</a>.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button 
                        onClick={() => setShowCookieConsent(false)}
                        className="flex-1 md:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg border border-slate-700 transition-colors"
                    >
                        Configurar
                    </button>
                    <button 
                        onClick={handleAcceptCookies}
                        className="flex-1 md:flex-none px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-lg shadow-indigo-900/20 transition-all transform hover:scale-105"
                    >
                        Aceitar Tudo
                    </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
};