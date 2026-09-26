import React from 'react';
import { UserCheck, Award, Target, Check } from 'lucide-react';

export const TechnicalProfiles: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <UserCheck className="text-brand-yellow" /> Perfil do Profissional
        </h1>
        <p className="text-slate-400 text-sm mt-1">Competências essenciais para se destacar na área.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-brand-accent" /> Hard Skills
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Análise de dados e estatística</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Mapeamento de processos (BPMN)</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Gestão de projetos (PMP / Agile)</li>
          </ul>
        </div>

        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-brand-industrial" /> Soft Skills
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Liderança e trabalho em equipa</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Resolução de problemas complexos</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Comunicação clara e persuasiva</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
