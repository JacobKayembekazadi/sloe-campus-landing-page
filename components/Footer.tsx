import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-border-primary bg-surface-primary py-10 text-sm text-text-secondary">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#0E84FF] to-accent" />
                        <span>Sloe AI Campus</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
