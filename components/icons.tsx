import React from 'react';

interface IconProps {
    className?: string;
}

export const WebsiteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-10 h-10 text-primary ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

export const AiOsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-10 h-10 text-primary ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.34 15.84c-.688 0-1.25.561-1.25 1.249s.562 1.249 1.25 1.249c.688 0 1.25-.561 1.25-1.249s-.562-1.249-1.25-1.249zm0-1.249c1.38 0 2.5 1.119 2.5 2.498s-1.12 2.498-2.5 2.498-2.5-1.119-2.5-2.498 1.12-2.498 2.5-2.498zm6.34-4.572c-.688 0-1.25.561-1.25 1.249s.562 1.249 1.25 1.249c.688 0 1.25-.561 1.25-1.249s-.562-1.249-1.25-1.249zm0-1.249c1.38 0 2.5 1.119 2.5 2.498s-1.12 2.498-2.5 2.498-2.5-1.119-2.5-2.498 1.12-2.498 2.5-2.498zm-9.375 7.495c-.688 0-1.25.561-1.25 1.249s.562 1.249 1.25 1.249c.688 0 1.25-.561 1.25-1.249s-.562-1.249-1.25-1.249zm0-1.249c1.38 0 2.5 1.119 2.5 2.498s-1.12 2.498-2.5 2.498-2.5-1.119-2.5-2.498 1.12-2.498 2.5-2.498zm-1.875-6.246c-.688 0-1.25.561-1.25 1.249s.562 1.249 1.25 1.249c.688 0 1.25-.561 1.25-1.249s-.562-1.249-1.25-1.249zm0-1.249c1.38 0 2.5 1.119 2.5 2.498s-1.12 2.498-2.5 2.498-2.5-1.119-2.5-2.498 1.12-2.498 2.5-2.498zm6.25 0c-.688 0-1.25.561-1.25 1.249s.562 1.249 1.25 1.249c.688 0 1.25-.561 1.25-1.249s-.562-1.249-1.25-1.249zm0-1.249c1.38 0 2.5 1.119 2.5 2.498s-1.12 2.498-2.5 2.498-2.5-1.119-2.5-2.498 1.12-2.498 2.5-2.498zM21 12l-1.83 2.562c-.404.566-1.02.938-1.704.938h-2.14c-.612 0-1.196-.211-1.664-.613l-3.326-2.912c-.468-.401-1.052-.613-1.664-.613H6.534c-.684 0-1.3-.372-1.704-.938L3 12m18 0l-1.83-2.562c-.404-.566-1.02-.938-1.704-.938h-2.14c-.612 0-1.196.211-1.664-.613l-3.326 2.912c-.468-.401-1.052-.613-1.664-.613H6.534c-.684 0-1.3.372-1.704-.938L3 12m18 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v5m18 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5"></path></svg>
);

export const BusinessToolsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-10 h-10 text-primary ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5"></path></svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-6 h-6 text-accent flex-shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
);

export const MinusIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-6 h-6 text-text-primary ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-6 h-6 text-text-primary ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

export const XIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);
