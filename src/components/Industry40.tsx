import React from 'react';
import { Cpu, Wifi, Database, Bot } from 'lucide-react';

export const Industry40: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Cpu className="text-brand-industrial" /> Indústria 4.0
        </h1>
        <p className="text-slate-400 text-sm mt-1">A quarta revolução industrial e a digitalização dos processos fabris.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Wifi className="w-6 h-6 text-brand-accent mb-2" />
          <h4 className="font-bold text-white text-sm">IoT Industrial</h4>
          <p className="text-slate-400 text-xs mt-1">Sensores conectados enviando dados em tempo real.</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Database className="w-6 h-6 text-brand-yellow mb-2" />
          <h4 className="font-bold text-white text-sm">Big Data</h4>
          <p className="text-slate-400 text-xs mt-1">Análise massiva de dados para inteligência do negócio.</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Bot className="w-6 h-6 text-emerald-400 mb-2" />
          <h4 className="font-bold text-white text-sm">Robótica Avançada</h4>
          <p className="text-slate-400 text-xs mt-1">Cobots (robôs colaborativos) na linha de montagem.</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Cpu className="w-6 h-6 text-indigo-400 mb-2" />
          <h4 className="font-bold text-white text-sm">Gêmeos Digitais</h4>
          <p className="text-slate-400 text-xs mt-1">Simulação virtual de fábricas completas.</p>
        </div>
      </div>
    </div>
  );
};