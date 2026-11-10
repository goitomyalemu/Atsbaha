import React, { useState } from 'react';
import { Search, Wrench, Terminal, Network, Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'hardware' | 'software' | 'networking'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter((skill) => {
    const matchesFilter = filter === 'all' || skill.category === filter;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 lg:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
            Technical Competencies & Instruments
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Proficiencies across electromagnetic CAD, embedded microcomputers, DSP mathematical modeling, and enterprise
            Cisco routing architectures.
          </p>
        </div>

        {/* Filter Bar & Live Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Skills ({skills.length})
            </button>
            <button
              onClick={() => setFilter('hardware')}
              type="button"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'hardware'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Wrench className="w-3 h-3" />
              <span>Hardware & RF</span>
            </button>
            <button
              onClick={() => setFilter('software')}
              type="button"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'software'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>Software & Tools</span>
            </button>
            <button
              onClick={() => setFilter('networking')}
              type="button"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'networking'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Network className="w-3 h-3" />
              <span>Networking & Security</span>
            </button>
          </div>

          {/* Live Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. HFSS, VHDL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all shadow-sm space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="text-xs text-sky-600 dark:text-sky-400 font-medium capitalize mt-0.5">
                    {skill.category === 'hardware'
                      ? 'Hardware & RF'
                      : skill.category === 'software'
                      ? 'Software & Simulation'
                      : 'Networking & Security'}
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 tabular-nums">
                  {skill.experienceYears}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.description}
              </p>

              {/* Proficiency Level Bar */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Proficiency</span>
                  <span className="tabular-nums font-bold text-slate-700 dark:text-slate-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="p-12 text-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
            No technical skills found matching &ldquo;{searchQuery}&rdquo;. Try another term.
          </div>
        )}
      </div>
    </section>
  );
};
