import { renderApp, screen } from '@/testing/test-utils.tsx';

import { NavLink } from '../nav-link.tsx';

describe('NavLink component', () => {
  it('renders correctly with children and to prop', async () => {
    await renderApp(<NavLink to="/home">Home</NavLink>);

    const navLink = screen.getByRole('link', { name: /home/i });
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveTextContent('Home');
  });

  it('passes the correct "to" prop', async () => {
    await renderApp(<NavLink to="/about">About</NavLink>);

    const navLink = screen.getByRole('link', { name: /about/i });
    expect(navLink).toHaveAttribute('href', '/about');
  });

  it('does not render when children is missing', async () => {
    await renderApp(<NavLink to="/home" />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('matches snapshot', async () => {
    const { asFragment } = await renderApp(<NavLink to="/active">Active Link</NavLink>);
    expect(asFragment()).toMatchSnapshot();
  });
});
