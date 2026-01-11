import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

const Achievements = () => {
    return (
        <section className="bg-deepBlue-900 text-white py-20 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-start opacity-70 mb-16">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-0.5 w-12 bg-gold-500"></div>
                            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">The Success Stories</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            MY PROUDEST<br />ACHIEVEMENTS
                        </h2>
                        <a
                            href="https://www.linkedin.com/in/ayishamuneer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0077B5] border border-[#0077B5] hover:bg-[#006097] hover:border-[#006097] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            CONNECT WITH ME ON LINKEDIN
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <div className="flex items-center h-full">
                        <div className="border-l-2 border-white/10 pl-8 lg:pl-12 py-4">
                            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                                I don't just run ads; I partner with your vision. Treating every client's business as my own, I bring the dedication, strategy, and care needed to turn ambitious goals into measurable reality. Your growth is my personal benchmark for success.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wrapper for white background area if desired, or just stats on blue. 
                   The reference image has a white card for stats. Let's replicate that premium look 
                   but maybe keep it consistent with dark theme or use a white section.
                   User said "keep the color aligned with our website". 
                   The reference image uses RED bg and WHITE stats card.
                   I will use Deep Blue BG and White Stats card to match the reference structure but with my colors. 
                */}

                <div className="bg-white text-deepBlue-900 p-8 md:p-12 shadow-2xl rounded-2xl border border-slate-100 relative z-20 -mt-10 lg:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {/* Stat 1 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                8+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Years of Experience
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                In Digital Marketing
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                100k+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Ad Budget Managed
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                Across Platforms
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                50+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Satisfied Clients
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                Globally
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                1M+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Revenue Generated
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                For My Clients
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
