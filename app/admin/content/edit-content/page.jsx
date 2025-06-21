'use client';

import { Fragment, useState } from 'react';
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
import RichTextEditor from './editor';

export default function Page() {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    console.log('🔤 content JSON:', content);
    // ส่งไป API บันทึกลง DB
  };

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

        <div className="">
          <RichTextEditor value={content} onChange={setContent} />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded my-4"
          >
            บันทึก
          </button>
        </div>

      </Container>
    </Fragment>
  );
}
