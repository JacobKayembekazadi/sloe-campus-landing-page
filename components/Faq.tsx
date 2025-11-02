import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';

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
        question: 'Why a 10-day "challenge"?',
        answer: "Because we value action over theory. This isn't a passive course you \"might\" finish. The 10-day goal is an intense sprint designed to get you a tangible result: a deployed product and the assets to find your first client. It's about building momentum."
    }
];

interface FaqItemProps {
    item: { question: string; answer: string };
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
    return (
        <div className="rounded-2xl border border-border-secondary bg-surface-secondary">
            <button onClick={onClick} className="faq-toggle flex justify-between items-center w-full p-6 text-left">
                <span className="text-lg font-medium text-text-primary">{item.question}</span>
                <span className="faq-icon text-primary">
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
            </button>
            <div className={`faq-panel px-6 text-text-secondary transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'pb-6 max-h-96' : 'max-h-0'}`}>
                <p>{item.answer}</p>
            </div>
        </div>
    );
};


const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="border-b border-border-primary bg-surface-primary py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-text-primary">Frequently Asked Questions</h2>
                <div className="mt-12 space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <a href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" className="inline-flex items-center gap-2 rounded-[12px] bg-primary px-8 py-4 text-lg font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35">
                        Ready to Start? Join Now
                    </a>
                    <p className="text-sm text-text-secondary mt-3">Questions answered? Let's build 🚀</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;
