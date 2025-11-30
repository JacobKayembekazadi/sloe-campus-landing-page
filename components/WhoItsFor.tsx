import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Code2 } from 'lucide-react';

const PersonaCard = ({ icon: Icon, title, description, points, delay }: { icon: any, title: string, description: string, points: string[], delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex-1 bg-surface-secondary border border-border-primary rounded-3xl p-8 hover:border-primary/50 transition-colors relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />
        
        <div className="w-14 h-14 bg-surface-tertiary rounded-2xl flex items-center justify-center mb-6 relative z-10">
            <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-2xl font-bold text-text-primary mb-3 relative z-10">{title}</h3>
        <p className="text-text-secondary mb-8 h-20 relative z-10">{description}</p>
        
        <div className="space-y-4 relative z-10">
            {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-text-primary/90">{point}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const WhoItsFor: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
                    >
                        Who Is The Campus For?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-text-secondary"
                    >
                        We've designed this experience for two specific types of builders who want results, not just certification.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <PersonaCard 
                        icon={User}
                        title="The Ambitious Non-Coder"
                        description="You have the vision and the hustle, but you feel limited by your technical skills. You want to build tools, not just use them."
                        points={[
                            "Stop waiting for a technical co-founder",
                            "Build real, functional AI tools yourself",
                            "Go from 'idea' to 'live URL' in 7 days",
                            "Understand the AI landscape deeply"
                        ]}
                        delay={0.2}
                    />
                    <PersonaCard 
                        icon={Code2}
                        title="The Light-Technical Builder"
                        description="You know how to code (maybe Python/JS), but the AI stack is moving too fast. You want a shortcut to the best modern stack."
                        points={[
                            "Skip the 40-hour research phase",
                            "Get a production-ready boilerplate",
                            "Master Cursor, V0, and Replit workflows",
                            "Focus on shipping, not configuring"
                        ]}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoItsFor;

