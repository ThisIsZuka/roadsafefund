// 'use client';

// import Link from 'next/link';
// import { toAbsoluteUrl } from '@/lib/helpers';
// import { Card } from '@/components/ui/card';

// const CardEvent = ({ image, title, description }) => {
//   return (
//     <Card className="w-[300px] sm:w-[340px] flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 overflow-hidden">

//       <img
//         src={toAbsoluteUrl(`${image}`)}
//         className="rounded-t-xl w-full h-48 object-contain"
//         alt="image"
//       />

//       {/* เนื้อหา */}
//       <div className="px-4 py-3 bg-white">
//         <Link
//           href="#"
//           className="block text-base font-semibold text-gray-800 hover:text-[#7E6BAF] transition-colors duration-200"
//         >
//           {title}
//         </Link>

//         {description && (
//           <p className="text-sm text-gray-500 mt-1 leading-relaxed">{description}</p>
//         )}
//       </div>
//     </Card>
//   );
// };

// export { CardEvent };

'use client';

import Link from 'next/link';

const CardEvent = ({ image, title }) => {
  return (
    <div className="w-[300px] sm:w-[340px] flex-shrink-0 group bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-transparent hover:border-blue-200 flex flex-col h-full overflow-hidden">
      {/* ส่วนรูปแบบ object-contain */}
      <div className="relative w-full h-[220px] bg-white flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay ดำ */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

        {/* ปุ่ม hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <Link
            href="#"
            className="bg-white/90 hover:bg-white text-black px-3 py-1 rounded text-sm font-medium transition"
          >
            เข้าเว็บไซต์
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CardEvent };
