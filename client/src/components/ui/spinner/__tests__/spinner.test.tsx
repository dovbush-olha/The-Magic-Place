import { render, screen } from '@/testing/test-utils.tsx';

import { Spinner } from '../spinner.tsx';

describe('Spinner component', () => {
  it('does not render when isLoading is false', () => {
    render(<Spinner isLoading={false} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('renders correctly when isLoading is true', () => {
    render(<Spinner isLoading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
