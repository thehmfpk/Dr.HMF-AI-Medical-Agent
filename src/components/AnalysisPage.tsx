// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, X, Check, BrainCircuit, Activity, Info, ChevronRight, Filter } from 'lucide-react';
// import { symptomCategories } from '../data/medicalData';

// interface AnalysisPageProps {
//   onAnalyze: (selectedSymptoms: string[]) => void;
// }

// const AnalysisPage: React.FC<AnalysisPageProps> = ({ onAnalyze }) => {
//   const [selected, setSelected] = useState<string[]>([]);
//   const [search, setSearch] = useState('');
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);

//   const toggleSymptom = (s: string) => {
//     setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
//   };

//   const categories = Object.keys(symptomCategories);
  
//   const filteredSymptoms = useMemo(() => {
//     let result: { category: string, symptoms: string[] }[] = [];
    
//     Object.entries(symptomCategories).forEach(([category, symptoms]) => {
//       const matched = symptoms.filter(s => s.toLowerCase().includes(search.toLowerCase()));
//       if (matched.length > 0) {
//         if (!activeCategory || activeCategory === category) {
//           result.push({ category, symptoms: matched });
//         }
//       }
//     });

//     return result;
//   }, [search, activeCategory]);

//   return (
//     <div className="pt-32 pb-40 min-h-screen bg-[#050505]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header Section */}
//         <div className="mb-16">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3 mb-6"
//           >
//             <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center">
//               <BrainCircuit className="text-black" size={24} />
//             </div>
//             <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
//               Diagnostic <span className="text-cyan-500 italic">Interface</span>
//             </h2>
//           </motion.div>
//           <p className="text-gray-500 max-w-xl text-lg leading-relaxed">
//             Report your current physical indicators. Our neural engine will map these symptoms against thousands of clinical patterns.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//           {/* Main Content: Symptoms Grid */}
//           <div className="lg:col-span-8">
//             {/* Search and Filter */}
//             <div className="flex flex-col md:flex-row gap-4 mb-12">
//               <div className="relative flex-1">
//                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
//                 <input 
//                   type="text" 
//                   placeholder="Identify your indicators (e.g. Sharp pain, dizziness)..."
//                   className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-500/50 transition-all font-display"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//               <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
//                  <button 
//                    onClick={() => setActiveCategory(null)}
//                    className={`px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
//                      activeCategory === null ? 'bg-cyan-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'
//                    }`}
//                  >
//                    All Systems
//                  </button>
//                  {categories.map(cat => (
//                    <button
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
//                       activeCategory === cat ? 'bg-cyan-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'
//                     }`}
//                    >
//                      {cat}
//                    </button>
//                  ))}
//               </div>
//             </div>

//             {/* List */}
//             <div className="space-y-12 h-[700px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/5 hover:scrollbar-thumb-cyan-900/50">
//                {filteredSymptoms.map((group, idx) => (
//                  <div key={group.category} className="space-y-6">
//                     <div className="flex items-center justify-between border-b border-white/5 pb-4">
//                        <h4 className="text-sm font-mono font-bold uppercase tracking-[0.3em] text-gray-500">{group.category}</h4>
//                        <span className="text-[10px] text-gray-700 font-bold">{group.symptoms.length} Indicators</span>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
//                        {group.symptoms.map(sym => (
//                          <button
//                            key={sym}
//                            onClick={() => toggleSymptom(sym)}
//                            className={`group flex items-center justify-between p-5 rounded-2xl border text-sm transition-all duration-300 ${
//                              selected.includes(sym) 
//                                ? 'bg-cyan-500 border-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.2)]'
//                                : 'bg-white/[0.02] border-white/5 text-gray-400 hover:border-cyan-500/30 hover:bg-white/5'
//                            }`}
//                          >
//                            <span className="truncate pr-2">{sym}</span>
//                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
//                               selected.includes(sym) ? 'bg-black border-black text-cyan-400' : 'border-gray-800'
//                            }`}>
//                               {selected.includes(sym) && <Check size={12} strokeWidth={3} />}
//                            </div>
//                          </button>
//                        ))}
//                     </div>
//                  </div>
//                ))}

//                {filteredSymptoms.length === 0 && (
//                  <div className="flex flex-col items-center justify-center py-20 text-center">
//                     <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
//                        <Filter className="text-gray-600" size={32} />
//                     </div>
//                     <p className="text-gray-500 font-display text-xl px-4">No matching symptoms found. Refine your query or check another system.</p>
//                  </div>
//                )}
//             </div>
//           </div>

//           {/* Sidebar Area: Review & Analyze */}
//           <div className="lg:col-span-4 lg:sticky lg:top-32">
//             <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-black border border-white/5 backdrop-blur-xl">
//                <div className="flex items-center justify-between mb-10">
//                   <h3 className="text-2xl font-display font-bold tracking-tight">Active Report</h3>
//                   <div className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold uppercase rounded-full">
//                      {selected.length} Selected
//                   </div>
//                </div>

