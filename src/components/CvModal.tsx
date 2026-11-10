import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { profile, experiences, education, certifications, projects, skills, courses } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              {profile.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-sky-500" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-slate-800 dark:text-slate-200 space-y-8 bg-white dark:bg-slate-900 font-sans print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={profile.avatar}
                  alt={profile.fullName}
                  className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl object-cover object-center border border-slate-200 dark:border-slate-700 shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {profile.fullName}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    Department Head & Engineering Lecturer · Mekelle University
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {profile.department}
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-500" />
                  <a href={`mailto:${profile.email}`} className="hover:underline">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-500" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-sky-500" />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin.com/in/atsbaha-gebreslassie-4176a288
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Bio */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              {profile.bio}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional & Academic Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role} — <span className="text-sky-600 dark:text-sky-400 font-semibold">{exp.institution}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-400 pl-1">
                    {exp.highlights.slice(0, 3).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                    {edu.institution} {edu.campus && `(${edu.campus})`}
                    {edu.gpa && ` · Cumulative GPA: ${edu.gpa}`}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </div>
                  <div className="text-[11px] text-sky-600 dark:text-sky-400">
                    {cert.issuer} ({cert.date})
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {cert.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Selected Research & Design Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {proj.title}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {proj.year} · {proj.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {proj.summary}
                  </p>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    <strong>Tools:</strong> {proj.tools.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Technical Proficiencies
            </h2>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <div>
                <strong className="text-slate-900 dark:text-white">Hardware & Electromagnetics:</strong> ANSYS HFSS,
                Minkowski Fractal Patch Arrays, VHDL, 8085/8086 Assembly, Vector Network Analyzers, Spectrum Analyzers, CAD PCB.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Software & Simulation:</strong> C / C++, MATLAB & Simulink,
                Python, TensorFlow / PyTorch, Graphic Design.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Networking & Security:</strong> Cisco Packet Tracer,
                IPv6 Addressing & Routing, OSPF, Wireshark, Cisco Endpoint Security.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
