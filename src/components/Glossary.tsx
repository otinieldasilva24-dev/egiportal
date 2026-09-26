import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';

export const Glossary: React.FC = () => {
  const [query, setQuery] = useState('');

  const terms = [
    { term: 'EGI', def: 'Engenharia de Gestão Industrial. Área focada no projeto, melhoria e gestão de sistemas integrados de produção e serviços.' },
    { term: 'Indústria 4.0', def: 'Quarta Revolução Industrial caracterizada pela integração de tecnologias digitais (IoT, IA, Big Data) nos processos de fabricação.' },
    { term: 'Lean Manufacturing', def: 'Filosofia de gestão focada na redução contínua de desperdícios e no aumento do valor entregue ao cliente.' },
    { term: 'Six Sigma', def: 'Metodologia estruturada para melhoria de processos através da redução da variabilidade e eliminação de defeitos.' },
    { term: 'Kaizen', def: 'Conceito japonês que significa "melhoria contínua" envolvendo todos os colaboradores de uma organização.' },
    { term: 'Supply Chain', def: 'Cadeia de Abastecimento. Conjunto de processos que engloba desde a matéria-prima até à entrega ao consumidor final.' },
    { term: 'IoT (Internet das Coisas)', def: 'Rede de objetos físicos equipados com sensores e software para recolher e trocar dados via internet.' },
    { term: 'ERP', def: 'Enterprise Resource Planning. Software integrado de gestão empresarial para gerir recursos, finanças e operações.' },
    { term: 'MES', def: 'Manufacturing Execution System. Sistema de controlo que monitoriza a produção em tempo real no chão de fábrica.' },
    { term: 'SCADA', def: 'Supervisory Control and Data Acquisition. Sistema de software para controlo e aquisição de dados em processos industriais.' },
    { term: 'Investigação Operacional', def: 'Aplicação de métodos analíticos avançados e modelos matemáticos para apoio à tomada de decisão.' },
    { term: 'Gargalo (Bottleneck)', def: 'Etapa do processo produtivo que limita a capacidade total de todo o sistema.' },
    { term: 'Manutenção Preditiva', def: 'Acompanhamento contínuo do estado das máquinas com sensores para prever falhas antes que ocorram.' },
    { term: 'PDCA', def: 'Ciclo de melhoria contínua dividido em quatro etapas: Plan (Planejar), Do (Fazer), Check (Verificar), Act (Agir).' }
  ];

  const filtered = terms.filter(t => 
    t.term.toLowerCase().includes(query.toLowerCase()) || 
    t.def.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="glossario" className="py-16 lg:py-24 bg-slate-50 dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-industrial/20 text-brand-industrial text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" /> Dicionário Técnico
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Glossário de Termos Industriais
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Explora os conceitos mais utilizados na Engenharia de Gestão Industrial e na Indústria 4.0.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar termo (ex: Lean, IoT, Gargalo)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-industrial"
          />
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-base font-bold text-brand-industrial mb-2">{item.term}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};