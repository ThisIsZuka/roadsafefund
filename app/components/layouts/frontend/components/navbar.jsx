'use client';

import { Container } from '@/components/common/container';
import { NavbarMenu } from './navbar-menu';
// import { MENU_SIDEBAR } from '@/config/menu.config';
import { MENU_SIDEBAR } from '@/config/menu-demo.config';

export function Navbar() {
  const menu = MENU_SIDEBAR.find(m => m.id === 'DEMO');
  return (
    <div className="border-b border-border pb-5 lg:pb-0 mb-5 lg:mb-10">
      <Container className="flex flex-wrap justify-between items-center gap-2">
        <NavbarMenu menu={menu} />
      </Container>
    </div>
  );
}
