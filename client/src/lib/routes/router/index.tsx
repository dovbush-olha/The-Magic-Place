import { createBrowserRouter } from 'react-router-dom';
import { AllSpellsPage } from 'src/pages/all-spells-page';
import { ViewSpellPage } from 'src/pages/view-spell-page';

import { Root } from '@/pages/root/root.tsx';

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
