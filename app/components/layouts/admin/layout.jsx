'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { addDays, format } from 'date-fns';
import { CalendarDays, Download } from 'lucide-react';
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
import { StoreClientTopbar } from '@/app/admin/store-client/components/common/topbar';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Toolbar, ToolbarActions, ToolbarHeading } from './components/toolbar';

const AdminLayout = ({ children }) => {
  const isMobile = useIsMobile();
  const { setOption } = useSettings();
  
  useBodyClass(`
    [--header-height:60px]
    [--sidebar-width:270px]
    lg:overflow-hidden
    bg-muted!
  `);

  useEffect(() => {
    setOption('layout', 'admin');
  }, [setOption]);

  return (
    <>
      <div className="flex grow">
        {!isMobile && <Sidebar />}

        {isMobile && <Header />}

        <div className="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
          <div className="flex flex-col grow items-stretch rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-[15px] m-[15px]">
            <div className="flex flex-col grow kt-scrollable-y-auto [--kt-scrollbar-width:auto] pt-5">
              <main className="grow" role="content">
                {children}
              </main>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminLayout };
