import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Hammer, CircleDollarSign } from 'lucide-react';
import { cn } from '../utils/cn';

const PhaseCard = ({ 
    number, 
    icon: Icon, 
    title, 
    subtitle, 
    description, 
    delay 
}: { 
    number: string, 
    icon: any, 
    title: string, 
    subtitle: string, 
    description: string, 
    delay: number 
}) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="relative flex-1"
    >
        {/* Mobile: Timeline Line */}
        <div className="md:hidden absolute left-8 top-16 bottom-[-40px] w-0.5 bg-gradient-to-b from-primary to-transparent last:hidden z-0" />
        
        <div className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 p-2">
            
            {/* Icon Container */}
            <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-surface-secondary border border-border-secondary flex items-center justify-center shadow-[0_0_20px_-5px_rgba(14,132,255,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                </div>
                {/* Desktop Connector Dot */}
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10 translate-x-4 last:hidden" />
            </div>

            {/* Content */}
            <div className="flex-1 pt-2 md:pt-8 text-left md:text-center">
                <div className="flex items-center md:justify-center gap-3 mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider">
                        Phase {number}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3">
                    {title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </motion.div>
);

const SupportingCopy: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-secondary py-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                        In One <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Focused Week</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        We've stripped away the fluff. This is a linear 7-day sprint designed to get you from "idea" to "paid".
                    </p>
                </motion.div>

                {/* Desktop Connector Line (Background) */}
                <div className="hidden md:block absolute top-[50%] left-0 w-full h-px bg-border-primary -z-10 transform -translate-y-12" />

                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                    <PhaseCard 
                        number="01"
                        icon={BrainCircuit}
                        title="Acquire the Skill"
                        subtitle="Days 1-2"
                        description="Don't learn 'everything'. Learn one monetizable workflow—like an AI OS or Client Website—deeply."
                        delay={0.1}
                    />
                    
                    {/* Connector for Desktop (Manual spacer to simulate connection flow if needed, but CSS handled in card) */}
                    
                    <PhaseCard 
                        number="02"
                        icon={Hammer}
                        title="Ship the Build"
                        subtitle="Days 3-5"
                        description="Stop watching. Start building. Deploy a real, functional project to a live URL you can share."
                        delay={0.2}
                    />
                    
                    <PhaseCard 
                        number="03"
                        icon={CircleDollarSign}
                        title="Monetize the Asset"
                        subtitle="Days 6-7"
                        description="Package your project into a simple offer. Use our scripts to pitch it to your first client."
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default SupportingCopy;

