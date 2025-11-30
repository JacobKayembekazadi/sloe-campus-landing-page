import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Rocket, DollarSign, ArrowRight, ArrowDown } from 'lucide-react';

const Step = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative z-10 flex flex-col items-center text-center max-w-xs mx-auto"
    >
        <div className="w-16 h-16 rounded-2xl bg-surface-tertiary border border-border-secondary flex items-center justify-center mb-6 shadow-card group hover:border-primary/50 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const Arrow = () => (
    <>
        <div className="hidden md:block relative z-0 top-8 text-border-secondary">
            <ArrowRight className="w-8 h-8" />
        </div>
        <div className="md:hidden text-border-secondary my-4">
            <ArrowDown className="w-8 h-8" />
        </div>
    </>
);

const SupportingCopy: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-secondary py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        In One <span className="text-accent">Focused Week</span>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Go from "tutorial hell" to a deployed project you can sell.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 md:gap-4">
                    <Step 
                        icon={BrainCircuit}
                        title="Master the Skill"
                        description="Learn a specific, monetizable AI workflow—like building an AI OS or a client website."
                        delay={0.1}
                    />
                    <Arrow />
                    <Step 
                        icon={Rocket}
                        title="Build & Ship"
                        description="Don't just watch. Build a real project and deploy it to a live URL you can share."
                        delay={0.2}
                    />
                    <Arrow />
                    <Step 
                        icon={DollarSign}
                        title="Package & Offer"
                        description="Turn your new skill into a simple offer you can pitch to clients immediately."
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default SupportingCopy;

