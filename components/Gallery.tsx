import React from 'react';
import { IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const images = IMAGES.gallery;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#335d65] font-bold tracking-widest uppercase text-sm">Perspectivas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#335d65] mt-2">Design & Sofisticação</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-[4/3] rounded-sm shadow-md">
              <img 
                src={src} 
                alt={`Wave Itaúna Perspectiva ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#335d65]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white border border-white px-4 py-2 uppercase tracking-widest text-xs font-bold">Visualizar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};