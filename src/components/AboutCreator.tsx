import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  Award, 
  ExternalLink,
  X,
  Sparkles,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';

export const AboutCreator: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // COLOQUE AQUI O CAMINHO OU A URL DA TUA FOTO
  // Exemplo: "/foto-otiniel.jpg" ou "https://minha-imagem.com/foto.jpg"
  const myPhotoUrl = "/foto-otiniel.png"; 

  return (
    <section className="bg-slate-100 dark:bg-brand-navy/60 py-16 transition-colors duration-200 border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-industrial/20 text-brand-industrial text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Quem Desenvolveu o Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            Conheça o Criador do EGIPORTAL
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Uma ponte entre a Engenharia, a Automação e o Desenvolvimento de Sistemas Web.
          </p>
        </div>

        {/* Card Principal do Criador */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-lg dark:shadow-2xl transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Coluna da Esquerda: Perfil e Bio */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-4">
                {/* Foto de Perfil Interativa (Clica para ampliar) */}
                <button
                  onClick={() => !imageError && myPhotoUrl && setIsPhotoModalOpen(true)}
                  className="relative group w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-brand-industrial bg-brand-industrial shadow-md shrink-0 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-industrial focus:ring-offset-2"
                  title="Clique para ampliar a foto"
                >
                  {!imageError && myPhotoUrl ? (
                    <>
                      <img 
                        src={myPhotoUrl} 
                        alt="Otiniel da Silva" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setImageError(true)}
                      />
                      {/* Overlay com Ícone ao passar o Rato */}
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white">
                        <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-brand-industrial text-slate-900 font-black text-xl sm:text-2xl flex items-center justify-center">
                      OS
                    </div>
                  )}
                </button>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Otiniel Da Silva
                  </h3>
                  <p className="text-brand-blue dark:text-brand-industrial text-sm font-semibold">
                    Gestor de Projetos
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Técnico em Eletrónica e Telecomunicações com atuação no desenvolvimento de soluções tecnológicas integradas. Apaixonado por transformar processos complexos em plataformas interativas, conectando o mundo do hardware ao software de alto desempenho.
              </p>

              {/* Destaque W.O.F Project */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                <Award className="w-5 h-5 text-brand-industrial shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Liderança na W.O.F Project
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    Direção e orientação técnica no apoio ao desenvolvimento de projetos académicos e soluções tecnológicas.
                  </p>
                </div>
              </div>

              {/* Botões de Ação e Redes */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2.5 rounded-lg bg-brand-industrial text-slate-900 font-bold text-xs hover:bg-brand-yellow transition-all flex items-center gap-2 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" /> Ver Ficha Técnica do Projeto
                </button>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href="https://github.com/otinieldasilva24-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:otinieldasilva24@gmailcom"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    title="E-mail"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Coluna da Direita: Stacks Técnicas */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card Hardware & IoT */}
              <div className="p-5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm mb-3">
                  <Cpu className="w-4 h-4 text-brand-industrial" />
                  <span>Sistemas Embarcados & Eletrónica</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['ESP32', 'Raspberry Pi', 'Microcontroladores', 'Redes & Telecom'].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Software & Web */}
              <div className="p-5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm mb-3">
                  <Code2 className="w-4 h-4 text-brand-blue dark:text-brand-accent" />
                  <span>Desenvolvimento Web & Software</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Git'].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* MODAL 1: Visualizador da Foto em Ponto Grande (Suporta Light & Dark Mode) */}
      {isPhotoModalOpen && (
        <div 
          onClick={() => setIsPhotoModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/85 backdrop-blur-md animate-fadeIn cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-2xl w-full p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden cursor-default transition-colors duration-200"
          >
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-slate-100/80 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-full transition-colors border border-slate-200 dark:border-slate-700"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-1">
              <img 
                src={myPhotoUrl} 
                alt="Otiniel Da Silva - Foto em tamanho grande" 
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
              />
            </div>
            
            <div className="pt-3 pb-4 px-4 text-center">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                Otiniel Da Silva — EGIPORTAL
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Créditos Detalhados do Projeto */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-5 transition-colors duration-200">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <Globe className="w-5 h-5 text-brand-industrial" />
              <span>Ficha Técnica do EGIPORTAL</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Este portal foi concebido e programado com o objetivo de oferecer um centro de orientação académica e profissional completo sobre a carreira em Engenharia e Gestão Industrial.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-industrial shrink-0" />
                <span><strong>Conceito & Arquitetura:</strong> Otiniel Da Silva</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-industrial shrink-0" />
                <span><strong>Interface & UX:</strong> Totalmente responsiva com Modo Claro / Escuro</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-industrial shrink-0" />
                <span><strong>Tecnologias:</strong> React, TypeScript, Tailwind CSS, Lucide Icons</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                Fechar Ficha Técnica
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};