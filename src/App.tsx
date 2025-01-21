import React from 'react';
import { ArrowRight, Users, Lightbulb, Search, Star, Building2, ChevronLeft, ChevronRight, MessageSquare, Target, BarChart3, Users2, Brain } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  const clientLogos = [
    {
      name: 'GitLab',
      logo: 'https://about.gitlab.com/images/press/logo/svg/gitlab-logo-gray-rgb.svg'
    },
    {
      name: 'iHeart Media',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/IHeartMedia_Logo.svg/2560px-IHeartMedia_Logo.svg.png'
    },
    {
      name: 'Ulta Beauty',
      logo: 'https://logos-world.net/wp-content/uploads/2022/02/Ulta-Beauty-Logo.png'
    },
    {
      name: 'Alliant Group',
      logo: 'https://www.alliantgroup.com/wp-content/uploads/2018/06/alliantgroup_logo.png'
    },
    {
      name: 'Anthropologie',
      logo: 'https://logos-world.net/wp-content/uploads/2022/01/Anthropologie-Logo.png'
    }
  ];

  const services = [
    {
      title: 'Conducción por objetivos',
      icon: <Target className="w-6 h-6" />,
      description: 'Implementamos metodologías efectivas para establecer, medir y alcanzar objetivos empresariales, alineando equipos con la visión estratégica de la empresa.',
    },
    {
      title: 'Tableros de control',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Desarrollamos herramientas de visualización y control para la toma de decisiones estratégicas, permitiendo un seguimiento efectivo de KPIs críticos.',
    },
    {
      title: 'Delegación efectiva',
      icon: <Users2 className="w-6 h-6" />,
      description: 'Capacitamos en técnicas de delegación que generan autonomía y dominio, liberando tiempo para enfocarse en la estrategia empresarial.',
    },
    {
      title: 'Gestión estratégica',
      icon: <Brain className="w-6 h-6" />,
      description: 'Facilitamos la transición de la gestión operativa a la estratégica, ayudando a priorizar lo importante sobre lo urgente.',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-indigo-900 text-2xl font-bold">Dinamo</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Servicios</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Equipo</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Contacto</a>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
            Contactar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-6">
            Transformamos <span className="text-indigo-600">PyMEs</span>
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Transformamos una década de experiencia y conocimiento empresarial para potenciar 
            la profesionalización y el crecimiento de las PyMEs argentinas.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition flex items-center gap-2">
              Comenzar ahora <ArrowRight size={20} />
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition">
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* Client Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Empresas que confían en nosotros
          </h2>
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={5}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              loop={true}
              className="relative"
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}
            >
              {clientLogos.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="h-24 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Profesionalización de las PyMEs
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Las tareas del día a día pueden hacer que tengamos una visión sesgada de la realidad de nuestra empresa. 
              Suele ocurrir que el empresario debe hacerse cargo de lo urgente, sin poder prestar atención a lo importante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:gap-2 transition-all">
                  Conocer más <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <p className="text-gray-600 leading-relaxed mb-8">
              La dificultad en lograr una delegación efectiva, donde las partes involucradas obtengan como resultado 
              autonomía y dominio, se traduce en la imposibilidad del dueño de ocuparse de la estrategia de la 
              compañía, debiendo realizar tareas operativas.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition flex items-center gap-2 mx-auto">
              Comenzar ahora <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8">
            Trabajamos codo a codo con nuestros clientes «socios estratégicos»
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Buscando soluciones a medida en el desarrollo integral de sus negocios
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl text-indigo-900 mb-12 text-center">Contribuimos en el desarrollo de las PyMEs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">+15</div>
            <div className="text-gray-600">años de experiencia</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">+80</div>
            <div className="text-gray-600">programas implementados</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">+600</div>
            <div className="text-gray-600">empresas capacitadas</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20 bg-white rounded-3xl my-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-indigo-900 mb-16 text-center">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="Cliente"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-indigo-900">Juan Pérez</h3>
                  <p className="text-gray-600">CEO, Empresa S.A.</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Dinamo ha sido fundamental en la transformación de nuestra empresa. Su enfoque personalizado
                y profesional nos ayudó a alcanzar objetivos que parecían inalcanzables."
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="Cliente"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-indigo-900">María González</h3>
                  <p className="text-gray-600">Directora, Tech Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "El equipo de Dinamo no solo nos brindó herramientas, sino que nos acompañó en todo
                el proceso de crecimiento. Su experiencia y dedicación fueron clave para nuestro éxito."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-600 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Querés llevar tu PyME al próximo nivel?
            </h2>
            <p className="text-indigo-100 mb-8">
              Contactanos para una consulta personalizada y descubrí cómo podemos ayudarte.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition">
              Contactar ahora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-indigo-900 text-xl font-bold mb-4">Dinamo</h3>
              <p className="text-sm">
                Transformando empresas desde 2008
              </p>
            </div>
            <div>
              <h4 className="text-indigo-900 font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition">Consultoría</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Capacitación</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Selección</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-900 font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Equipo</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-900 font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>info@dinamo.net.ar</li>
                <li>+54 11 1234-5678</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-center">
            © 2024 Dinamo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;