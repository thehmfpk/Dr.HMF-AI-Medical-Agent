// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Printer,
//   MapPin,
//   ArrowLeft,
//   Pill,
//   Utensils,
//   Dumbbell,
//   ShieldAlert,
//   CheckCircle2,
//   Clock,
//   ExternalLink,
//   Activity,
//   Cpu,
//   Layers,
//   Sparkles
// } from 'lucide-react';
// import { DiseaseInfo } from '../data/medicalData';

// interface MedicationPageProps {
//   info: DiseaseInfo;
//   onBack: () => void;
//   history: { disease: string, date: string, symptoms: number }[];
// }

// const MedicationPage: React.FC<MedicationPageProps> = ({ info, onBack, history }) => {
//   const handlePrint = () => {
//   const formatText = (text: string, wordsPerLine = 8) => {
//     const words = text.split(" ");
//     let result = "";
    
//     for (let i = 0; i < words.length; i++) {
//       if (i % wordsPerLine === 0) result += "\n";
//       result += words[i] + " ";
//     }

//     return result;
//   };

//   const printContent = `
// ===============================
//         MEDICAL SLIP
// ===============================

// Agent: Dr.HMF AI SYSTEM

// -------------------------------
// DISEASE
// -------------------------------
// ${info.Disease}

// -------------------------------
// DESCRIPTION
// -------------------------------
// ${formatText(info.Description)}

// -------------------------------
// MEDICATIONS
// -------------------------------
// ${info.Medication.map(m => `- ${m}`).join("\n")}

// -------------------------------
// DIET PLAN
// -------------------------------
// ${info.Diet.map(d => `- ${d}`).join("\n")}

// -------------------------------
// WORKOUT PLAN
// -------------------------------
// ${info.Workouts.map(w => `- ${w}`).join("\n")}

// -------------------------------
// PRECAUTIONS
// -------------------------------
// - ${info.Precaution_1}
// - ${info.Precaution_2}
// - ${info.Precaution_3}
// - ${info.Precaution_4}

// ===============================
// DATE: ${new Date().toLocaleString()}

//         AI GENERATED REPORT
// ===============================
// `;

//   const newWindow = window.open("", "_blank");

//   if (newWindow) {
//     newWindow.document.write(`<pre style="font-family: monospace; font-size: 12px;">${printContent}</pre>`);
//     newWindow.document.close();
//     newWindow.print();
//   }
// };

//   const findPharmacy = () => {
//     window.open(`https://www.google.com/search?q=pharmacy+near+me+${info.Disease}+medication`, '_blank');
//   };

//   return (
//     <div className="pt-24 pb-28 min-h-screen bg-[#030407] text-[#e2e8f0] font-sans relative overflow-hidden selection:bg-cyan-500/30">
//       {/* Background Tech Aesthetic Coordinates */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[160px] rounded-full pointer-events-none" />

//       <div className="max-w-6xl mx-auto px-4 relative z-10">
        
//         {/* --- GLOBAL APP HEADER BAR --- */}
//         <div className="flex items-center justify-between border-b border-cyan-900/30 pb-4 mb-6 no-print text-[11px] font-mono tracking-widest text-zinc-500">
//           <div className="flex items-center gap-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
//             <span>DR.HMF AI SYSTEM // MED_PAGE</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <span>MESH_SYNC: <span className="text-cyan-400">100%</span></span>
//             <span>MODE: <span className="text-amber-500">PRIORITY_PROTOCOL</span></span>
//           </div>
//         </div>

//         {/* --- ACTIONS & NAVIGATION CONTROL --- */}
//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 no-print">
//           <button
//             onClick={onBack}
//             className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all group font-mono text-xs tracking-wider"
//           >
//             <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
//             <span>RETURN TO VECTOR</span>
//           </button>
          
//           <div className="flex items-center gap-3 w-full sm:w-auto">
//             <button
//               onClick={handlePrint}
//               className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 hover:text-cyan-400 text-xs font-mono rounded-lg transition-all"
//             >
//               <Printer size={14} /> Print Protocol
//             </button>
//             <button
//               onClick={findPharmacy}
//               className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-black font-mono font-bold text-xs rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.15)]"
//             >
//               <MapPin size={14} /> Global Pharmacy
//             </button>
//           </div>
//         </div>

