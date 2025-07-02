'use client';

import { CardEvent } from './card-event';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventContent = () => {
  const items = [
    { title: "ประมูลเลขสวย", image: "/images/event-content/1.jpg" },
    { title: "กิจกรรมเพื่อความปลอดภัย", image: "/images/event-content/2.jpg" },
    { title: "งานช่วยเหลือผู้พิการ", image: "/images/event-content/3.jpg" },
    { title: "งานวิจัยเพื่อความปลอดภัย", image: "/images/event-content/4.jpg" },
    { title: "อบรมความปลอดภัย", image: "/images/event-content/1.jpg" },
    { title: "กิจกรรมเพื่อความปลอดภัย", image: "/images/event-content/2.jpg" },
    { title: "งานช่วยเหลือผู้พิการ", image: "/images/event-content/3.jpg" },
    { title: "งานวิจัยเพื่อความปลอดภัย", image: "/images/event-content/4.jpg" },
  ];

  const renderItem = (item, index) => {
    return (
      <CardEvent
        key={index}
        image={item.image}
        title={item.title}
      />
    );
  };

  return (
    <Card className={"bg-gradient-to-b from-[#F2EEFC] to-[#EDF4FF]"}>
      <div className="text-center my-5">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">กิจกรรมเด่น</h2>
      </div>

      <div className="p-5 lg:p-7.5 lg:pb-7">
        <div className="flex gap-5 overflow-x-auto pb-6 hide-scrollbar mt-1">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>
    </Card>
  );
};

export { EventContent };