import React from 'react';
import { Clock, GraduationCap, BookOpen, Calendar } from 'lucide-react';

export const Duration: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Clock className="text-brand-accent" /> Duração e Estrutura do Curso
        </h1>
        <p className="text-slate-400 text-sm mt-1">Organização curricular e carga horária típica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <GraduationCap className="w-8 h-8 text-brand-industrial mb-2" />
          <h3 className="text-lg font-bold text-white">Licenciatura / Bacharelato</h3>
          <p className="text-2xl font-extrabold text-brand-accent my-2">3 a 5 Anos</p>
          <p className="text-slate-400 text-xs">
            Dependendo do país e instituição (ex: Ensino Médio Técnico em Angola costuma ter 4 anos; Ensino Superior varia entre 4 a 5 anos).
          </p>
        </div>

        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <BookOpen className="w-8 h-8 text-brand-yellow mb-2" />
          <h3 className="text-lg font-bold text-white">Estágio & Projeto Final</h3>
          <p className="text-2xl font-extrabold text-brand-yellow my-2">Último Ano</p>
          <p className="text-slate-400 text-xs">
            Focado na resolução de problemas reais da indústria através do Relatório de Estágio ou Projeto Técnico.
          </p>
        </div>
      </div>
    </div>
  );
};