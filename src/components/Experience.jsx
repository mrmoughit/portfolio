import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import experiences from '../data/experience.json';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-950 text-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work <span className="text-violet-500">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        My professional journey and the roles I've held in the tech industry.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-violet-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <Briefcase size={18} />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[45%] bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-violet-500/50 transition-all shadow-xl">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors uppercase italic">{exp.role}</h3>
                                    <div className="flex items-center gap-1 text-pink-500 text-sm font-medium bg-pink-500/10 px-3 py-1 rounded-full">
                                        <Calendar size={14} />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>
                                <div className="text-violet-400 font-semibold mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                                    {exp.company}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-800 rounded-md text-gray-300 border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
