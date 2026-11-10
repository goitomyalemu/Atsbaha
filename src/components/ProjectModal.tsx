import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, Activity, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.affiliation}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Image Banner */}
          <div className="relative aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs uppercase tracking-wider text-sky-300 font-semibold">{project.role}</span>
              <p className="text-sm sm:text-base font-semibold">{project.summary}</p>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-sky-500" />
              <span>Engineering Specifications & Measured Benchmarks</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800"
                >
                  <div className="text-xs text-slate-500 dark:text-slate-400">{spec.label}</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tabular-nums mt-0.5">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Dive Problem & Methodology */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-sky-500" />
                <span>Engineering Challenge</span>
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-500" />
                <span>Design Methodology</span>
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.details.methodology}
              </p>
            </div>
          </div>

          {/* Key Findings List */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Experimental & Simulation Validations
            </h4>
            <ul className="space-y-2.5">
              {project.details.keyFindings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Environment */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">Tools & Instrumentation:</span>
              {project.tools.map((tool, idx) => (
                <React.Fragment key={tool}>
                  <span>{tool}</span>
                  {idx < project.tools.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
