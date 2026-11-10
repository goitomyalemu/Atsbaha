export interface Project {
  id: string;
  title: string;
  category: 'rf' | 'comms' | 'networking';
  categoryLabel: string;
  year: string;
  role: string;
  affiliation: string;
  summary: string;
  image: string;
  tools: string[];
  specs: { label: string; value: string }[];
  details: {
    problem: string;
    methodology: string;
    keyFindings: string[];
    outcomes: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  department: string;
  period: string;
  current: boolean;
  location: string;
  summary: string;
  highlights: string[];
  competencies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  campus?: string;
  period: string;
  gpa?: string;
  honors?: string;
  focus: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  skills: string[];
}

export interface SkillItem {
  name: string;
  category: 'hardware' | 'software' | 'networking';
  level: number; // 1-100
  experienceYears: string;
  description: string;
  featured?: boolean;
}

export interface Course {
  code: string;
  title: string;
  level: string;
  description: string;
  labTools: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Atsbaha Gebreslassie Weldeanenia",
    shortName: "Atsbaha G. Weldeanenia",
    initials: "AGW",
    title: "Department Head & Engineering Lecturer",
    department: "Department of Electronics & Communication Engineering",
    institution: "Mekelle University",
    location: "Mekelle, Tigray, Ethiopia",
    email: "atsbaha.gebreslassie@mu.edu.et",
    phone: "(+251) 914436804",
    phoneRaw: "+251914436804",
    linkedin: "https://www.linkedin.com/in/atsbaha-gebreslassie-4176a288/",
    avatar: "/assets/aistudio/atsbaha_office_portrait.jpg",
    bio: "Accomplished academic leader, telecommunications researcher, and lecturer with over 9 years of teaching and leadership excellence at Mekelle University. Specializing in high-frequency electromagnetics, fractal antenna arrays, digital synchronization, and resilient telecommunication networks.",
    stats: [
      { label: "Years in Academic Leadership", value: "9+", detail: "At Mekelle University" },
      { label: "B.Sc. Academic Honors", value: "3.65", detail: "out of 4.00 (MIT)" },
      { label: "Specialized Credentials", value: "3+", detail: "Cisco & ASU Certified" },
      { label: "Engineers Mentored", value: "200+", detail: "Undergraduate capstones" },
    ]
  },

  experiences: [
    {
      id: "exp-1",
      role: "Department Head",
      institution: "Mekelle University",
      department: "Dept. of Electronics & Communication Engineering",
      period: "Apr 2023 – Present",
      current: true,
      location: "Mekelle, Ethiopia",
      summary: "Directing the overall academic, research, and administrative functions of the Department of Electronics & Communication Engineering. Providing strategic leadership to promote an innovative and globally competitive academic environment.",
      highlights: [
        "Spearheading comprehensive curriculum modernization aligning telecommunication engineering programs with emerging 5G, IoT, and high-frequency communication paradigms.",
        "Managing departmental faculty, laboratory technicians, and undergraduate/postgraduate research budgets and facilities.",
        "Establishing university-industry linkages and spearheading collaborative training programs in Cisco networking and embedded electronics.",
        "Overseeing accreditation compliance, student academic governance, and faculty career development."
      ],
      competencies: ["Academic Administration", "Curriculum Design", "Strategic Leadership", "Laboratory Modernization", "Resource Allocation"]
    },
    {
      id: "exp-2",
      role: "Engineering Lecturer",
      institution: "Mekelle University",
      department: "Dept. of Electronics & Communication Engineering",
      period: "Oct 2020 – Present",
      current: true,
      location: "Mekelle, Ethiopia",
      summary: "Conducting advanced undergraduate and postgraduate lecture series, driving departmental research initiatives, and mentoring engineering students in high-frequency microwave systems and digital signal transmission.",
      highlights: [
        "Delivering advanced coursework in Microwave Engineering, Wireless Communications, Digital Signal Processing, and Antenna Design.",
        "Guiding senior B.Sc. capstone engineering design teams in HFSS antenna modeling, PCB design, and microprocessor-controlled hardware.",
        "Supervising microwave and hardware communication laboratory sessions with vector network analyzers, oscilloscopes, and spectrum analyzers.",
        "Authoring customized instructional course packets and laboratory manuals for high-frequency communications."
      ],
      competencies: ["Antenna Engineering", "Microwave Systems", "Digital Signal Processing", "Student Mentorship", "Curriculum Delivery"]
    },
    {
      id: "exp-3",
      role: "Assistant Lecturer",
      institution: "Mekelle University",
      department: "Dept. of Electronics & Communication Engineering",
      period: "Jul 2015 – Oct 2020",
      current: false,
      location: "Mekelle, Ethiopia",
      summary: "Supported department research, delivered undergraduate laboratory instruction, and collaborated with senior faculty to enhance practical student outcomes across hardware and communication systems.",
      highlights: [
        "Instructed laboratory tutorials in Microprocessor Architecture (8085, 8086, 8051 assembly), Analog/Digital Electronics, and Signal Analysis.",
        "Administered practical laboratory experiments using MATLAB, VHDL, and electronic simulation test benches.",
        "Collaborated with senior professors in research data collection, simulation validation, and student assessment frameworks.",
        "Mentored student laboratory groups on microcontroller programming and circuit troubleshooting."
      ],
      competencies: ["8085/8086 Assembly", "VHDL Simulation", "MATLAB & Simulink", "Hardware Troubleshooting", "Lab Instruction"]
    }
  ] as Experience[],

  education: [
    {
      id: "edu-1",
      degree: "M.Sc. in Communication Engineering",
      institution: "Mekelle University",
      period: "2016 – 2019",
      focus: "Advanced wireless communications, high-frequency electromagnetic antenna design, network protocols, and signal processing architecture.",
      coursework: [
        "Advanced Wireless Communications",
        "Microwave & RF System Design",
        "Advanced Digital Signal Processing",
        "Antenna Theory & Computational Electromagnetics",
        "Telecommunication Network Optimization"
      ]
    },
    {
      id: "edu-2",
      degree: "B.Sc. in Electronics & Communication Engineering",
      institution: "Mekelle University",
      campus: "Mekelle Institute of Technology (MIT)",
      period: "2010 – 2015",
      gpa: "3.65 / 4.00",
      honors: "Graduated with High Distinction (3.65 GPA)",
      focus: "Comprehensive foundational and applied engineering in analog/digital electronics, embedded microprocessors, signal processing, and telecommunication networks.",
      coursework: [
        "Electromagnetic Fields & Waves",
        "Microprocessor Architecture (8085/8086)",
        "Digital & Analog Communication",
        "VLSI & VHDL Design",
        "Control Systems Engineering",
        "Computer Networking Protocols"
      ]
    }
  ] as Education[],

  certifications: [
    {
      id: "cert-1",
      title: "Endpoint Security",
      issuer: "Cisco Networking Academy",
      date: "Dec 2023",
      credentialId: "CISCO-SEC-2023-8841",
      description: "Comprehensive verification covering threat mitigation, malware analysis from packet captures, host-based firewalls, cryptography protocols, and security operating center (SOC) operations.",
      skills: ["Threat Mitigation", "Packet Capture Analysis", "Malware Analysis", "Endpoint Hardening"]
    },
    {
      id: "cert-2",
      title: "Network Addressing & Troubleshooting",
      issuer: "Cisco Networking Academy",
      date: "Dec 2023",
      credentialId: "CISCO-NET-2023-7190",
      description: "Advanced configuration of IPv6 addressing schemes, dual-stack transitions, subnetting calculations, Cisco IOS router/switch operations, and physical/data link layer fault isolation.",
      skills: ["IPv6 Addressing", "Subnetting Architecture", "Cisco IOS Routing", "Layer 2/3 Troubleshooting"]
    },
    {
      id: "cert-3",
      title: "Strategies for Successful Online Learning",
      issuer: "Arizona State University (ASU) / Mastercard Foundation",
      date: "Oct 2023",
      credentialId: "ASU-MCF-2023-1102",
      description: "Pedagogical methodologies for digital course delivery, asynchronous engagement, multimedia learning resources, and online outcome-based engineering education.",
      skills: ["Instructional Design", "Digital Pedagogy", "Outcome-Based Assessment", "E-Learning Strategy"]
    }
  ] as Certification[],

  projects: [
    {
      id: "proj-1",
      title: "Frequency Reconfigurable Antenna Array",
      category: "rf",
      categoryLabel: "Antenna & Microwave Systems",
      year: "2018 – 2019",
      role: "Lead Researcher (M.Sc. Research)",
      affiliation: "Mekelle University",
      summary: "Designed and simulated a novel heterogeneous microstrip array combining Minkowski Fractal geometry and Hexagonal Patch elements for dynamically adaptable WLAN and WPAN communications.",
      image: "/src/assets/images/antenna_reconfigurable_array_1794311064750.jpg",
      tools: ["ANSYS HFSS", "Vector Network Analyzer", "Rogers RO4350B", "MATLAB", "Smith Chart"],
      specs: [
        { label: "Resonant Frequencies", value: "2.45 GHz & 5.20 GHz" },
        { label: "Return Loss (S11)", value: "-31.0 dB @ 2.45 GHz" },
        { label: "Boresight Gain", value: "+14.2 dBi" },
        { label: "Substrate", value: "Rogers RO4350B (εr=3.66)" },
        { label: "Substrate Thickness", value: "0.762 mm" },
        { label: "Array Configuration", value: "4x4 Heterogeneous" }
      ],
      details: {
        problem: "Modern wireless environments require transceivers to dynamically hop across dual frequency bands (WLAN 2.45 GHz and WPAN/5 GHz) without increasing the physical antenna footprint or incurring high insertion losses.",
        methodology: "Integrated a 2nd-iteration Minkowski fractal indentation around hexagonal patch boundaries to prolong current surface distribution in a compact area. Designed a corporate microstrip feed network on a low-loss Rogers substrate with PIN diode switching models.",
        keyFindings: [
          "Fractal boundary perturbation achieved a 28% physical footprint reduction compared to conventional rectangular arrays.",
          "Demonstrated return loss S11 better than -30 dB at 2.45 GHz and -24 dB at 5.20 GHz with clean directional lobes.",
          "Cross-polarization levels were suppressed below -22 dB across the operating azimuthal plane."
        ],
        outcomes: "Provided a verified microwave model and prototype blueprint for multi-standard adaptive wireless base-stations."
      }
    },
    {
      id: "proj-2",
      title: "Patch Antenna for Telemetry Downlink",
      category: "rf",
      categoryLabel: "RF & Aerospace Telecommunications",
      year: "2015",
      role: "Lead Investigator (B.Sc. Thesis)",
      affiliation: "Mekelle Institute of Technology (MIT)",
      summary: "Engineered and characterized a precision microstrip patch antenna optimized for aerospace telemetry downlink with superior radiation efficiency, high gain, and robust impedance matching.",
      image: "/src/assets/images/telemetry_downlink_antenna_1794311067176.jpg",
      tools: ["ANSYS HFSS", "Rigol Network Analyzer", "Coaxial Probe", "MATLAB", "PCB Prototyping"],
      specs: [
        { label: "Center Frequency", value: "915.2 MHz (Telemetry)" },
        { label: "Return Loss (S11)", value: "-28.5 dB" },
        { label: "Input Impedance", value: "50.3 Ω (Matched)" },
        { label: "Half-Power Beamwidth", value: "> 80°" },
        { label: "Radiation Efficiency", value: "91.4%" },
        { label: "Connector Type", value: "SMA Female 50Ω" }
      ],
      details: {
        problem: "Telemetry transmission from moving or airborne bodies requires lightweight, planar antennas capable of maintaining strong signal integrity under multipath interference and high elevation angle variations.",
        methodology: "Calculated exact patch length and width using transmission-line equations. Optimized an inset feed cut-out to match the 50-ohm characteristic impedance directly. Fabricated and tuned the prototype using a Rigol Vector Network Analyzer.",
        keyFindings: [
          "Measured return loss S11 reached -28.5 dB at 915.2 MHz, matching HFSS finite-element predictions within 1.2%.",
          "Wide HPBW (>80°) provided reliable telemetry reception without requiring mechanical steering mechanisms.",
          "Standing Wave Ratio (VSWR) remained under 1.15 across the target channel bandwidth."
        ],
        outcomes: "Successfully defended B.Sc. thesis with High Distinction at Mekelle Institute of Technology (MIT)."
      }
    },
    {
      id: "proj-3",
      title: "Digital Modulation Synchronization",
      category: "comms",
      categoryLabel: "Digital Signal Processing",
      year: "2014",
      role: "Research Investigator",
      affiliation: "Mekelle Institute of Technology",
      summary: "Developed and verified advanced digital carrier synchronization and symbol timing estimation algorithms for coherent QPSK and 16-QAM digital transceivers.",
      image: "/src/assets/images/digital_modulation_lab_1794311067381.jpg",
      tools: ["MATLAB / Simulink", "Keysight UXA Signal Analyzer", "C / C++", "FPGA DSP Blocks", "DSP Algorithms"],
      specs: [
        { label: "Modulation Schemes", value: "BPSK, QPSK, 16-QAM" },
        { label: "Phase Recovery", value: "Costas Loop (Decision-Directed)" },
        { label: "Timing Recovery", value: "Gardner TED Algorithm" },
        { label: "Error Vector Mag.", value: "16.03% EVM" },
        { label: "Lock Acquisition Time", value: "< 240 symbols" },
        { label: "Operating SNR", value: "Operates down to 4 dB SNR" }
      ],
      details: {
        problem: "Oscillator frequency drift and channel-induced phase noise cause severe constellation rotation and inter-symbol interference in digital receivers, degrading bit error rate (BER).",
        methodology: "Constructed digital phase-locked loops (DPLL) utilizing decision-directed Costas loop topology combined with a Gardner timing error detector (TED). Simulated performance under additive white Gaussian noise (AWGN) and Rayleigh fading.",
        keyFindings: [
          "Demonstrated rapid lock acquisition under carrier frequency offsets up to ±12% of the symbol rate.",
          "Maintained stable QPSK constellation dispersion with Error Vector Magnitude (EVM) under 16.03%.",
          "Proved hardware-efficient fixed-point arithmetic feasibility for FPGA/DSP synthesis."
        ],
        outcomes: "Integrated into the undergraduate telecommunications laboratory curriculum as standard reference material."
      }
    }
  ] as Project[],

  skills: [
    // Hardware & RF
    { name: "HFSS (Antenna Design)", category: "hardware", level: 95, experienceYears: "8+ yrs", description: "3D electromagnetic field simulation, S-parameters, gain, fractal & patch antenna design.", featured: true },
    { name: "VHDL & FPGA Systems", category: "hardware", level: 85, experienceYears: "6+ yrs", description: "Hardware description language for digital communication blocks and state machines.", featured: true },
    { name: "Assembly (8085, 8086, 8051)", category: "hardware", level: 90, experienceYears: "9+ yrs", description: "Low-level microcomputer architecture, interrupt controllers, and peripheral interfacing.", featured: true },
    { name: "CAD & PCB Layout", category: "hardware", level: 88, experienceYears: "7+ yrs", description: "Schematic capture, high-frequency PCB track routing, impedance matching, and ground plane design." },
    { name: "Hardware Troubleshooting", category: "hardware", level: 92, experienceYears: "9+ yrs", description: "Vector network analyzers (VNA), spectrum analyzers, high-speed digital oscilloscopes.", featured: true },

    // Software & Simulation
    { name: "C / C++", category: "software", level: 90, experienceYears: "8+ yrs", description: "Systems programming, embedded microcontroller firmware, communication algorithms.", featured: true },
    { name: "MATLAB & Simulink", category: "software", level: 92, experienceYears: "9+ yrs", description: "Digital signal processing, filter design, wireless channel simulation, antenna array math.", featured: true },
    { name: "TensorFlow / PyTorch", category: "software", level: 75, experienceYears: "3+ yrs", description: "Applied machine learning for channel estimation and automated signal classification.", featured: true },
    { name: "Graphic Design & Drafting", category: "software", level: 80, experienceYears: "5+ yrs", description: "Scientific illustrations, block diagrams, academic presentation materials." },

    // Networking & Security
    { name: "Cisco Packet Tracer", category: "networking", level: 92, experienceYears: "6+ yrs", description: "Multi-router network design, VLAN trunking, NAT, and complex campus topology testing.", featured: true },
    { name: "IPv6 & Routing Protocols", category: "networking", level: 90, experienceYears: "6+ yrs", description: "IPv6 addressing architecture, OSPFv3, BGP fundamentals, dual-stack configurations.", featured: true },
    { name: "Endpoint Security", category: "networking", level: 88, experienceYears: "4+ yrs", description: "Host hardening, packet capture inspection (Wireshark), threat detection, firewall policy.", featured: true }
  ] as SkillItem[],

  courses: [
    {
      code: "ECE 412",
      title: "Microwave & Antenna Engineering",
      level: "4th Year Undergraduate",
      description: "Electromagnetic radiation theory, wave guides, microstrip transmission lines, S-parameters, antenna radiation patterns, and array synthesis.",
      labTools: ["ANSYS HFSS", "Vector Network Analyzers", "Horn Antennas"]
    },
    {
      code: "ECE 521",
      title: "Wireless Communication Systems",
      level: "5th Year Undergraduate / Finalist",
      description: "Cellular architectures, multipath fading channels, digital modulation schemes, diversity techniques, and 4G/5G physical layer fundamentals.",
      labTools: ["MATLAB Wireless Toolbox", "Software Defined Radios", "Spectrum Analyzers"]
    },
    {
      code: "ECE 331",
      title: "Digital Signal Processing",
      level: "3rd Year Undergraduate",
      description: "Discrete-time signals and systems, Z-transforms, DFT/FFT algorithms, FIR/IIR digital filter design, and spectral estimation.",
      labTools: ["MATLAB", "Simulink", "C Code Synthesis"]
    },
    {
      code: "ECE 312",
      title: "Microprocessor Architecture & Interfacing",
      level: "3rd Year Undergraduate",
      description: "Internal architecture of 8085 and 8086 microprocessors, assembly language programming, memory mapping, and 8255/8259 peripheral interfacing.",
      labTools: ["8085/8086 Trainer Kits", "Assembly Simulators", "Logic Analyzers"]
    }
  ] as Course[],

  rfLabPresets: [
    {
      id: "wlan-245",
      name: "2.45 GHz (WLAN/ISM Band)",
      frequencyGhz: 2.45,
      wavelengthMm: 122.4,
      returnLossDb: -31.0,
      vswr: 1.06,
      gainDbi: 14.2,
      efficiencyPercent: 93.5,
      patchLengthMm: 29.8,
      patchWidthMm: 37.2,
      description: "Optimized for IEEE 802.11b/g/n WLAN and industrial IoT networks with deep S11 resonance.",
      patternLobeShape: "directional",
      mainBeamAngleDeg: 0,
      beamwidthDeg: 42
    },
    {
      id: "wpan-520",
      name: "5.20 GHz (WPAN/High-Band)",
      frequencyGhz: 5.20,
      wavelengthMm: 57.7,
      returnLossDb: -24.8,
      vswr: 1.12,
      gainDbi: 16.5,
      efficiencyPercent: 91.2,
      patchLengthMm: 14.1,
      patchWidthMm: 18.0,
      description: "High-capacity 5 GHz channel utilizing Minkowski 2nd-iteration fractal boundaries for enhanced beam density.",
      patternLobeShape: "narrow-beam",
      mainBeamAngleDeg: 0,
      beamwidthDeg: 28
    },
    {
      id: "telem-915",
      name: "915 MHz (Telemetry Downlink)",
      frequencyGhz: 0.915,
      wavelengthMm: 327.9,
      returnLossDb: -28.5,
      vswr: 1.08,
      gainDbi: 7.8,
      efficiencyPercent: 91.4,
      patchLengthMm: 79.5,
      patchWidthMm: 98.2,
      description: "Low-attenuation sub-GHz telemetry frequency designed for aerospace tracking and high elevation tolerance.",
      patternLobeShape: "wide-broadside",
      mainBeamAngleDeg: 0,
      beamwidthDeg: 84
    }
  ]
};
