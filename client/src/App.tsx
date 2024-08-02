import { ServerApiClientProvider } from './lib/trpc.tsx';
import { AllIdeasPage } from './pages/AllIdeasPage';

export function App() {
  return (
    <ServerApiClientProvider>
      <AllIdeasPage />
    </ServerApiClientProvider>
  );
}
