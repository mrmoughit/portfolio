import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, X, PlayCircle } from 'lucide-react';

import projects from '../data/projects.json';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-slate-950 text-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Recent <span className="text-pink-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A selection of projects that showcase my technical skills and problem-solving abilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-violet-500 transition-all group hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <span className="bg-violet-600/90 text-white px-4 py-2 rounded-full font-bold text-sm backdrop-blur-sm">
                                        View Details
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-slate-800 rounded text-gray-300 border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            layoutId={`project-${projects.indexOf(selectedProject)}`}
                            className="bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 shadow-2xl relative z-10 scrollbar-hide"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative h-64 md:h-80 w-full">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                <h3 className="absolute bottom-6 left-6 text-3xl md:text-5xl font-bold text-white">
                                    {selectedProject.title}
                                </h3>
                            </div>

                            <div className="p-6 md:p-10 space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold text-violet-400 flex items-center gap-2">
                                        Overview
                                    </h4>
                                    <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                                        {(selectedProject.longDescription || '').split('. ').map((sentence, index) => {
                                            if (sentence.includes(':')) {
                                                const [key, ...rest] = sentence.split(':');
                                                // Check if it's a likely header (short key)
                                                if (key.length < 50 && rest.length > 0) {
                                                    return (
                                                        <div key={index} className="block">
                                                            <span className="font-bold text-violet-400 block mb-1">{key}:</span>
                                                            {rest.join(':')}.
                                                        </div>
                                                    );
                                                }
                                            }
                                            return <span key={index}>{sentence}{index !== selectedProject.longDescription.split('. ').length - 1 ? '. ' : ''}</span>;
                                        })}
                                    </div>
                                </div>

                                {selectedProject.video && (
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-pink-400 flex items-center gap-2">
                                            <PlayCircle size={24} /> Video Demo
                                        </h4>
                                        <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-800">
                                            {selectedProject.video.includes("youtube.com") || selectedProject.video.includes("youtu.be") || selectedProject.video.includes("vimeo.com") ? (
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={selectedProject.video}
                                                    title="Project Video"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <video
                                                    controls
                                                    className="w-full h-full object-contain"
                                                >
                                                    <source src={selectedProject.video} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="px-4 py-2 bg-slate-800 rounded-lg text-gray-200 border border-slate-700 font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-slate-800">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors border border-slate-700"
                                    >
                                        <Github size={20} /> View Code
                                    </a>
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-violet-600 to-cyan-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-600/20 transition-all"
                                    >
                                        <ExternalLink size={20} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
