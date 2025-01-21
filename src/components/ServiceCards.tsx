import React from 'react';
    import { ArrowRight } from 'lucide-react';

    interface ServiceCard {
      icon: React.ReactNode;
      title: string;
      description: string;
      buttonText: string;
    }

    interface ServiceCardsProps {
      serviceCards: ServiceCard[];
      colors: {
        textGray: string;
        cerulean: string;
        prussianBlue: string;
      };
    }

    const ServiceCards: React.FC<ServiceCardsProps> = ({ serviceCards, colors }) => {
      return (
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: colors.prussianBlue }}
            >
              Soluciones integrales para PyMEs
            </h2>
            <p className="text-xl text-gray-600" style={{ color: colors.textGray }}>
              Transformamos tu empresa familiar con servicios especializados
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="mr-2">{card.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900" style={{ color: colors.textGray }}>
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6" style={{ color: colors.textGray }}>{card.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center transition-all"
                  style={{ color: colors.cerulean }}
                >
                  {card.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
      );
    };

    export default ServiceCards;
