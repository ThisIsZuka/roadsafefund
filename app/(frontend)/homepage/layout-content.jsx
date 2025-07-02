'use client';

import {
  SwiperCarousel,
  CardNews,
} from '../components/layout/components';
import { FadeInWhenVisible } from '../components/layout/components/FadeInWhenVisible';
import { Container } from '@/components/common/container';
import { NewsCarousel } from './components/news-carousel';
import { Divider } from '../../components/public/divider';
import { EventContent } from './components/event-content';
import { VideoSectionPage } from './components/video-section-page';

export function LayoutContent() {
  return (
    <div className="grid">

      <SwiperCarousel />

      <FadeInWhenVisible delay={0.4}>
        <section
          className="relative w-full bg-no-repeat bg-contain bg-left-bottom bg-white"
          style={{
            backgroundImage: "url('/images/cover/17_new.354150e.png')",
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left bottom',
          }}
        >
          <Container>
            <div className="mx-auto py-12 xl:py-24 min-h-[400px] flex justify-end items-center">
              <div className="bg-white/80 backdrop-blur-sm max-w-2xl p-6 lg:p-10 rounded-xl shadow-xl">
                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">รู้จัก กปถ.</h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  กองทุนเพื่อความปลอดภัยในการใช้รถใช้ถนน (กปถ.) จัดตั้งขึ้นเพื่อส่งเสริมความปลอดภัย ลดอุบัติเหตุบนท้องถนน และสนับสนุนหน่วยงานที่เกี่ยวข้องให้ดำเนินงานด้านความปลอดภัยอย่างต่อเนื่อง
                  กองทุนเพื่อความปลอดภัยในการใช้รถใช้ถนน (กปถ.) จัดตั้งขึ้นเพื่อส่งเสริมความปลอดภัย ลดอุบัติเหตุบนท้องถนน และสนับสนุนหน่วยงานที่เกี่ยวข้องให้ดำเนินงานด้านความปลอดภัยอย่างต่อเนื่อง
                  กองทุนเพื่อความปลอดภัยในการใช้รถใช้ถนน (กปถ.) จัดตั้งขึ้นเพื่อส่งเสริมความปลอดภัย ลดอุบัติเหตุบนท้องถนน และสนับสนุนหน่วยงานที่เกี่ยวข้องให้ดำเนินงานด้านความปลอดภัยอย่างต่อเนื่อง
                  กองทุนเพื่อความปลอดภัยในการใช้รถใช้ถนน (กปถ.) จัดตั้งขึ้นเพื่อส่งเสริมความปลอดภัย ลดอุบัติเหตุบนท้องถนน และสนับสนุนหน่วยงานที่เกี่ยวข้องให้ดำเนินงานด้านความปลอดภัยอย่างต่อเนื่อง
                </p>
                <a
                  href="/"
                  className="inline-block bg-blue-800 text-white px-6 py-2 rounded-full shadow hover:bg-blue-900 transition"
                >
                  อ่านเพิ่มเติม
                </a>
              </div>
            </div>
          </Container>
        </section>
      </FadeInWhenVisible>

      <section className="w-full pt-16 px-6 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">สื่อประชาสัมพันธ์</h2>
            <p className="text-gray-600">ข่าวสารและกิจกรรมล่าสุดจาก กปถ.</p>
          </div>
        </div>
      </section>
      <NewsCarousel />

      <Divider />

      <FadeInWhenVisible delay={0.6}>
        {/* <EventContent /> */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-5 lg:gap-12">
              <Container>
                <EventContent />
              </Container>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* <ContentPage /> */}

      <FadeInWhenVisible delay={0.6}>
        <VideoSectionPage />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.6}>
        <div className='my-10'>
          <CardNews />
        </div>
      </FadeInWhenVisible>

    </div >
  );
}
