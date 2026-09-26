import React from 'react';
import { Briefcase, Building2, UserCheck, Stethoscope } from 'lucide-react';

export const Careers: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Briefcase className="text-brand-accent" /> Saídas Profissionais
        </h1>
        <p className="text-slate-400 text-sm mt-1">Onde pode trabalhar um Engenheiro e Gestor Industrial?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <Building2 className="w-6 h-6 text-brand-industrial mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Indústria Transformadora</h4>
          <p className="text-slate-400 text-xs">Automóvel, alimentar, petrolífera, têxtil e eletrónica.</p>
        </div>

        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <UserCheck className="w-6 h-6 text-brand-accent mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Consultoria Estratégica</h4>
          <p className="text-slate-400 text-xs">Otimização de processos para empresas de diversos setores.</p>
        </div>

        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <Stethoscope className="w-6 h-6 text-emerald-400 mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Serviços e Saúde</h4>
          <p className="text-slate-400 text-xs">Gestão operacional de hospitais, banca e logística e-commerce.</p>
        </div>
      </div>
    </div>
  );
};
