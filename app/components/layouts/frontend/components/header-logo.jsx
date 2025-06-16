'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { MENU_ROOT } from '@/config/menu.config';
import { toAbsoluteUrl } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function HeaderLogo({ height }) {
  const pathname = usePathname();
  // const [selectedMenuItem, setSelectedMenuItem] = useState(MENU_ROOT[1]);

  // useEffect(() => {
  //   MENU_ROOT.forEach((item) => {
  //     if (item.rootPath && pathname.includes(item.rootPath)) {
  //       setSelectedMenuItem(item);
  //     }
  //   });
  // }, [pathname]);

  const logoHeight = height || '80px';

  return (
    <div className="flex items-center gap-2 lg:gap-5 2xl:-ms-[60px]">
      {/* Logo Section */}
      <Link href="/" className="shrink-0">
        <img
          src={toAbsoluteUrl('/images/logo_ed_fw.fw.png')}
          className="dark:hidden"
          style={{ height: logoHeight }}
          alt="logo"
        />
      </Link>

      {/* Menu Section */}
      {/* <div className="flex items-center gap-3">
        <h3 className="text-accent-foreground text-base hidden md:block">
          Metronic Team
        </h3>
      </div> */}
    </div>
  );
}
