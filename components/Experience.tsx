
import React from 'react';
import { ExperienceItem } from '../types';
import { BriefcaseIcon, SectionTitle } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';


const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const experienceData: ExperienceItem[] = t.experience.jobs;

  return (
    <section id="experience">
      <SectionTitle icon={<BriefcaseIcon />} title={t.experience.title} />
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-cyan-400/30 hidden md:block"></div>
        {experienceData.map((item, index) => (
             <div key={index} className={`relative flex items-center justify-center md:justify-normal ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-2 border-slate-800 z-10 skill-bar-glow hidden md:block"></div>
                <div className="w-full md:w-1/2 p-0 md:p-4">
                    <div className={`p-6 bg-slate-800/50 border border-pink-400/20 rounded-lg neon-shadow-pink hover:border-pink-400/50 transition-all duration-300 backdrop-blur-sm mb-8 md:mb-0`}>
                        <p className="text-cyan-400 text-sm mb-1">{item.date}</p>
                        <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
                        <p className="text-pink-400 font-semibold mb-3">{item.company}</p>
                        <p className="text-slate-400 mb-4 text-sm">{item.description}</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-1 mb-4 text-sm">
                           {item.tasks.map((task, i) => <li key={i}>{task}</li>)}
                        </ul>
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-start justify-start'}`}>
                            {item.tech.map((t, i) => (
                                 <span key={i} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{t}</span>
                            ))}
                        </div>
                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                </svg>
                                {language === 'fr' ? 'Voir le projet sur GitHub' : 'View project on GitHub'}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
