import { render, screen } from '@testing-library/react';

import { Spinner } from './spinner';

describe('Spinner component', () => {
  it('does not render when isLoading is false', () => {
    render(<Spinner isLoading={false} />);
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('renders correctly when isLoading is true', () => {
    render(<Spinner isLoading={true} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
