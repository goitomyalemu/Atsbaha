import React from 'react';
import { BookOpen, Users, Award, MonitorCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TeachingCourses: React.FC = () => {
  const { courses } = PORTFOLIO_DATA;

  return (
    <section className="py-16 lg:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
            Higher Education Pedagogy
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Courses & Laboratory Instruction
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Core lecture modules, laboratory curricula, and hands-on experimental sessions instructed at Mekelle University
            Department of Electronics & Communication Engineering.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.code}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-sky-500/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-sky-600 dark:text-sky-400">{course.code}</span>
                  <span className="text-slate-500 dark:text-slate-400">{course.level}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Lab Tools Unboxed Text */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                  <MonitorCheck className="w-3.5 h-3.5 text-sky-500" />
                  <span>Laboratory Instrumentation & Software:</span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {course.labTools.map((tool, tIdx) => (
                    <React.Fragment key={tool}>
                      <span>{tool}</span>
                      {tIdx < course.labTools.length - 1 && <span aria-hidden="true">·</span>}
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
