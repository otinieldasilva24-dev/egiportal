import React from 'react';
import { Truck, MapPin, Box, ArrowRightLeft } from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Truck className="text-brand-accent" /> Logística e Cadeia de Suprimentos
        </h1>
        <p className="text-slate-400 text-sm mt-1">Garantir que o produto certo chegue ao local certo, no tempo certo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Box className="w-6 h-6 text-brand-yellow mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Gestão de Armazéns</h4>
          <p className="text-slate-400 text-xs">Otimização de layout, endereçamento de stock e movimentação interna de cargas.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <MapPin className="w-6 h-6 text-brand-accent mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Roteamento e Transporte</h4>
          <p className="text-slate-400 text-xs">Algoritmos de otimização de rotas de distribuição para redução do consumo de combustível.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <ArrowRightLeft className="w-6 h-6 text-brand-industrial mb-2" />
          <h4 className="font-bold text-white text-sm mb-1">Supply Chain (SCM)</h4>
          <p className="text-slate-400 text-xs">Integração de informação entre fornecedores, fábrica, distribuidores e clientes.</p>
        </div>
      </div>
    </div>
  );
};