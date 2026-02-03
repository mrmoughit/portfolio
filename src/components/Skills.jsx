import React from 'react';
import { motion } from 'framer-motion';
import {
    Layout,
    Server,
    Settings,
    Code2,
    Wrench,
    CheckCircle2
} from 'lucide-react';

import skills from '../data/skills.json';

const Skills = () => {
    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const categoryIcons = {
        'Frontend': <Layout className="text-violet-500" size={24} />,
        'Backend': <Server className="text-violet-500" size={24} />,
        'DevOps': <Settings className="text-cyan-500" size={24} />,
        'Languages': <Code2 className="text-violet-500" size={24} />,
        'Tools': <Wrench className="text-cyan-500" size={24} />
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="skills" className="py-24 bg-slate-950 text-white border-t border-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-violet-500">Expertise</span>
                    </h2>
                    <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A curated list of technologies I use to build scalable and high-performance applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {Object.entries(groupedSkills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            variants={itemVariants}
                            className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-violet-500 transition-all group hover:shadow-xl hover:shadow-violet-500/10"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-slate-950 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    {categoryIcons[category] || <Code2 size={24} />}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                                    {category}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {items.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg bg-slate-950/50 border border-slate-800/50 group/skill hover:border-violet-500/30 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 size={16} className="text-violet-500" />
                                            <span className="text-gray-300 group-hover/skill:text-white transition-colors font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
