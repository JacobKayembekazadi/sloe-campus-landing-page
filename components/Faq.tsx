import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import CheckoutLink from './CheckoutLink';

const faqData = [
    {
        question: "What if I can't code?",
        answer: "No problem. This campus is built for builders, not just coders. Our 'AI Operating System' course relies on no-code/low-code tools like n8n and Make.com. The website course uses AI-assisted tools. We focus on logic and strategy, not complex code."
    },
    {
        question: "What if I get stuck?",
        answer: "You won't be stuck for long. You get 24/7 access to the private 'AI Studio' community, plus weekly live 'Studio Office Hours' with 'Prof' Jacob to get live debugging and strategic help. We are a workshop, and we build together."
    },
    {
        question: "Can I really get clients with this?",
        answer: "Yes. This is the *entire point* of the campus. We don't just teach you how to build; we teach you how to monetize. You get the exact sales scripts, pricing models, and proposal templates we use to land $2k-$5k clients."
    },
    {
        question: 'Why a 7-day sprint?',
        answer: "Because we value action over theory. This isn't a passive course you \"might\" finish. The 7-day sprint is designed to get you a tangible result: one monetizable AI skill and a live project you can deploy. It's about focused building, not endless learning."
    },
    {
        question: "What if I'm not technical?",
        answer: "Perfect. This is designed for non-coders and light-technical builders. You'll use beginner-friendly tools like Shopify's visual editor, simple code helpers like Cursor, and platforms like Vercel that handle the technical complexity. We focus on building, not coding."
    }
];

const FaqItem = ({ item, isOpen, onClick }: { item: { question: string; answer: string }; isOpen: boolean; onClick: () => void }) => {
    return (
        <div className={`border rounded-2xl transition-colors duration-300 ${isOpen ? 'bg-surface-secondary border-primary/50' : 'bg-transparent border-border-secondary hover:border-primary/30'}`}>
            <button onClick={onClick} className="flex justify-between items-center w-full p-6 text-left focus:outline-none">
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
                    {item.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-surface-tertiary text-text-secondary'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="border-b border-border-primary bg-surface-primary py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Have a different question? <a href="mailto:hello@sloe.ai" className="text-primary hover:underline">Email us</a>.
                    </p>
                </div>

                <div className="space-y-4 mb-16">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
                
                <div className="bg-surface-secondary border border-border-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-surface-tertiary rounded-2xl">
                            <MessageCircle className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-text-primary">Still have questions?</h4>
                            <p className="text-text-secondary">We're happy to help you decide if this is right for you.</p>
                        </div>
                    </div>
                    <CheckoutLink href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="whitespace-nowrap px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-primary">
                        Join the Campus
                    </CheckoutLink>
                </div>
            </div>
        </section>
    );
};

export default Faq;
