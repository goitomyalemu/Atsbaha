import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 lg:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
            Professional & Academic Leadership
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Over nine years of continuous academic stewardship, engineering instruction, and research coordination
            at Mekelle University.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-10 sm:pl-12 group">
              {/* Timeline marker icon */}
              <div
                className={`absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                  exp.current
                    ? 'bg-sky-600 border-white dark:border-slate-900 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-500'
                }`}
              >
                <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500/40 transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                      <span className="text-sky-600 dark:text-sky-400 font-semibold">{exp.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.department}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                    Key Responsibilities & Impact
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unboxed Competencies List */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Competencies:</span>
                  {exp.competencies.map((comp, cIdx) => (
                    <React.Fragment key={comp}>
                      <span>{comp}</span>
                      {cIdx < exp.competencies.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
