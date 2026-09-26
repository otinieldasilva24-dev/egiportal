import React from 'react';
import { Wrench, AlertTriangle, Shield, Activity } from 'lucide-react';

export const Maintenance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Wrench className="text-brand-yellow" /> Manutenção Industrial
        </h1>
        <p className="text-slate-400 text-sm mt-1">Garantir a máxima disponibilidade e fiabilidade dos equipamentos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <AlertTriangle className="w-6 h-6 text-rose-400 mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Manutenção Corretiva</h4>
          <p className="text-slate-400 text-xs">Acontece após a avaria do equipamento. Solução de emergência.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Shield className="w-6 h-6 text-brand-accent mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Manutenção Preventiva</h4>
          <p className="text-slate-400 text-xs">Intervenções agendadas periodicamente para evitar falhas.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Activity className="w-6 h-6 text-emerald-400 mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Manutenção Preditiva</h4>
          <p className="text-slate-400 text-xs">Monitorização contínua via sensores de vibração e temperatura.</p>
        </div>
      </div>
    </div>
  );
};
