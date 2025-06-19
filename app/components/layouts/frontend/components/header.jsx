'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, SquareChevronRight } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Container } from '@/components/common/container';
import { HeaderLogo } from './header-logo';
import { HeaderTopbar } from './header-topbar';
import { SidebarMenu } from './sidebar-menu'; // ✅ เมนู sidebar

export function Header() {
  const { settings } = useSettings();
  const scrollPosition = useScrollPosition();
  const [headerStickyOn, setHeaderStickyOn] = useState(false);
  const [isSidebarSheetOpen, setIsSidebarSheetOpen] = useState(false);

  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsSidebarSheetOpen(false);
  }, [pathname]);

  useEffect(() => {
    const isSticky = scrollPosition > settings.layouts.demo2.headerStickyOffset;
    setHeaderStickyOn(isSticky);
  }, [scrollPosition, settings]);

  useEffect(() => {
    if (headerStickyOn === true) {
      document.body.setAttribute('data-sticky-header', 'on');
    } else {
      document.body.removeAttribute('data-sticky-header');
    }
  }, [headerStickyOn]);

  // if (!isMobile) return null;

  return (
    <>
      <header
        className={cn(
          'flex items-center transition-[height] shrink-0 h-(--header-height) in-data-[sticky-header=on]:pe-[var(--removed-body-scroll-bar-size,0px)]',
          settings.layouts.demo2.headerSticky &&
            headerStickyOn &&
            'transition-[height] fixed z-10 top-0 start-0 end-0 shadow-xs backdrop-blur-md bg-background/70',
        )}
      >
        <Container className="flex justify-between items-center w-full">
          {/* ✅ Left side: menu button (mobile only) + logo */}
          <div className="flex items-center gap-2">
            {isMobile && (
              <Sheet
                open={isSidebarSheetOpen}
                onOpenChange={setIsSidebarSheetOpen}
              >
                <SheetTrigger asChild>
                  <Button variant="ghost" mode="icon">
                    <Menu className="text-muted-foreground/70" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  className="p-0 gap-0 w-[275px]"
                  side="left"
                  close={false}
                >
                  <SheetHeader className="p-0 space-y-0" />
                  <SheetBody className="p-0 overflow-y-auto">
                    <SidebarMenu />
                  </SheetBody>
                </SheetContent>
              </Sheet>
            )}

            <HeaderLogo />
          </div>
        </Container>
      </header>
    </>
  );
}
