import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-2 bg-slate-900 rounded-full border border-slate-800 text-violet-400 font-medium text-sm mb-2">
                        Aspiring Software Engineer
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                            Abdelmoughit
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-lg">
                        I build scalable web applications and cloud infrastructure.
                        Student at <span className="text-white font-semibold">1337 (42 Network)</span>,
                        passionate about code, continuous deployment, and solving complex problems.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg font-bold hover:shadow-lg hover:shadow-violet-600/25 transition-all transform hover:-translate-y-1">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-slate-900 border border-slate-700 rounded-lg font-bold hover:border-violet-500 hover:text-violet-400 transition-all transform hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 py-6 opacity-80">
                        <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors"><Github size={24} /></a>
                        <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors"><Linkedin size={24} /></a>
                        <a href={import.meta.env.VITE_RESUME_PATH} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors flex items-center gap-2 text-sm font-medium">
                            <Download size={18} /> Resume
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-80 h-80 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-2xl rotate-6 opacity-30 blur-lg animate-pulse"></div>
                        <div className="absolute inset-0 bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">

                            <div className="absolute top-4 left-4 right-4 text-xs font-mono text-cyan-500 opacity-50 bg-black/20 p-2 rounded">

                                <p>class Abdelmoughit : public SoftwareEngineer {'{'}</p>
                                <p className="pl-4">public:</p>
                                <p className="pl-8">Abdelmoughit() : SoftwareEngineer("Abdelmoughit Echchanriby") { }</p>
                                <p className="pl-8">void print() const {'{'}</p>
                                <p className="pl-12">std::cout &lt;&lt; name &lt;&lt; " is skilled and hardworking!" &lt;&lt; std::endl;</p>
                                <p className="pl-8">{'}'}</p>
                                <p>{'};'}</p>
                                <p></p>
                                <p>int main() {'{'}</p>
                                <p className="pl-4">Abdelmoughit dev;</p>
                                <p className="pl-4">dev.print();</p>
                                <p className="pl-4">return 0;</p>
                                <p>{'}'}</p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
