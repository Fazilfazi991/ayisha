import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: 'https://wa.me/971543491544' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <a href="#" className="block w-20 md:w-32">
                    <img src={logo} alt="Ayisha Muneer" className="w-full h-auto" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-gold-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/971543491544"
                        className="px-5 py-2.5 bg-deepBlue-900 text-white text-sm font-semibold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                    >
                        Book Free Consultation
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-deepBlue-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-slate-700 hover:text-gold-500"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/971543491544"
                                className="inline-block text-center px-5 py-3 bg-deepBlue-900 text-white font-semibold rounded-lg hover:bg-deepBlue-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Free Consultation
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
