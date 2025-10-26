
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-4 neon-text-pink">
          {t.about.title}
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          {t.about.description}
        </p>
        <div className="mt-8 flex justify-center gap-4 text-sm flex-wrap">
            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-1 text-cyan-300">
                {t.about.language1}
            </div>
             <div className="bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-1 text-pink-300">
                {t.about.language2}
            </div>
            {t.about.language3 && (
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1 text-purple-300">
                    {t.about.language3}
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default About;
