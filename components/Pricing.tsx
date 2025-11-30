import React from 'react';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 lg:py-32">
            <div className="max-w-3xl mx-auto text-center px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-text-primary">Your 7-Day Path to a Monetizable AI Skill</h2>
                
                <div id="price-display" className="mt-8">
                    <div className="flex justify-center items-baseline gap-x-2">
                        <span className="text-6xl font-extrabold text-primary">$49</span>
                        <span className="text-2xl text-text-secondary">/month</span>
                    </div>
                    <p className="text-lg text-text-secondary mt-4">Billed monthly. Full access to all courses, live sprints, and the private community.</p>
                </div>
                
                <a href="#" className="inline-block mt-8 bg-primary hover:bg-purple-700 text-white text-xl font-bold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                    Start Building Now - Just $49
                </a>
            </div>
        </section>
    );
};

export default Pricing;