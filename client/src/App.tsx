import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ServerApiClientProvider } from './lib/trpc.tsx';
import { AllSpellsPage } from './pages/AllSpellsPage';
import { ViewSpellPage } from './pages/ViewSpellPage';

export function App() {
  return (
    <ServerApiClientProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/spells"
            element={<AllSpellsPage />}
          />
          <Route
            path="/spells/:spellName"
            element={<ViewSpellPage />}
          />
        </Routes>
      </BrowserRouter>
    </ServerApiClientProvider>
  );
}
