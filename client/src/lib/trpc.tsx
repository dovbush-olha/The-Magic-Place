import type { AppRouter } from '@magic-place/server/src/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';

export const serverApiClient = createTRPCReact<AppRouter>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const serverApiClientInstance = serverApiClient.createClient({
  links: [httpBatchLink({ url: 'http://localhost:3000/api' })],
});

export const ServerApiClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <serverApiClient.Provider
      client={serverApiClientInstance}
      queryClient={queryClient}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </serverApiClient.Provider>
  );
};
