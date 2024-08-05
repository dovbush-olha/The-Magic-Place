import { ServerApiClientProvider } from './lib/trpc.tsx';
import { AllIdeasPage } from './pages/AllIdeasPage';
import { ViewIdeaPage } from './pages/ViewIdeaPage';

export function App() {
  return (
    <ServerApiClientProvider>
      <AllIdeasPage />
      <ViewIdeaPage />
    </ServerApiClientProvider>
  );
}
