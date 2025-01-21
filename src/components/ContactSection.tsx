import React from 'react';

    interface ContactSectionProps {
      colors: {
        cerulean: string;
      };
    }

    const ContactSection: React.FC<ContactSectionProps> = ({ colors }) => {
      return (
        <section
          className="py-20"
          style={{ backgroundColor: colors.cerulean }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                ¿Querés llevar tu PyME al próximo nivel?
              </h2>
              <p className="text-indigo-100 mb-8">
                Contactanos para una consulta personalizada y descubrí cómo
                podemos ayudarte.
              </p>
              <button
                className="bg-white text-[#007ea7] px-8 py-3 rounded-full hover:bg-indigo-50 transition"
                style={{ color: colors.cerulean }}
              >
                Contactar ahora
              </button>
            </div>
          </div>
        </section>
      );
    };

    export default ContactSection;