//                <div className="space-y-3 mb-12 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/5">
//                   <AnimatePresence>
//                     {selected.length === 0 ? (
//                       <motion.div 
//                         initial={{ opacity: 0 }} 
//                         animate={{ opacity: 1 }} 
//                         className="text-center py-8"
//                       >
//                          <p className="text-gray-600 text-sm leading-relaxed">
//                            Waiting for symptom input. Please select indicators from the left panel to begin analysis.
//                          </p>
//                       </motion.div>
//                     ) : (
//                       selected.map(sym => (
//                         <motion.div
//                           key={sym}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, scale: 0.95 }}
//                           className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 text-xs text-gray-300"
//                         >
//                           <span className="truncate mr-2 font-medium">{sym}</span>
//                           <button 
//                             onClick={() => toggleSymptom(sym)}
//                             className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-red-400 transition-colors"
//                           >
//                             <X size={14} />
//                           </button>
//                         </motion.div>
//                       ))
//                     )}
//                   </AnimatePresence>
//                </div>

//                <button
//                  disabled={selected.length === 0}
//                  onClick={() => onAnalyze(selected)}
//                  className="group w-full py-5 bg-white disabled:bg-zinc-800 disabled:text-zinc-600 text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all hover:bg-cyan-400 active:scale-95 flex items-center justify-center gap-3"
//                >
//                  Initiate Diagnostics
//                  <Activity size={18} className="group-hover:animate-pulse" />
//                </button>

//                <div className="mt-8 flex items-start gap-3 p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10">
//                   <Info className="text-cyan-400 shrink-0 mt-0.5" size={16} />
//                   <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
//                     Dr.HMF results are probabilistic. This tool is not a replacement for professional medical consultation. Ensure all serious symptoms are reported to emergency services.
//                   </p>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalysisPage;

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Check, BrainCircuit, Activity, Info, Filter, Sparkles, Terminal } from 'lucide-react';
import { symptomCategories } from '../data/medicalData';

interface AnalysisPageProps {
  onAnalyze: (selectedSymptoms: string[]) => void;
}

