
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="relative py-20 md:py-32 min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-6 right-6 z-30">
            <button
                onClick={toggleLanguage}
                className="font-roboto-mono text-sm px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0d1117] bg-slate-800/50 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 neon-shadow-cyan"
            >
                {language === 'fr' ? 'Switch to English' : 'Passer au Français'}
            </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#0d1117] to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[#0d1117] opacity-60"></div>
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
             <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
             <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
          <span className="neon-text-cyan">{t.header.title1}</span> <span className="neon-text-pink">{t.header.title2}</span>
        </h1>
        <p className="font-roboto-mono text-lg md:text-xl text-cyan-400">
          {t.header.subtitle}
        </p>
        <div className="mt-10">
            <a 
                href="/../cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-roboto-mono text-base px-6 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0d1117] bg-slate-800/50 border border-pink-400/30 text-pink-300 hover:bg-pink-400/20 neon-shadow-pink inline-block"
            >
                {t.header.cvButton}
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;