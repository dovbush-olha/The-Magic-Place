import { Suspense } from 'react';

import { Spinner } from '@/components/ui/spinner';
import { ServerApiClientProvider } from '@/lib/trpc/trpc.tsx';

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={<Spinner isLoading={true} />}>
      <ServerApiClientProvider>{children}</ServerApiClientProvider>
    </Suspense>
  );
}
