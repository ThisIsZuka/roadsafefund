'use client';

import Link from 'next/link';
import { CardImage } from '@/main/cards';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Container } from '@/components/common/container';

import { SquareSigma } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';

const CardNews = () => {
  const items = [
    {
      image: '6.jpg',
      title: 'หัวข้อเรื่องที่ 1',
    },
    {
      image: '7.jpg',
      title: 'หัวข้อเรื่องที่ 2',
    },
    {
      image: '8.jpg',
      title: 'หัวข้อเรื่องที่ 3',
    },
    {
      image: '10.jpg',
      title: 'หัวข้อเรื่องที่ 4',
    },
    // {
    //   image: '11.jpg',
    //   title: 'หัวข้อเรื่องที่ 5',
    // },
  ];

  // const renderItems = (item, index) => (
  //   <Card key={index} className="shadow-none m-2">
  //     <div
  //       className="rounded-t-xl w-full sm:w-[280px] h-[240px] bg-cover bg-center"
  //       style={{
  //         backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600/${item.image}`)})`,
  //       }}
  //     ></div>
  //     <div className="card-border card-rounded-b px-3.5 pt-5 pb-3.5">
  //       <div className="text-center">
  //         <Link
  //           href="#"
  //           className="block font-medium text-mono hover:text-primary text-base leading-4 mb-2"
  //         >
  //           {item.title}
  //         </Link>
  //       </div>
  //     </div>
  //   </Card>
  // );

  const renderItems = (item, index) => (
    <Card
      key={index}
      className="w-full shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 mt-4"
    >

      <div className="rounded-t-xl relative overflow-hidden w-full h-[240px]">
        {/* ✅ Image */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
          style={{
            backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600/${item.image}`)})`,
          }}
        ></div>

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* ✅ อ่านต่อ */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <Link
            href="#"
            className="bg-white/90 hover:bg-white text-black px-3 py-1 rounded text-sm font-medium"
          >
            อ่านต่อ
          </Link>
        </div>
      </div>

      {/* ถ้ามี title */}
      <div className="card-border card-rounded-b px-3.5 pt-5 pb-3.5">
        <div className="text-center">
          <Link
            href="#"
            className="block font-medium text-mono hover:text-primary text-base leading-4 mb-2 transition-colors"
          >
            {item.title}
          </Link>
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <Container>
        {/* <Card> */}
        <CardHeader>
          <CardTitle>หัวข้อที่น่าสนใจ</CardTitle>
          <Button mode="link" underlined="dashed" asChild>
            <Link href="/">View All</Link>
          </Button>
        </CardHeader>

        {/* ✅ Content area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {items.map(renderItems)}
        </div>

        {/* </Card> */}
      </Container>
    </>
  );
};

export { CardNews };
