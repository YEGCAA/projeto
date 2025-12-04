import React from 'react';
import { IMAGES } from '../constants';

export const ValueBlock: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#335d65]">
              Redefinindo o Viver em Saquarema
            </h2>
            <div className="w-20 h-1 bg-[#cbc9a0]"></div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              O <span className="font-bold text-[#335d65]">WAVE ITAÚNA</span> não é apenas um empreendimento, é um marco. 
              Trazemos o conceito de <span className="italic">Home Resort</span> para a região mais valorizada da cidade, 
              unindo a sofisticação de um hotel 5 estrelas com o conforto do seu lar.
            </p>

            <ul className="space-y-4">
              {[
                "Padrão construtivo premium inédito na região",
                "Design arquitetônico integrado à natureza",
                "Diferencial único: lazer completo e serviços exclusivos"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#cbc9a0] flex items-center justify-center text-[#335d65] mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#cbc9a0] z-0"></div>
            <img 
              src={IMAGES.exterior_day} 
              alt="Wave Itaúna Perspectiva" 
              className="relative z-10 w-full h-auto shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};