import React, { useState, useEffect } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsEGI } from './components/WhatIsEGI';
import { Subjects } from './components/Subjects';
import { PracticalExample } from './components/PracticalExample';
import { StudentProfile } from './components/StudentProfile';
import { Comparisons } from './components/Comparisons';
import { FAQ } from './components/FAQ';
import { AngolaSection } from './components/AngolaSection';
import { AboutCreator } from './components/AboutCreator'; // Importação adicionada
import { Glossary } from './components/Glossary';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-brand-dark text-slate-900 dark:text-slate-100 selection:bg-brand-industrial selection:text-slate-900">
      <ReadingProgressBar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="oque-e" className="scroll-mt-20">
          <WhatIsEGI />
        </div>

        <div id="disciplinas" className="scroll-mt-20">
          <Subjects />
        </div>

        <div id="industria-40" className="scroll-mt-20">
          <PracticalExample />
        </div>

        <div id="carreiras" className="scroll-mt-20">
          <StudentProfile />
        </div>

        <div id="comparacoes" className="scroll-mt-20">
          <Comparisons />
        </div>

        <div id="faq" className="scroll-mt-20">
          <FAQ />
        </div>

        <div id="angola" className="scroll-mt-20">
          <AngolaSection />
        </div>

        {/* Secção do Criador */}
        <div id="criador" className="scroll-mt-20">
          <AboutCreator />
        </div>

        <div id="glossario" className="scroll-mt-20">
          <Glossary />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;