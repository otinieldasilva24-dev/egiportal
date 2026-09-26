import React, { useState } from 'react';
import { CheckSquare, Square, Award } from 'lucide-react';

export const StudentProfile: React.FC = () => {
  const questions = [
    'Gostas de resolver problemas do mundo real?',
    'Tens interesse por tecnologia e inovação?',
    'Tens curiosidade em saber como funcionam as empresas e indústrias?',
    'Gostas de matemática aplicada para tomar decisões?',
    'Tens facilidade ou interesse por organização e processos?',
    'Gostas da ideia de otimizar tempo, custos e recursos?',
    'Tens interesse em análise de dados para entender tendências?',
    'Atrai-te a área de automação e robótica?',
    'Gostas de trabalhar em equipa e gerir projetos?',
    'Queres compreender o sistema global de uma organização?'
  ];

  const [checked, setChecked] = useState<boolean[]>(new Array(questions.length).fill(false));

  const toggleCheck = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const score = checked.filter(Boolean).length;

  return (
    <section id="perfil" className="py-16 lg:py-24 bg-white dark:bg-brand-navy/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-industrial mb-2">Autoavaliação</h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Este curso combina contigo?
          </p>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Marca as afirmações com as quais te identificas para perceber a tua afinidade com a Engenharia de Gestão Industrial.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-brand-navy rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {questions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`flex items-start gap-3 p-4 rounded-xl text-left border transition-all ${
                  checked[idx]
                    ? 'bg-brand-industrial/10 border-brand-industrial/50 text-slate-900 dark:text-white'
                    : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {checked[idx] ? (
                  <CheckSquare className="w-5 h-5 text-brand-industrial shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span className="text-xs sm:text-sm font-medium">{q}</span>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-industrial/20 text-brand-industrial text-xs font-bold mb-2">
              <Award className="w-4 h-4" /> Resultado: {score} de {questions.length} selecionados
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {score >= 5 ? (
                <span className="font-semibold text-slate-900 dark:text-white">
                  Se marcaste várias opções, Engenharia de Gestão Industrial pode ser uma área extremamente alinhada com os teus interesses profissionais!
                </span>
              ) : (
                <span>
                  Continua a explorar as secções abaixo para conheceres melhor as disciplinas, tecnologias e saídas profissionais antes de tomares uma decisão.
                </span>
              )}
            </p>
            <p className="text-[11px] text-slate-400 mt-3 italic">
              * Esta interação serve apenas como guia orientador e não constitui uma recomendação académica definitiva.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};