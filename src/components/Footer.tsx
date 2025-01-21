import React from 'react';

    interface FooterProps {
      colors: {
        prussianBlue: string;
        textGray: string;
        cerulean: string;
      };
    }

    const Footer: React.FC<FooterProps> = ({ colors }) => {
      return (
        <footer className="bg-white text-gray-600 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.prussianBlue }}
                >
                  Dinamo
                </h3>
                <p className="text-sm" style={{ color: colors.textGray }}>
                  Transformando empresas desde 2008
                </p>
              </div>
              <div>
                <h4
                  className="font-bold mb-4"
                  style={{ color: colors.prussianBlue }}
                >
                  Servicios
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#007ea7] transition"
                      style={{ color: colors.cerulean }}
                    >
                      Consultoría
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#007ea7] transition"
                      style={{ color: colors.cerulean }}
                    >
                      Capacitación
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#007ea7] transition"
                      style={{ color: colors.cerulean }}
                    >
                      Selección
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className="font-bold mb-4"
                  style={{ color: colors.prussianBlue }}
                >
                  Empresa
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#007ea7] transition"
                      style={{ color: colors.cerulean }}
                    >
                      Sobre nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#007ea7] transition"
                      style={{ color: colors.cerulean }}
                    >
                      Equipo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#007ea7] transition"
                      style={{ color: colors.cerulean }}
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className="font-bold mb-4"
                  style={{ color: colors.prussianBlue }}
                >
                  Contacto
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: colors.textGray }}>
                  <li>info@dinamo.net.ar</li>
                  <li>+54 11 1234-5678</li>
                  <li>Buenos Aires, Argentina</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-center" style={{ color: colors.textGray }}>
              © 2024 Dinamo. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
