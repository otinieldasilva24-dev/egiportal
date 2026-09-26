import React from 'react';
import { GraduationCap, Award, BookOpen, Rocket } from 'lucide-react';

export const AfterGraduation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <GraduationCap className="text-brand-accent" /> Depois da Licenciatura
        </h1>
        <p className="text-slate-400 text-sm mt-1">Caminhos a seguir após terminar a formação base.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Rocket className="w-6 h-6 text-brand-industrial mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Entrada Direta no Mercado</h4>
          <p className="text-slate-400 text-xs">Aprender na prática como engenheiro de processos, qualidade ou logística.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <BookOpen className="w-6 h-6 text-brand-accent mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Mestrado / Pós-Graduação</h4>
          <p className="text-slate-400 text-xs">Especialização em Gestão de Projetos, MBA ou Indústria 4.0.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Award className="w-6 h-6 text-brand-yellow mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Certificações Profissionais</h4>
          <p className="text-slate-400 text-xs">Obtenção de certificações Lean Six Sigma (Green/Black Belt) ou PMP.</p>
        </div>
      </div>
    </div>
  );
};
