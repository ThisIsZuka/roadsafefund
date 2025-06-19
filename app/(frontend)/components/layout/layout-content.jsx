'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BlockList } from '../../account/security/privacy-settings/components/block-list';
import { ReportSettings } from '../../account/security/privacy-settings/components/report-settings';
import { EntryCallout, Teams } from '../demo1/light-sidebar';
import { Integrations, ManageData, MyBalance, Options } from './components';

import {
  SwiperCarousel,
  CardNews,
} from './components';

export function LayoutContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">

      <SwiperCarousel />

      <CardNews />
    </div>
  );
}
