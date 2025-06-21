'use client';

import { useParams } from 'next/navigation';

export default function DemoPage() {
  const params = useParams();
  const slug = params.demo; // เช่น demo-1, demo-abc

  return (
    <div>
      <h1>Demo Page</h1>
      <p>You are on: <strong>{slug}</strong></p>
    </div>
  );
}
