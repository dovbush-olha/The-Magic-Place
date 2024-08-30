import { createBrowserRouter } from 'react-router-dom';

import { AllSpellsPage } from '@/pages/AllSpellsPage';
import { Root } from '@/pages/Root/Root.tsx';
import { ViewSpellPage } from '@/pages/ViewSpellPage';

import { routeParams, ROUTES } from '../config';

export const appRoutes = createBrowserRouter([
  {
    path: ROUTES.homeRoute(),
    element: <Root />,
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
