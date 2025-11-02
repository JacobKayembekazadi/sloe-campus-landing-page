import React from 'react';

const AiOsPlaybook: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-secondary py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-text-primary">The "AI OS" Playbook</h3>
                        <p className="text-lg text-text-secondary mt-6">
                            Our flagship program isn't just a course—it's a complete playbook. We teach you how to build and sell a full "AI Operating System" like our AI Receptionist.
                        </p>
                        <p className="text-lg text-text-secondary mt-4">
                            You'll learn to connect APIs, manage logic in n8n, and create an end-to-end automated solution that you can sell to service businesses for $2,000/month or more. This is an exact playbook from our expert-led community.
                        </p>
                    </div>
                    <div>
                        <img src="https://placehold.co/600x450/0F1420/3A9EFF?text=AI+Receptionist+Workflow%0A(n8n+Builder)" 
                             alt="AI OS Workflow in n8n" 
                             className="rounded-2xl border border-white/10 shadow-card" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiOsPlaybook;