import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routeParams, ROUTES } from './lib/routes';
import { ServerApiClientProvider } from './lib/trpc.tsx';
import { AllSpellsPage } from './pages/AllSpellsPage';
import { ViewSpellPage } from './pages/ViewSpellPage';

export function App() {
  return (
    <ServerApiClientProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.allSpellsRoutes()}
            element={<AllSpellsPage />}
          />
          <Route
            path={ROUTES.viewSpellRoute(routeParams.viewSpellParams)}
            element={<ViewSpellPage />}
          />
        </Routes>
      </BrowserRouter>
    </ServerApiClientProvider>
  );
}
