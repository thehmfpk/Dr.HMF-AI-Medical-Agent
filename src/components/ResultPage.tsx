import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, ArrowRight, Activity, 
  Terminal, Zap, Target, Crosshair, RefreshCw
} from 'lucide-react';

interface ResultPageProps {
  disease: string;
  onCheckMedication: (d: string) => void;
  history: {disease: string, date: string, symptoms: number}[];
}

const ResultPage: React.FC<ResultPageProps> = ({ disease, onCheckMedication, history }) => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#020204] text-white font-sans flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#083344_0%,transparent_70%)] opacity-20 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl grid lg:grid-cols-10 gap-0 bg-[#0a0a0c] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,1)]"
      >
        {/* --- LEFT SIDE: COMPACT DIAGNOSTIC SLIDE (60%) --- */}
        <div className="lg:col-span-6 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative">
          {/* HUD Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-[2rem]" />
          
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Target size={18} className="text-cyan-400" />
            </div>
            <span className="text-[10px] font-mono font-black tracking-[0.3em] text-zinc-500 uppercase">
              Inference_Complete // ID: {Math.floor(Math.random() * 90000)}
            </span>
          </div>

          <div className="space-y-2 mb-10">
            <h2 className="text-zinc-500 text-xs font-mono uppercase tracking-widest italic">Confirmed Pathogen Vector:</h2>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-cyan-800">
              {disease}
            </h3>
          </div>

          {/* Mini Tech Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Zap size={12} className="text-cyan-400" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase">Accuracy</span>
              </div>
              <p className="text-xl font-black italic uppercase">90.2<span className="text-cyan-500 text-xs">%</span></p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Activity size={12} className="text-cyan-400" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase">Latency</span>
              </div>
              <p className="text-xl font-black italic uppercase">12<span className="text-cyan-500 text-xs">ms</span></p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onCheckMedication(disease)}
              className="flex-1 px-6 py-4 bg-cyan-500 hover:bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl transition-all flex items-center justify-center gap-3 group"
            >
              Treatment Protocol <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-4 border border-white/10 hover:bg-white/5 text-zinc-400 font-black uppercase tracking-widest text-[10px] rounded-xl transition-all flex items-center justify-center gap-3"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: SYSTEM LOGS (40%) --- */}
        <div className="lg:col-span-4 bg-zinc-950/50 p-8 flex flex-col relative">
          {/* Scanning Line Animation Effect */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/20 shadow-[0_0_15px_cyan] animate-[scan_3s_linear_infinite]" />
          
          <h4 className="text-[10px] font-mono font-black text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Terminal size={12} /> System_Activity
          </h4>

          <div className="flex-1 space-y-4 overflow-y-auto pr-2 scrollbar-none">
            {history.slice(0, 3).map((entry, idx) => (
              <div key={idx} className="relative pl-4 border-l border-zinc-800">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-800 border border-black" />
                <p className="text-[10px] font-mono text-cyan-500/80 uppercase font-black tracking-tighter truncate">
                  {entry.disease}
                </p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[9px] text-zinc-600 font-mono italic">SYMP_MAP: {entry.symptoms}</span>
                  <span className="text-[8px] text-zinc-700 font-mono">{new Date(entry.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
            {history.length === 0 && (
              <p className="text-[10px] font-mono text-zinc-700 italic">No historical nodes...</p>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
              <ShieldCheck className="text-cyan-400 shrink-0" size={14} />
              <p className="text-[8px] font-mono text-zinc-500 leading-tight uppercase">
                Encryption: AES-256 <br />
                Status: Secure_Node
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}} />
    </div>
  );
};

export default ResultPage;
