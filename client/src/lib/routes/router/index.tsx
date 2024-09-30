import { createBrowserRouter } from 'react-router-dom';

import { AllSpellsPage } from '@/features/all-spells-page';
import { Root } from '@/features/root/root.tsx';
import { ViewSpellPage } from '@/features/view-spell-page';

import { routeParams, ROUTES } from '../config';

type Router = ReturnType<typeof createBrowserRouter>;

export const appRoutes: Router = createBrowserRouter([
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
