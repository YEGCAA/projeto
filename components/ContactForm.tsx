import React, { useState } from 'react';
import { Lock, Send } from 'lucide-react';
import { Button } from './Button';
import { IMAGES } from '../constants';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    income: '',
    financing: '',
    investmentRange: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação mínima
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Preencha nome, WhatsApp e e-mail.');
      return;
    }

    try {
      const response = await fetch(
        'https://n8n.agenteeven.com.br/webhook/4d61f1f4-c457-4983-800a-b20f9373285b',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar seus dados. Tente novamente em alguns minutos.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="py-20 bg-[#cbc9a0]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="relative md:w-5/12 p-10 text-white flex flex-col justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={IMAGES.exterior_night} 
                alt="Wave Itaúna Noturna" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#335d65]/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-serif">Lista VIP</h3>
              <p className="mb-6 opacity-90 font-medium">
                Cadastre-se agora para receber o book completo e a tabela de pré-lançamento antes da abertura oficial de vendas.
              </p>
              <div className="flex items-center text-sm opacity-90 mt-auto">
                <Lock className="w-4 h-4 mr-2" />
                <span>Seus dados estão 100% protegidos.</span>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 p-8 md:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#335d65] mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border-b-2 border-gray-200 focus:border-[#335d65] outline-none py-2 bg-transparent transition-colors"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#335d65] mb-1">WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full border-b-2 border-gray-200 focus:border-[#335d65] outline-none py-2 bg-transparent transition-colors"
                    placeholder="(DD) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#335d65] mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border-b-2 border-gray-200 focus:border-[#335d65] outline-none py-2 bg-transparent transition-colors"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="income" className="block text-sm font-bold text-[#335d65] mb-1">Renda familiar aproximada</label>
                  <input
                    type="text"
                    id="income"
                    name="income"
                    className="w-full border-b-2 border-gray-200 focus:border-[#335d65] outline-none py-2 bg-transparent transition-colors"
                    placeholder="Ex: R$ 15.000,00"
                    value={formData.income}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#335d65] mb-2">Precisa de financiamento bancário?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="financing" 
                        value="Sim" 
                        checked={formData.financing === "Sim"} 
                        onChange={handleChange}
                        className="w-4 h-4 text-[#335d65] border-gray-300 focus:ring-[#335d65]"
                      />
                      <span className="ml-2 text-gray-700">Sim</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="financing" 
                        value="Não" 
                        checked={formData.financing === "Não"} 
                        onChange={handleChange}
                        className="w-4 h-4 text-[#335d65] border-gray-300 focus:ring-[#335d65]"
                      />
                      <span className="ml-2 text-gray-700">Não</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="investmentRange" className="block text-sm font-bold text-[#335d65] mb-1">Faixa de Investimento</label>
                  <select
                    id="investmentRange"
                    name="investmentRange"
                    className="w-full border-b-2 border-gray-200 focus:border-[#335d65] outline-none py-2 bg-transparent transition-colors cursor-pointer text-gray-700"
                    value={formData.investmentRange}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Selecione uma faixa</option>
                    <option value="500-700">R$ 500.000,00 a R$ 700.000,00</option>
                    <option value="700-800">R$ 700.000,00 a R$ 800.000,00</option>
                    <option value="800+">Acima de R$ 800.000,00 +</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button type="submit" fullWidth className="uppercase font-bold text-base">
                    QUERO ENTRAR NA LISTA VIP
                  </Button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Contato direto com a equipe oficial. Sem spam.
                  </p>
                </div>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#335d65] mb-2">Cadastro Confirmado!</h3>
                <p className="text-gray-600">
                  Nossa equipe de consultores entrará em contato via WhatsApp em breve com as condições exclusivas.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};