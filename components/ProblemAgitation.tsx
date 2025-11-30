import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MonitorPlay, Clock, ArrowRight } from 'lucide-react';
import CheckoutLink from './CheckoutLink';
import { cn } from '../utils/cn';

const PainCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-surface-secondary border border-border-primary p-6 rounded-2xl hover:border-border-secondary transition-colors"
  >
    <div className="w-12 h-12 bg-surface-tertiary rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
      <Icon className="w-6 h-6 text-warning" />
    </div>
    <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const ProblemAgitation: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
                    >
                        Does This Sound <span className="text-warning">Familiar?</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-text-secondary"
                    >
                        You know AI is the future. You see the revolution happening. But you're stuck on the sidelines, trapped in "Tutorial Hell."
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <PainCard 
                        icon={MonitorPlay}
                        title="The Passive Consumer"
                        description="You watch endless coding videos and read threads, feeling like you're learning. But the moment you open a blank editor, you freeze."
                        delay={0.2}
                    />
                    <PainCard 
                        icon={AlertTriangle}
                        title="The 'Idea' Hoarder"
                        description="You have a folder full of 'AI App Ideas' and bookmark hundreds of tools, but you haven't shipped a single real project to users."
                        delay={0.3}
                    />
                    <PainCard 
                        icon={Clock}
                        title="The Opportunity Cost"
                        description="Every day you wait, the gap widens. Others are launching simple AI wrappers and getting users while you're still 'learning the basics'."
                        delay={0.4}
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-surface-secondary border border-border-primary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                        That's the problem.
                    </h3>
                    <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                        Watching tutorials isn't building—it's procrastination in disguise. You don't need more theory. You need to <span className="text-text-primary font-semibold">ship</span>.
                    </p>
                    
                    <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-primary hover:bg-primary-hover transition-all hover:scale-105">
                        Break Free – Join the Campus <ArrowRight className="w-5 h-5" />
                    </CheckoutLink>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemAgitation;
