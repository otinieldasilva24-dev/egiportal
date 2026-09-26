import React from 'react';
import { ShieldCheck, CheckCircle, BarChart, FileCheck } from 'lucide-react';

export const Quality: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" /> Gestão da Qualidade
        </h1>
        <p className="text-slate-400 text-sm mt-1">Garantia de conformidade, padronização e melhoria contínua.</p>
      </div>

      <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-white font-bold text-base">Ferramentas Essenciais da Qualidade</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-brand-accent font-bold text-sm block">PDCA</span>
            <span className="text-slate-500 text-xs">Plan-Do-Check-Act</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-brand-industrial font-bold text-sm block">Ishikawa</span>
            <span className="text-slate-500 text-xs">Espinha de Peixe</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-brand-yellow font-bold text-sm block">5S</span>
            <span className="text-slate-500 text-xs">Organização e Limpeza</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold text-sm block">Six Sigma</span>
            <span className="text-slate-500 text-xs">Redução de Variabilidade</span>
          </div>
        </div>
      </div>
    </div>
  );
};