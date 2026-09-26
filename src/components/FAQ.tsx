import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    { q: 'Qual é a diferença entre Engenharia Mecânica e EGI?', a: 'Enquanto a Mecânica foca no projeto e física da máquina, EGI foca em como a máquina se integra no processo de produção, pessoas e custos.' },
    { q: 'EGI precisa de saber programar?', a: 'Sim, noções de programação e bases de dados ajudam muito na automação de processos e análise de Big Data.' },
    { q: 'Posso trabalhar em bancos ou consultoria?', a: 'Sim! Devido ao forte perfil analítico e de gestão, muitos graduados trabalham no setor financeiro e de consultoria.' },
  ];

  return (
    <section className="bg-slate-50 dark:bg-brand-dark py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="text-brand-industrial w-6 h-6" /> Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Dúvidas comuns sobre a carreira em EGI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-all"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{f.q}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};