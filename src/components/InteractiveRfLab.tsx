import React, { useState, useMemo } from 'react';
import { Radio, Sliders, Activity, Info, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const InteractiveRfLab: React.FC = () => {
  const { rfLabPresets } = PORTFOLIO_DATA;
  const [selectedPresetId, setSelectedPresetId] = useState<string>('wlan-245');
  const [frequency, setFrequency] = useState<number>(2.45);
  const [substrate, setSubstrate] = useState<'ro4350b' | 'fr4' | 'duroid'>('ro4350b');

  const substrateProps = {
    ro4350b: { name: 'Rogers RO4350B', er: 3.66, lossTangent: 0.0037, hMm: 0.762 },
    fr4: { name: 'Standard FR-4', er: 4.40, lossTangent: 0.0200, hMm: 1.600 },
    duroid: { name: 'RT/duroid 5880', er: 2.20, lossTangent: 0.0009, hMm: 0.787 },
  };

  const currentSubstrate = substrateProps[substrate];

  // When clicking a preset button, load its frequency and set the preset
  const handleSelectPreset = (presetId: string) => {
    const preset = rfLabPresets.find((p) => p.id === presetId);
    if (preset) {
      setSelectedPresetId(presetId);
      setFrequency(preset.frequencyGhz);
    }
  };

  // Physics calculations for microstrip patch antenna
  const physics = useMemo(() => {
    const c = 299792458; // m/s
    const fHz = frequency * 1e9;
    const er = currentSubstrate.er;
    const h = currentSubstrate.hMm * 1e-3;

    // Patch Width W = (c / (2 * f)) * sqrt(2 / (er + 1))
    const W_m = (c / (2 * fHz)) * Math.sqrt(2 / (er + 1));
    const W_mm = W_m * 1000;

    // Effective dielectric constant
    const eEff = (er + 1) / 2 + ((er - 1) / 2) * Math.pow(1 + (12 * h) / W_m, -0.5);

    // Delta L extension
    const deltaL_m =
      h *
      0.412 *
      (((eEff + 0.3) * (W_m / h + 0.264)) /
        ((eEff - 0.258) * (W_m / h + 0.8)));

    // Patch Length L = c / (2 * f * sqrt(eEff)) - 2 * deltaL
    const L_eff_m = c / (2 * fHz * Math.sqrt(eEff));
    const L_m = L_eff_m - 2 * deltaL_m;
    const L_mm = Math.max(1, L_m * 1000);

    // Free space wavelength
    const lambda0_mm = (c / fHz) * 1000;

    // Estimate resonance return loss dip based on proximity to preset target
    let resonantFreq = 2.45;
    if (selectedPresetId === 'wpan-520') resonantFreq = 5.20;
    if (selectedPresetId === 'telem-915') resonantFreq = 0.915;

    const diff = Math.abs(frequency - resonantFreq);
    // Return loss model: resonance minimum ~ -31dB, rises up to -3dB off-resonance
    const s11 = -3 - 28 / (1 + Math.pow(diff * 14, 2));
    const vswr = (1 + Math.pow(10, s11 / 20)) / (1 - Math.pow(10, s11 / 20));

    // Boresight gain estimate
    const gainDbi = Math.max(5.5, 10 * Math.log10(4 * Math.PI * (W_m * L_m) / Math.pow(c / fHz, 2)) + 3.5);

    // Estimated radiation efficiency
    const efficiency = er < 3 ? 94.2 : er < 4 ? 92.4 : 85.1;

    return {
      W_mm: W_mm.toFixed(1),
      L_mm: L_mm.toFixed(1),
      lambda0_mm: lambda0_mm.toFixed(1),
      eEff: eEff.toFixed(2),
      s11: s11.toFixed(1),
      vswr: vswr.toFixed(2),
      gainDbi: gainDbi.toFixed(1),
      efficiency: efficiency.toFixed(1),
      isMatched: s11 < -10,
    };
  }, [frequency, currentSubstrate, selectedPresetId]);

  // Generate SVG S11 sweep curve points across [freq - 0.5, freq + 0.5]
  const svgCurve = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    const width = 360;
    const height = 160;
    const centerF = frequency;
    const span = 1.0; // +/- 0.5 GHz
    const fMin = centerF - span / 2;
    const fMax = centerF + span / 2;

    for (let i = 0; i <= 60; i++) {
      const fVal = fMin + (i / 60) * (fMax - fMin);
      const diff = Math.abs(fVal - centerF);
      const s11Val = -3 - 28 / (1 + Math.pow(diff * 14, 2)); // from 0 to -35 dB
      // Map x to [20, 340], y to [10, 145] where y=10 is 0 dB, y=145 is -35 dB
      const x = 30 + (i / 60) * (width - 60);
      const y = 15 + (Math.abs(s11Val) / 35) * (height - 35);
      points.push({ x, y });
    }

    const pathData = points.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
    }, '');

    return { pathData, points, fMin, fMax };
  }, [frequency]);

  return (
    <section id="rflab" className="py-16 lg:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 space-y-2 max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
            Interactive Engineering Demonstrator
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Microwave Antenna Simulation & S-Parameter Lab
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Simulate microstrip antenna dimensions, transmission-line resonance, return loss ($S_{11}$), and radiation
            efficiency based on Atsbaha&apos;s computational electromagnetics & HFSS research at Mekelle University.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Presets Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-sky-500" />
                <span>Select Target Research Band</span>
              </label>
              <div className="space-y-2">
                {rfLabPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset.id)}
                    type="button"
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedPresetId === preset.id
                        ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/30 ring-1 ring-sky-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {preset.name}
                      </span>
                      <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                        {preset.frequencyGhz} GHz
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {preset.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency Slider */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-sky-500" />
                  Frequency Fine-Tuning:
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">
                  {frequency.toFixed(3)} GHz
                </span>
              </div>
              <input
                type="range"
                min="0.8"
                max="5.8"
                step="0.01"
                value={frequency}
                onChange={(e) => {
                  setFrequency(parseFloat(e.target.value));
                  setSelectedPresetId('');
                }}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>0.8 GHz (UHF)</span>
                <span>2.4 GHz</span>
                <span>5.8 GHz (SHF)</span>
              </div>
            </div>

            {/* Dielectric Substrate Selector */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Dielectric Substrate Material
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['ro4350b', 'fr4', 'duroid'] as const).map((subKey) => (
                  <button
                    key={subKey}
                    onClick={() => setSubstrate(subKey)}
                    type="button"
                    className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
                      substrate === subKey
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div>{substrateProps[subKey].name.split(' ')[0]}</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                      εr={substrateProps[subKey].er}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => handleSelectPreset('wlan-245')}
              type="button"
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default 2.45 GHz WLAN Parameters</span>
            </button>
          </div>

          {/* Visualization & Calculations (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Parameter Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Return Loss S₁₁</span>
                <div className="text-lg font-bold text-sky-600 dark:text-sky-400 font-mono tabular-nums mt-0.5">
                  {physics.s11} dB
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  {physics.isMatched ? 'Matched (< -10 dB)' : 'Mismatched'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">VSWR</span>
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono tabular-nums mt-0.5">
                  {physics.vswr} : 1
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Ideal &le; 1.5</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Patch Dimensions</span>
                <div className="text-base font-bold text-slate-900 dark:text-white font-mono tabular-nums mt-0.5">
                  {physics.L_mm} × {physics.W_mm}
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Length × Width (mm)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Estimated Gain</span>
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono tabular-nums mt-0.5">
                  +{physics.gainDbi} dBi
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Eff: {physics.efficiency}%</span>
              </div>
            </div>

            {/* S11 Parameter Curve Chart (SVG) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-sky-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Simulated Return Loss Spectrum (S₁₁ Magnitude)
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Resonance @ {frequency.toFixed(2)} GHz
                </span>
              </div>

              {/* Responsive SVG Chart */}
              <div className="relative w-full aspect-[21/9] bg-slate-950 rounded-xl overflow-hidden p-2">
                <svg viewBox="0 0 360 160" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="30" y1="15" x2="340" y2="15" stroke="#334155" strokeDasharray="3,3" strokeWidth="0.5" />
                  <line x1="30" y1="55" x2="340" y2="55" stroke="#334155" strokeDasharray="3,3" strokeWidth="0.5" />
                  <line x1="30" y1="95" x2="340" y2="95" stroke="#334155" strokeDasharray="3,3" strokeWidth="0.5" />
                  <line x1="30" y1="135" x2="340" y2="135" stroke="#334155" strokeDasharray="3,3" strokeWidth="0.5" />

                  {/* -10 dB passband threshold line */}
                  <line x1="30" y1="52" x2="340" y2="52" stroke="#ef4444" strokeDasharray="4,4" strokeWidth="1" />
                  <text x="35" y="48" fill="#ef4444" fontSize="8" fontFamily="monospace">
                    -10 dB Standard Impedance Threshold
                  </text>

                  {/* Y Axis Labels */}
                  <text x="8" y="18" fill="#94a3b8" fontSize="8" fontFamily="monospace">0dB</text>
                  <text x="5" y="58" fill="#94a3b8" fontSize="8" fontFamily="monospace">-10</text>
                  <text x="5" y="98" fill="#94a3b8" fontSize="8" fontFamily="monospace">-20</text>
                  <text x="5" y="138" fill="#94a3b8" fontSize="8" fontFamily="monospace">-30</text>

                  {/* S11 Curve */}
                  <path
                    d={svgCurve.pathData}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Marker at resonant dip */}
                  <circle cx="185" cy="135" r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="195" y="138" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    {physics.s11} dB
                  </text>

                  {/* X Axis Labels */}
                  <text x="30" y="155" fill="#94a3b8" fontSize="8" fontFamily="monospace">
                    {svgCurve.fMin.toFixed(2)} GHz
                  </text>
                  <text x="170" y="155" fill="#94a3b8" fontSize="8" fontFamily="monospace">
                    {frequency.toFixed(2)} GHz
                  </text>
                  <text x="310" y="155" fill="#94a3b8" fontSize="8" fontFamily="monospace">
                    {svgCurve.fMax.toFixed(2)} GHz
                  </text>
                </svg>
              </div>

              {/* Domain Note */}
              <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                <Info className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Academic Reference:</strong> Model calculations follow transmission-line cavity models
                  synthesized during Atsbaha&apos;s M.Sc. thesis in high-frequency computational electromagnetics on Rogers
                  RO4350B substrate.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
