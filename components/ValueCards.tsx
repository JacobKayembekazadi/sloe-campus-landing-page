import React from 'react';
import { WebsiteIcon, AiOsIcon, BusinessToolsIcon } from './icons';
import CheckoutLink from './CheckoutLink';

const ValueCards: React.FC = () => {
    return (
        <section className="border-b border-border-primary bg-surface-primary py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-text-primary">The Monetizable Skills You'll Deploy</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    
                    <div className="group rounded-2xl border border-border-secondary bg-surface-secondary p-8 shadow-card transition hover:shadow-primary-lg">
                        <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-accent-blue">
                            <WebsiteIcon />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">AI-Powered Websites</h3>
                        <p className="text-lg font-medium text-accent mt-2">(Sell for $1.5k+)</p>
                        <p className="text-base text-text-secondary mt-4">Build high-converting, fully-designed websites in hours, not weeks, using AI-native tools like Cursor and Gemini.</p>
                    </div>

                    <div className="group rounded-2xl border border-border-secondary bg-surface-secondary p-8 shadow-card transition hover:shadow-primary-lg">
                        <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-accent-blue">
                            <AiOsIcon />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">AI Operating Systems</h3>
                        <p className="text-lg font-medium text-accent mt-2">(Sell for $2k/mo)</p>
                        <p className="text-base text-text-secondary mt-4">Deploy "AI OS" workflows for businesses using n8n and Make.com to automate lead intake, booking, and fulfillment.</p>
                    </div>

                    <div className="group rounded-2xl border border-border-secondary bg-surface-secondary p-8 shadow-card transition hover:shadow-primary-lg">
                        <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-accent-blue">
                            <BusinessToolsIcon />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">Custom Business Tools</h3>
                        <p className="text-lg font-medium text-accent mt-2">(Sell for $1.5k+)</p>
                        <p className="text-base text-text-secondary mt-4">Create custom AI-powered research and data analysis tools for clients using Gemini, Perplexity, and NotebookLM.</p>
                    </div>
                </div>
                
                <div className="mt-12 text-center">
                    <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-[12px] bg-primary px-8 py-4 text-lg font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35">
                        Start Learning These Skills Now
                    </CheckoutLink>
                    <p className="text-sm text-text-secondary mt-3">Full access for $49/month · Cancel anytime</p>
                </div>
            </div>
        </section>
    );
};

export default ValueCards;