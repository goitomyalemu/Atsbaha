import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, BookOpen, ShieldCheck, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationCredentials: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'degrees' | 'certs'>('degrees');

  return (
    <section id="education" className="py-16 lg:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Segmented Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
              Qualifications & Accreditations
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education & Credentials
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Postgraduate and undergraduate engineering degrees, alongside industry-standard certifications in networking
              and cybersecurity.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('degrees')}
              type="button"
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'degrees'
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Degrees ({education.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              type="button"
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'certs'
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Professional Certifications ({certifications.length})</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Degrees */}
        {activeTab === 'degrees' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-sky-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                      {edu.institution} {edu.campus && `(${edu.campus})`}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 shrink-0 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3 text-sky-500" />
                    {edu.period}
                  </span>
                </div>

                {edu.gpa && (
                  <div className="p-3 rounded-lg bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Cumulative Academic GPA:
                    </span>
                    <span className="font-bold text-sky-700 dark:text-sky-300 font-mono text-sm">
                      {edu.gpa}
                    </span>
                  </div>
                )}

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.focus}
                </p>

                {/* Core Modules List */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                    <span>Key Advanced Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {edu.coursework.map((course, idx) => (
                      <React.Fragment key={course}>
                        <span>{course}</span>
                        {idx < edu.coursework.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Certifications */}
        {activeTab === 'certs' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-sky-500/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-100 dark:border-sky-900/40 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                      {cert.title}
                    </h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                      Issued: {cert.date}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    Skills Verified:
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {cert.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {sIdx < cert.skills.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
