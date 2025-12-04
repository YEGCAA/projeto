import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8f7f2]">
      <div className="container mx-auto px-4">
        
        {/* Text Content & Address Card Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[2px] w-10 bg-[#cbc9a0]"></span>
            <span className="text-[#335d65] uppercase tracking-widest text-sm font-bold">Localização Premium</span>
            <span className="h-[2px] w-10 bg-[#cbc9a0]"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#335d65] mb-6">
            No Coração de Itaúna
          </h2>
          
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            O <strong className="text-[#335d65]">Wave Itaúna</strong> está posicionado estrategicamente na Praia de Itaúna, 
            no cobiçado <span className="italic">eixo Vila Mar</span>. Uma região que une a tranquilidade de um bairro residencial 
            com o potencial de uma das áreas de maior valorização imobiliária de Saquarema (RJ).
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#335d65] relative overflow-hidden inline-block text-left w-full max-w-md mx-auto">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MapPin className="w-24 h-24 text-[#335d65]" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#335d65] mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" /> Endereço Oficial
              </h3>
              <p className="text-gray-800 text-lg font-medium">Av. Vila Mar, 20 – Itaúna</p>
              <p className="text-gray-500 mb-6">Saquarema - RJ</p>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=-22.930418451606982,-42.48900702825983" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#335d65] font-bold hover:underline"
              >
                <Navigation className="w-4 h-4 mr-2" /> Traçar Rota no GPS
              </a>
            </div>
          </div>
        </div>

        {/* Map Section Below */}
        <div className="h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white relative group">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=-22.930418451606982,-42.48900702825983&hl=pt-br&z=16&output=embed"
            title="Localização Wave Itaúna"
            className="grayscale group-hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </div>
    </section>
  );
};