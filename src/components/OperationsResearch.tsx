import React from 'react';
import { Calculator, BarChart2, TrendingUp, Network } from 'lucide-react';

export const OperationsResearch: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Calculator className="text-brand-accent" /> Investigação Operacional (IO)
        </h1>
        <p className="text-slate-400 text-sm mt-1">Modelos matemáticos aplicados à tomada de decisão complexa.</p>
      </div>

      <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          A Investigação Operacional utiliza métodos analíticos avançados para ajudar os gestores a tomar as melhores decisões possíveis em cenários com restrições de recursos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <h4 className="font-bold text-white text-sm mb-1">Programação Lineal</h4>
            <p className="text-slate-400 text-xs">Otimização de lucro ou minimização de custos sob restrições lineares.</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <h4 className="font-bold text-white text-sm mb-1">Teoria das Filas</h4>
            <p className="text-slate-400 text-xs">Análise de tempos de espera em linhas de produção e serviços.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
