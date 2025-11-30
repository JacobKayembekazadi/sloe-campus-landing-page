import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Wrench, Globe, ArrowRight, Sparkles } from 'lucide-react';
import CheckoutLink from './CheckoutLink';
import { cn } from '../utils/cn';

const PathCard = ({ 
    title, 
    subtitle, 
    icon: Icon, 
    description, 
    outcome, 
    color, 
    delay 
}: { 
    title: string, 
    subtitle: string, 
    icon: any, 
    description: string, 
    outcome: string, 
    color: string, 
    delay: number 
}) => {
    const colorClasses: Record<string, string> = {
        blue: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-10px_rgba(14,132,255,0.3)]",
        purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]",
        green: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]",
    };

    const iconColors: Record<string, string> = {
        blue: "text-primary bg-primary/10",
        purple: "text-purple-400 bg-purple-500/10",
        green: "text-emerald-400 bg-emerald-500/10",
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "group relative flex flex-col rounded-3xl border border-border-primary bg-surface-secondary p-8 transition-all duration-300",
                colorClasses[color]
            )}
        >
            <div className="mb-6 flex items-start justify-between">
                <div className={cn("p-3 rounded-2xl", iconColors[color])}>
                    <Icon className="w-8 h-8" />
                </div>
                <span className={cn("text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/5", iconColors[color])}>
                    {subtitle}
                </span>
            </div>
            
            <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-white transition-colors">
                {title}
            </h3>
            
            <p className="text-text-secondary mb-8 leading-relaxed flex-grow">
                {description}
            </p>
            
            <div className="mt-auto pt-6 border-t border-border-primary/50">
                <div className="flex items-start gap-3">
                    <Sparkles className={cn("w-5 h-5 flex-shrink-0 mt-0.5", iconColors[color].split(' ')[0])} />
                    <div>
                        <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">Outcome</p>
                        <p className="text-sm font-medium text-text-primary/90">
                            {outcome}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ValueCards: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
                    >
                        You Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Path</span>
                    </motion.h2>
                    <p className="text-lg md:text-xl text-text-secondary">
                        Three distinct tracks designed for non-technical builders. Pick the one that fits your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <PathCard 
                        icon={ShoppingBag}
                        title="Shopify AI Store Builder"
                        subtitle="Beginner Friendly"
                        description="Use an AI assistant to plan products and write content, then turn that into a simple online store using Shopify's visual editor and Cursor for safe version control."
                        outcome="A basic but real Shopify store online, with products, pages, and a simple design you can show to potential customers."
                        color="blue"
                        delay={0.1}
                    />
                    <PathCard 
                        icon={Wrench}
                        title="Internal Tools Architect"
                        subtitle="High Demand"
                        description="Build dashboards for local businesses. Track leads, manage intakes, or log jobs with simple web technology connected to Google Sheets or Airtable."
                        outcome="A working internal tool that solves a real tracking or admin problem for a local business, powered by AI."
                        color="purple"
                        delay={0.2}
                    />
                    <PathCard 
                        icon={Globe}
                        title="AI Web Developer"
                        subtitle="Portfolio Ready"
                        description="Use Gemini to plan pages and write draft copy, use Pinterest for design ideas, then build and launch using Cursor, GitHub, and Vercel."
                        outcome="A live website on its own link that you can send to clients, with optional smart features like lead capture."
                        color="green"
                        delay={0.3}
                    />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-primary hover:bg-primary-hover hover:shadow-primary-lg transition-all hover:scale-105">
                        Start Learning These Skills Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </CheckoutLink>
                    <p className="text-sm text-text-secondary mt-4">Full access for $49/month · Cancel anytime</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ValueCards;