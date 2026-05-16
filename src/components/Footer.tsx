// import React from 'react';
// import { Stethoscope, Heart, Shield, Zap, Info } from 'lucide-react';
// import { Page } from './Header';

// interface FooterProps {
//   setCurrentPage: (p: Page) => void;
// }

// const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
//   return (
//     <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden">
//       {/* Decorative background element */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
//           {/* Brand Column */}
//           <div className="lg:col-span-5">
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center">
//                 <Stethoscope className="text-black" size={22} />
//               </div>
//               <h2 className="text-2xl font-display font-bold tracking-tighter">DR.HMF</h2>
//             </div>
//             <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
//               A pioneering medical AI agent designed to bridge the gap between complex health data and rapid, localized diagnostics.
//             </p>
//             <div className="flex items-center gap-4">
//               <div className="flex flex-col">
//                 <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">System Status</span>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-sm font-mono text-gray-300">Neural Engines Online</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Links Columns */}
//           <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
//             <div>
//               <h3 className="text-white font-bold mb-8 flex items-center gap-2">
//                  <Zap size={16} className="text-cyan-400" /> Platform
//               </h3>
//               <ul className="space-y-4">
//                 <li><button onClick={() => setCurrentPage('home')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Main Terminal</button></li>
//                 <li><button onClick={() => setCurrentPage('analysis')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Diagnostic Hub</button></li>
//                 <li><button onClick={() => setCurrentPage('result')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Risk Profiles</button></li>
//                 <li><button onClick={() => setCurrentPage('medication')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Pharma Advisory</button></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white font-bold mb-8 flex items-center gap-2">
//                  <Shield size={16} className="text-cyan-400" /> Compliance
//               </h3>
//               <ul className="space-y-4">
//                 <li className="text-gray-500 text-sm hover:text-white cursor-pointer">HIPAA Standards</li>
//                 <li className="text-gray-500 text-sm hover:text-white cursor-pointer">Data Encryption</li>
//                 <li className="text-gray-500 text-sm hover:text-white cursor-pointer">Ethical AI</li>
//                 <li className="text-gray-500 text-sm hover:text-white cursor-pointer">Audit Logs</li>
//               </ul>
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <h3 className="text-white font-bold mb-8 flex items-center gap-2">
//                  <Info size={16} className="text-cyan-400" /> Support
//               </h3>
//               <ul className="space-y-4">
//                 <li className="text-gray-500 text-sm hover:text-white cursor-pointer">Expert Consulting</li>
//                 <li className="text-gray-500 text-sm hover:text-white cursor-pointer">Integration Guide</li>
//                 <li className="text-gray-500 text-sm hover:text-white cursor-pointer">Community Hub</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Line */}
//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
//           <p className="text-xs text-gray-700 uppercase tracking-widest font-mono">
//             &copy; 2026 DR.HMF MEDICAL INTELLIGENCE. ALL RIGHTS RESERVED.
//           </p>
//           <div className="flex items-center gap-8">
//             <span className="text-[10px] text-gray-700 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-widest font-bold font-mono">Privacy Policy</span>
//             <span className="text-[10px] text-gray-700 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-widest font-bold font-mono">Terms of Service</span>
//             <span className="text-[10px] text-gray-700 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-widest font-bold font-mono">Cookie Protocol</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Stethoscope, Heart, Shield, Zap, Info, Activity, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Page } from './Header';

interface FooterProps {
  setCurrentPage: (p: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="relative bg-[#020617] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* --- Brand Column --- */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8 group cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-12 h-12 bg-slate-900 border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <Stethoscope className="text-cyan-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-white">
                  DR.<span className="text-cyan-400">HMF</span>
                </h2>
                <span className="text-[10px] text-cyan-500/60 tracking-[0.3em] font-mono uppercase font-bold">Medical Intelligence</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-md font-light">
              Pioneering the future of <span className="text-white font-medium">localized diagnostics</span>. Our AI agent processes complex health metrics with surgical precision in real-time.
            </p>

            {/* System Status Card */}
            <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Protocol Status</span>
                <span className="text-xs font-mono text-cyan-400">All Neural Nodes Operational</span>
              </div>
            </div>
          </div>

          {/* --- Links Columns --- */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Platform',
                icon: <Zap size={14} />,
                links: [
                  { name: 'Main Terminal', id: 'home' },
                  { name: 'Diagnostic Hub', id: 'analysis' },
                  { name: 'Risk Profiles', id: 'result' },
                  { name: 'Pharma Advisory', id: 'medication' },
                  { name: 'Get In Touch', id: 'contact' },
                ]
              },
              {
                title: 'Compliance',
                icon: <Shield size={14} />,
                links: [
                  { name: 'HIPAA Standards' },
                  { name: 'Data Encryption' },
                  { name: 'Ethical AI' },
                  { name: 'Audit Logs' },
                ]
              },
              {
                title: 'Support',
                icon: <Info size={14} />,
                links: [
                  { name: 'Expert Consulting' },
                  { name: 'Integration Guide' },
                  { name: 'Community Hub' },
                ]
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-white font-bold mb-8 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <span className="text-cyan-400">{section.icon}</span> {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <button
                        onClick={() => link.id && setCurrentPage(link.id as Page)}
                        className="group flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
                      >
                        <div className="w-0 group-hover:w-1.5 h-1.5 bg-cyan-400 rounded-full transition-all duration-300" />
                        {link.name}
                        {link.id && <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- Bottom Footer Bar --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono font-bold text-center md:text-left">
              &copy; 2026 DR.HMF MEDICAL INTELLIGENCE.
            </p>
            <div className="flex items-center gap-2 text-[9px] text-gray-800 font-mono">
              <Activity size={10} /> <span>ENCRYPTED_DATA_TRANSMISSION_ACTIVE</span>
            </div>
          </div>

          <div className="flex items-center gap-8 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Protocol'].map((text) => (
              <span key={text} className="text-[10px] text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-widest font-bold font-mono">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
