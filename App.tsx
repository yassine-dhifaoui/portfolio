
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-[#0d1117] text-slate-300 min-h-screen">
        <Header />
        <main className="container mx-auto px-6 md:px-12 py-12 space-y-24">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
