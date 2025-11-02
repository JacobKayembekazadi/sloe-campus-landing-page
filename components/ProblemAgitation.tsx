import React from 'react';

const ProblemAgitation: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-text-primary">Does This Sound Familiar?</h2>
                <p className="text-lg text-text-secondary mt-6">
                    You see the AI revolution happening. You know it's the future, but you're stuck in "tutorial hell." You watch videos, read articles, but you don't have a real product, a real skill, or a clear path to get a paying client.
                </p>
                <p className="text-xl font-bold text-text-primary mt-8">
                    That's the problem. Passively watching isn't a plan—it's how you fall behind.
                </p>
                <p className="text-lg text-text-secondary mt-6">
                    Every day you wait, the gap widens. You're not just missing out on an opportunity; you're risking becoming irrelevant in an economy that is rapidly rewarding builders and replacing watchers.
                </p>
            </div>
        </section>
    );
};

export default ProblemAgitation;
