import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function renderWithRouter(ui: ReactNode, options?: Omit<RenderOptions, 'wrapper'>): RenderResult {
  return render(ui, { wrapper: BrowserRouter, ...options });
}

export * from '@testing-library/react';
export { renderWithRouter, userEvent };
