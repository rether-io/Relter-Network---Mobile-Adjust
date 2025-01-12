import React, { useState } from 'react';
    import './FAQSection.css';

    const faqData = [
      {
        question: 'O que a Bianca pode fazer pelo meu negócio?',
        answer:
          'A Bianca é uma assistente virtual que automatiza todo seu atendimento no WhatsApp. Ela consegue atender, qualificar leads, agendar reuniões, resolver dúvidas dos clientes e até mesmo realizar vendas - tudo automaticamente. É como ter sua melhor funcionária trabalhando 24 horas por dia, 7 dias por semana, sem nunca perder uma oportunidade.',
      },
      {
        question: 'Quanto tempo leva para implementar?',
        answer: 'A implementação é super rápida e leva apenas 24 horas. Nossa equipe cuida de todo o processo, desde a configuração inicial até o treinamento da Bianca com as informações do seu negócio. Você não precisa se preocupar com nada técnico - nós fazemos tudo por você.',
      },
      {
        question: 'Como a Bianca aprende sobre meu negócio?',
        answer:
          'O processo é simples: coletamos as principais informações sobre seu negócio, produtos, serviços e forma de atendimento através de um briefing descomplicado. A Bianca usa essas informações para criar respostas personalizadas e alinhadas com seu negócio. Ela também aprende e se aperfeiçoa continuamente com cada interação.',
      },
      {
        question: 'É seguro usar a Bianca no meu WhatsApp?',
        answer:
          'Totalmente seguro! Utilizamos a API oficial do WhatsApp Business e seguimos todos os protocolos de segurança. Suas conversas e dados são criptografados e protegidos. Além disso, você mantém total controle sobre seu número e pode monitorar todos os atendimentos através de um painel exclusivo.',
      },
      {
        question: 'Preciso ter conhecimento técnico?',
        answer:
          'Não precisa de nenhum conhecimento técnico! Nossa equipe cuida de toda a parte tecnológica. Você só precisa nos fornecer as informações sobre seu negócio e nós configuramos tudo. A interface é super intuitiva e oferecemos todo o suporte necessário para você aproveitar ao máximo a Bianca.',
      },
      {
        question: 'Qual o investimento necessário?',
        answer:
          'Oferecemos planos que cabem no bolso e se pagam rapidamente. O investimento inicial é de R$4.000 para implementação e mensalidades a partir de R$1.500. Considerando que a Bianca trabalha 24h por dia, nunca tira férias e pode atender centenas de clientes simultaneamente, o custo-benefício é incomparável com a contratação de funcionários tradicionais.',
      },
    ];

    function FAQSection() {
      const [openIndex, setOpenIndex] = useState(null);

      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      return (
        <div className="faq-section">
          <div className="faq-content">
            <div className="container mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="badge mb-4">
                  <span className="badge-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#4D4D4D"/>
                      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#1A1A1A"/>
                      <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="#666666"/>
                      <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"/>
                    </svg>
                  </span>
                  FAQ
                </div>
                <h2 className="text-4xl font-semibold text-white mb-2">Alguma Dúvida?</h2>
                <p className="text-gray-300 text-xl mb-8">Tudo Que Precisa Saber!</p>
              </div>
              <div className="w-full max-w-3xl mx-auto">
                {faqData.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div
                      className="faq-question"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="text-white font-medium">{item.question}</h3>
                      <span className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 4.16663V15.8333M4.16663 10H15.8333" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    {openIndex === index && (
                      <div className="faq-answer">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default FAQSection;
