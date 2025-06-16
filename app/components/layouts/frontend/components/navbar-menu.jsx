'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMenu } from '@/hooks/use-menu';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';

// 👇 component ย่อยที่เราจะใช้
function NavbarDropdownMenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { isActive, hasActiveChild } = useMenu(pathname);

  return (
    <MenubarMenu open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <MenubarTrigger
          className={cn(
            'flex items-center gap-1 px-0 py-3.5 text-sm text-secondary-foreground text-nowrap',
            'rounded-none border-b-2 border-transparent bg-transparent!',
            'hover:text-mono hover:bg-transparent',
            'focus:text-mono focus:bg-transparent',
            'data-[state=open]:bg-transparent data-[state=open]:text-mono',
            'data-[here=true]:text-mono data-[here=true]:border-mono',
          )}
          data-active={isActive(item.path) || undefined}
          data-here={hasActiveChild(item.children) || undefined}
        >
          {item.title}
          <ChevronDown className="ms-auto size-3.5!" />
        </MenubarTrigger>
        <MenubarContent className="min-w-[175px]" sideOffset={0}>
          {item.children &&
            item.children.map((child, index) =>
              child.children ? (
                <NavbarSubMenu key={index} item={child} />
              ) : (
                <MenubarItem
                  key={index}
                  asChild
                  data-active={isActive(child.path) || undefined}
                  className={cn(
                    'hover:text-mono hover:bg-transparent',
                    'focus:text-white focus:bg-[#7E6BAF]',
                  )}
                >
                  <Link href={child.path || ''}>{child.title}</Link>
                </MenubarItem>
              ),
            )}
        </MenubarContent>
      </div>
    </MenubarMenu>
  );
}

// 👇 sub menu ซ้อนอีกระดับ (level 2+)
function NavbarSubMenu({ item }) {
  const pathname = usePathname();
  const { isActive, hasActiveChild } = useMenu(pathname);

  return (
    <MenubarSub>
      <MenubarSubTrigger
        data-active={isActive(item.path) || undefined}
        data-here={hasActiveChild(item.children) || undefined}
      >
        <span>{item.title}</span>
      </MenubarSubTrigger>
      <MenubarSubContent className="min-w-[175px] left-full ml-2">
        {item.children?.map((child, index) =>
          child.children ? (
            <NavbarSubMenu key={index} item={child} />
          ) : (
            <MenubarItem
              key={index}
              asChild
              data-active={isActive(child.path) || undefined}
            >
              <Link href={child.path || ''}>{child.title}</Link>
            </MenubarItem>
          ),
        )}
      </MenubarSubContent>
    </MenubarSub>
  );
}

export function NavbarMenu({ menu }) {
  const pathname = usePathname();
  const { isActive, hasActiveChild } = useMenu(pathname);

  if (!menu?.children) return null;

  return (
    <div className="grid">
      <div className="kt-scrollable-x-auto flex items-stretch">
        <Menubar className="space-x-0 flex items-stretch border-none bg-transparent gap-5 p-0 h-auto">
          {menu.children.map((item, index) =>
            item.children ? (
              <NavbarDropdownMenuItem key={index} item={item} />
            ) : (
              <MenubarMenu key={index}>
                <MenubarTrigger
                  asChild
                  className={cn(
                    'flex items-center px-2 py-3.5 text-sm text-secondary-foreground px-3 text-nowrap',
                    'rounded-none border-b-2 border-transparent bg-transparent!',
                    'hover:text-mono hover:bg-transparent',
                    'focus:text-mono focus:bg-transparent',
                    'data-[active=true]:text-mono data-[active=true]:border-[#7E6BAF]',
                  )}
                >
                  <Link
                    href={item.path || ''}
                    data-active={isActive(item.path) || undefined}
                  >
                    {item.title}
                  </Link>
                </MenubarTrigger>
              </MenubarMenu>
            ),
          )}
        </Menubar>
      </div>
    </div>
  );
}
