import React, { useState, useEffect } from 'react';

const CtaReveal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Reveals the main CTA block after 3 seconds 
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000); // 3 seconds for demo

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="cta-reveal-block" className={`border-b border-border-primary bg-surface-secondary px-6 lg:px-12 py-16 lg:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div id="cta" className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-text-primary">
                    Stop Watching. Start Building.
                </h2>
                <p className="text-lg text-text-secondary mt-4">
                    Get the exact playbooks, tools, and live support from our 'AI Studio' community to go from builder to business in 10 days.
                </p>
                <a href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 mt-8 rounded-[12px] bg-primary px-8 py-4 text-xl font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35 animate-pulse-slow">
                    Join for $49/month
                </a>
                <p className="text-sm text-warning mt-4 font-medium">
                    The 10-day challenge is a live, cohort-based sprint. Spots are limited.
                </p>
            </div>
        </section>
    );
};

export default CtaReveal;