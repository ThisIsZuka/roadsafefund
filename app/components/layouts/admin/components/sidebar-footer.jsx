'use client';

import { ChatSheet } from '@/partials/topbar/chat-sheet';
import { NotificationsSheet } from '@/partials/topbar/notifications-sheet';
// import { UserDropdownMenu } from '@/partials/topbar/user-dropdown-menu';
import { UserDropdownMenu } from './partials/topbar/user-dropdown-menu';
import { MessageCircleMore, MessageSquareDot } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';

export function SidebarFooter() {
  return (
    <div className="flex flex-center justify-between shrink-0 ps-4 pe-3.5 h-14">
      <UserDropdownMenu
        trigger={
          <img
            className="size-9 rounded-full border-2 border-secondary shrink-0 cursor-pointer"
            src={toAbsoluteUrl('/images/admin-avatar.png')}
            alt="User Avatar"
          />
        }
      />
    </div>
  );
}
