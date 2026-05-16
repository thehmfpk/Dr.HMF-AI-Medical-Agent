import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send, HelpCircle, Terminal, Globe } from "lucide-react";

const ContactPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);
    const [errorText, setErrorText] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        setStatus(null);
        setErrorText(null);

        // --- EMAIL.JS CONFIGURATION ---
        // Replace these template string credentials with your actual EmailJS dashboard tokens
        const SERVICE_ID = "service_lvpvlvl";
        const TEMPLATE_ID = "template_qy1cv1c";
        const PUBLIC_KEY = "L2_9bD9HtNAhdHQx2";

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current!,
                PUBLIC_KEY
            );

            if (result.text === "OK") {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
                setErrorText("Unresolved transmission handshake.");
            }
        } catch (err: any) {
            setStatus("error");
            setErrorText(err?.text || err?.message || "Quantum connection failure.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="bg-[#020204] text-white selection:bg-cyan-500/30 font-sans min-h-[90vh] flex items-center overflow-hidden relative">
            {/* Structural Ambient Glow to pull layout together with the landing page */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Main Wrapper: Adjusted with pt-32 / pt-40 to comfortably clear your header across all screens */}
            <div className="max-w-[1500px] mx-auto w-full px-6 lg:px-24 pt-32 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: CYBERPUNK ARCHITECTURE DATA SPLIT */}
                    <motion.div
                        className="lg:col-span-5 space-y-8"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3">
                            <Terminal className="text-cyan-400 animate-pulse" size={16} />
                            <span className="text-[10px] font-mono tracking-[0.4em] text-cyan-400 uppercase font-black">Secure_Comms_v4.1</span>
                        </div>

                        <h1 className="text-5xl md:text-[76px] font-black tracking-tighter leading-[0.85] italic uppercase">
                            GET IN<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">TOUCH.</span>
                        </h1>

                        <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-md">
                            Have questions or need help with the autonomous system matrix? Drop a broadcast link down below. Our logic processing layers respond seamlessly.
                        </p>

                        <div className="space-y-6 pt-4 border-t border-white/5 max-w-sm">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-zinc-900/50 border border-white/5 rounded-xl group-hover:border-cyan-500/30 transition-colors">
                                    <Mail className="text-cyan-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Secure Mailbox</h3>
                                    <p className="text-zinc-300 font-medium hover:text-cyan-400 transition-colors cursor-pointer">thehmfpk@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-zinc-900/50 border border-white/5 rounded-xl group-hover:border-cyan-500/30 transition-colors">
                                    <Globe className="text-cyan-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Website</h3>
                                    <a href="https://www.hafizmfaizan.site" target="_blank" rel="noreferrer" className="text-zinc-300 font-medium hover:text-cyan-400 transition-colors">
                                        www.hafizmfaizan.site
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                {/* <div className="p-3 bg-zinc-900/50 border border-white/5 rounded-xl group-hover:border-cyan-500/30 transition-colors">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Direct Relay</h3>
                  <p className="text-zinc-300 font-medium">+1 (555) 123-4567</p>
                </div> */}
                            </div>

                            <div className="flex items-start gap-4 group">
                                {/* <div className="p-3 bg-zinc-900/50 border border-white/5 rounded-xl group-hover:border-cyan-500/30 transition-colors">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Physical Terminal</h3>
                  <p className="text-zinc-300 font-medium">123 Health St, Wellness City</p>
                </div> */}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: INTERACTIVE INPUT CORE FORM */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-zinc-900/10 border border-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] space-y-6 relative overflow-hidden"
                        >
                            {/* Decorative subtle border line effect matching dashboard components */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                            {status === "success" && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-400 font-medium text-sm flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                    
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-red-500/10 border border-red-500/30 p-4 text-red-400 font-medium text-sm">
                                    Handshake Dropped
                                </motion.div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-bold">Full Name</label>
                                    <input
                                        type="text"
                                        name="from_name" // Ensure this matches your EmailJS Template variable if needed
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full rounded-2xl bg-zinc-950 border border-white/5 focus:border-cyan-500/50 px-4 py-4 text-white placeholder:text-zinc-700 outline-none transition-all text-sm"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-bold">Email</label>
                                    <input
                                        type="email"
                                        name="reply_to" // Ensure this matches your EmailJS Template variable if needed
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full rounded-2xl bg-zinc-950 border border-white/5 focus:border-cyan-500/50 px-4 py-4 text-white placeholder:text-zinc-700 outline-none transition-all text-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-bold">Message</label>
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={5}
                                    className="w-full rounded-3xl bg-zinc-950 border border-white/5 focus:border-cyan-500/50 px-4 py-4 text-white placeholder:text-zinc-700 outline-none transition-all text-sm resize-none"
                                    placeholder="Describe your operational bottleneck or system query..."
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full sm:w-auto px-10 py-5 bg-cyan-500 disabled:bg-zinc-800 text-black font-black uppercase text-[11px] tracking-[0.2em] rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:text-zinc-500 disabled:shadow-none transition-all flex items-center justify-center gap-4 cursor-pointer"
                                >
                                    {submitting ? "UPLOADING..." : "SEND MESSAGE"}
                                    <Send size={14} className={submitting ? "animate-pulse" : ""} />
                                </button>

                                <div className="flex items-center gap-2 text-zinc-500 text-xs">
                                    <HelpCircle size={14} />
                                    <span>Expect telemetry response within 24-48 cycles.</span>
                                </div>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;