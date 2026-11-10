import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Radio, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ResearchProjects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'rf' | 'comms'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16 lg:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
              Selected Investigations & Thesis Work
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Research & Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Computational electromagnetics, high-frequency fractal antennas, and coherent digital signal demodulation
              developed at Mekelle University and MIT.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('rf')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'rf'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Antennas & RF
            </button>
            <button
              onClick={() => setFilter('comms')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'comms'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Digital Comms & DSP
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Media Showcase */}
                <div className={`relative w-full overflow-hidden bg-slate-950 ${isFeatured ? 'aspect-[16/9] sm:aspect-[16/8]' : 'aspect-[16/10]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Corner Label */}
                  <div className="absolute top-4 left-4 text-xs font-semibold text-white/90 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {project.categoryLabel}
                  </div>

                  {/* Top-Right Arrow trigger */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-sky-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span>{project.affiliation}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.role}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Key Measured Specs Table */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {project.specs.slice(0, isFeatured ? 3 : 2).map((spec, i) => (
                        <div key={i} className="p-2 rounded bg-slate-50 dark:bg-slate-800/50">
                          <span className="text-[11px] block text-slate-500 dark:text-slate-400">{spec.label}</span>
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400 pt-1">
                    <span>View Technical Case Study & Measurements</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Lightbox Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
