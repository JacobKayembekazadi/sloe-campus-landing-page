import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import CheckoutLink from './CheckoutLink';

const CtaReveal: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-secondary py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-tertiary border border-border-secondary mb-8">
                        <Sparkles className="w-4 h-4 text-warning" />
                        <span className="text-sm font-medium text-text-secondary">Limited Spots for Next Cohort</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">
                        Stop Watching. <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Start Building.</span>
                    </h2>

                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                        Get the exact playbooks, tools, and live support to ship a real AI project in just 7 days.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="group relative inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-xl font-bold text-white shadow-primary hover:bg-primary-hover transition-all hover:scale-105">
                            Join the Campus <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                        </CheckoutLink>
                        
                        <p className="text-sm text-text-secondary">
                            $49/month · Cancel anytime · <span className="text-text-primary">Risk-free guarantee</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaReveal;