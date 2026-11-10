import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowDown, FileText, Check, Copy, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-8 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
                Department of Electronics & Communication Engineering
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance leading-tight">
                Atsbaha Gebreslassie Weldeanenia
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                Department Head & Engineering Lecturer · Mekelle University
              </p>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Academic leader and electronics engineer with 9+ years of dedicated service in higher education.
              Specializing in high-frequency microwave antenna design, reconfigurable fractal arrays, digital
              modulation synchronization, and resilient telecommunications infrastructure.
            </p>

            {/* Quiet Unboxed Metadata (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                Mekelle, Ethiopia
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>M.Sc. Communication Engineering</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>B.Sc. MIT Honors (3.65 GPA)</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Cisco Certified</span>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 bg-white dark:bg-slate-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                <span>{profile.email}</span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email address"
                  className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                </button>
              </a>

              <a
                href={`tel:${profile.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 bg-white dark:bg-slate-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-500" />
                <span>{profile.phone}</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 bg-white dark:bg-slate-900 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-500" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <span>Explore Research & Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCv}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>View Full Academic CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Academic Portrait & Lab Anchor */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative subtle framing */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                {/* Real Portrait Image */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-slate-900">
                  <img
                    src={profile.avatar}
                    alt="Atsbaha Gebreslassie Weldeanenia"
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback styled monogram in case of any filesystem load delay
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.portrait-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="portrait-fallback hidden w-full h-full flex flex-col items-center justify-center bg-slate-900 text-sky-400 p-8 text-center">
                    <span className="text-4xl font-extrabold tracking-wider">{profile.initials}</span>
                    <span className="text-xs text-slate-400 mt-2">{profile.fullName}</span>
                  </div>

                  {/* Gradient scrim for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-bold tracking-tight">Mekelle University</p>
                    <p className="text-xs text-sky-300">Department Head & Lecturer in Electronics</p>
                  </div>
                </div>

                {/* Sub-card credentials strip */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">Affiliation:</span> MIT & MU
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-slate-900 dark:text-slate-200">Specialization:</span> RF & Comms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {profile.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
