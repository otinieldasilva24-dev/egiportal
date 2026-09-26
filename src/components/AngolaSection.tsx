import React from 'react';
import { MapPin, Info } from 'lucide-react';

export const AngolaSection: React.FC = () => {
  return (
    <section id="angola" className="py-16 lg:py-24 bg-gradient-to-b from-slate-100 to-white dark:from-brand-dark dark:to-brand-navy border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5" /> Panorama Nacional
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Engenharia de Gestão Industrial em Angola
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            A industrialização e diversificação da economia angolana exigem profissionais capacitados para otimizar processos na indústria petrolífera, mineira, agroalimentar, logística e de serviços.
          </p>
        </div>

        {/* Informational Placeholder Box */}
        <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-xl max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-800 dark:text-blue-300 mb-8">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              <strong>Nota Orientadora:</strong> Os planos de estudo, requisitos de candidatura e modalidades do curso podem variar entre instituições de ensino superior públicas e privadas em Angola.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Estrutura de Informação em Atualização Contínua:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <strong className="block text-slate-900 dark:text-white font-bold mb-1">🏛️ Instituições de Ensino Superior</strong>
              Mapeamento de universidades e institutos politécnicos que lecionam EGI ou áreas congéneres.
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <strong className="block text-slate-900 dark:text-white font-bold mb-1">📋 Requisitos de Acesso</strong>
              Exames de acesso (Matemática e Física), médias curriculares e documentação necessária.
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <strong className="block text-slate-900 dark:text-white font-bold mb-1">⏱️ Duração e Propinas</strong>
              Duração média de 4 a 5 anos (licenciatura) e estimativa de emolumentos por instituição.
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <strong className="block text-slate-900 dark:text-white font-bold mb-1">💼 Oportunidades de Estágio</strong>
              Sectores de Petróleo & Gás, Mineração, ZEE (Zona Económica Especial) e Transportes.
            </div>
          </div>

          <div className="mt-8 text-center pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 italic">
              * As informações específicas de cada instituição devem ser confirmadas diretamente junto da universidade ou instituto respetivo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};