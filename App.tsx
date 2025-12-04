import React from 'react';
import { Hero } from './components/Hero';
import { ValueBlock } from './components/ValueBlock';
import { Differentials } from './components/Differentials';
import { Location } from './components/Location';
import { SocialProof } from './components/SocialProof';
import { PreLaunchBenefits } from './components/PreLaunchBenefits';
import { Gallery } from './components/Gallery';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { IMAGES } from './constants';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 selection:bg-[#335d65] selection:text-[#cbc9a0]">
      {/* Absolute Transparent Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 w-full">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img 
            src={IMAGES.logo} 
            alt="WAVE ITAÚNA Logo" 
            className="h-5 md:h-5 object-contain drop-shadow-md"
          />
        </div>
      </nav>

      <Hero onCtaClick={scrollToForm} />
      <ValueBlock />
      <Differentials />
      <Location />
      <Gallery />
      <SocialProof />
      <PreLaunchBenefits onCtaClick={scrollToForm} />
      <ContactForm />
      <Footer onCtaClick={scrollToForm} />

    </main>
  );
};

export default App;