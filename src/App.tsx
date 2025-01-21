import React, { useState, useRef } from 'react';
    import {
      ArrowRight,
      Users,
      Lightbulb,
      Brain,
      Clock,
      Settings,
      TrendingDown,
      Diamond,
      DollarSign,
      Puzzle,
      UserPlus,
      ChevronDown,
      ChevronLeft,
      ChevronRight,
    } from 'lucide-react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Autoplay, Navigation } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/autoplay';
    import 'swiper/css/navigation';

    const colors = {
      white: '#ffffffff',
      richBlack: '#00171fff',
      prussianBlue: '#003459',
      cerulean: '#2563eb',
      pictonBlue: '#00a8e8ff',
      textGray: '#4b5563',
    };

    const clientLogos = [
      {
        name: 'Arco Iris',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/arco-iris-logo-qigm4otrJAPKK9f57YsLbkhAg12HVj.png',
      },
      {
        name: 'Auto entrada',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/autoentrada-logo-As8bcgUa34a7GXCwhxqxXTbg0A9xmW.png',
      },
      {
        name: 'Ceracor',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/ceracor-revestimientos-GxnWzHOklk3S2blY2kEYwbAmSaIgeD.png',
      },
      {
        name: 'Clinica velez sarsfield',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/clinica%20velez%20sarsfield-logo-kTyFpxic5u9EpjnyGjiDB40RViJ2xD.png',
      },
      {
        name: 'De Hierro',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/dehierro-logo-gkZ4eVCwqMxp88U56ZWHcLtAypuI3a.png',
      },
      {
        name: 'Feyro',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/feyro-logo-FbOW4BZS68QceBTUKUDfuJ6WuD0TbF.png',
      },
      {
        name: 'Nobis',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/nobis-logo-73t0fvf7BKcELZjTo14GJSb6aM8x8i.png',
      },
      {
        name: 'GNI',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/gni%20logo-v7bHzKzK055Y4gxidpOFkwOL0AISMe.png',
      },
      {
        name: 'Jambo',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/jambo-logo-s3Ciy53L34LPAjctECoMxJpZgJlEJr.png',
      },
      {
        name: 'Servicios integrales',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/servicios-integrales-logo-oeZugQtKQUDrPRmi81CvJU8YTUgezN.png',
      },
      {
        name: 'Oxala',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/oxala-logo-VbxlHJHbv2IMMOqVTcyDMwCdJCvdan.png',
      },
      {
        name: 'Farmacias Red',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/red-logo-VEctM7LUfUEIVLRWSjsiQKWGkc4wdf.png',
      },
      {
        name: 'Tecnicord',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/tecnicord-logo-1XnGblUvguxZg4NGzrlhrVyRlyq7Nc.png',
      },
      {
        name: 'Panaderia San Alfonso',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/san-alfonso-logo-cmaPdzIuRMFr51QZJgCwxyjLIjOXb7.png',
      },
      {
        name: 'Ormay',
        logo:
          'https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logos-clientes/ormay-logo-TULHJNmql1YcIzCowhzilCP6qyKqYB.png',
      },
    ];

    const cardData = [
      {
        title: 'Gestión del Tiempo',
        icon: <Clock className="w-6 h-6" style={{ color: colors.cerulean }} />,
        question: '¿La operatoria diaria consume todo tu tiempo?',
        description:
          'Optimizamos tu agenda para que te enfoques en lo estratégico, delegando tareas operativas.',
      },
      {
        title: 'Procesos Empresariales',
        icon: <Settings className="w-6 h-6" style={{ color: colors.cerulean }} />,
        question: '¿Tus procesos carecen de claridad?',
        description:
          'Definimos y documentamos tus procesos para que sean eficientes y escalables.',
      },
      {
        title: 'Análisis de Resultados',
        icon: (
          <TrendingDown className="w-6 h-6" style={{ color: colors.cerulean }} />
        ),
        question: '¿No visualizás claramente los resultados?',
        description:
          'Implementamos tableros de control para que tomes decisiones basadas en datos.',
      },
      {
        title: 'Toma de Decisiones',
        icon: <Brain className="w-6 h-6" style={{ color: colors.cerulean }} />,
        question: '¿Te sentís solo al momento de decidir?',
        description:
          'Te acompañamos en el proceso de toma de decisiones para que elijas el mejor camino.',
      },
      {
        title: 'Innovación Empresarial',
        icon: <Diamond className="w-6 h-6" style={{ color: colors.cerulean }} />,
        question: '¿Tu empresa necesita renovarse?',
        description:
          'Te ayudamos a identificar oportunidades de innovación para que tu empresa se destaque.',
      },
      {
        title: 'Desarrollo Comercial',
        icon: <DollarSign className="w-6 h-6" style={{ color: colors.cerulean }} />,
        question: '¿Necesitás incrementar tus ventas?',
        description:
          'Diseñamos estrategias comerciales efectivas para que aumentes tus ingresos.',
      },
      {
        title: 'Gestión de Equipos',
        icon: <Users className="w-6 h-6" style={{ color: colors.cerulean }} />,
        question: '¿Buscás un equipo más comprometido?',
        description:
          'Desarrollamos líderes y equipos de alto rendimiento para que alcances tus objetivos.',
      },
      {
        title: 'Implementación de Ideas',
        icon: (
          <Lightbulb className="w-6 h-6" style={{ color: colors.cerulean }} />
        ),
        question: '¿Tenés muchas ideas pero te cuesta implementarlas?',
        description:
          'Te guiamos en la implementación de tus ideas para que se conviertan en realidad.',
      },
    ];

    const serviceCards = [
      {
        icon: <Puzzle className="text-[#2563eb] w-8 h-8" />,
        title: 'Consultoría Estratégica',
        description:
          'Optimizamos procesos y profesionalizamos la estructura de tu empresa familiar. Acompañamiento personalizado para la toma de decisiones y planificación estratégica.',
        buttonText: 'Conoce más',
      },
      {
        icon: <Users className="text-[#2563eb] w-8 h-8" />,
        title: 'Desarrollo de Talento',
        description:
          'Formación especializada para mandos medios y personal clave. Programas de liderazgo y gestión de equipos diseñados para PyMEs en crecimiento.',
        buttonText: 'Conoce más',
      },
      {
        icon: <UserPlus className="text-[#2563eb] w-8 h-8" />,
        title: 'Selección de Personal',
        description:
          'Encontramos el talento especializado que tu PyME necesita. Reclutamiento enfocado en perfiles clave y evaluación por competencias.',
        buttonText: 'Conoce más',
      },
    ];

    const testimonials = [
      {
        name: 'Juan Pérez',
        role: 'CEO, Empresa S.A.',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        comment:
          'Dinamo ha sido fundamental en la transformación de nuestra empresa. Su enfoque personalizado y profesional nos ayudó a alcanzar objetivos que parecían inalcanzables.',
      },
      {
        name: 'María González',
        role: 'Directora, Tech Solutions',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        comment:
          'El equipo de Dinamo no solo nos brindó herramientas, sino que nos acompañó en todo el proceso de crecimiento. Su experiencia y dedicación fueron clave para nuestro éxito.',
      },
      {
        name: 'Carlos Rodríguez',
        role: 'Gerente, Innova Corp',
        image:
          'https://images.unsplash.com/photo-1539571696350-5a346a7a73a4?w=100&h=100&fit=crop',
        comment:
          'La consultoría de Dinamo nos permitió optimizar nuestros procesos y mejorar la toma de decisiones. Estamos muy satisfechos con los resultados.',
      },
      {
        name: 'Laura Martínez',
        role: 'Fundadora, Startup X',
        image:
          'https://images.unsplash.com/photo-1531427186511-0f9516bb649e?w=100&h=100&fit=crop',
        comment:
          'Gracias a Dinamo, logramos desarrollar un equipo de alto rendimiento y mejorar nuestra cultura empresarial. Su apoyo fue fundamental para nuestro crecimiento.',
      },
      {
        name: 'Sofia Gomez',
        role: 'CEO, Global Solutions',
        image:
          'https://images.unsplash.com/photo-1580489944761-15a19d6749df?w=100&h=100&fit=crop',
        comment:
          'La capacitación brindada por Dinamo fue excelente. Nuestro personal adquirió nuevas habilidades y conocimientos que nos permitieron mejorar nuestra productividad.',
      },
    ];

    const faqData = [
      {
        question: '¿Qué hace una consultoría empresarial?',
        answer:
          'Una consultoría empresarial ofrece asesoramiento especializado a empresas, ayudando a optimizar procesos, mejorar la gestión y alcanzar objetivos estratégicos.',
      },
      {
        question: '¿Qué tipos de consultoría empresarial existen?',
        answer:
          'Existen varios tipos de consultoría empresarial, entre ellos: consultoría estratégica, financiera, de recursos humanos, tecnológica, y de marketing.',
      },
      {
        question: '¿Cuál es la diferencia entre asesoría y consultoría?',
        answer:
          'La asesoría se centra en brindar consejos específicos, mientras que la consultoría implica una colaboración más integral, incluyendo análisis, diagnóstico y soluciones a medida.',
      },
      {
        question: '¿Qué servicios ofrece una consultora de empresas?',
        answer:
          'Una consultora de empresas ofrece servicios como diagnóstico organizacional, planificación estratégica, desarrollo de capacitación y gestión de recursos humanos.',
      },
      {
        question: '¿Qué trabajo se hace en una consultoría?',
        answer:
          'En una consultoría se realiza un análisis profundo de la empresa, se identifican áreas de mejora y se desarrollan soluciones personalizadas para alcanzar metas.',
      },
      {
        question: '¿Qué incluye una consultoría?',
        answer:
          'Una consultoría incluye diagnóstico inicial, desarrollo de estrategias, implementación de mejoras y seguimiento de resultados.',
      },
      {
        question: '¿Cuál es el rol de un consultor?',
        answer:
          'El rol de un consultor es asesorar, guiar y colaborar con la empresa para optimizar procesos y alcanzar objetivos, aportando conocimiento y experiencia.',
      },
      {
        question: '¿Qué tipos de consultoría hay?',
        answer:
          'Los tipos de consultoría abarcan estratégica, tecnológica, de marketing, de recursos humanos, financiera y de gestión de proyectos, entre otros.',
      },
      {
        question: '¿Qué hace un asesor empresarial?',
        answer:
          'Un asesor empresarial proporciona orientación y recomendaciones para mejorar el desempeño y la rentabilidad de una empresa, centrándose en áreas específicas.',
      },
    ];

    function App() {
      const [openItem, setOpenItem] = useState<number | null>(null);
      const swiperRef = useRef<any>(null);

      const toggleItem = (index: number) => {
        setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
      };

      const handlePrev = () => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slidePrev();
        }
      };

      const handleNext = () => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideNext();
        }
      };

      return (
        <div
          className="min-h-screen"
          style={{ background: `linear-gradient(to bottom, ${colors.white}, #f0f0f0)` }}
        >
          {/* Navigation */}
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div
                className="text-2xl font-bold"
                style={{ color: colors.prussianBlue }}
              >
                <img
                  src="https://vrrohcaovubbp0uw.public.blob.vercel-storage.com/logo-dinamo-oscuro-gjKFtXg1VCPx2GBpNIXco1z9Ngm8cI.webp"
                  alt="Dinamo Logo"
                  className="h-8"
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

          {/* Hero Section */}
          <section className="container mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <h1
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{ color: colors.prussianBlue }}
              >
                Transformamos PyMEs hacia su profesionalización
              </h1>
              <p className="text-gray-600 text-xl mb-8" style={{ color: colors.textGray }}>
                Ayudamos a las PyMEs a profesionalizarse y crecer mediante
                consultoría estratégica, selección de talento y capacitación
                efectiva.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="text-white px-8 py-3 rounded-full transition flex items-center gap-2"
                  style={{ backgroundColor: colors.cerulean }}
                >
                  Comenzar ahora <ArrowRight size={20} />
                </button>
                <button
                  className="border border-[#007ea7] text-[#007ea7] px-8 py-3 rounded-full hover:bg-indigo-50 transition"
                  style={{ color: colors.cerulean }}
                >
                  Ver servicios
                </button>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center mt-16">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: colors.prussianBlue }}
              >
                Clientes que confían en nosotros
              </h2>
              <p className="text-gray-600 text-lg" style={{ color: colors.textGray }}>
                Estas empresas confiaron en nosotros para el desarrollo de sus
                negocios.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
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
          </section>

          {/* Services Section */}
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

          {/* Mission Statement */}
          <section className="container mx-auto px-6 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ color: colors.prussianBlue }}
              >
                Trabajamos codo a codo con nuestros clientes «socios
                estratégicos»
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed" style={{ color: colors.textGray }}>
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ color: colors.textGray }}>
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

          {/* Stats Section */}
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

          {/* Testimonials Section */}
          <section className="container mx-auto px-6 py-20 bg-white rounded-3xl my-20">
            <div className="max-w-6xl mx-auto">
              <h2
                className="text-4xl font-bold mb-16 text-center"
                style={{ color: colors.prussianBlue }}
              >
                Lo que opinan los clientes sobre nuestros servicios
              </h2>
              <div className="relative">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1.5}
                  loop={false}
                  navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3.5,
                    },
                  }}
                  className="relative"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mx-4 first:ml-0 last:mr-0">
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image}
                            alt="Cliente"
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h3
                              className="font-bold"
                              style={{ color: colors.prussianBlue }}
                            >
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-600" style={{ color: colors.textGray }}>{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed" style={{ color: colors.textGray }}>
                          {testimonial.comment}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                  <button
                    className="swiper-button-prev"
                    onClick={handlePrev}
                    style={{
                      display: swiperRef.current?.swiper.isBeginning ? 'none' : 'block',
                    }}
                  >
                    <ChevronLeft
                      className="w-8 h-8"
                      style={{ color: colors.cerulean }}
                    />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                  <button
                    className="swiper-button-next"
                    onClick={handleNext}
                    style={{
                      display: swiperRef.current?.swiper.isEnd ? 'none' : 'block',
                    }}
                  >
                    <ChevronRight
                      className="w-8 h-8"
                      style={{ color: colors.cerulean }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <h2
                className="text-3xl font-bold mb-12 text-center"
                style={{ color: colors.prussianBlue }}
              >
                Preguntas Frecuentes
              </h2>
              <div className="max-w-4xl mx-auto">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className={`mb-4 border rounded-md overflow-hidden ${
                      openItem === index ? 'border-gray-300' : ''
                    }`}
                  >
                    <button
                      className="flex items-center justify-between w-full py-4 px-6 text-left text-gray-800 font-semibold hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => toggleItem(index)}
                      style={{
                        backgroundColor:
                          openItem === index ? colors.white : 'transparent',
                      }}
                    >
                      <span className="text-gray-700" style={{ color: colors.textGray }}>{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200`}
                        style={{
                          color: colors.cerulean,
                          transform:
                            openItem === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>
                    {openItem === index && (
                      <div className="px-6 py-4 text-gray-600 bg-white" style={{ color: colors.textGray }}>
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
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

          {/* Footer */}
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
        </div>
      );
    }

    export default App;
