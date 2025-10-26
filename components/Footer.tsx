import React from 'react';
import { AtSignIcon, GithubIcon, LinkedinIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-slate-900/50 border-t border-cyan-400/20 mt-24 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-4 neon-text-pink">{t.footer.title}</h2>
        <p className="text-slate-400 mb-8">
          {t.footer.subtitle}
        </p>
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="mailto:yassine.dhifaoui.94@gmail.com" className="text-cyan-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
            <AtSignIcon className="w-6 h-6" />
            <span className="hidden md:inline">yassine.dhifaoui.94@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/yassine-dhifaoui/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors duration-300">
            <LinkedinIcon className="w-7 h-7" />
          </a>
          <a href="https://github.com/yassine-dhifaoui/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors duration-300">
            <GithubIcon className="w-7 h-7" />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;