//         {/* --- INTEGRATED CORE DIAGNOSTIC CONSOLE --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
//           {/* LEFT TELEMETRY SIDEBAR PANEL */}
//           <div className="lg:col-span-4 flex flex-col gap-6">
            
//             {/* META STATE MODULE */}
//             <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/[0.02] border-b border-l border-cyan-500/10 rounded-bl-xl flex items-center justify-center text-cyan-500">
//                 <Cpu size={14} />
//               </div>
              
//               <h3 className="text-[10px] font-mono font-black text-cyan-500 tracking-[0.3em] uppercase mb-4 flex items-center gap-1.5">
//                 <Activity size={10} /> Intelligence Summary
//               </h3>

//               <div className="space-y-2 text-xs font-mono">
//                 <div className="flex justify-between p-2 rounded bg-zinc-900/30 border border-zinc-900">
//                   <span className="text-zinc-500">System Trace</span>
//                   <span className="text-zinc-300 font-bold">AUTH-Z-24</span>
//                 </div>
//                 <div className="flex justify-between p-2 rounded bg-zinc-900/30 border border-zinc-900">
//                   <span className="text-zinc-500">Confidence Match</span>
//                   <span className="text-green-400 font-bold">98.2%</span>
//                 </div>
//                 <div className="flex justify-between p-2 rounded bg-zinc-900/30 border border-zinc-900">
//                   <span className="text-zinc-500">Session ID</span>
//                   <span className="text-zinc-400">#440932</span>
//                 </div>
//               </div>

//               <div className="mt-4 pt-4 border-t border-zinc-900">
//                 <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1.5">
//                   <span>NEURAL INTEGRITY MATCH</span>
//                   <span>100%</span>
//                 </div>
//                 <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ x: "-100%" }}
//                     animate={{ x: "100%" }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* PHARMACOLOGICAL VECTOR MODULE */}
//             <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl flex-1 flex flex-col">
//               <h3 className="text-[10px] font-mono font-black text-cyan-500 tracking-[0.3em] uppercase mb-4 flex items-center gap-1.5">
//                 <Pill size={12} /> Advanced Medication
//               </h3>
              
//               <div className="space-y-2.5 flex-1 overflow-y-auto pr-1">
//                 {info.Medication.map((med, i) => (
//                   <div key={i} className="p-3 bg-zinc-900/40 border border-zinc-900 rounded-lg flex items-start gap-3 group hover:border-zinc-800 transition-colors">
//                     <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-cyan-950 border border-cyan-900/50 text-cyan-400 rounded">
//                       #0{i + 1}
//                     </span>
//                     <p className="text-xs text-zinc-300 font-medium leading-tight pt-0.5">
//                       {med}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* MAIN DIAGNOSTIC WORKSPACE BLOCK */}
//           <div className="lg:col-span-8 flex flex-col gap-6">
            
//             {/* PRIMARY CONTEXT & DESCRIPTION HEADER */}
//             <div className="p-6 md:p-8 bg-gradient-to-br from-zinc-950 to-[#07080c] border border-zinc-900 rounded-xl relative overflow-hidden">
//               <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyan-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              
//               <div className="flex items-center gap-2 mb-2">
//                 <Layers size={12} className="text-cyan-500" />
//                 <span className="text-[9px] font-mono tracking-[0.4em] text-zinc-500 uppercase">Diagnostic Isolate Target</span>
//               </div>
              
//               <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight italic uppercase mb-4 text-white">
//                 {info.Disease}
//               </h2>
              
//               <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-3xl">
//                 {info.Description}
//               </p>
//             </div>

