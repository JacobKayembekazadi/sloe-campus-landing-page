import React, { useState } from 'react';
import Hero from './components/Hero';
import SupportingCopy from './components/SupportingCopy';
import WhoItsFor from './components/WhoItsFor';
import ProblemAgitation from './components/ProblemAgitation';
import CtaReveal from './components/CtaReveal';
import ValueCards from './components/ValueCards';
import SevenDayBreakdown from './components/SevenDayBreakdown';
import AiOsPlaybook from './components/AiOsPlaybook';
import SocialProof from './components/SocialProof';
import TestimonialCarousel from './components/TestimonialCarousel';
import WhatsInside from './components/WhatsInside';
import Faq from './components/Faq';
import WalkAwayWith from './components/WalkAwayWith';
import FinalCta from './components/FinalCta';
import LeadMagnetModal from './components/LeadMagnetModal';
import Footer from './components/Footer';

function App() {
  const [isLeadMagnetModalOpen, setIsLeadMagnetModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-primary text-text-primary font-sans antialiased">
      <main>
        <Hero onLeadMagnetClick={() => setIsLeadMagnetModalOpen(true)} />
        <SupportingCopy />
        <WhoItsFor />
        <ProblemAgitation />
        <CtaReveal />
        <ValueCards />
        <SevenDayBreakdown />
        <AiOsPlaybook onOpenModal={() => setIsLeadMagnetModalOpen(true)} />
        <SocialProof />
        <TestimonialCarousel />
        <WhatsInside />
        <Faq />
        <WalkAwayWith />
        <FinalCta />
      </main>
      <Footer />
      <LeadMagnetModal 
        isOpen={isLeadMagnetModalOpen} 
        onClose={() => setIsLeadMagnetModalOpen(false)} 
      />
    </div>
  );
}

export default App;