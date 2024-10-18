import { renderWithRouter } from '@/testing/test-utils.tsx';

import { NavLink } from './nav-link';

describe('NavLink component', () => {
  it('renders correctly with children and to prop', () => {
    const { getByTestId } = renderWithRouter(<NavLink to="/home">Home</NavLink>);

    const navLink = getByTestId('nav-link');
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveTextContent('Home');
  });
});
