import React from 'react';

    function DemoSection() {
      return (
        <div className="bg-black py-12 font-inter">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold text-white mb-4" style={{
              fontSize: '3rem',
              fontWeight: 300,
              lineHeight: 1.2,
            }}>Teste A Bianca Agora Mesmo</h2>
            <p className="text-gray-300 text-xl mb-8" style={{
              fontSize: '1.5rem',
              fontWeight: 300,
              lineHeight: 1.4,
            }}>
              Converse com ela no WhatsApp e veja pessoalmente como ela pode transformar seu atendimento
            </p>
            <div className="max-w-md mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
              <form className="flex flex-col gap-4">
                <input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  className="bg-[#333] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
                <button
                  type="submit"
                  className="bg-[#00FF9D] text-black font-semibold py-3 rounded-md hover:bg-[#00cc7a] transition-colors duration-300"
                >
                  Começar Teste Grátis
                </button>
              </form>
              <div className="mt-6 flex flex-col items-center">
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-white">Teste grátis e sem compromisso</span>
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-white">Resposta em menos de 1 minuto</span>
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Veja ela funcionando ao vivo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default DemoSection;