const AnalysisPage: React.FC<AnalysisPageProps> = ({ onAnalyze }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleSymptom = (s: string) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const categories = Object.keys(symptomCategories);
  
  const filteredSymptoms = useMemo(() => {
    let result: { category: string, symptoms: string[] }[] = [];
    
    Object.entries(symptomCategories).forEach(([category, symptoms]) => {
      const matched = symptoms.filter(s => s.toLowerCase().includes(search.toLowerCase()));
      if (matched.length > 0) {
        if (!activeCategory || activeCategory === category) {
          result.push({ category, symptoms: matched });
        }
      }
    });

    return result;
  }, [search, activeCategory]);

  // Framer Motion Layout Variants
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="pt-32 pb-40 min-h-screen bg-[#020204] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      {/* Structural Sci-Fi Aesthetics */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* --- SECTION 1: HEADER --- */}
        <div className="mb-16 border-b border-white/5 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.5em] text-cyan-400 uppercase font-black flex items-center gap-1.5">
                <Terminal size={10} /> Mode_Diagnostic: active
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
              Biometric <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Symptom Node.</span>
            </h2>
            <p className="text-zinc-500 max-w-xl text-sm md:text-base font-light leading-relaxed mt-4">
              Map and feed biometric anomalies directly into our telemetry grid. Isolate your target vectors below.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 font-mono text-[11px] text-zinc-600 border border-white/5 bg-zinc-900/20 px-6 py-4 rounded-2xl backdrop-blur-sm">
            <div>CORE: <span className="text-cyan-400 font-bold">ONLINE</span></div>
            <div>MESH SYNC: <span className="text-white">100%</span></div>
          </div>
        </div>

        {/* --- SECTION 2: MANAGEMENT INTERFACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Controls & Mapping Panel */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Filter and Input Controls */}
            <div className="space-y-6">
              {/* Immersive Tech Search Bar */}
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-cyan-400 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="INPUT CLINICAL PATHOLOGY SYMPTOM ENGINE..."
                  className="w-full bg-zinc-950/50 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/30 focus:bg-black/80 transition-all font-mono tracking-wide shadow-inner"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-700 pointer-events-none border border-zinc-800/60 px-2 py-1 rounded">SYS_SRCH_v4</div>
              </div>

              {/* High Tech Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-white/[0.03]">
                <button 
                  onClick={() => setActiveCategory(null)}
                  className={`px-5 py-3 rounded-xl text-[10px] font-mono tracking-widest uppercase font-black transition-all whitespace-nowrap border ${
                    activeCategory === null 
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]' 
                      : 'bg-zinc-900/30 text-zinc-500 border-white/5 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  [ ALL MODULES ]
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-3 rounded-xl text-[10px] font-mono tracking-widest uppercase font-black transition-all whitespace-nowrap border ${
                      activeCategory === cat 
                        ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]' 
                        : 'bg-zinc-900/30 text-zinc-500 border-white/5 hover:text-white hover:bg-zinc-900/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Core Biomarker Grid Panel */}
            <div className="space-y-12 max-h-[750px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-zinc-900 hover:scrollbar-thumb-cyan-950">
              <AnimatePresence mode="popLayout">
                {filteredSymptoms.map((group) => (
                  <motion.div 
                    key={group.category} 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {/* Category Title Element */}
                    <div className="flex items-center justify-between border-l-2 border-cyan-500/50 pl-4 py-1 bg-gradient-to-r from-cyan-500/5 to-transparent">
                      <h4 className="text-xs font-mono font-black uppercase tracking-[0.25em] text-cyan-400/80">{group.category}</h4>
                      <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold">{group.symptoms.length} Indicators Loaded</span>
                    </div>

                    {/* Node Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                      {group.symptoms.map(sym => {
                        const isSelected = selected.includes(sym);
                        return (
                          <motion.button
                            key={sym}
                            variants={itemVariants}
                            onClick={() => toggleSymptom(sym)}
                            whileHover={{ y: isSelected ? 0 : -2 }}
                            className={`group flex items-center justify-between p-4 rounded-xl border text-xs transition-all duration-200 relative overflow-hidden ${
                              isSelected 
                                ? 'bg-gradient-to-r from-cyan-950/40 to-zinc-950 border-cyan-500/50 text-white font-bold shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                                : 'bg-zinc-950/20 border-white/5 text-zinc-400 hover:border-cyan-500/20 hover:text-white hover:bg-zinc-900/20'
                            }`}
                          >
                            {/* Visual background tech overlay on active */}
                            {isSelected && <div className="absolute inset-0 bg-cyan-500/[0.02] pointer-events-none animate-pulse" />}
                            
                            <span className="truncate pr-3 font-mono tracking-tight">{sym}</span>
                            
                            <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                              isSelected 
                                ? 'bg-cyan-500 border-cyan-400 text-black' 
                                : 'border-zinc-800 group-hover:border-zinc-600'
                            }`}>
                              {isSelected && <Check size={10} strokeWidth={4} />}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* No Results Fallback */}
              {filteredSymptoms.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 border border-dashed border-white/5 rounded-[2rem] bg-zinc-950/10"
                >
                  <Filter className="text-zinc-700 mb-4 animate-pulse" size={28} />
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest text-center px-6">
                    Zero matrix matches. Refine critical keywords.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* --- SIDEBAR AREA: CYBER REPORT REVIEW --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-36">
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-b from-zinc-950 via-zinc-950 to-black border border-white/5 relative overflow-hidden group shadow-2xl">
              {/* Grid backdrop effect to match style guide section 2 */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 relative z-10">
                <h3 className="text-xl font-black italic uppercase tracking-tight flex items-center gap-2">
                  <Activity size={16} className="text-cyan-500 animate-pulse" /> Telemetry Log
                </h3>
                <div className="px-3 py-1 bg-zinc-900 border border-white/5 font-mono text-[9px] text-zinc-400 uppercase rounded-md">
                  {selected.length} Batch
                </div>
              </div>

              {/* Selected List Console */}
              <div className="space-y-2.5 mb-10 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-900 relative z-10">
                <AnimatePresence mode="popLayout">
                  {selected.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="text-center py-12 px-4"
                    >
                      <p className="text-zinc-600 font-mono text-[11px] uppercase tracking-wider leading-relaxed">
                        [ WAITING FOR TELEMETRY INPUT OVERLAY... ]
                      </p>
                    </motion.div>
                  ) : (
                    selected.map(sym => (
                      <motion.div
                        key={sym}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between p-3.5 bg-zinc-900/30 hover:bg-zinc-900/60 rounded-xl border border-white/[0.03] text-xs transition-colors"
                      >
                        <span className="truncate mr-3 font-mono text-zinc-300 font-medium">{sym}</span>
                        <button 
                          onClick={() => toggleSymptom(sym)}
                          className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all"
                        >
                          <X size={12} />
                        </button>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Action Trigger Button */}
              <button
                disabled={selected.length === 0}
                onClick={() => onAnalyze(selected)}
                className="group w-full py-5 bg-cyan-500 disabled:bg-zinc-900 text-black disabled:text-zinc-600 font-black uppercase tracking-[0.25em] text-xs rounded-xl transition-all hover:bg-white active:scale-[0.98] flex items-center justify-center gap-3 relative z-10 cursor-pointer shadow-[0_0_30px_rgba(6,182,212,0.2)] disabled:shadow-none"
              >
                COMPILE METRICS
                <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
              </button>

              {/* Legal Tech Disclaimer */}
              <div className="mt-8 flex items-start gap-3.5 p-4 bg-zinc-950 rounded-xl border border-white/5 relative z-10">
                <Info className="text-cyan-500/60 shrink-0 mt-0.5" size={14} />
                <p className="text-[9px] font-mono text-zinc-600 leading-relaxed uppercase">
                  Notice: System diagnostic nodes use pattern matching architectures. Algorithmic outputs are non-definitive metrics. Cross-reference with standard practitioner infrastructure.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
