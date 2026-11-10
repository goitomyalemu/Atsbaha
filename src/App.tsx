/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationCredentials } from './components/EducationCredentials';
import { ResearchProjects } from './components/ResearchProjects';
import { InteractiveRfLab } from './components/InteractiveRfLab';
import { TeachingCourses } from './components/TeachingCourses';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('atsbaha-theme');
      if (saved) return saved === 'dark';
      // Default to dark mode as it gives a modern academic & laboratory aesthetic
      return true;
    }
    return true;
  });

  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('atsbaha-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('atsbaha-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-sky-500/20 selection:text-sky-700 dark:selection:text-sky-300">
      {/* Top Bar Contract Navigation */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenCv={() => setCvModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenCv={() => setCvModalOpen(true)} />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education & Certifications Hub */}
        <EducationCredentials />

        {/* Key Projects & Research Section */}
        <ResearchProjects />

        {/* Interactive Antenna & S-Parameter Simulation Lab */}
        <InteractiveRfLab />

        {/* Academic Courses & Laboratory Instruction */}
        <TeachingCourses />

        {/* Technical Skills Matrix */}
        <SkillsSection />

        {/* Direct Channels & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Curriculum Vitae Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
