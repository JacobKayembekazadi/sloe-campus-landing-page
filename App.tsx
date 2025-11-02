import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CtaReveal from './components/CtaReveal';
import ValueCards from './components/ValueCards';
import AiOsPlaybook from './components/AiOsPlaybook';
import SocialProof from './components/SocialProof';
import WhatsInside from './components/WhatsInside';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ProblemAgitation from './components/ProblemAgitation';
import WalkAwayWith from './components/WalkAwayWith';
import FinalCta from './components/FinalCta';

function App() {
  return (
    <div className="min-h-screen bg-surface-primary text-text-primary font-sans antialiased">
      <main>
        <Hero />
        <ProblemAgitation />
        <CtaReveal />
        <ValueCards />
        <AiOsPlaybook />
        <SocialProof />
        <WhatsInside />
        <Faq />
        <WalkAwayWith />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;