import { createBrowserRouter, Outlet } from 'react-router-dom';

import { AllSpellsPage } from '../../../pages/AllSpellsPage';
import { ViewSpellPage } from '../../../pages/ViewSpellPage';
import { routeParams, ROUTES } from '../config';

export const appRoutes = createBrowserRouter([
  {
    path: ROUTES.homeRoute(),
    element: <Outlet />,
    children: [
      {
        path: ROUTES.allSpellsRoutes(),
        element: <AllSpellsPage />,
      },
      {
        path: ROUTES.viewSpellRoute(routeParams.viewSpellParams),
        element: <ViewSpellPage />,
      },
    ],
  },
]);
