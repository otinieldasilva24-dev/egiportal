import React from 'react';
import { Code2, Terminal, Cpu, Database } from 'lucide-react';

export const Programming: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Code2 className="text-brand-accent" /> Programação na Engenharia Industrial
        </h1>
        <p className="text-slate-400 text-sm mt-1">Automação de tarefas, análise de dados e controlo de hardware.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Terminal className="w-6 h-6 text-emerald-400 mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Python & R</h4>
          <p className="text-slate-400 text-xs">Análise estatística, automação de relatórios e Machine Learning.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Cpu className="w-6 h-6 text-brand-industrial mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">C++ & Arduino/ESP32</h4>
          <p className="text-slate-400 text-xs">Sistemas embutidos, leitura de sensores industriais e robótica.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Database className="w-6 h-6 text-brand-yellow mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">SQL & Bases de Dados</h4>
          <p className="text-slate-400 text-xs">Extração e gestão de dados em sistemas ERP e MES.</p>
        </div>
      </div>
    </div>
  );
};