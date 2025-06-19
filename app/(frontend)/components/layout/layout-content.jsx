'use client';

import {
  SwiperCarousel,
  CardNews,
} from './components';

export function LayoutContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">

      <SwiperCarousel />

      <CardNews />
    </div>
  );
}
