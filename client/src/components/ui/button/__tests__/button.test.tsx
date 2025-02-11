import { render, screen, userEvent } from '@/testing/test-utils';

import { Button } from '../button';
import { BUTTON_VARIANTS } from '../constants.ts';

import styles from '../button.module.scss';

describe('Button', () => {
  it('renders Button with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies default variant', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button', { name: /default/i });
    expect(button).toHaveClass(styles.btn, styles[BUTTON_VARIANTS.PRIMARY]);
  });

  it('applies specified variant', () => {
    render(<Button variant={BUTTON_VARIANTS.SECONDARY}>Secondary</Button>);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass(styles[BUTTON_VARIANTS.SECONDARY]);
  });

  it('renders icons correctly', () => {
    const IconMock = () => <span data-testid="icon">★</span>;
    render(
      <Button
        iconLeft={<IconMock />}
        iconRight={<IconMock />}
      >
        With Icons
      </Button>,
    );
    expect(screen.getAllByTestId('icon')).toHaveLength(2);
  });

  it('renders as link when href is provided', () => {
    render(<Button href="/test">Go</Button>);
    const link = screen.getByRole('link', { name: /go/i });
    expect(link).toHaveAttribute('href', '/test');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button', { name: /click/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
