
import React from 'react';
import { IMAGES } from '../constants';

interface Props {
  onCtaClick: () => void;
}

export const Footer: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <footer className="bg-[#1a353b] text-[#cbc9a0] py-12 border-t border-[#335d65]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <img 
              src={IMAGES.logo} 
              alt="WAVE ITAÚNA Logo" 
              className="h-5 mb-4 object-contain brightness-0 invert opacity-90" 
              style={{ filter: "brightness(0) invert(1) opacity(0.9)" }}
            />
            <p className="text-sm opacity-80 max-w-sm">
              O seu Home Resort em Saquarema. Viva a exclusividade na Avenida Vila Mar.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="bg-[#335d65]/30 p-4 border border-[#335d65] max-w-md">
              <p className="text-white font-bold mb-1">Última oportunidade de pré-lançamento</p>
              <p className="text-sm mb-3">Tabela sujeita a alteração sem aviso prévio.</p>
              <button 
                onClick={onCtaClick}
                className="text-xs font-bold underline hover:text-white transition-colors"
              >
                GARANTIR ACESSO ANTECIPADO AGORA
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#335d65] pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Wave Itaúna. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Imagens meramente ilustrativas.</p>
        </div>
      </div>
    </footer>
  );
};
