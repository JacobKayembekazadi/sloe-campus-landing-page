import React from 'react';
import { motion } from 'framer-motion';
import { Users, Video, FileCode, Library, CheckCircle2, Sparkles } from 'lucide-react';
import CheckoutLink from './CheckoutLink';

const FeatureCard = ({ icon: Icon, title, subtitle, value, delay }: { icon: any, title: string, subtitle: string, value: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative bg-surface-secondary border border-border-primary p-6 rounded-2xl hover:border-primary/50 transition-colors group overflow-hidden"
    >
        <div className="absolute top-0 right-0 bg-surface-tertiary px-3 py-1 rounded-bl-xl border-b border-l border-border-primary text-xs font-mono text-text-secondary">
            VALUED AT <span className="text-text-primary font-bold">{value}</span>
        </div>

        <div className="w-12 h-12 bg-surface-tertiary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{subtitle}</p>
        
        <div className="flex items-center gap-2 text-accent text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Included</span>
        </div>
    </motion.div>
);

const WhatsInside: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                        What You Get Inside the <span className="text-accent">Studio</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Everything you need to go from "learning" to "earning". No hidden upsells.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <FeatureCard 
                        icon={Users}
                        title="The 'AI Studio'"
                        subtitle="Private community access. Your #1 asset for networking, feedback, and finding partners."
                        value="$997"
                        delay={0.1}
                    />
                    <FeatureCard 
                        icon={Video}
                        title="Weekly Office Hours"
                        subtitle="Live 'Build Sprints' and Q&A sessions with agency founders to get you unstuck."
                        value="$1,997/yr"
                        delay={0.2}
                    />
                    <FeatureCard 
                        icon={FileCode}
                        title="Agency Playbooks"
                        subtitle="Copy-paste our sales scripts, proposal templates, and n8n workflows."
                        value="$497"
                        delay={0.3}
                    />
                    <FeatureCard 
                        icon={Library}
                        title="Full Course Library"
                        subtitle="Access to LLM Foundations, AI Websites, AI OS, and all future sprints."
                        value="$997"
                        delay={0.4}
                    />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-surface-secondary border border-border-primary rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <p className="text-text-secondary text-sm font-bold uppercase tracking-widest mb-2">Total Value: $4,400+</p>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Yours Today for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">$49/mo</span>
                        </h3>
                        
                        <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-xl bg-primary px-10 py-5 text-xl font-bold text-white shadow-primary hover:bg-primary-hover hover:scale-105 transition-all">
                            Get Full Access Now <Sparkles className="w-5 h-5 fill-white/20" />
                        </CheckoutLink>
                        
                        <p className="text-sm text-text-secondary mt-4">
                            Cancel anytime · 14-day money-back guarantee
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatsInside;