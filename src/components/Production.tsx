import React from 'react';
import { Factory, Cog, RefreshCw, Layers } from 'lucide-react';

export const Production: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Factory className="text-brand-industrial" /> Gestão da Produção
        </h1>
        <p className="text-slate-400 text-sm mt-1">O coração da engenharia industrial: transformar recursos em valor.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <Cog className="w-6 h-6 text-brand-industrial mb-2" />
          <h3 className="font-bold text-white text-base mb-1">PCP (Planeamento e Controlo)</h3>
          <p className="text-slate-400 text-xs">Definição do volume de produção, gestão de inventários de matérias-primas e sequenciamento de ordens de fabrico.</p>
        </div>

        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <RefreshCw className="w-6 h-6 text-brand-accent mb-2" />
          <h3 className="font-bold text-white text-base mb-1">Lean Manufacturing</h3>
          <p className="text-slate-400 text-xs">Filosofia focada na eliminação de 7 desperdícios: superprodução, tempo de espera, transporte, excesso de processamento, inventário, movimento e defeitos.</p>
        </div>
      </div>
    </div>
  );
};
