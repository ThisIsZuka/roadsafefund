'use client';

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

  useBodyClass(`
    [--header-height-default:100px]  
    data-[sticky-header=on]:[--header-height:60px]
    [--header-height:var(--header-height-default)]	
  `);

  const [date, setDate] = useState({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });

  return (
    <>
      <div className="flex grow flex-col in-data-[sticky-header=on]:pt-(--header-height-default)">
        {/* <Header /> */}
        {isMobile && <Header />}

        {!isMobile && <Navbar />}

        <main className="grow " role="content">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
