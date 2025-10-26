
import React from 'react';
import { EducationItem } from '../types';
import { GraduationCapIcon, SectionTitle } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Education: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const educationData: EducationItem[] = t.education.items;
    
    return (
        <section id="education">
            <SectionTitle icon={<GraduationCapIcon />} title={t.education.title} />
            <div className="space-y-8">
                {educationData.map((item, index) => (
                    <div key={index} className="pl-6 border-l-2 border-pink-400/50 relative">
                         <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-800 z-10 skill-bar-glow"></div>
                        <p className="text-pink-400 font-semibold">{item.date}</p>
                        <h3 className="text-xl font-bold text-slate-100 mt-1">{item.degree}</h3>
                        {item.specialization && (
                            <p className="text-cyan-400 text-sm mt-1">{item.specialization}</p>
                        )}
                        <p className="text-slate-400 mt-1">{item.institution}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
