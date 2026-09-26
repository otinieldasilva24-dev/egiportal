import React from 'react';
import { ArrowRight, Layers, Database, Cpu, Factory, Zap, Binary } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-brand-dark dark:via-brand-navy dark:to-brand-dark border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-industrial/10 border border-brand-industrial/30 text-brand-industrial text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" /> Portal de Orientação Académica & Profissional
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Engenharia de <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-accent to-brand-industrial">
                Gestão Industrial
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal">
              Engenharia, tecnologia, gestão e inovação para transformar sistemas industriais. Uma licenciatura que combina processos, matemática, dados e estratégia para tornar a produção mais eficiente.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              <span className="px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                Engenharia + Gestão + Tecnologia
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                Produção + Logística + Dados
              </span>
              <span className="px-3 py-1 rounded-md bg-brand-industrial/20 text-brand-industrial text-xs font-semibold">
                Indústria 4.0 + Inovação
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#oque-e"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-industrial text-slate-900 font-semibold hover:bg-brand-yellow transition-all shadow-lg shadow-brand-industrial/20"
              >
                Conhecer o Curso <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#carreiras"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
              >
                Ver Áreas Profissionais
              </a>
            </div>
          </div>

          {/* Smart Factory Visual Representation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md p-6 rounded-2xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="absolute -top-3 -right-3 p-2 bg-brand-industrial text-slate-900 rounded-lg font-bold text-xs shadow-md">
                Indústria 4.0
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <Factory className="w-8 h-8 text-brand-industrial" />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">Fábrica Conectada</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Sistema Produtivo Inteligente</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <Cpu className="w-5 h-5 text-brand-accent mb-1" />
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Sensores IoT</p>
                    <p className="text-[10px] text-slate-500">Monitorização em tempo real</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <Database className="w-5 h-5 text-blue-500 mb-1" />
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Análise de Dados</p>
                    <p className="text-[10px] text-slate-500">Decisões automáticas</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <Layers className="w-5 h-5 text-indigo-500 mb-1" />
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Cadeia de Valor</p>
                    <p className="text-[10px] text-slate-500">Logística otimizada</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <Binary className="w-5 h-5 text-brand-industrial mb-1" />
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Automação</p>
                    <p className="text-[10px] text-slate-500">Redução de falhas</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-brand-blue/10 border border-brand-blue/30 text-center">
                  <p className="text-xs text-brand-blue dark:text-brand-accent font-medium">
                    "Otimizar recursos, eliminar desperdícios e aumentar a produtividade."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};