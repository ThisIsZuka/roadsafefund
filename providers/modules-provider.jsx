'use client';

import { StoreClientProvider } from '@/app/admin/store-client/components/context';
import { StoreClientWrapper } from '@/app/admin/store-client/components/wrapper';

export function ModulesProvider({ children }) {
  return (
    <StoreClientProvider>
      <StoreClientWrapper>{children}</StoreClientWrapper>
    </StoreClientProvider>
  );
}
