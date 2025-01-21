import React from 'react';
    import {
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
    } from 'lucide-react';
    import Navigation from './components/Navigation';
    import HeroSection from './components/HeroSection';
    import ServiceCards from './components/ServiceCards';
    import MissionStatement from './components/MissionStatement';
    import StatsSection from './components/StatsSection';
    import TestimonialsSection from './components/TestimonialsSection';
    import FAQSection from './components/FAQSection';
    import ContactSection from './components/ContactSection';
    import { Footer } from './components/Footer';

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
      return (
        <div
          className="min-h-screen"
          style={{ background: `linear-gradient(to bottom, ${colors.white}, #f0f0f0)` }}
        >
          <Navigation colors={colors} />
          <HeroSection colors={colors} clientLogos={clientLogos} />
          <ServiceCards serviceCards={serviceCards} colors={colors} />
          <MissionStatement cardData={cardData} colors={colors} />
          <StatsSection colors={colors} />
          <TestimonialsSection testimonials={testimonials} colors={colors} />
          <FAQSection faqData={faqData} colors={colors} />
          <ContactSection colors={colors} />
          <Footer colors={colors} />
        </div>
      );
    }

    export default App;
