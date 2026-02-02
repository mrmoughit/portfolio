import React from 'react';
import { motion } from 'framer-motion';

import skills from '../data/skills.json';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900 border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-cyan-500">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:bg-slate-900/50 group"
                        >
                            <div className="flex flex-col items-center text-center gap-3">
                                <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                                    {skill.name}
                                </h3>
                                <span className="text-xs font-medium text-gray-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                                    {skill.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
