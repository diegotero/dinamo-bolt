import React from 'react';

    interface CardData {
      title: string;
      icon: React.ReactNode;
      question: string;
      description: string;
    }

    interface MissionStatementProps {
      cardData: CardData[];
      colors: {
        prussianBlue: string;
        textGray: string;
      };
    }

    const MissionStatement: React.FC<MissionStatementProps> = ({ cardData, colors }) => {
      return (
        <section className="container mx-auto py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8"
              style={{ color: colors.prussianBlue }}
            >
              Trabajamos codo a codo con nuestros clientes «socios
              estratégicos»
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed" style={{ color: colors.textGray }}>
              Buscando soluciones a medida en el desarrollo integral de sus
              negocios
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                >
                  <div className="absolute top-4 right-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2" style={{ color: colors.textGray }}>
                    {card.title}
                  </h3>
                  <p className="text-gray-700 mb-2 italic" style={{ color: colors.textGray }}>
                    {card.question}
                  </p>
                  <p className="text-gray-600" style={{ color: colors.textGray }}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default MissionStatement;
