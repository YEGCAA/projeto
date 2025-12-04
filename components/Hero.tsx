import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { IMAGES, VIDEOS } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["chegou", "é exclusivo", "é sofisticado", "é Wave Itaúna"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.hero}
          className="w-full h-full object-cover"
        >
          <source src={VIDEOS.hero} type="video/mp4" />
        </video>
        {/* Light shadow overlay to improve visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Subtle top gradient only to ensure navbar visibility */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-24">
        <span className="inline-block py-1 px-3 mb-6 bg-[#335d65] text-white text-xs font-bold tracking-[0.2em] uppercase shadow-md">
          Pré-Lançamento Exclusivo
        </span>
        
        <h1 className="text-white mb-6 leading-tight flex flex-col items-center justify-center">
          <span className="text-3xl md:text-5xl font-light mb-2 drop-shadow-md">O primeiro Home Resort de</span>
          <span className="text-6xl md:text-8xl font-bold font-serif mb-4 drop-shadow-md">Saquarema</span>
          
          <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em] md:h-[1.1em] text-3xl md:text-5xl">
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-semibold text-[#cbc9a0] drop-shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  titleNumber === index
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: titleNumber > index ? -50 : 50,
                        opacity: 0,
                      }
                }
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                {title}
                {titleNumber === index && <span className="text-[#335d65]">.</span>}
              </motion.span>
            ))}
          </span>
        </h1>
        
        <p className="inline-block text-lg md:text-xl text-white mb-12 max-w-2xl font-medium bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg">
          Acesso antecipado, exclusividade e investimento inteligente na Avenida Vila Mar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onCtaClick} className="shadow-xl text-lg hover:scale-105 transition-transform duration-300">
            Quero Acesso Antecipado
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};