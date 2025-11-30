import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Video, Trophy, CheckCircle2 } from 'lucide-react';
import CheckoutLink from './CheckoutLink';

const SocialProof: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                                Expert-Led, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Community-Driven.</span>
                            </h2>
                            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                                You're not just buying a course. You're joining a studio of active builders. 
                                Get feedback, debug code, and celebrate wins with people who are actually shipping.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { 
                                        icon: Video, 
                                        title: "Weekly 'Studio' Office Hours", 
                                        desc: "Live calls where we review your builds, fix bugs, and plan your next sprint." 
                                    },
                                    { 
                                        icon: Users, 
                                        title: "Daily Build Feedback", 
                                        desc: "Post your progress in the community and get unstuck fast by agency experts." 
                                    },
                                    { 
                                        icon: Trophy, 
                                        title: "Agency Founder Mentors", 
                                        desc: "Learn directly from builders who are selling these exact tools to clients right now." 
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-surface-secondary border border-border-secondary shadow-sm">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary mb-1">{item.title}</h3>
                                            <p className="text-text-secondary leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-primary hover:bg-primary-hover transition-all hover:scale-105 group">
                                    Get Instant Access to the Community <CheckCircle2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </CheckoutLink>
                                <p className="text-sm text-text-secondary mt-3 ml-2">Join 500+ builders shipping real AI products</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side (Community Mockup) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative z-10 bg-surface-secondary border border-border-secondary rounded-3xl shadow-2xl overflow-hidden">
                            {/* Fake Window Header */}
                            <div className="bg-surface-tertiary border-b border-border-primary px-6 py-4 flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="ml-4 h-6 w-32 bg-surface-primary rounded-full opacity-50" />
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-6">
                                {/* Active Users Pill */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-accent">Live Now</span>
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[1,2,3,4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-surface-tertiary border-2 border-surface-secondary flex items-center justify-center text-[10px] text-text-secondary font-bold">
                                                AI
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Chat Bubbles */}
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
                                        <div className="bg-surface-tertiary p-3 rounded-2xl rounded-tl-none text-sm text-text-secondary max-w-[80%]">
                                            Just shipped my first AI internal tool! Client loves it. 🚀
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex-shrink-0" />
                                        <div className="bg-primary/10 border border-primary/20 p-3 rounded-2xl rounded-tr-none text-sm text-text-primary max-w-[80%]">
                                            Huge congrats! That lead tracking workflow is solid.
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex-shrink-0" />
                                        <div className="bg-surface-tertiary p-3 rounded-2xl rounded-tl-none text-sm text-text-secondary max-w-[80%]">
                                            Anyone around to debug this n8n webhook?
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-surface-secondary to-transparent" />
                        </div>

                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
