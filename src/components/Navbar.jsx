import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Terminal } from 'lucide-react';

const Navbar = ({ toggleCLI }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
                    <Code2 className="text-violet-500" />
                    <span>Abdelmoughit</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2 bg-violet-600 rounded-full text-white text-sm font-semibold hover:bg-violet-700 transition-colors">
                        Hire Me
                    </a>
                    <button
                        onClick={toggleCLI}
                        className="p-2 text-gray-400 hover:text-green-400 transition-colors border border-transparent hover:border-green-500/50 rounded-lg"
                        title="Open Terminal"
                    >
                        <Terminal size={20} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleCLI}
                        className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                        <Terminal size={20} />
                    </button>
                    <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-violet-500 font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
