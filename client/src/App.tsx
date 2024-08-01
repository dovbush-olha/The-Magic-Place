import { AllIdeasPage } from './pages/AllIdeasPage';
import { ServerApiClientProvider } from './lib/trpc.tsx';

export function App() {
  return (
    <ServerApiClientProvider>
      <AllIdeasPage />
    </ServerApiClientProvider>
  );
}
