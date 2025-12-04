import React from 'react';
import { MapPin, Waves, Crown, TrendingUp, Sun, Anchor, Coffee, Dog } from 'lucide-react';
import { IMAGES } from '../constants';

const features = [
  { icon: MapPin, title: "Localização Prime", desc: "Avenida Vila Mar, o endereço mais nobre." },
  { icon: Waves, title: "Vista Mar e Lagoa", desc: "Paisagens deslumbrantes de todos os ângulos." },
  { icon: Crown, title: "Borda Infinita", desc: "Piscina com design exclusivo no rooftop." },
  { icon: Sun, title: "Rooftop Panorâmico", desc: "Lazer nas alturas com vista 360º." },
  { icon: Anchor, title: "Spa & Relax", desc: "Espaço dedicado ao seu bem-estar." },
  { icon: Coffee, title: "Espaço Gourmet", desc: "Equipado para receber com sofisticação." },
  { icon: Dog, title: "Pet Place", desc: "Cuidado e diversão para seu melhor amigo." },
  { icon: TrendingUp, title: "Alta Valorização", desc: "Potencial de retorno acima da média." },
];

export const Differentials: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8f7f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#335d65] mb-4">
            Um Oásis de Exclusividade
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada detalhe do WAVE ITAÚNA foi pensado para proporcionar uma experiência de vida inigualável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-8 hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#cbc9a0] group">
              <div className="w-12 h-12 bg-[#cbc9a0]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#335d65] transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#335d65] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#335d65] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Image Section */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative group overflow-hidden">
            <img 
              src={IMAGES.gym} 
              alt="Academia Wave Itaúna" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
              <span className="text-white font-bold tracking-wider uppercase text-sm">Pet Place</span>
            </div>
          </div>
          <div className="relative group overflow-hidden">
             <img 
              src={IMAGES.pool} 
              alt="Piscina Panorâmica" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" 
              decoding="async"
            />
             <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
              <span className="text-white font-bold tracking-wider uppercase text-sm">Academia Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};