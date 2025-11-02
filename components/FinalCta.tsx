import React from 'react';

const FinalCta: React.FC = () => {
    return (
        <section id="final-cta" className="bg-surface-tertiary py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-surface-secondary to-[#131A2A] p-8 md:p-12">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-semibold text-white md:text-3xl">
                                Build Skills That Pay
                            </h3>
                            <p className="mt-2 max-w-xl text-text-secondary">
                                <span className="font-bold text-primary">$49/month.</span> Full access to all courses, live sprints, and the private community. Cancel anytime.
                            </p>
                        </div>
                        <div className="flex items-center md:justify-end">
                            <a href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-[12px] bg-primary px-8 py-4 text-lg font-semibold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35">
                                Start Building
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;