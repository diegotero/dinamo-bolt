import React from 'react';

    interface NavigationProps {
      colors: {
        prussianBlue: string;
        textGray: string;
        cerulean: string;
      };
    }

    const Navigation: React.FC<NavigationProps> = ({ colors }) => {
      return (
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl font-bold"
              style={{ color: colors.prussianBlue }}
            >
              <img
                src="https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logo-dinamo-oscuro-gjKFtXg1VCPx2GBpNIXco1z9Ngm8cI.webp"
                alt="Dinamo Logo"
                className="h-[3.825rem] md:h-[4.5rem]"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-[#007ea7] transition"
                style={{ color: colors.textGray }}
              >
                Inicio
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007ea7] transition"
                style={{ color: colors.textGray }}
              >
                Servicios
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007ea7] transition"
                style={{ color: colors.textGray }}
              >
                Equipo
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007ea7] transition"
                style={{ color: colors.textGray }}
              >
                Contacto
              </a>
            </div>
            <button
              className="text-white px-6 py-2 rounded-full transition"
              style={{ backgroundColor: colors.cerulean }}
            >
              Contactar
            </button>
          </div>
        </nav>
      );
    };

    export default Navigation;
