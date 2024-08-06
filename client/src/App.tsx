import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES, routesParams } from './lib/routes.ts';
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
            path={ROUTES.viewSpellRoute(routesParams.viewSpellParams)}
            element={<ViewSpellPage />}
          />
        </Routes>
      </BrowserRouter>
    </ServerApiClientProvider>
  );
}
