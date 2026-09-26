import React from 'react';
import { Layers, Truck, Activity, Cpu, Wrench, ShieldCheck } from 'lucide-react';

export const Specializations: React.FC = () => {
  const specs = [
    { title: 'Gestão da Produção', icon: Activity, desc: 'Planeamento, controlo e otimização de linhas fabris.' },
    { title: 'Logística e SCM', icon: Truck, desc: 'Gestão da cadeia de abastecimento e frotas.' },
    { title: 'Qualidade e Auditoria', icon: ShieldCheck, desc: 'Normas ISO, Controlo Estatístico e Certificação.' },
    { title: 'Indústria 4.0 e IoT', icon: Cpu, desc: 'Digitalização, automação e análise de dados operacionais.' },
    { title: 'Manutenção Industrial', icon: Wrench, desc: 'Estratégias preditivas e fiabilidade de ativos.' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Layers className="text-brand-accent" /> Áreas de Especialização
        </h1>
        <p className="text-slate-400 text-sm mt-1">Diversas ramificações onde podes direcionar a tua carreira.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specs.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
              <Icon className="w-7 h-7 text-brand-accent mb-3" />
              <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};