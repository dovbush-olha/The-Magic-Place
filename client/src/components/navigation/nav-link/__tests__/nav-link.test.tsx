import { fireEvent, renderWithRouter } from '@/testing/test-utils.tsx';

import { NavLink } from '../nav-link.tsx';

describe('NavLink component', () => {
  it('renders correctly with children and to prop', () => {
    const { getByTestId } = renderWithRouter(<NavLink to="/home">Home</NavLink>);

    const navLink = getByTestId('nav-link');
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveTextContent('Home');
  });

  it('passes the correct "to" prop', () => {
    const { getByTestId } = renderWithRouter(<NavLink to="/about">About</NavLink>);

    const navLink = getByTestId('nav-link');
    expect(navLink).toHaveAttribute('href', '/about');
  });

  it('does not render when children is missing', () => {
    const { container } = renderWithRouter(<NavLink to="/home" />);

    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('applies "active" class when link is active', () => {
    const { getByTestId } = renderWithRouter(<NavLink to="/active">Active Link</NavLink>);

    const navLink = getByTestId('nav-link');
    fireEvent.click(navLink);
    expect(navLink).toHaveClass('active');
  });
});
