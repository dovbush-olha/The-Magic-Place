import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '@fontsource-variable/geologica';

import { appRoutes } from './lib/routes/router';
import { ServerApiClientProvider } from './lib/trpc/trpc.tsx';

import './scss/global.scss';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ServerApiClientProvider>
      <RouterProvider router={appRoutes} />
    </ServerApiClientProvider>
  </React.StrictMode>,
);
