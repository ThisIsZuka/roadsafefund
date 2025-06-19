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

export function LayoutContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Accordion type="single" collapsible className="w-full lg:w-[75%]">
        <AccordionItem value="crudhunt-1">
          <AccordionTrigger>What is Crudhunt?</AccordionTrigger>
          <AccordionContent>
            Crudhunt provides ready-to-use CRUD examples for developers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="crudhunt-2">
          <AccordionTrigger>Who benefits from Crudhunt?</AccordionTrigger>
          <AccordionContent>
            Developers looking to save time with pre-built CRUD solutions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="crudhunt-3">
          <AccordionTrigger>Why choose Crudhunt?</AccordionTrigger>
          <AccordionContent>
            Crudhunt simplifies development with plug-and-play CRUDs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
            <Options />
          </div>
        </div>
        <div className="lg:col-span-1">
          <MyBalance className="h-full" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <EntryCallout className="h-full" />
        </div>
        <div className="lg:col-span-1">
          <ReportSettings className="h-full" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <Integrations />
        </div>
        <div className="lg:col-span-1">
          <BlockList
            className="h-full"
            text="Users on the block list are unable to send chat requests or messages to you anymore, ever, or again"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <Teams />
        </div>
        <div className="lg:col-span-1">
          <ManageData className="h-full" />
        </div>
      </div>
    </div>
  );
}
