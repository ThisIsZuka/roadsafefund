'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { SubContent } from './content';

export default function Page() {

  return (
    <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            จัดการเนื้อหาคอนเทนต์
          </ToolbarHeading>
        </Toolbar>
      </Container>
      <Container>
        <SubContent />
      </Container>
    </Fragment>
  );
}
