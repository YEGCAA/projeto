import React from 'react';
import { Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#335d65] text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#cbc9a0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#cbc9a0] mb-6">
            Sucesso Antecipado
          </h2>
          <p className="text-xl md:text-2xl font-light">
            Mais de <span className="font-bold text-[#cbc9a0] text-4xl">25%</span> das unidades já reservadas no pré-lançamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              role: "Investidor Imobiliário",
              text: "A localização é estratégica e o conceito Home Resort faltava em Saquarema. O potencial de valorização na planta é claro.",
              name: "Ricardo M."
            },
            {
              role: "Empresária",
              text: "Buscava um refúgio para minha família sair do Rio nos fins de semana. O Wave oferece a segurança e o lazer que precisávamos.",
              name: "Ana Paula S."
            },
            {
              role: "Médico",
              text: "A exclusividade de ter poucas unidades e um acabamento premium me conquistou. Já garanti minha reserva.",
              name: "Dr. Carlos E."
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#2a4d53] p-8 rounded-none border border-[#cbc9a0]/30 hover:border-[#cbc9a0] transition-colors">
              <Quote className="w-8 h-8 text-[#cbc9a0] mb-4 opacity-50" />
              <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-xs text-[#cbc9a0] uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};