'use client';

// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { addDays, format } from 'date-fns';
// import { CalendarDays } from 'lucide-react';
// import { useBodyClass } from '@/hooks/use-body-class';
// import { useIsMobile } from '@/hooks/use-mobile';
// import { useSettings } from '@/providers/settings-provider';
// import { Button } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import { Footer } from './components/footer';
// import { Header } from './components/header';
// import { Navbar } from './components/navbar';
// import { Sidebar } from './components/sidebar';
// import { Toolbar, ToolbarActions, ToolbarHeading } from './components/toolbar';

// export function FrontendLayout({ children }) {
//   const isMobile = useIsMobile();
//   const pathname = usePathname();
//   const { setOption } = useSettings();

//   useEffect(() => {
//     // Set current layout
//     setOption('layout', 'frontend');
//   }, [setOption]);

//   useBodyClass(`
//     [--header-height-default:100px]  
//     data-[sticky-header=on]:[--header-height:60px]
//     [--header-height:var(--header-height-default)]	
//   `);

//   const [date, setDate] = useState({
//     from: new Date(2025, 0, 20),
//     to: addDays(new Date(2025, 0, 20), 20),
//   });

//   return (
//     <>
//       <div className="flex grow flex-col in-data-[sticky-header=on]:pt-(--header-height-default)">
//         {/* <Header /> */}
//         {isMobile && <Header />}

//         {!isMobile && <Navbar />}

//         <main className="grow " role="content">
//           {children}
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { addDays, format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { useBodyClass } from '@/hooks/use-body-class';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import { Toolbar, ToolbarActions, ToolbarHeading } from './components/toolbar';

export function FrontendLayout({ children }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const { setOption } = useSettings();

  useEffect(() => {
    // Set current layout
    setOption('layout', 'frontend');
  }, [setOption]);

  // กำหนดคลาสสำหรับ body และตัวแปร CSS สำหรับความสูงของ Header และ Navbar
  useBodyClass(`
    [--header-height-default:100px]  
    data-[sticky-header=on]:[--header-height:60px]
    [--header-height:var(--header-height-default)]  
    [--navbar-height:100px] 
  `);


  return (
    <>
      <div className="flex grow flex-col">
        {/* แสดง Header สำหรับอุปกรณ์มือถือ */}
        {isMobile && <Header />}

        {/* แสดง Navbar สำหรับอุปกรณ์ที่ไม่ใช่โทรศัพท์มือถือ (เดสก์ท็อป) */}
        {!isMobile && (
          // div นี้ทำให้ Navbar อยู่กับที่ด้านบน
          <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-[var(--navbar-height)]">
            <Navbar />
          </div>
        )}

        {/* div ตัวเว้นช่องว่างเพื่อดันเนื้อหาลงมาเมื่อ Navbar ถูกตรึงอยู่ด้านบนสำหรับเดสก์ท็อป */}
        {!isMobile && <div className="h-[var(--navbar-height)]" />}

        {/* ส่วนเนื้อหาหลัก จะขยายเพื่อเติมพื้นที่ว่าง */}
        <main className="grow h-[var(--navbar-height)]" role="content">
          {children}

          <Footer />
        </main>
      </div>
    </>
  );
}