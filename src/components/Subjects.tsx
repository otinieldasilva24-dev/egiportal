import React, { useState } from 'react';
import { Calculator, Zap, Cog, Building2, Laptop, AlertCircle } from 'lucide-react';

export const Subjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('math');

  const categories = [
    {
      id: 'math',
      title: 'Matemática',
      icon: Calculator,
      topics: ['Álgebra Linear', 'Cálculo I, II, III', 'Matemática Aplicada', 'Estatística e Probabilidades', 'Métodos Numéricos', 'Investigação Operacional'],
      description: 'A matemática é uma das ferramentas fundamentais do curso. Ela é utilizada para analisar problemas, otimizar recursos, estudar dados e apoiar decisões complexas.',
      highlight: 'Não é um curso para fugir da matemática.'
    },
    {
      id: 'physics',
      title: 'Física',
      icon: Zap,
      topics: ['Física Geral', 'Mecânica Aplicada', 'Eletricidade e Eletrónica', 'Termodinâmica', 'Mecânica dos Fluidos', 'Energia e Sustentabilidade'],
      description: 'Fornece a base teórica e prática para compreender o funcionamento físico dos equipamentos, máquinas e transformações de energia no ambiente industrial.',
    },
    {
      id: 'engineering',
      title: 'Engenharia',
      icon: Cog,
      topics: ['Processos Industriais', 'Tecnologia de Fabricação', 'Desenho Técnico & CAD', 'Ciência dos Materiais', 'Automação & Eletrónica', 'Manutenção Industrial', 'Sistemas Industriais', 'Controlo de Processos'],
      description: 'Engloba as disciplinas essenciais para projetar, compreender os materiais, controlar linhas de produção e garantir o bom funcionamento técnico das instalações.',
    },
    {
      id: 'management',
      title: 'Gestão',
      icon: Building2,
      topics: ['Gestão de Empresas', 'Economia Industrial', 'Contabilidade de Custos', 'Gestão de Operações', 'Gestão de Projetos', 'Logística & Supply Chain', 'Gestão de Recursos Humanos', 'Estratégia Empresarial', 'Gestão da Qualidade'],
      description: 'Capacita o estudante para administrar recursos financeiros, organizar equipas, controlar custos e alinhar os processos industriais com a estratégia do negócio.',
    },
    {
      id: 'tech',
      title: 'Tecnologia',
      icon: Laptop,
      topics: ['Automação Industrial', 'IoT (Internet das Coisas)', 'Robótica Industrial', 'Sistemas de Informação (ERP/MES)', 'Análise de Dados', 'Digitalização Industrial', 'Indústria 4.0'],
      description: 'Conecta a engenharia física às tecnologias digitais modernas, preparando o aluno para operar em ambientes industriais automatizados e inteligentes.',
    }
  ];

  return (
    <section id="disciplinas" className="py-16 lg:py-24 bg-slate-50 dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-industrial mb-2">Estrutura Curricular</h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            O que vais estudar?
          </p>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            O curso combina uma sólida preparação em ciências básicas, engenharia, gestão e tecnologias digitais.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  isActive
                    ? 'bg-brand-industrial text-slate-900 shadow-lg shadow-brand-industrial/20'
                    : 'bg-white dark:bg-brand-navy text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        {categories.map((cat) => {
          if (cat.id !== activeTab) return null;
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="bg-white dark:bg-brand-navy rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-industrial/20 text-brand-industrial rounded-xl">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Área de Conhecimento Fundamental</p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base mb-6 leading-relaxed">
                {cat.description}
              </p>

              {cat.highlight && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 mb-6 font-semibold text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{cat.highlight}</span>
                </div>
              )}

              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tópicos e Disciplinas Típicas:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-industrial"></span>
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};