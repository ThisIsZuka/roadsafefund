'use client';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useSettings } from '@/providers/settings-provider';

const containerVariants = cva('w-full mx-auto px-4 lg:px-8 2xl:px-12', {
  variants: {
    width: {
      fixed: 'max-w-[1600px]',
      fluid: '',
    },
  },
  defaultVariants: {
    width: 'fixed',
  },
});

export function Container({ children, width, className = '' }) {
  const { settings } = useSettings();
  const effectiveWidth = width ?? settings.container ?? 'fixed';

  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ width: effectiveWidth }), className)}
    >
      {children}
    </div>
  );
}
