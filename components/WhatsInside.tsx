import React from 'react';
import { CheckIcon } from './icons';
import CheckoutLink from './CheckoutLink';

const WhatsInside: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-secondary py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-text-primary">What You Get Inside the Studio</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
                    <div>
                        <img src="/images/sloe-campus-dashboard-2.png"
                             alt="Sloe AI Campus Dashboard"
                             className="rounded-2xl border border-white/10 shadow-card" />
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <ListItem><span className="font-bold text-accent">[Community]</span> Private 'AI Studio' Access (Your #1 Asset)</ListItem>
                            <ListItem><span className="font-bold text-accent">[Live Support]</span> Weekly "Studio" Office Hours & Build Sprints</ListItem>
                            <ListItem><span className="font-bold text-accent">[Playbooks]</span> Client Sales Scripts & n8n Workflows</ListItem>
                            <ListItem><span className="font-bold text-accent">[Course]</span> Full Access to `LLM Foundations`</ListItem>
                            <ListItem><span className="font-bold text-accent">[Course]</span> Full Access to `AI-Powered Websites`</ListItem>
                            <ListItem><span className="font-bold text-accent">[Course]</span> Full Access to `AI Operating Systems`</ListItem>
                            <ListItem><span className="font-bold text-accent">[Course]</span> Full Access to `Business Tool Sprints`</ListItem>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-[12px] bg-primary px-8 py-4 text-xl font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35">
                        Get Full Access for $49/month
                    </CheckoutLink>
                    <p className="text-sm text-text-secondary mt-3">Everything included · No hidden fees · Cancel anytime</p>
                </div>
            </div>
        </section>
    );
};

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start gap-3 text-lg">
        <CheckIcon className="mt-1" />
        <span className="text-text-primary">{children}</span>
    </li>
);

export default WhatsInside;