import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-violet-500">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Hi there! I'm <span className="text-violet-400 font-semibold">Abdelmoughit Echcharbiny</span>,
                            a passionate Full Stack Developer and DevOps enthusiast currently honing my skills at
                            <span className="text-cyan-400 font-bold"> 1337 (42 Network)</span>.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I thrive on solving complex problems and building scalable, efficient web applications.
                            My journey involves a deep dive into modern web technologies, cloud infrastructure,
                            and system architecture. I'm always eager to learn new tools and methodologies to
                            streamline development and deployment processes.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                                <Code2 className="text-violet-500" size={20} />
                                <span>Full Stack Dev</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                                <Terminal className="text-cyan-500" size={20} />
                                <span>DevOps & Cloud</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                                <Cpu className="text-pink-500" size={20} />
                                <span>System Arch</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Globe className="text-green-500" />
                                Education & Experience
                            </h3>

                            <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-2">
                                <div className="relative">
                                    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-violet-600 border-4 border-slate-950"></span>
                                    <h4 className="text-xl font-bold text-white">Student Software Engineer</h4>
                                    <p className="text-violet-400">1337 School (42 Network)</p>
                                    <p className="text-gray-400 text-sm mt-1">Present</p>
                                    <p className="text-gray-400 mt-2">
                                        Immersive peer-to-peer coding education focusing on C, C++, Web Development, and Algorithms.
                                    </p>
                                </div>

                                <div className="relative">
                                    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-600 border-4 border-slate-950"></span>
                                    <h4 className="text-xl font-bold text-white">Web Development</h4>
                                    <p className="text-cyan-400">Self-Directed Learning</p>
                                    <p className="text-gray-400 text-sm mt-1">Ongoing</p>
                                    <p className="text-gray-400 mt-2">
                                        Mastering React, Node.js, Cloud platforms, and modern CI/CD pipelines.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
