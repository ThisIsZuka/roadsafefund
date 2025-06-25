'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCarousel = () => {
  return (
    <div className="relative group overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {/* ✅ Slide with image */}
        <SwiperSlide>
          <img
            src="/images/cover/470674431_995201292638893_1654087712700926781_n.jpg"
            className="w-full h-full object-contain"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/cover/172129454563_hilight.jpg"
            className="w-full h-full object-contain"
            alt="slide2"
          />
        </SwiperSlide>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-black !left-4 !hidden group-hover:!flex" />
        <div className="swiper-button-next !text-black !right-4 !hidden group-hover:!flex" />
      </Swiper>
    </div>
  );
}

export { SwiperCarousel };
