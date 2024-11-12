import { ROUTES } from '@/config/routes';
import { renderApp, screen } from '@/testing/test-utils.tsx';

import { Header } from '../header.jsx';

describe('Header component', () => {
  it('matches snapshot', async () => {
    const { asFragment } = await renderApp(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders navigation links with correct text and paths', async () => {
    await renderApp(<Header />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', ROUTES.homeRoute());

    const profileLink = screen.getByRole('link', { name: /profile/i });
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute('href', ROUTES.profileRoute());

    const settingsLink = screen.getByRole('link', { name: /settings/i });
    expect(settingsLink).toBeInTheDocument();
    expect(settingsLink).toHaveAttribute('href', ROUTES.settingsRoute());
  });
});
