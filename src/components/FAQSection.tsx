import React, { useState } from 'react';
    import { ChevronDown } from 'lucide-react';

    interface FAQItem {
      question: string;
      answer: string;
    }

    interface FAQSectionProps {
      faqData: FAQItem[];
      colors: {
        prussianBlue: string;
        textGray: string;
        cerulean: string;
        white: string;
      };
    }

    const FAQSection: React.FC<FAQSectionProps> = ({ faqData, colors }) => {
      const [openItem, setOpenItem] = useState<number | null>(null);

      const toggleItem = (index: number) => {
        setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
      };

      return (
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
      );
    };

    export default FAQSection;
