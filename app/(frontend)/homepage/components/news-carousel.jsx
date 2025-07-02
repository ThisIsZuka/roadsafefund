'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./homepage.css"
import { useIsMobile } from '@/hooks/use-mobile';

const newsList = [
    {
        title: 'กรมการขนส่งทางบก ได้จัดการประมูลทะเบียนรถพิเศษ',
        date: '21 ธันวาคม 2567',
        image: '/media/images/600x400/1.jpg',
    },
    {
        title: 'สำนักงานกองทุนเพื่อความปลอดภัยในการใช้รถใช้ถนน จัดกิจกรรมภาคเหนือ',
        date: '20 ธันวาคม 2567',
        image: '/media/images/600x400/2.jpg',
    },
    {
        title: 'กปถ. เข้ารับรางวัลทุนหมุนเวียนดีเด่น ประจำปี 2567',
        date: '15 ธันวาคม 2567',
        image: '/media/images/600x400/3.jpg',
    },
    {
        title: 'กปถ. จัดประชุมหมวดอักษร 3ขู และ 3ฒ ณ กระทรวงคมนาคม',
        date: '14 ธันวาคม 2567',
        image: '/media/images/600x400/4.jpg',
    },
    {
        title: 'กปถ. เข้ารับรางวัลทุนหมุนเวียนดีเด่น ประจำปี 2567',
        date: '15 ธันวาคม 2567',
        image: '/media/images/600x400/5.jpg',
    },
    {
        title: 'กปถ. จัดประชุมหมวดอักษร 3ขู และ 3ฒ ณ กระทรวงคมนาคม',
        date: '14 ธันวาคม 2567',
        image: '/media/images/600x400/6.jpg',
    },
    {
        title: 'กปถ. เข้ารับรางวัลทุนหมุนเวียนดีเด่น ประจำปี 2567',
        date: '15 ธันวาคม 2567',
        image: '/media/images/600x400/7.jpg',
    },
    {
        title: 'กปถ. จัดประชุมหมวดอักษร 3ขู และ 3ฒ ณ กระทรวงคมนาคม',
        date: '14 ธันวาคม 2567',
        image: '/media/images/600x400/8.jpg',
    },
];

export function NewsCarousel() {
  const isMobile = useIsMobile();

  return (
    <div className="relative overflow-hidden mx-5">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={isMobile ? 24 : 24}
        slidesPerView={isMobile ? 1 : 4}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {newsList.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="lg:mx-0 mb-[3rem] group bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-transparent hover:border-blue-200 flex flex-col h-full">
              <div className="relative overflow-hidden w-full h-[240px] rounded-t-xl">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${news.image})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a
                    href="#"
                    className="bg-white/90 hover:bg-white text-black px-3 py-1 rounded text-sm font-medium"
                  >
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-blue-900 mb-2 leading-snug h-[3rem] overflow-hidden">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{news.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-black !left-4 !hidden lg:group-hover:!flex" />
        <div className="swiper-button-next !text-black !right-4 !hidden lg:group-hover:!flex" />
      </Swiper>
    </div>
  );
}
