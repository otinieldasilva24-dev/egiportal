import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-brand-navy text-slate-600 dark:text-slate-300 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <div className="p-1.5 bg-brand-industrial rounded-lg text-slate-900">
                <Cpu className="w-5 h-5" />
              </div>
              <span>ENGENHARIA DE GESTÃO INDUSTRIAL</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Informação, orientação e conhecimento sobre uma das áreas que conecta engenharia, tecnologia e gestão para transformar sistemas industriais.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Navegação Rápida</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#oque-e" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">O Curso</a></li>
              <li><a href="#disciplinas" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">Disciplinas</a></li>
              <li><a href="#carreiras" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">Carreiras</a></li>
              <li><a href="#comparacoes" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">Comparações</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Recursos</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#industria-40" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">Indústria 4.0</a></li>
              <li><a href="#faq" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#glossario" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">Glossário Técnico</a></li>
              <li><a href="#angola" className="hover:text-brand-blue dark:hover:text-brand-industrial transition-colors">Panorama em Angola</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Portal Educativo EGI. Conteúdo informativo. A estrutura curricular e requisitos dependem de cada universidade.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            Voltar ao topo <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};