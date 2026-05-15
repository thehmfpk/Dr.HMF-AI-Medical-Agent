import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Microscope, Cpu, 
  HeartPulse, Scan, Globe, Brain, BriefcaseMedical
} from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
  onLearn: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart, onLearn }) => {
  // Global animation configurations for high-tech snappy feel
  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const scrollContainerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.08 } }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#020204] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden relative min-h-screen">
      
      {/* Structural Sci-Fi Aesthetics: Subtle Grid Backdrop and Coordinates */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/5 blur-[150px] rounded-full pointer-events-none" />

      {/* --- GLOBAL HOME CONSOLE: RESPONSIVE CONTENT CONTAINER --- */}
      <div className="max-w-[1600px] mx-auto w-full px-4 md:px-10 lg:px-16 relative z-10 flex flex-col gap-16 md:gap-20 pb-28">
        
        {/* --- SECTION 1: HERO (60/40 Split) --- */}
        {/* Optimizing top padding (pt-24 md:pt-32) to accommodate the global header and mode bar */}
        <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 border-b border-white/5 overflow-hidden">
          {/* Background glow matrix */}
          <div className="absolute bottom-1/4 left-12 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Side: Content */}
            <motion.div 
              className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-5 mb-6 justify-center lg:justify-start">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[10px] md:text-[11px] font-mono tracking-[0.5em] text-cyan-400 uppercase font-black">System_Active: Protocol_v4</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-[90px] lg:text-[90px] xl:text-[80px] font-black tracking-tighter leading-[0.85] italic uppercase mb-8">
                The companion<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">your health deserves.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-12">
                Autonomous clinical intelligence engineered for precision. We bridge the gap between <span className="text-white">raw biometric data</span> and definitive medical action.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button onClick={onStart} className="group px-10 py-5 bg-cyan-500 text-black font-black uppercase text-xs tracking-[0.3em] rounded-full hover:bg-white transition-all flex items-center gap-4 shadow-[0_0_40px_rgba(6,182,212,0.3)] cursor-pointer">
                  Initialize Sync <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                </button>
                <button onClick={onLearn} className="px-10 py-5 border border-white/10 text-white font-black uppercase text-xs tracking-[0.3em] rounded-full hover:bg-white/5 transition-all cursor-pointer">
                  Logic_Specs
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side: Centered Robot/AI Visual */}
            <div className="lg:col-span-5 w-full flex items-center justify-center order-1 lg:order-2">
              <motion.div 
                className="relative w-full max-w-[320px] md:max-w-[450px] lg:max-w-none aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-zinc-950 group"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <img 
                  src="https://images.stockcake.com/public/c/1/e/c1ef72e8-0b70-472f-bad6-56391bd20e69_large/robotics-healthcare-aid-stockcake.jpg" 
                  alt="AI Medical Agent"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-transparent to-transparent opacity-60" />
                
                {/* Decorative Corner Tech Borders */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE DATA GRID (WITH THEME GRADIENT FIX) --- */}
        <section className="relative w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/5 px-6 py-16 md:p-16 lg:p-20">
          {/* Theme Mixture Mesh Gradient Background */}
          <div className="absolute inset-0 bg-[#020204] z-0" />
          <div className="absolute inset-0 opacity-40 z-0 bg-[radial-gradient(circle_at_20%_30%,#06b6d4_0%,transparent_45%),radial-gradient(circle_at_75%_80%,#2563eb_0%,transparent_50%),radial-gradient(circle_at_50%_40%,#020204_0%,transparent_60%)] blur-2xl" />
          
          <motion.div 
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollContainerVariants}
          >
            
            {/* Card 1: Neural Logic */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, borderColor: 'rgba(6,182,212,0.4)', backgroundColor: 'rgba(7,9,15,0.7)' }}
              className="p-8 md:p-10 bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-3xl md:rounded-[2.5rem] flex flex-col gap-6 transition-all duration-300 group shadow-2xl"
            >
              <Cpu className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">Neural Logic</h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">Processing 1.2 Petabytes of clinical data per second to eliminate diagnostic variance.</p>
            </motion.div>

            {/* Card 2: Sovereign Security */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, borderColor: 'rgba(6,182,212,0.4)', backgroundColor: 'rgba(7,9,15,0.7)' }}
              className="p-8 md:p-10 bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-3xl md:rounded-[2.5rem] flex flex-col gap-6 transition-all duration-300 group shadow-2xl"
            >
              <ShieldCheck className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">Sovereign Security</h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">End-to-end quantum encryption ensuring biometric data remains strictly confidential.</p>
            </motion.div>

            {/* Card 3: Global Mesh */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, borderColor: 'rgba(6,182,212,0.4)', backgroundColor: 'rgba(7,9,15,0.7)' }}
              className="md:col-span-2 lg:col-span-1 p-8 md:p-10 bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-3xl md:rounded-[2.5rem] flex flex-col gap-6 transition-all duration-300 group shadow-2xl"
            >
              <Globe className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">Global Mesh</h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">Real-time sync with 14,000+ medical nodes worldwide for up-to-the-minute pathology.</p>
            </motion.div>

          </motion.div>
        </section>

        {/* --- SECTION 3: DEPARTMENTS (Bento Grid) --- */}
        <motion.section 
          className="py-24 md:py-32 border-t border-white/5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollContainerVariants}
        >
          <div className="w-full">
            <motion.div variants={fadeInUp} className="mb-20 text-center lg:text-left">
              <h2 className="text-[10px] md:text-[11px] font-mono text-cyan-500 font-bold tracking-[0.5em] uppercase mb-4">// Targeting_Sectors</h2>
              <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">Specialized Departments.</h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8">
              
              {/* Cardiology - Large Card */}
              <motion.div 
                variants={scaleUp}
                whileHover={{ borderColor: 'rgba(6,182,212,0.25)' }}
                className="md:col-span-12 lg:col-span-8 bg-zinc-950 bg-gradient-to-br from-zinc-950 to-[#07080c] border border-white/5 p-10 md:p-12 rounded-3xl md:rounded-[3rem] relative overflow-hidden group min-h-[350px] flex flex-col justify-between transition-all duration-300"
              >
                <HeartPulse className="absolute -right-10 -bottom-10 text-cyan-500/5 group-hover:text-cyan-500/10 group-hover:scale-105 transition-all duration-700" size={320} />
                <div className="relative z-10 flex flex-col justify-between h-full w-full">
                  <div>
                    <HeartPulse className="text-cyan-500 mb-6 group-hover:scale-105 transition-transform" size={48} />
                    <h4 className="text-4xl font-black italic uppercase mb-4 text-white">Cardiology</h4>
                    <p className="text-zinc-500 max-w-md group-hover:text-zinc-400 transition-colors">Precision hemodynamics and arrhythmia prediction using autonomous waveform analysis.</p>
                  </div>
                  <button className="mt-12 text-cyan-400 font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 group/btn cursor-pointer">
                    View Case Studies <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={14} />
                  </button>
                </div>
              </motion.div>

              {/* Neurology */}
              <motion.div 
                variants={scaleUp}
                whileHover={{ y: -6, backgroundColor: 'rgba(24,24,27,0.6)', borderColor: 'rgba(6,182,212,0.2)' }}
                className="p-8 md:p-10 md:col-span-6 lg:col-span-4 bg-zinc-950 border border-white/5 rounded-3xl md:rounded-[2.5rem] transition-all duration-300 group flex flex-col justify-between shadow-inner"
              >
                <div>
                  <Brain className="text-cyan-500 mb-6 group-hover:rotate-6 transition-transform" size={32} />
                  <h4 className="text-2xl font-black italic uppercase mb-2 text-white group-hover:text-cyan-100 transition-colors">Neurology</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">Deep-learning EEG interpretation for cognitive decline and neural sync.</p>
                </div>
              </motion.div>

              {/* Radiology */}
              <motion.div 
                variants={scaleUp}
                whileHover={{ y: -6, backgroundColor: 'rgba(24,24,27,0.6)', borderColor: 'rgba(6,182,212,0.2)' }}
                className="p-8 md:p-10 md:col-span-6 lg:col-span-4 bg-zinc-950 border border-white/5 rounded-3xl md:rounded-[2.5rem] transition-all duration-300 group flex flex-col justify-between shadow-inner"
              >
                <div>
                  <Scan className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="text-2xl font-black italic uppercase mb-2 text-white group-hover:text-cyan-100 transition-colors">Radiology</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">Automated scan synthesis with pixel-perfect lesion detection.</p>
                </div>
              </motion.div>

              {/* Pathology */}
              <motion.div 
                variants={scaleUp}
                whileHover={{ y: -6, backgroundColor: 'rgba(24,24,27,0.6)', borderColor: 'rgba(6,182,212,0.2)' }}
                className="p-8 md:p-10 md:col-span-6 lg:col-span-4 bg-zinc-950 border border-white/5 rounded-3xl md:rounded-[2.5rem] transition-all duration-300 group flex flex-col justify-between shadow-inner"
              >
                <div>
                  <Microscope className="text-cyan-500 mb-6 group-hover:-rotate-6 transition-transform" size={32} />
                  <h4 className="text-2xl font-black italic uppercase mb-2 text-white group-hover:text-cyan-100 transition-colors">Pathology</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">Cellular logic analysis for rapid pathogen identification.</p>
                </div>
              </motion.div>

              {/* Emergency */}
              <motion.div 
                variants={scaleUp}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 40px rgba(6,182,212,0.15)' }}
                className="p-8 md:p-10 md:col-span-6 lg:col-span-4 bg-cyan-600 border border-cyan-500 rounded-3xl md:rounded-[2.5rem] text-black group cursor-pointer transition-all duration-300 shadow-inner"
              >
                <div className="flex flex-col justify-between h-full">
                  <BriefcaseMedical className="mb-6 group-hover:animate-bounce" size={32} />
                  <div>
                    <h4 className="text-2xl font-black italic uppercase">Emergency</h4>
                    <p className="text-black/70 text-sm mt-2 font-medium leading-relaxed group-hover:text-black transition-colors">Zero-latency triage optimization for high-stress environments.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default HomePage;