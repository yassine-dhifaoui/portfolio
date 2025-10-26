
import React from 'react';
import { ProjectItem } from '../types';
import { SectionTitle } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ProjectIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projectsData: ProjectItem[] = t.projects.items;

  return (
    <section id="projects">
      <SectionTitle icon={<ProjectIcon />} title={t.projects.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((item, index) => (
          <div key={index} className="p-6 bg-slate-800/50 border border-cyan-400/20 rounded-lg neon-shadow-cyan hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>
            <p className="text-pink-400 text-sm mb-3">{item.date}</p>
            <p className="text-slate-400 mb-4 text-sm">{item.description}</p>
            <ul className="list-disc list-inside text-slate-400 space-y-1 mb-4 text-sm">
              {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tech.map((t, i) => (
                <span key={i} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                {language === 'fr' ? 'Voir le projet' : 'View project'}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

