import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full py-4 px-6 lg:px-12 flex justify-between items-center bg-surface-primary/80 backdrop-blur-lg border-b border-border-primary">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#0E84FF] to-accent" />
                <span className="text-sm font-semibold tracking-wide text-text-primary">Sloe AI Campus</span>
            </div>
            <nav className="flex items-center gap-4">
                <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Community Login</a>
                <a href="#cta" className="inline-flex items-center gap-2 rounded-[12px] bg-primary px-5 py-3 text-sm font-semibold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35">
                    Start Building Now
                </a>
            </nav>
        </header>
    );
};

export default Header;
