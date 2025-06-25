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
import { ManageMenu } from './content';

export default function MainMenuPage() {

  return (
    <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            จัดการเมนูหลัก
          </ToolbarHeading>
        </Toolbar>
      </Container>
      <Container>
        <ManageMenu />
      </Container>
    </Fragment>
  );
}
