import React, { useState, useRef, useEffect } from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation } from 'swiper/modules';
    import { ChevronLeft, ChevronRight } from 'lucide-react';
    import 'swiper/css';
    import 'swiper/css/navigation';

    interface Testimonial {
      name: string;
      role: string;
      image: string;
      comment: string;
    }

    interface TestimonialsSectionProps {
      testimonials: Testimonial[];
      colors: {
        prussianBlue: string;
        textGray: string;
        cerulean: string;
      };
    }

    const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials, colors }) => {
      const swiperRef = useRef<any>(null);
      const [isBeginning, setIsBeginning] = useState(true);
      const [isEnd, setIsEnd] = useState(false);

      useEffect(() => {
        if (swiperRef.current) {
          const swiperInstance = swiperRef.current.swiper;
          swiperInstance.on('slideChange', () => {
            setIsBeginning(swiperInstance.isBeginning);
            setIsEnd(swiperInstance.isEnd);
          });
          setIsBeginning(swiperInstance.isBeginning);
          setIsEnd(swiperInstance.isEnd);
        }
      }, []);

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
        <section className="container mx-auto py-20 bg-white rounded-3xl my-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
              style={{ color: colors.prussianBlue }}
            >
              Lo que opinan los clientes sobre nuestros servicios
            </h2>
            <div className="relative">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1.2}
                loop={false}
                navigation={false}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 50,
                  },
                }}
                className="relative"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mx-2 first:ml-0 last:mr-0">
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
                    display: isBeginning ? 'none' : 'block',
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
                    display: isEnd ? 'none' : 'block',
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
      );
    };

    export default TestimonialsSection;
