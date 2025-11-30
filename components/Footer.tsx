import React from 'react';
import { Twitter, Linkedin, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-surface-secondary border-t border-border-primary pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                            <span className="text-xl font-bold text-text-primary">Sloe AI Campus</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Stop watching tutorials. Start shipping real AI projects. The community for builders who want to monetize.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-surface-tertiary rounded-lg text-text-secondary hover:text-primary hover:bg-primary/10 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-surface-tertiary rounded-lg text-text-secondary hover:text-primary hover:bg-primary/10 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-surface-tertiary rounded-lg text-text-secondary hover:text-primary hover:bg-primary/10 transition-all">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className="text-text-primary font-bold mb-6">Explore Paths</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Shopify AI Builder</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Internal Tools Architect</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">AI Web Developer</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">7-Day Skill Map</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-text-primary font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Contact Support</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter/CTA Column */}
                    <div>
                        <h4 className="text-text-primary font-bold mb-6">Ready to Build?</h4>
                        <p className="text-text-secondary text-sm mb-4">
                            Join 500+ builders shipping products every week.
                        </p>
                        <a 
                            href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus"
                            className="inline-block w-full text-center bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-hover transition-colors"
                        >
                            Join the Campus
                        </a>
                    </div>
                </div>

                <div className="border-t border-border-primary pt-8 text-center">
                    <p className="text-text-secondary text-sm">
                        &copy; {new Date().getFullYear()} Sloe AI Campus. Made by Builders for Builders.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
