import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { CheckIcon } from './icons';

const SocialProof: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-text-primary">Expert-Led, Community-Driven</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
                    <div className="flex justify-center">
                        <img src="/images/community-pic-1.png" 
                             alt="Team of AI Experts" 
                             className="rounded-lg w-64 h-64 object-cover ring-4 ring-primary shadow-primary" />
                    </div>
                    <div>
                        <p className="text-lg text-text-secondary mb-6">This campus is led by a team of active AI agency consultants. You get the benefit of a curriculum built from real-world client work, not just theory.</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span className="text-lg text-text-primary">Learn from a Team of Proven Experts & Active Builders</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span className="text-lg text-text-primary">Access a Growing Community of Active Builders</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span className="text-lg text-text-primary">Get Playbooks Featured in 'AI Automation Weekly'</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <TestimonialCarousel />
                
                <div className="mt-16 text-center">
                    <a href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-[12px] bg-primary px-8 py-4 text-lg font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35">
                        Join the Community Today
                    </a>
                    <p className="text-sm text-text-secondary mt-3">Learn from proven experts · Ship with active builders</p>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
