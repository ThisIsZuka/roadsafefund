import React from 'react';

export default async function AboutPage() {
  await new Promise((r) => setTimeout(r, 1000)); // delay 1 วินาที
  return <div>About Page</div>;
}