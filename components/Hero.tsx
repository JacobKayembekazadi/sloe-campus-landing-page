import React from 'react';
import CheckoutLink from './CheckoutLink';

interface HeroProps {
  onLeadMagnetClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLeadMagnetClick }) => {
    return (
        <section className="relative overflow-hidden border-b border-border-primary bg-gradient-to-b from-surface-primary to-surface-secondary">
            {/* Gradient glow effects */}
            <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]">
                <div className="absolute -left-24 top-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,132,255,0.22),_transparent_55%)]" />
                <div className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(94,240,195,0.18),_transparent_55%)]" />
            </div>
            
            <div className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-sm font-medium text-primary tracking-wider uppercase">Your 7-Day Path to a Monetizable AI Skill</span>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-text-primary mt-4">
                        Learn a monetizable AI skill and ship a live project in 7 days.
                    </h1>
                    <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
                        For ambitious non‑coders and light‑technical builders who want to stop watching tutorials and ship a real AI project in 7 days.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] bg-primary px-8 py-4 text-lg font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35">
                            Join the Campus – $49/month
                        </CheckoutLink>
                        <a
                            href="/The-7-Day-AI-Build-Sprint.pdf"
                            download
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] border-2 border-primary bg-transparent px-8 py-4 text-lg font-bold text-primary transition-transform hover:translate-y-[-1px] hover:bg-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/35"
                        >
                            Get the 7‑Day AI Skill Map (Free)
                        </a>
                    </div>
                    <p className="text-sm text-text-secondary mt-4">
                        <span className="text-accent font-semibold">⚡ Limited spots</span> · 7-Day Ship Sprint
                    </p>

                    <div className="mt-12 w-full max-w-3xl mx-auto rounded-2xl border border-white/10 bg-surface-secondary p-4 shadow-card overflow-hidden">
                        <img 
                            src="/images/AI-systems-1.jpg" 
                            alt="AI Systems and Neural Networks" 
                            className="w-full h-auto rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;