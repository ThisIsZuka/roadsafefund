'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCarousel = () => {
  return (
    <div className="overflow-hidden shadow-sm border bg-white">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[300px] lg:h-[600px]"
      >
        {/* ✅ Slide with image */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/slide1.jpg')" }}
          >
            <div className="w-full h-full bg-black/30 flex items-center justify-center text-white text-xl font-bold">
              Slide 1
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/slide2.jpg')" }}
          >
            <div className="w-full h-full bg-black/30 flex items-center justify-center text-white text-xl font-bold">
              Slide 2
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/slide3.jpg')" }}
          >
            <div className="w-full h-full bg-black/30 flex items-center justify-center text-white text-xl font-bold">
              Slide 3
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export { SwiperCarousel };
