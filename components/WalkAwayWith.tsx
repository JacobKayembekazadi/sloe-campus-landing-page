import React from 'react';
import { CheckIcon } from './icons';

const outcomes = [
    "A working product you can demo",
    "A priced offer & one‑pager",
    "Outreach scripts that get replies",
    "A community that keeps you shipping"
];

const WalkAwayWith: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">What You'll Walk Away With</h2>
                <p className="text-lg text-text-secondary mt-4">Tangible, monetizable outcomes — not just watched videos.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left max-w-2xl mx-auto">
                    {outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckIcon className="mt-1 flex-shrink-0 text-accent" />
                            <span className="text-lg text-text-primary">{outcome}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WalkAwayWith;
