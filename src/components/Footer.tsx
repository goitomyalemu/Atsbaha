import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {profile.fullName}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Department Head & Engineering Lecturer · Mekelle University, Ethiopia
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#overview" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Overview
            </a>
            <a href="#experience" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Education
            </a>
            <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Research
            </a>
            <a href="#rflab" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              RF Lab
            </a>
            <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100 dark:bg-slate-900 rounded-lg transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Atsbaha Gebreslassie Weldeanenia. All rights reserved.
          </p>
          <p>
            Department of Electronics & Communication Engineering · Mekelle University
          </p>
        </div>
      </div>
    </footer>
  );
};
