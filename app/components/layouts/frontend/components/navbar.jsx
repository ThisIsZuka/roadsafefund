'use client';

import { Container } from '@/components/common/container';
import { HeaderLogo } from './header-logo'; // ✅ import logo component
import { NavbarMenu } from './navbar-menu';
import { MENU_SIDEBAR } from '@/config/menu-demo.config';

export function Navbar() {
  const menu = MENU_SIDEBAR.find((m) => m.id === 'DEMO');

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-muted backdrop-blur-sm bg-muted/80">
      <Container>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* ✅ LOGO (ซ้าย) */}
          <HeaderLogo height="100px" />

          {/* ✅ เมนู (ขวา) */}
          <NavbarMenu menu={menu} />
        </div>
      </Container>
    </div>
  );
}