//             {/* MAPPED CLINICAL LIFESTYLE PROTOCOLS */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
//               {/* NUTRITION SCHEDULING CONTAINER */}
//               <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl relative">
//                 <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
//                   <h4 className="text-xs font-bold tracking-tight text-zinc-200 flex items-center gap-2">
//                     <Utensils size={14} className="text-green-500" /> Diet Plan Mapping
//                   </h4>
//                   <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
//                 </div>
//                 <ul className="space-y-2.5">
//                   {info.Diet.map((d, i) => (
//                     <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 group">
//                       <CheckCircle2 size={12} className="text-green-600/70 shrink-0 mt-0.5 group-hover:text-green-400 transition-colors" />
//                       <span className="leading-snug">{d}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* WORKOUT / REGIME PROTOCOLS CONTAINER */}
//               <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl relative">
//                 <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
//                   <h4 className="text-xs font-bold tracking-tight text-zinc-200 flex items-center gap-2">
//                     <Dumbbell size={14} className="text-blue-500" /> Workout Plan Regime
//                   </h4>
//                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
//                 </div>
//                 <ul className="space-y-2.5">
//                   {info.Workouts.map((w, i) => (
//                     <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 group">
//                       <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-2 group-hover:scale-150 transition-transform" />
//                       <span className="leading-snug">{w}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//             </div>

//             {/* CRITICAL SAFELINES / PRECAUTIONS MODULE */}
//             <div className="p-5 bg-gradient-to-br from-amber-500/[0.02] to-zinc-950 border border-amber-500/10 rounded-xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-3 text-[9px] font-mono border-b border-l border-amber-500/10 text-amber-500 bg-amber-500/[0.02] uppercase tracking-wider rounded-bl-lg">
//                 Status: Critical Oversight Required
//               </div>
              
//               <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider flex items-center gap-2 mb-4">
//                 <ShieldAlert size={14} /> Priority Safelines
//               </h4>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[info.Precaution_1, info.Precaution_2, info.Precaution_3, info.Precaution_4].map((p, i) => (
//                   <div key={i} className="p-3 bg-zinc-950 border border-zinc-900 hover:border-amber-500/20 rounded-lg flex items-center gap-3 transition-colors">
//                     <span className="font-mono text-xs font-black text-amber-500/20">#0{i + 1}</span>
//                     <span className="text-xs text-zinc-400 leading-tight font-medium">{p}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* NEURAL PIPELINE AUTOMATION FOOTNOTE */}
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-xl no-print">
//               <div className="flex items-center gap-3 text-left">
//                 <Clock size={16} className="text-zinc-600 shrink-0" />
//                 <div>
//                   <p className="text-xs font-bold text-zinc-300">Neural Subscription Console</p>
//                   <p className="text-[11px] text-zinc-500">Automate recurring medical profile telemetry pipelines.</p>
//                 </div>
//               </div>
//               <button className="w-full sm:w-auto px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-all">
//                 Connect Engine <ExternalLink size={12} />
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* --- SYSTEM LEGAL VALIDATION LEGALESE --- */}
//         <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col items-center text-center text-zinc-600 font-mono text-[10px] leading-relaxed tracking-wide">
//           <div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center mb-3">
//             <Sparkles size={10} className="text-zinc-700" />
//           </div>
//           <p className="max-w-3xl italic">
//             This tracking framework interprets localized patterns as automated inference markers. Always cross-verify prescription layouts and clinical timelines against professional board-certified human MD overview structures before committing to real-world deployment.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MedicationPage;

