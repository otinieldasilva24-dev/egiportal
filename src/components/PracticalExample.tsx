import React, { useState } from 'react';

export const PracticalExample: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: '1. Identificação do Problema',
      desc: 'Meta de produção: 1.000 unidades/dia. Produção real: 650 unidades/dia.',
      detail: 'A fábrica está a operar a apenas 65% da capacidade esperada. As queixas de atraso aumentaram.'
    },
    {
      title: '2. Recolha de Dados',
      desc: 'Medição exata dos tempos de ciclo, paragens e desperdícios.',
      detail: 'O engenheiro mede cada etapa e descobre: 10% de perda de matéria-prima, 15% de paragens imprevistas e gargalos no transporte interno.'
    },
    {
      title: '3. Análise & Diagnóstico',
      desc: 'Localização exata do gargalo de produção.',
      detail: 'O gargalo está na Máquina B (falta de manutenção preventiva) e na fraca organização do inventário entre postos de trabalho.'
    },
    {
      title: '4. Implementação da Solução',
      desc: 'Ações corretivas baseadas em engenharia e gestão.',
      detail: 'Aplica-se manutenção preditiva na Máquina B, reorganiza-se o layout da fábrica (Lean Manufacturing) e treina-se a equipa.'
    },
    {
      title: '5. Medição & Otimização',
      desc: 'Novo resultado obtido: 960 unidades/dia com qualidade.',
      detail: 'Redução drástica de desperdícios e paragens. Processo estabilizado e monitorizado via dashboard.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded bg-brand-industrial/20 text-brand-industrial text-xs font-bold uppercase">
            Simulação de Resolução de Problemas
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl mt-3 text-slate-900 dark:text-white">
            Como um Engenheiro de Gestão Industrial Resolve um Problema?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Em vez de pedir aos trabalhadores para "trabalharem mais rápido", o engenheiro analisa o sistema para identificar e eliminar as causas das ineficiências.
          </p>
        </div>

        {/* Interactive Stepper */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-brand-navy rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl transition-colors duration-200">
          
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6 mb-8 overflow-x-auto gap-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStep(idx)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  step === idx
                    ? 'bg-brand-industrial text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[160px] space-y-4">
            <span className="text-xs font-semibold text-brand-blue dark:text-brand-accent tracking-widest uppercase">Etapa 0{step + 1} de 05</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{steps[step].title}</h3>
            <p className="text-base text-brand-industrial font-semibold">{steps[step].desc}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{steps[step].detail}</p>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800 mt-8">
            <button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold disabled:opacity-40 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
            >
              Anterior
            </button>

            <div className="flex gap-1">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${i === step ? 'bg-brand-industrial' : 'bg-slate-300 dark:bg-slate-700'}`}
                />
              ))}
            </div>

            <button
              disabled={step === steps.length - 1}
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 rounded-lg bg-brand-industrial text-slate-900 text-xs font-bold disabled:opacity-40 hover:bg-brand-yellow transition-all"
            >
              Próximo Passo
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};