import { RouterProvider } from 'react-router-dom';

import { AppProvider } from '@/app/provider.tsx';
import { appRoutes } from '@/app/routes/router';

export function App() {
  return (
    <AppProvider>
      <RouterProvider router={appRoutes} />
    </AppProvider>
  );
}
