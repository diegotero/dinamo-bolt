import { cn } from "../../lib/utils";
import {
  IconBriefcase,
  IconUsers,
  IconChartBar,
  IconBulb,
  IconTarget,
  IconCertificate,
  IconClockHour4,
  IconHandshake,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Consultoría Estratégica",
      description:
        "Desarrollamos estrategias personalizadas para optimizar procesos y potenciar el crecimiento de tu empresa.",
      icon: <IconBriefcase className="w-6 h-6" />,
    },
    {
      title: "Gestión de Talento",
      description:
        "Formamos equipos de alto rendimiento y desarrollamos líderes para impulsar el éxito de tu organización.",
      icon: <IconUsers className="w-6 h-6" />,
    },
    {
      title: "Análisis de Resultados",
      description:
        "Implementamos métricas y KPIs efectivos para una toma de decisiones basada en datos reales.",
      icon: <IconChartBar className="w-6 h-6" />,
    },
    {
      title: "Innovación Empresarial",
      description:
        "Identificamos oportunidades de mejora y aplicamos soluciones innovadoras para destacar en el mercado.",
      icon: <IconBulb className="w-6 h-6" />,
    },
    {
      title: "Objetivos Claros",
      description:
        "Establecemos metas alcanzables y diseñamos planes de acción concretos para lograrlas.",
      icon: <IconTarget className="w-6 h-6" />,
    },
    {
      title: "Experiencia Comprobada",
      description:
        "Más de 15 años transformando PyMEs con resultados tangibles y casos de éxito documentados.",
      icon: <IconCertificate className="w-6 h-6" />,
    },
    {
      title: "Eficiencia Operativa",
      description:
        "Optimizamos tiempos y recursos para maximizar la productividad de tu empresa.",
      icon: <IconClockHour4 className="w-6 h-6" />,
    },
    {
      title: "Acompañamiento Continuo",
      description:
        "Te guiamos en cada paso del proceso, asegurando la implementación exitosa de las mejoras.",
      icon: <IconHandshake className="w-6 h-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};