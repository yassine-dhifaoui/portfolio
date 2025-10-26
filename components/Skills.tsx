
import React from 'react';
import { SkillCategory } from '../types';
import { SectionTitle, CpuIcon, CodeIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
    <div className="mb-4">
        <p className="text-slate-300 mb-1">{name}</p>
        <div className="bg-slate-700 rounded-full h-2.5">
            <div
                className="bg-cyan-400 h-2.5 rounded-full skill-bar-glow"
                style={{ width: `${level}%` }}
            ></div>
        </div>
    </div>
);


const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const skillData = t.skills.categories;

  return (
    <section id="skills">
      <SectionTitle icon={<CodeIcon />} title={t.skills.title} />
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
        {skillData.map((category: SkillCategory, index: number) => (
          <div key={index} className="bg-slate-800/50 border border-cyan-400/20 p-6 rounded-lg neon-shadow-cyan backdrop-blur-sm">
            <h3 className="text-xl font-bold text-pink-400 mb-6 neon-text-pink">{category.title}</h3>
            <div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
       <div className="mt-12 bg-slate-800/50 border border-pink-400/20 p-6 rounded-lg neon-shadow-pink backdrop-blur-sm">
        <h3 className="text-xl font-bold text-cyan-400 mb-4 neon-text-cyan flex items-center gap-3">
            <CpuIcon className="w-6 h-6"/> {t.skills.sectors.title}
        </h3>
        <div className="flex flex-wrap gap-3">
            {t.skills.sectors.list.map(sector => (
                <span key={sector} className="bg-pink-500/10 text-pink-300 text-sm font-medium px-3 py-1 rounded-full">{sector}</span>
            ))}
        </div>
       </div>
    </section>
  );
};

export default Skills;
