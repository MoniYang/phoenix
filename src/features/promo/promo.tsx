// PromoSwiper.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type PromoSwiperProps = {
items: string[];
  img?: string;
  minH?: string;
};



const PromoSwiper: React.FC<PromoSwiperProps> = ({ items }) => {

  return (
    <section
      className="flex flex-initial min-w-0 p-4"
    >
      <Swiper
        className="mySwiper"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-tr-2xl">
              <img
                className="rounded-[inherit] w-full"
                src={item}
                alt={item}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PromoSwiper;
