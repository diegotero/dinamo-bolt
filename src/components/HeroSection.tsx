import React from 'react';
    import { ArrowRight } from 'lucide-react';
    import ClientLogos from './ClientLogos';

    interface HeroSectionProps {
      colors: {
        prussianBlue: string;
        textGray: string;
        cerulean: string;
      };
      clientLogos: {
        name: string;
        logo: string;
      }[];
    }

    const HeroSection: React.FC<HeroSectionProps> = ({ colors, clientLogos }) => {
      return (
        <section className="container mx-auto py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: colors.prussianBlue }}
            >
              Transformamos PyMEs hacia su profesionalización
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8" style={{ color: colors.textGray }}>
              Ayudamos a las PyMEs a profesionalizarse y crecer mediante
              consultoría estratégica, selección de talento y capacitación
              efectiva.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="text-white px-6 py-3 rounded-full transition flex items-center gap-2"
                style={{ backgroundColor: colors.cerulean }}
              >
                Comenzar ahora <ArrowRight size={20} />
              </button>
              <button
                className="border border-[#007ea7] text-[#007ea7] px-6 py-3 rounded-full hover:bg-indigo-50 transition"
                style={{ color: colors.cerulean }}
              >
                Ver servicios
              </button>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center mt-16 px-4">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: colors.prussianBlue }}
            >
              Clientes que confían en nosotros
            </h2>
            <p className="text-gray-600 text-lg" style={{ color: colors.textGray }}>
              Estas empresas confiaron en nosotros para el desarrollo de sus
              negocios.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <ClientLogos logos={clientLogos} />
          </div>
        </section>
      );
    };

    export default HeroSection;
