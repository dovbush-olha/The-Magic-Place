import { createBrowserRouter } from 'react-router-dom';
import { SpellsRoute } from 'src/app/routes/router/app-routes/spells-route';
import { ViewSpellRoute } from 'src/app/routes/router/app-routes/view-spell-route';

import { RootRoute } from '@/app/routes/router/app-routes/root-route/root-route.tsx';

import { routeParams, ROUTES } from '../config';

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
