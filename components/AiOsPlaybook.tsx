import React from 'react';
import { motion } from 'framer-motion';
import { Map, FileText, Waypoints, ArrowRight, Download } from 'lucide-react';

interface AiOsPlaybookProps {
    onOpenModal?: () => void;
}

const AiOsPlaybook: React.FC<AiOsPlaybookProps> = ({ onOpenModal }) => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Visual Side (The Map) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative z-10 bg-surface-secondary border border-border-secondary rounded-3xl p-8 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            {/* Mock Map UI */}
                            <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-accent text-surface-primary font-bold py-2 px-4 rounded-full shadow-lg z-20 transform rotate-12">
                                FREE GUIDE
                            </div>
                            
                            <div className="flex items-center gap-4 mb-8 border-b border-border-primary pb-6">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Map className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary">7-Day AI Skill Map</h3>
                                    <p className="text-sm text-text-secondary">From Zero to Shipped in One Week</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                {[
                                    { icon: Waypoints, text: "Day 1-2: The 'No-Code' Setup" },
                                    { icon: FileText, text: "Day 3-5: Building with AI Assistants" },
                                    { icon: Download, text: "Day 6-7: Packaging Your Offer" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-surface-tertiary p-4 rounded-xl border border-border-primary/50">
                                        <item.icon className="w-5 h-5 text-text-secondary" />
                                        <span className="font-medium text-text-primary">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-border-primary flex justify-between items-center opacity-70">
                                <div className="h-2 w-24 bg-border-primary rounded-full" />
                                <div className="h-2 w-12 bg-border-primary rounded-full" />
                            </div>
                        </div>
                        
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[80px] -z-10 rounded-full" />
                    </motion.div>

                    {/* Copy Side */}
                    <div className="order-1 lg:order-2">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
                        >
                            Not Ready to Join? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Start with the Map.</span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-text-secondary mb-8 leading-relaxed"
                        >
                            You don't need to commit today. Download our free <strong>7-Day AI Skill Map</strong> to see exactly what a week of focused building looks like.
                        </motion.p>
                        
                        <ul className="space-y-4 mb-10">
                            {[
                                "The exact tech stack we use (and why)",
                                "Day-by-day checklist for your first build",
                                "How to find your first AI client"
                            ].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-text-primary"
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            onClick={onOpenModal}
                            className="inline-flex items-center gap-2 rounded-xl bg-surface-secondary border border-border-secondary px-8 py-4 text-lg font-bold text-text-primary shadow-sm hover:bg-surface-tertiary hover:border-primary/50 transition-all group"
                        >
                            <Download className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                            Download the Free Map
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiOsPlaybook;
