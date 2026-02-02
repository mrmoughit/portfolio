import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Check if env vars are set
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_KEY) {
            console.error("EmailJS environment variables are missing");
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData);

        const templateParams = {
            user_name: data.user_name,
            user_email: data.user_email,
            message: `Name: ${data.user_name}\nEmail: ${data.user_email}\n\nMessage:\n${data.message}`
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_KEY
        )
            .then((result) => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                form.current.reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            }, (error) => {
                setSubmitStatus('error');
                setIsSubmitting(false);
                console.error(error.text);
            });
    };

    return (
        <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-cyan-500">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-300 max-w-xl mx-auto">
                        I'm currently looking for internship opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-violet-500 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-500 group-hover:text-white group-hover:bg-violet-600 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Email Me</h4>
                                    <a href={`mailto:${import.meta.env.VITE_EMAIL || 'contact@example.com'}`} className="text-gray-400 hover:text-white transition-colors">
                                        {import.meta.env.VITE_EMAIL || 'contact@example.com'}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500 group-hover:text-white group-hover:bg-cyan-600 transition-colors">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">GitHub</h4>
                                    <a href={import.meta.env.VITE_GITHUB_URL || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        {(import.meta.env.VITE_GITHUB_URL || 'github.com/mrmoughit').replace('https://', '')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-pink-500 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-pink-500/10 rounded-lg text-pink-500 group-hover:text-white group-hover:bg-pink-600 transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">LinkedIn</h4>
                                    <a href={import.meta.env.VITE_LINKEDIN_URL || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        {(import.meta.env.VITE_LINKEDIN_URL || 'linkedin.com/in/moughit').replace('https://', '')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-slate-950 p-8 rounded-2xl border border-slate-800"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    required
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-violet-600/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending...
                                        <Loader2 className="animate-spin" size={18} />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                            {submitStatus === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-500 text-center font-medium"
                                >
                                    Message sent successfully!
                                </motion.p>
                            )}
                            {submitStatus === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-center font-medium"
                                >
                                    Failed to send message. Please check your config.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
