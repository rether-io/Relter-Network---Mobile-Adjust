import React, { useState, useEffect, useRef } from 'react';
    import './HowItWorksSection.css';

    const steps = [
      {
        number: '1',
        label: 'Aprende',
        tooltip: 'Treinamos a assistente sobre seu negócio e suas melhores práticas',
      },
      {
        number: '2',
        label: 'Adapta',
        tooltip: 'Adapta-se ao seu estilo de comunicação e processos de venda',
      },
      {
        number: '3',
        label: 'Opera 24/7',
        tooltip: 'Pronto! Seu WhatsApp vende 24h por dia automaticamente',
      },
    ];

    function HowItWorksSection() {
      const [isVisible, setIsVisible] = useState([false, false, false]);
      const stepRefs = useRef([]);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                setIsVisible((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.2,
          }
        );

        stepRefs.current.forEach((ref, index) => {
          if (ref) {
            observer.observe(ref);
          }
        });

        return () => {
          stepRefs.current.forEach((ref) => {
            if (ref) {
              observer.unobserve(ref);
            }
          });
        };
      }, []);

      return (
        <div className="how-it-works-section">
          <h2 className="how-it-works-title">Atendimento Perfeito em 3 Passos</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step ${isVisible[index] ? 'step-visible' : ''}`}
                ref={(el) => (stepRefs.current[index] = el)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-label">{step.label}</div>
                <div className="tooltip">{step.tooltip}</div>
                {index < steps.length - 1 && <div className={`line line-${index + 1}`} />}
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default HowItWorksSection;
