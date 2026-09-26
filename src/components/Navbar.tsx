import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Cpu, ChevronRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'O que é EGI?', href: '#oque-e' },
    { name: 'Disciplinas', href: '#disciplinas' },
    { name: 'Indústria 4.0', href: '#industria-40' },
    { name: 'Carreiras', href: '#carreiras' },
    { name: 'Comparações', href: '#comparacoes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Angola', href: '#angola' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-brand-navy/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-brand-dark dark:text-white font-bold text-lg tracking-tight">
            <div className="p-1.5 bg-brand-industrial rounded-lg text-slate-900">
              <Cpu className="w-5 h-5" />
            </div>
            <span>EGI<span className="text-brand-industrial">PORTAL</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-industrial dark:hover:text-brand-industrial transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-industrial transition-colors"
              aria-label="Alternar Tema"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="#perfil"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-brand-industrial text-slate-900 hover:bg-brand-yellow transition-colors shadow-sm"
            >
              Combina comigo? <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-brand-navy border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-industrial"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#perfil"
            onClick={() => setIsOpen(false)}
            className="w-full text-center block text-sm font-semibold px-4 py-2.5 rounded-lg bg-brand-industrial text-slate-900"
          >
            Combina comigo?
          </a>
        </div>
      )}
    </header>
  );
};