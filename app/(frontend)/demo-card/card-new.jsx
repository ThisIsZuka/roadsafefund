'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/common/container';
import { toAbsoluteUrl } from '@/lib/helpers';
import { CalendarDays, Folder } from 'lucide-react';

const CardNews = () => {
  const items = [
    {
      image: '6.jpg',
      title: 'หัวข้อเรื่องที่ 1',
      category: 'ความปลอดภัย',
      date: '2 ชั่วโมงที่แล้ว',
    },
    {
      image: '7.jpg',
      title: 'หัวข้อเรื่องที่ 2',
      category: 'กิจกรรม',
      date: 'เมื่อวาน',
    },
    {
      image: '8.jpg',
      title: 'หัวข้อเรื่องที่ 3',
      category: 'ข่าวประชาสัมพันธ์',
      date: '2 วันที่แล้ว',
    },
    {
      image: '10.jpg',
      title: 'หัวข้อเรื่องที่ 4',
      category: 'บทความ',
      date: '1 สัปดาห์ที่แล้ว',
    },
    {
      image: '11.jpg',
      title: 'หัวข้อเรื่องที่ 5',
      category: 'นโยบาย',
      date: '3 วันก่อน',
    },
  ];

  return (
    <Container>
      <CardHeader className="mb-4">
        <CardTitle className="text-xl font-semibold">หัวข้อที่น่าสนใจ</CardTitle>
      </CardHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            className="group overflow-hidden border rounded-xl transition hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={toAbsoluteUrl(`/media/images/600x600/${item.image}`)}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay "อ่านต่อ" */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href="#"
                  className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100"
                >
                  อ่านต่อ
                </Link>
              </div>
            </div>

            <CardContent className="p-4">
              {/* Category */}
              <div className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                <Folder className="w-4 h-4" />
                <span>{item.category}</span>
              </div>

              {/* Title */}
              <Link
                href="#"
                className="font-semibold text-base text-gray-800 hover:text-primary transition-colors line-clamp-2"
              >
                {item.title}
              </Link>

              {/* Date */}
              <div className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                <CalendarDays className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export { CardNews };
