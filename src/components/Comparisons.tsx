import React from 'react';

export const Comparisons: React.FC = () => {
  const comparisons = [
    { course: 'Engenharia de Gestão Industrial (EGI)', focus: 'Processos + Produção + Gestão + Logística + Otimização' },
    { course: 'Engenharia Mecânica', focus: 'Máquinas + Mecânica + Materiais + Fabricação' },
    { course: 'Engenharia Eletrotécnica', focus: 'Eletricidade + Eletrónica + Energia + Controlo' },
    { course: 'Engenharia Informática', focus: 'Software + Sistemas + Programação + Computação' },
    { course: 'Engenharia de Telecomunicações', focus: 'Comunicações + Redes + Transmissão + Sistemas de Comunicação' },
    { course: 'Engenharia Mecatrónica', focus: 'Mecânica + Eletrónica + Automação + Controlo' },
    { course: 'Engenharia de Produção', focus: 'Produção + Processos + Produtividade + Operações' },
  ];

  return (
    <section id="comparacoes" className="py-16 lg:py-24 bg-white dark:bg-brand-navy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-industrial mb-2">Esclarecimento de Dúvidas</h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            EGI vs Outras Engenharias
          </p>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Nenhuma engenharia é "melhor" que outra. Cada licenciatura foca-se em resolver problemas específicos através de abordagens complementares.
          </p>
        </div>

        {/* Comparison Table Component */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold uppercase text-xs">
              <tr>
                <th className="p-4 sm:p-5">Curso de Engenharia</th>
                <th className="p-4 sm:p-5">Foco Principal & Áreas Dominantes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-brand-navy">
              {comparisons.map((item, idx) => {
                const isEgi = idx === 0;
                return (
                  <tr key={idx} className={isEgi ? 'bg-brand-industrial/10 font-medium' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}>
                    <td className="p-4 sm:p-5 text-slate-900 dark:text-white font-bold flex items-center gap-2">
                      {isEgi && <span className="w-2 h-2 rounded-full bg-brand-industrial"></span>}
                      {item.course}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 font-mono text-xs sm:text-sm">
                      {item.focus}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};