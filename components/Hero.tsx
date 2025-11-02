import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden border-b border-border-primary bg-gradient-to-b from-surface-primary to-surface-secondary">
            {/* Gradient glow effects */}
            <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]">
                <div className="absolute -left-24 top-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,132,255,0.22),_transparent_55%)]" />
                <div className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(94,240,195,0.18),_transparent_55%)]" />
            </div>
            
            <div className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-sm font-medium text-primary tracking-wider uppercase">Your 10-Day Path to an AI-Proof Career</span>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-text-primary mt-4">
                        Learn AI Skills, Deploy Functioning Products, & Land Your First Client in 10 Days.
                    </h1>
                    <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
                        The AI economy won't wait. You can either be replaced by it, or build the skills to profit from it. This is the workshop for builders, not watchers.
                    </p>

                    <div className="mt-10 aspect-video w-full max-w-3xl mx-auto rounded-2xl border border-white/10 bg-surface-secondary p-4 shadow-card overflow-hidden">
                        <iframe src="https://player.vimeo.com/video/902838692?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            style={{ width: '100%', height: '100%' }}
                            className="rounded-xl"
                            title="Sloe AI Campus VSL">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;