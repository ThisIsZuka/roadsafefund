'use client';

import { useState } from 'react';
import { StoreClientCartSheet } from '@/app/admin/store-client/components/sheets/cart-sheet';
import { SearchResults } from '@/app/admin/store-client/search-results-grid/components/search-results';

export function CartContent() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <SearchResults mode="card" />
      <StoreClientCartSheet open={open} onOpenChange={() => setOpen(false)} />
    </>
  );
}
