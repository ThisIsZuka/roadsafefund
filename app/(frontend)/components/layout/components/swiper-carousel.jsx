'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCarousel = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border bg-white">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000 }}
        loop={true}
        className="w-full h-100"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center h-full bg-primary text-white text-xl font-bold">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-full bg-secondary text-white text-xl font-bold">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-full bg-destructive text-white text-xl font-bold">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export { SwiperCarousel };
