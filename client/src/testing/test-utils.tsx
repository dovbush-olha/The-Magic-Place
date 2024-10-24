import { ReactNode } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, RenderOptions, RenderResult, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type RenderAppOptions = Omit<RenderOptions, 'wrapper'> & {
  url?: string;
  path?: string;
};

export const waitForLoadingToFinish = async () => {
  const loadingElements = [...screen.queryAllByTestId(/loading/i), ...screen.queryAllByText(/loading/i)];

  if (loadingElements.length > 0) {
    await waitForElementToBeRemoved(loadingElements, { timeout: 4000 });
  }
};

export const renderApp = async (
  ui: ReactNode,
  { url = '/', path = '/', ...renderOptions }: RenderAppOptions = {},
): Promise<RenderResult> => {
  const router = createMemoryRouter(
    [
      {
        path: path,
        element: ui,
      },
    ],
    {
      initialEntries: url ? ['/', url] : ['/'],
      initialIndex: url ? 1 : 0,
    },
  );

  const returnValue = {
    ...render(ui, {
      wrapper: () => {
        return <RouterProvider router={router} />;
      },
      ...renderOptions,
    }),
  };

  await waitForLoadingToFinish();

  return returnValue;
};

export * from '@testing-library/react';
export { userEvent };
