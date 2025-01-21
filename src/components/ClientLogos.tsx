import React from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Autoplay } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/autoplay';

    interface ClientLogo {
      name: string;
      logo: string;
    }

    interface ClientLogosProps {
      logos: ClientLogo[];
    }

    const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
      return (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="relative"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
        >
          {logos.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="h-32 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-20 w-auto object-contain transition-all"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    };

    export default ClientLogos;
