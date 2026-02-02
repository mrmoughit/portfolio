import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-6">
                    <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition-colors">
                        <Github size={24} />
                    </a>
                    <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    {/* <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                        <Twitter size={24} />
                    </a> */}
                </div>
                <p className="text-gray-500 flex items-center justify-center gap-1">
                    Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Abdelmoughit Echcharbiny
                </p>
                <p className="text-gray-600 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
