import React from 'react';
import { Cpu, TrendingUp, Settings, Layers, Lightbulb, Users } from 'lucide-react';

export const WhatIsEGI: React.FC = () => {
  return (
    <section className="bg-slate-50 dark:bg-brand-dark py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Cabeçalho da página */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            O que é Engenharia e Gestão Industrial?
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A ponte perfeita entre a tecnologia, a engenharia e a estratégia de negócios.
          </p>
        </div>

        {/* Cartões Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-brand-accent/40 shadow-sm dark:shadow-none transition-all">
            <div className="p-3 bg-brand-accent/10 w-fit rounded-lg text-brand-accent mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Visão Holística</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              O Engenheiro de Gestão Industrial não se foca apenas no produto, mas em todo o ecossistema: desde a matéria-prima, processo de produção, pessoas, custos até à entrega ao cliente final.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-brand-industrial/40 shadow-sm dark:shadow-none transition-all">
            <div className="p-3 bg-brand-industrial/10 w-fit rounded-lg text-brand-industrial mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Otimização e Eficiência</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              O principal objetivo de EGI é eliminar desperdícios, reduzir custos operacionais, aumentar a produtividade e garantir o mais alto nível de qualidade.
            </p>
          </div>
        </div>

        {/* Os Três Pilares */}
        <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-xl shadow-md dark:shadow-xl transition-colors duration-200">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-brand-yellow" /> Os Três Pilares da EGI
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 dark:bg-slate-950/80 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
              <Settings className="w-8 h-8 text-brand-accent mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Engenharia</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Processos, Automação, Tecnologia e Física Industrial.</p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-slate-950/80 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
              <Users className="w-8 h-8 text-brand-industrial mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Gestão</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Liderança, Finanças, Projetos e Recursos Humanos.</p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-slate-950/80 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
              <Layers className="w-8 h-8 text-brand-yellow mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Sistemas</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Cadeias de Suprimento, Logística e Análise de Dados.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};