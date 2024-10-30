import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { Spinner } from '@/components/ui/spinner';
import { ServerApiClientProvider } from '@/lib/trpc/trpc.tsx';

type AppProviderProps = {
  readonly children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={<Spinner isLoading={true} />}>
      <HelmetProvider>
        <ServerApiClientProvider>{children}</ServerApiClientProvider>
      </HelmetProvider>
    </Suspense>
  );
}
