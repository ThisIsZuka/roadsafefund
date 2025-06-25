import React from 'react';

import { Content } from './content';

export default async function AboutPage() {
  await new Promise((r) => setTimeout(r, 1000)); // delay 1 วินาที
  return (
    <div className='p-5'>
      <Content />
    </div>
  );
}