import React from 'react';
import { motion } from 'framer-motion';
import {
  Printer,
  MapPin,
  ArrowLeft,
  Pill,
  Utensils,
  Dumbbell,
  ShieldAlert,
  CheckCircle2,
  Clock,
  ExternalLink,
  Activity,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { DiseaseInfo } from '../data/medicalData';

interface MedicationPageProps {
  info: DiseaseInfo;
  onBack: () => void;
  history: { disease: string, date: string, symptoms: number }[];
}

const MedicationPage: React.FC<MedicationPageProps> = ({ info, onBack, history }) => {
  const handlePrint = () => {
    const formatText = (text: string, wordsPerLine = 8) => {
      const words = text.split(" ");
      let result = "";
      
      for (let i = 0; i < words.length; i++) {
        if (i % wordsPerLine === 0) result += "\n";
        result += words[i] + " ";
      }

      return result;
    };

    const printContent = `
===============================
        MEDICAL SLIP
===============================

Agent: Dr.HMF AI SYSTEM

-------------------------------
DISEASE
-------------------------------
${info.Disease}

-------------------------------
DESCRIPTION
-------------------------------
${formatText(info.Description)}

-------------------------------
MEDICATIONS
-------------------------------
${info.Medication.map(m => `- ${m}`).join("\n")}

-------------------------------
DIET PLAN
-------------------------------
${info.Diet.map(d => `- ${d}`).join("\n")}

-------------------------------
WORKOUT PLAN
-------------------------------
${info.Workouts.map(w => `- ${w}`).join("\n")}

-------------------------------
PRECAUTIONS
-------------------------------
- ${info.Precaution_1}
- ${info.Precaution_2}
- ${info.Precaution_3}
- ${info.Precaution_4}

===============================
DATE: ${new Date().toLocaleString()}

        AI GENERATED REPORT
===============================
`;

    const newWindow = window.open("", "_blank");

    if (newWindow) {
      newWindow.document.write(`<pre style="font-family: monospace; font-size: 12px;">${printContent}</pre>`);
      newWindow.document.close();
      newWindow.print();
    }
  };

  const findPharmacy = () => {
    window.open(`https://www.google.com/search?q=pharmacy+near+me+${info.Disease}+medication`, '_blank');
  };

  return (
    <div className="pt-20 md:pt-24 pb-20 md:pb-28 min-h-screen bg-[#030407] text-[#e2e8f0] font-sans relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background Tech Aesthetic Coordinates */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-900/10 blur-[120px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* --- GLOBAL APP HEADER BAR --- */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-900/30 pb-4 mb-6 no-print text-[10px] md:text-[11px] font-mono tracking-widest text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span>DR.HMF AI SYSTEM // MED_PAGE</span>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span>MESH_SYNC: <span className="text-cyan-400">100%</span></span>
            <span>MODE: <span className="text-amber-500">PRIORITY_PROTOCOL</span></span>
          </div>
        </div>

        {/* --- ACTIONS & NAVIGATION CONTROL --- */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 md:mb-8 no-print">
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all group font-mono text-xs tracking-wider"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO VECTOR</span>
          </button>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 hover:text-cyan-400 text-xs font-mono rounded-lg transition-all"
            >
              <Printer size={14} /> Print Protocol
            </button>
            <button
              onClick={findPharmacy}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-black font-mono font-bold text-xs rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.15)]"
            >
              <MapPin size={14} /> Global Pharmacy
            </button>
          </div>
        </div>

        {/* --- INTEGRATED CORE DIAGNOSTIC CONSOLE --- */}
        {/* Responsive Grid Layout Order altered using flex/grid properties for mobile-first hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* PRIMARY CONTENT BLOCK: Force to display first on mobile using Tailwind order rules */}
          <div className="order-1 lg:order-2 lg:col-span-8 flex flex-col gap-6">
            
            {/* PRIMARY CONTEXT & DESCRIPTION HEADER */}
            <div className="p-5 md:p-8 bg-gradient-to-br from-zinc-950 to-[#07080c] border border-zinc-900 rounded-xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyan-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-2">
                <Layers size={12} className="text-cyan-500" />
                <span className="text-[9px] font-mono tracking-[0.4em] text-zinc-500 uppercase">Diagnostic Isolate Target</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight italic uppercase mb-3 md:mb-4 text-white">
                {info.Disease}
              </h2>
              
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-3xl">
                {info.Description}
              </p>
            </div>

            {/* MAPPED CLINICAL LIFESTYLE PROTOCOLS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* NUTRITION SCHEDULING CONTAINER */}
              <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl relative">
                <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
                  <h4 className="text-xs font-bold tracking-tight text-zinc-200 flex items-center gap-2">
                    <Utensils size={14} className="text-green-500" /> Diet Plan Mapping
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <ul className="space-y-2.5">
                  {info.Diet.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 group">
                      <CheckCircle2 size={12} className="text-green-600/70 shrink-0 mt-0.5 group-hover:text-green-400 transition-colors" />
                      <span className="leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WORKOUT / REGIME PROTOCOLS CONTAINER */}
              <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl relative">
                <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
                  <h4 className="text-xs font-bold tracking-tight text-zinc-200 flex items-center gap-2">
                    <Dumbbell size={14} className="text-blue-500" /> Workout Plan Regime
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <ul className="space-y-2.5">
                  {info.Workouts.map((w, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                      <span className="leading-snug">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* CRITICAL SAFELINES / PRECAUTIONS MODULE */}
            <div className="p-5 bg-gradient-to-br from-amber-500/[0.02] to-zinc-950 border border-amber-500/10 rounded-xl relative overflow-hidden">
              <div className="hidden sm:block absolute top-0 right-0 p-3 text-[9px] font-mono border-b border-l border-amber-500/10 text-amber-500 bg-amber-500/[0.02] uppercase tracking-wider rounded-bl-lg">
                Status: Critical Oversight Required
              </div>
              
              <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider flex items-center gap-2 mb-4">
                <ShieldAlert size={14} /> Priority Safelines
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[info.Precaution_1, info.Precaution_2, info.Precaution_3, info.Precaution_4].map((p, i) => (
                  <div key={i} className="p-3 bg-zinc-950 border border-zinc-900 hover:border-amber-500/20 rounded-lg flex items-center gap-3 transition-colors">
                    <span className="font-mono text-xs font-black text-amber-500/20">#0{i + 1}</span>
                    <span className="text-xs text-zinc-400 leading-tight font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* SIDEBAR TELEMETRY PANEL: Displays second on mobile devices */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-6">
            
            {/* PHARMACOLOGICAL VECTOR MODULE */}
            <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl flex-1 flex flex-col min-h-[250px] lg:min-h-0">
              <h3 className="text-[10px] font-mono font-black text-cyan-500 tracking-[0.3em] uppercase mb-4 flex items-center gap-1.5">
                <Pill size={12} /> Advanced Medication
              </h3>
              
              <div className="space-y-2.5 flex-1 overflow-y-auto pr-1">
                {info.Medication.map((med, i) => (
                  <div key={i} className="p-3 bg-zinc-900/40 border border-zinc-900 rounded-lg flex items-start gap-3 group hover:border-zinc-800 transition-colors">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-cyan-950 border border-cyan-900/50 text-cyan-400 rounded">
                      #0{i + 1}
                    </span>
                    <p className="text-xs text-zinc-300 font-medium leading-tight pt-0.5">
                      {med}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* META STATE MODULE */}
            <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/[0.02] border-b border-l border-cyan-500/10 rounded-bl-xl flex items-center justify-center text-cyan-500">
                <Cpu size={14} />
              </div>
              
              <h3 className="text-[10px] font-mono font-black text-cyan-500 tracking-[0.3em] uppercase mb-4 flex items-center gap-1.5">
                <Activity size={10} /> Intelligence Summary
              </h3>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between p-2 rounded bg-zinc-900/30 border border-zinc-900">
                  <span className="text-zinc-500">System Trace</span>
                  <span className="text-zinc-300 font-bold">AUTH-Z-24</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-zinc-900/30 border border-zinc-900">
                  <span className="text-zinc-500">Confidence Match</span>
                  <span className="text-green-400 font-bold">98.2%</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-zinc-900/30 border border-zinc-900">
                  <span className="text-zinc-500">Session ID</span>
                  <span className="text-zinc-400">#440932</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-900">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1.5">
                  <span>NEURAL INTEGRITY MATCH</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                  />
                </div>
              </div>
            </div>

            {/* NEURAL PIPELINE AUTOMATION FOOTNOTE */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-xl no-print">
              <div className="flex items-center gap-3 text-left w-full sm:w-auto">
                <Clock size={16} className="text-zinc-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-zinc-300">Neural Subscription Console</p>
                  <p className="text-[11px] text-zinc-500">Automate medical profile telemetry pipelines.</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-all">
                Connect Engine <ExternalLink size={12} />
              </button>
            </div>

          </div>

        </div>

        {/* --- SYSTEM LEGAL VALIDATION LEGALESE --- */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col items-center text-center text-zinc-600 font-mono text-[10px] leading-relaxed tracking-wide">
          <div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center mb-3">
            <Sparkles size={10} className="text-zinc-700" />
          </div>
          <p className="max-w-3xl italic px-2">
            This tracking framework interprets localized patterns as automated inference markers. Always cross-verify prescription layouts and clinical timelines against professional board-certified human MD overview structures before committing to real-world deployment.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MedicationPage;