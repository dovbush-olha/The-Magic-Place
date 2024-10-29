import { createBrowserRouter } from 'react-router-dom';

import { RootRoute } from '@/app/routes/router/app-routes/root-route/root-route.tsx';
import { SpellsRoute } from '@/app/routes/router/app-routes/spells-route';
import { ViewSpellRoute } from '@/app/routes/router/app-routes/view-spell-route';

import { routeParams, ROUTES } from '../../../config/routes';

type Router = ReturnType<typeof createBrowserRouter>;

export const appRoutes: Router = createBrowserRouter([
  {
    path: ROUTES.homeRoute(),
    element: <RootRoute />,
    children: [
      {
        path: ROUTES.allSpellsRoutes(),
        element: <SpellsRoute />,
      },
      {
        path: ROUTES.viewSpellRoute(routeParams.viewSpellParams),
        element: <ViewSpellRoute />,
      },
    ],
  },
]);
