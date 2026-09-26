import React from 'react';
import { Wrench, Monitor, Cpu, Table } from 'lucide-react';

export const Tools: React.FC = () => {
  const tools = [
    { name: 'Excel / VBA', desc: 'Análise de dados rápida e modelação financeira.', cat: 'Dados' },
    { name: 'AutoCAD / SolidWorks', desc: 'Desenho técnico e layout de fábricas.', cat: 'CAD' },
    { name: 'Arena / Simio', desc: 'Simulação de eventos discretos e linhas de produção.', cat: 'Simulação' },
    { name: 'Power BI', desc: 'Dashboards interativos e Business Intelligence.', cat: 'BI' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Wrench className="text-brand-industrial" /> Ferramentas e Software
        </h1>
        <p className="text-slate-400 text-sm mt-1">Principais programas utilizados pelos engenheiros no mercado.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((t, idx) => (
          <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
            <Monitor className="w-5 h-5 text-brand-accent mt-1" />
            <div>
              <h4 className="font-bold text-white text-sm">{t.name}</h4>
              <span className="text-[10px] uppercase font-semibold text-brand-industrial bg-brand-industrial/10 px-2 py-0.5 rounded">
                {t.cat}
              </span>
              <p className="text-slate-400 text-xs mt-1">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
