import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const testimonials = [
    {
        quote: "This isn't just a course, it's a playbook. I landed my first $2k/mo client for an AI OS just 3 weeks after joining. Insane value.",
        name: "Alex S.",
        title: "Agency Owner",
        avatar: "https://placehold.co/48x48/0F1420/F1F5F9?text=AS"
    },
    {
        quote: "The n8n workflows alone are worth 10x the price. I automated my own business, then started selling the service to others.",
        name: "Maria J.",
        title: "Freelancer",
        avatar: "https://placehold.co/48x48/0F1420/F1F5F9?text=MJ"
    },
    {
        quote: "I finally understand how to *sell* AI. The 'Client-Hunter' calls and sales scripts are pure gold. I'm not a 'tech guy' but I'm closing deals.",
        name: "David B.",
        title: "Career Pivoter",
        avatar: "https://placehold.co/48x48/0F1420/F1F5F9?text=DB"
    }
];

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const trackRef = useRef<HTMLDivElement>(null);
    const transitionRef = useRef(true);

    const slides = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];

    const handleNext = useCallback(() => {
        if (!transitionRef.current) return;
        setCurrentIndex(prev => prev + 1);
        transitionRef.current = true;
    }, []);

    const handlePrev = () => {
        if (!transitionRef.current) return;
        setCurrentIndex(prev => prev - 1);
        transitionRef.current = true;
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        if (currentIndex === slides.length - 1) {
            const timer = setTimeout(() => {
                transitionRef.current = false;
                setCurrentIndex(1);
            }, 500);
            return () => clearTimeout(timer);
        }

        if (currentIndex === 0) {
            const timer = setTimeout(() => {
                transitionRef.current = false;
                setCurrentIndex(slides.length - 2);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, slides.length]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="mt-20 relative">
            <h3 className="text-3xl font-bold text-center text-text-primary mb-12">Real Wins from Real Builders</h3>
            <div className="w-full overflow-hidden">
                <div 
                    ref={trackRef} 
                    className="flex"
                    style={{ 
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: transitionRef.current ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                >
                    {slides.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="rounded-2xl border border-border-secondary bg-surface-tertiary p-8 h-full flex flex-col shadow-card">
                                <p className="text-lg italic text-text-primary flex-grow">"{testimonial.quote}"</p>
                                <div className="flex items-center mt-6">
                                    <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} className="w-12 h-12 rounded-full ring-2 ring-primary" />
                                    <div className="ml-4">
                                        <p className="font-bold text-text-primary">{testimonial.name}</p>
                                        <p className="text-sm text-text-secondary">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-surface-primary/50 hover:bg-surface-primary p-2 rounded-full transition-colors hidden md:block">
                <ChevronLeftIcon />
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-surface-primary/50 hover:bg-surface-primary p-2 rounded-full transition-colors hidden md:block">
                <ChevronRightIcon />
            </button>
        </div>
    );
};

export default TestimonialCarousel;
