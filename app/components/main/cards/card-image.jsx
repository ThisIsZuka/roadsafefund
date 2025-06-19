'use client';

import Link from 'next/link';
import { SquareSigma } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Card } from '@/components/ui/card';

const CardImage = ({ image, id, title, info, date }) => {
  return (
    <Card className="shadow-none m-2">
      <div
        className="rounded-t-xl w-full sm:w-[300px] h-[240px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600/${image}`)})`,
        }}
      ></div>
      <div className="card-border card-rounded-b px-3.5 pt-5 pb-3.5">
        <div className="text-center">
          <Link
            href="#"
            className="block font-medium text-mono hover:text-primary text-base leading-4 mb-2"
          >
            {title}
          </Link>
        </div>
      </div>
    </Card>
  );
};

export { CardImage };
