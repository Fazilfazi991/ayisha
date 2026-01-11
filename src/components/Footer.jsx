import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <a href="#" className="block w-24 mb-6">
                            <img src={logo} alt="Ayisha Muneer" className="w-full h-auto" />
                        </a>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Freelance Digital Marketing Expert based in Dubai, UAE. Helping businesses turn strategy into revenue.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold text-deepBlue-900 mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
                            <li><a href="#case-studies" className="hover:text-gold-500 transition-colors">Case Studies</a></li>
                            <li><a href="#about" className="hover:text-gold-500 transition-colors">About Me</a></li>
                            <li><a href="https://wa.me/971543491544" className="hover:text-gold-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold text-deepBlue-900 mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li>Social Media Marketing</li>
                            <li>Paid Advertising</li>
                            <li>Content Marketing</li>
                            <li>Email Marketing</li>
                            <li>Web Design</li>
                            <li>Marketing Strategy</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold text-deepBlue-900 mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-gold-500 shrink-0 mt-1" />
                                <a href="mailto:marketing@ayishamuneer.com" className="hover:text-deepBlue-900 transition-colors">marketing@ayishamuneer.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-gold-500 shrink-0 mt-1" />
                                <span>+971 54 349 1544</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-gold-500 shrink-0 mt-1" />
                                <span>Dubai, United Arab Emirates</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © 2024 Ayisha Muneer. All Rights Reserved.
                    </p>
                    <p className="text-slate-300 text-xs text-center md:text-right max-w-xs">
                        Designed to convert. Built for growth.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
