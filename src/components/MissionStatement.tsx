import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

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
    cerulean: string;
  };
}

const MissionStatement: React.FC<MissionStatementProps> = ({ cardData, colors }) => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        {/* Encabezado con animación */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: colors.prussianBlue }}
          >
            Trabajamos codo a codo con nuestros clientes «socios estratégicos»
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl line-clamp-2"
            style={{ color: colors.textGray }}
          >
            Buscando soluciones a medida en el desarrollo integral de sus negocios
          </motion.p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {cardData.map((card, index) => (
            <Card
              key={card.title}
              {...card}
              index={index}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  question,
  description,
  index,
  colors
}: CardData & { index: number; colors: MissionStatementProps['colors'] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l border-gray-200",
        index < 4 && "lg:border-b border-gray-200"
      )}
    >
      {/* Efecto de gradiente en hover */}
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}

      {/* Contenido de la tarjeta */}
      <div className="px-10 h-full flex flex-col">
        {/* Icono */}
        <div className="mb-4 relative z-10 text-blue-600">
          {icon}
        </div>

        {/* Título con barra lateral animada */}
        <div className="text-lg font-bold mb-2 relative z-10">
          <div className="absolute left-0 -ml-10 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span 
            className="group-hover/feature:translate-x-2 transition duration-200 inline-block"
            style={{ color: colors.prussianBlue }}
          >
            {title}
          </span>
        </div>

        {/* Pregunta con altura fija */}
        <div 
          className="text-sm italic mb-3 min-h-[40px] line-clamp-2 relative z-10"
          style={{ color: colors.textGray }}
        >
          {question}
        </div>

        {/* Descripción con altura fija */}
        <div 
          className="text-sm leading-relaxed min-h-[80px] relative z-10"
          style={{ color: colors.textGray }}
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default MissionStatement;