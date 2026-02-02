import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';

import projects from '../data/projects.json';
import skills from '../data/skills.json';

const commands = {
    help: "Available commands: help, whoami, ls, cat [file], clear, exit",
    whoami: "Abdelmoughit Echcharbiny - Software Engineer & DevOps Enthusiast",
    ls: "skills.txt  projects.txt  contact.txt  resume.pdf",
    "cat skills.txt": skills.map(s => `${s.category}: ${s.name}`).join('\n'),
    "cat projects.txt": projects.map((p, i) => `${i + 1}. ${p.title} (${p.tech.join(', ')})`).join('\n'),
    "cat contact.txt": "Email: " + import.meta.env.VITE_EMAIL + "\nGitHub: " + import.meta.env.VITE_GITHUB_URL + "\nLinkedIn: " + import.meta.env.VITE_LINKEDIN_URL,
};

const CLI = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        "Welcome to Abdelmoughit's Terminal v1.0.0",
        "Type 'help' to see available commands."
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let response = '';

            if (cmd === 'clear') {
                setHistory([]);
            } else if (cmd === 'exit') {
                onClose();
                setHistory([]);
            } else if (commands[cmd]) {
                response = commands[cmd];
                setHistory([...history, `> ${input}`, response]);
            } else if (cmd.startsWith('cat ')) {
                // handle partial matches or specific logic if needed
                if (commands[cmd]) {
                    response = commands[cmd];
                    setHistory([...history, `> ${input}`, response]);
                } else {
                    setHistory([...history, `> ${input}`, `File not found: ${cmd.split(' ')[1]}`]);
                }
            } else {
                setHistory([...history, `> ${input}`, `Command not found: ${cmd}`]);
            }

            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-[90vw] md:w-[600px] h-[400px] bg-black/90 backdrop-blur-md rounded-lg border border-slate-700 shadow-2xl overflow-hidden z-[60] flex flex-col font-mono text-sm"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Terminal size={14} />
                            <span>guest@portfolio:~</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <Minimize2 size={14} />
                            </button>
                            <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
                                <X size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="flex-1 p-4 overflow-y-auto custom-scrollbar text-green-400 space-y-2" onClick={() => inputRef.current?.focus()}>
                        {history.map((line, i) => (
                            <div key={i} className="whitespace-pre-wrap">{line}</div>
                        ))}
                        <div className="flex items-center gap-2">
                            <span className="text-violet-500">➜</span>
                            <span className="text-cyan-500">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
                                autoFocus
                                spellCheck="false"
                            />
                        </div>
                        <div ref={bottomRef}></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CLI;
