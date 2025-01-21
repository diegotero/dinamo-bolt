import React from 'react';

    interface StatsSectionProps {
      colors: {
        prussianBlue: string;
        cerulean: string;
        textGray: string;
      };
    }

    const StatsSection: React.FC<StatsSectionProps> = ({ colors }) => {
      return (
        <section className="container mx-auto px-6 py-16">
          <h2
            className="text-2xl mb-12 text-center"
            style={{ color: colors.prussianBlue }}
          >
            Contribuimos en el desarrollo de las PyMEs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: colors.cerulean }}
              >
                +15
              </div>
              <div className="text-gray-600" style={{ color: colors.textGray }}>años de experiencia</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: colors.cerulean }}
              >
                +80
              </div>
              <div className="text-gray-600" style={{ color: colors.textGray }}>programas implementados</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: colors.cerulean }}
              >
                +600
              </div>
              <div className="text-gray-600" style={{ color: colors.textGray }}>empresas capacitadas</div>
            </div>
          </div>
        </section>
      );
    };

    export default StatsSection;
