import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        quote: "This isn't just a course, it's a playbook. I landed my first $2k/mo client for an AI OS just 3 weeks after joining. Insane value.",
        name: "Alex S.",
        title: "Agency Owner",
        initials: "AS",
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        quote: "The n8n workflows alone are worth 10x the price. I automated my own business, then started selling the service to others.",
        name: "Maria J.",
        title: "Freelancer",
        initials: "MJ",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        quote: "I finally understand how to *sell* AI. The 'Client-Hunter' calls and sales scripts are pure gold. I'm not a 'tech guy' but I'm closing deals.",
        name: "David B.",
        title: "Career Pivoter",
        initials: "DB",
        gradient: "from-emerald-500 to-teal-400"
    }
];

const TestimonialCard = ({ data, delay }: { data: typeof testimonials[0], delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative bg-surface-secondary border border-border-primary p-8 rounded-3xl hover:border-primary/30 transition-colors shadow-card hover:shadow-primary-lg"
    >
        <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <Quote className="w-10 h-10 text-text-primary" />
        </div>

        <div className="flex items-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 fill-warning text-warning" />
            ))}
        </div>

        <p className="text-lg font-medium text-text-primary mb-8 relative z-10 leading-relaxed">
            "{data.quote}"
        </p>

        <div className="flex items-center gap-4 border-t border-border-primary pt-6">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {data.initials}
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <h4 className="font-bold text-text-primary">{data.name}</h4>
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm text-text-secondary">{data.title}</p>
            </div>
        </div>
    </motion.div>
);

const TestimonialCarousel: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
                    >
                        Real Wins from <span className="text-accent">Real Builders</span>
                    </motion.h2>
                    <p className="text-lg text-text-secondary">
                        Join hundreds of others who are shipping real projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} data={t} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
