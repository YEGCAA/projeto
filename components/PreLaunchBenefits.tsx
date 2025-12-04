import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface Props {
  onCtaClick: () => void;
}

export const PreLaunchBenefits: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335d65] mb-6">
              Por que se antecipar?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              O momento do pré-lançamento é a janela de oportunidade única para quem busca maximizar o investimento ou escolher as unidades mais privilegiadas.
            </p>
            
            <div className="space-y-6">
              {[
                "Escolha prioritária das melhores unidades (vistas e andares)",
                "Tabela de preços especial abaixo do lançamento oficial",
                "Condições de pagamento flexíveis",
                "Negociação direta com a incorporadora"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center p-4 bg-[#f8f7f2] border-l-4 border-[#335d65]">
                  <CheckCircle2 className="w-6 h-6 text-[#335d65] mr-4 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button onClick={onCtaClick}>
                Garantir Condição Especial <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#cbc9a0]/20 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#335d65] mb-6">Perfil Ideal</h3>
            <p className="mb-6 text-gray-700">Este empreendimento foi desenhado para:</p>
            <ul className="space-y-4">
              {[
                "Investidores focados em valorização patrimonial",
                "Famílias que buscam qualidade de vida",
                "Compradores de segunda residência (lazer)",
                "Quem deseja sair da cidade grande sem perder o conforto"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-[#335d65]">
                  <span className="w-2 h-2 bg-[#335d65] rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};