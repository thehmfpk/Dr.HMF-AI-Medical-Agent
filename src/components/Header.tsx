// import React, { useState } from 'react';
// import { Stethoscope, Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export type Page = 'home' | 'analysis' | 'result' | 'medication';

// interface HeaderProps {
//   currentPage: Page;
//   setCurrentPage: (p: Page) => void;
// }

// const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', id: 'home' as Page },
//     { name: 'Analysis', id: 'analysis' as Page },
//     { name: 'Prediction', id: 'result' as Page },
//     { name: 'Medication', id: 'medication' as Page },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <div 
//           className="flex items-center gap-3 cursor-pointer group"
//           onClick={() => setCurrentPage('home')}
//         >
//           <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform duration-500">
//             <Stethoscope className="text-black" size={22} strokeWidth={2.5} />
//           </div>
//           <div>
//             <h1 className="text-2xl font-display font-bold tracking-tighter bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent leading-none">
//               Dr.HMF
//             </h1>
//             <span className="text-[9px] text-cyan-400 tracking-[0.3em] font-mono uppercase font-black opacity-80">Medical Intelligence</span>
//           </div>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-10">
//           <div className="flex items-center gap-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setCurrentPage(item.id)}
//                 className={`text-[13px] font-mono uppercase tracking-widest transition-all hover:text-cyan-400 relative py-1 ${
//                   currentPage === item.id ? 'text-cyan-400' : 'text-gray-400'
//                 }`}
//               >
//                 {item.name}
//                 {currentPage === item.id && (
//                   <motion.div 
//                     layoutId="header-nav-indicator"
//                     className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" 
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//           <div className="h-6 w-px bg-white/10 mx-2" />
//           <button 
//             onClick={() => setCurrentPage('analysis')}
//             className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] active:scale-95"
//           >
//             Terminal Start
//           </button>
//         </nav>

//         {/* Mobile Toggle */}
//         <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden overflow-hidden bg-slate-950 border-b border-white/5"
//           >
//             <div className="p-6 flex flex-col gap-6">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => { setCurrentPage(item.id); setIsOpen(false); }}
//                   className={`text-lg font-display text-left ${currentPage === item.id ? 'text-cyan-400' : 'text-gray-400'}`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <button 
//                 onClick={() => { setCurrentPage('analysis'); setIsOpen(false); }}
//                 className="w-full py-4 bg-cyan-500 text-black font-black uppercase tracking-widest rounded-xl"
//               >
//                 Full Diagnostic
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Stethoscope, Menu, X, Activity, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type Page = 'home' | 'analysis' | 'result' | 'medication' | 'contact';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Overview', id: 'home' as Page },
    { name: 'Analysis', id: 'analysis' as Page },
    { name: 'Prediction', id: 'result' as Page },
    { name: 'Treatment', id: 'medication' as Page },
    { name: 'Contact', id: 'contact' as Page },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'py-3 bg-black/60 backdrop-blur-2xl border-b border-cyan-500/20'
          : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* --- Logo Section --- */}
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-full blur-lg group-hover:bg-cyan-500/40 transition duration-500" />
            <div className="relative w-12 h-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden group-hover:border-cyan-400/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
              <Stethoscope className="text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-500" size={24} />
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-0 w-full h-1 bg-cyan-500/30"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
              DR.<span className="text-cyan-400">HMF</span>
            </h1>
            <div className="flex items-center gap-1.5">
              <Activity size={10} className="text-cyan-500 animate-pulse" />
              <span className="text-[10px] text-gray-400 tracking-[0.2em] font-mono uppercase font-bold">Bio-Digital AI</span>
            </div>
          </div>
        </div>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`relative px-6 py-2 text-[11px] font-mono uppercase tracking-[0.15em] transition-all duration-300 rounded-full ${currentPage === item.id ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
            >
              <span className="relative z-10">{item.name}</span>
              {currentPage === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* --- Action Button --- */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('analysis')}
            className="group relative px-6 py-2.5 bg-transparent overflow-hidden rounded-lg transition-all"
          >
            <div className="absolute inset-0 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors rounded-lg" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />

            <span className="relative flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 group-hover:text-white transition-colors">
              Core Terminal <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20"
          >
            <div className="p-8 flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.id}
                  onClick={() => { setCurrentPage(item.id); setIsOpen(false); }}
                  className={`flex items-center justify-between p-4 rounded-xl border ${currentPage === item.id
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400'
                      : 'bg-white/5 border-white/5 text-gray-400'
                    }`}
                >
                  <span className="font-mono text-sm uppercase tracking-tighter">{item.name}</span>
                  {currentPage === item.id && <Activity size={16} />}
                </motion.button>
              ))}
              <button
                onClick={() => { setCurrentPage('analysis'); setIsOpen(false); }}
                className="mt-4 w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-[0_10px_20px_rgba(34,211,238,0.3)]"
              >
                Launch Diagnostic
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
