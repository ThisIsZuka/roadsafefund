import { Fragment } from 'react';
import { CreateTeam } from '@/partials/common/create-team';
import { toAbsoluteUrl } from '@/lib/helpers';

export function LayoutContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        AdminLayout
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        Admin
      </div>
    </div>
  );
}
