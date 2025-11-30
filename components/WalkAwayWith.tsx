import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, FileText, MessageSquare, Users, ArrowRight } from 'lucide-react';

const DeliverableCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-surface-secondary border border-border-primary p-8 rounded-3xl hover:border-primary/50 transition-all hover:shadow-primary-lg group"
    >
        <div className="w-14 h-14 bg-surface-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-text-secondary leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const WalkAwayWith: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                        What You'll <span className="text-accent">Walk Away With</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        In 7 days, you won't just have "knowledge". You'll have assets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
                    <DeliverableCard 
                        icon={Rocket}
                        title="A Deployed AI Project"
                        description="A live, functional tool hosted on the web. No more 'local host' projects. Something you can actually send to a client."
                        delay={0.1}
                    />
                    <DeliverableCard 
                        icon={FileText}
                        title="The 'Irresistible' Offer"
                        description="A clear, one-page PDF that explains exactly what you sell, how much it costs, and why they need it now."
                        delay={0.2}
                    />
                    <DeliverableCard 
                        icon={MessageSquare}
                        title="Client Outreach Scripts"
                        description="The exact DM and email scripts we use to book meetings. Copy, paste, and start conversations."
                        delay={0.3}
                    />
                    <DeliverableCard 
                        icon={Users}
                        title="The 'Builder' Identity"
                        description="Stop calling yourself a 'student'. Join a community of active builders who ship, sell, and scale."
                        delay={0.4}
                    />
                </div>

                {/* Transformation Summary */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center bg-surface-secondary border border-border-secondary rounded-2xl p-8 max-w-4xl mx-auto">
                    <div>
                        <p className="text-text-secondary font-medium mb-1">Day 0</p>
                        <h4 className="text-xl font-bold text-text-primary opacity-60 line-through">Stuck in Tutorial Hell</h4>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
                    <ArrowRight className="w-8 h-8 text-primary md:hidden transform rotate-90" />
                    <div>
                        <p className="text-text-secondary font-medium mb-1">Day 7</p>
                        <h4 className="text-2xl font-bold text-accent">Paid AI Builder</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WalkAwayWith;
