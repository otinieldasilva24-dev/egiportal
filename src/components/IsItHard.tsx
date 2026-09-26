import React from 'react';
import { HelpCircle, Brain, CheckCircle2, ShieldAlert } from 'lucide-react';

export const IsItHard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="text-brand-industrial" /> O curso é difícil?
        </h1>
        <p className="text-slate-400 text-sm mt-1">O que esperar dos desafios académicos de EGI.</p>
      </div>

      <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-4">
        <p className="text-slate-300 text-sm leading-relaxed">
          Como qualquer Engenharia, EGI exige dedicação e uma forte base analítica. No entanto, o seu diferencial é a diversidade de conhecimentos, combinando matemática com gestão humana e estratégica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <h4 className="font-bold text-amber-400 text-sm flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4" /> Principais Desafios
            </h4>
            <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
              <li>Matemática Avançada e Estatística</li>
              <li>Física e Termodinâmica</li>
              <li>Raciocínio Algorítmico e Programação</li>
              <li>Gestão simultânea de múltiplos projetos</li>
            </ul>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4" /> Como ter Sucesso
            </h4>
            <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
              <li>Manter o estudo contínuo das matérias de cálculo</li>
              <li>Desenvolver visão crítica e analítica</li>
              <li>Trabalhar fortemente as habilidades sociais (Soft Skills)</li>
              <li>Praticar com casos reais de empresas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
