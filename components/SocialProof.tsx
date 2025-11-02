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
                        <img src="https://placehold.co/256x256/0F1420/F1F5F9?text=Team+of+Experts" 
                             alt="Team of AI Experts" 
                             className="rounded-full w-64 h-64 ring-4 ring-primary shadow-primary" />
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
            </div>
        </section>
    );
};

export default SocialProof;