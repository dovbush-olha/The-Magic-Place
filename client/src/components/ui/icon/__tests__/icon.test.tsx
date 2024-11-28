import { render, screen } from '@/testing/test-utils';

import { ICON_NAME, ICON_STATE } from '../consts.ts';
import { Icon } from '../icon';

const mockIconName = ICON_NAME.HOME;
const testId = 'icon-svg';

describe('Icon component', () => {
  it('renders an SVG element', () => {
    render(
      <Icon
        name={mockIconName}
        data-testid={testId}
      />,
    );
    const svgElement = screen.getByTestId(testId);
    expect(svgElement).toBeInTheDocument();
  });

  it('sets the correct default props', () => {
    render(
      <Icon
        name={mockIconName}
        data-testid={testId}
      />,
    );
    const svgElement = screen.getByTestId(testId);

    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
    expect(svgElement).toHaveStyle({ color: 'currentColor' });
    expect(svgElement.querySelector('use')).toHaveAttribute('xlink:href', `#${mockIconName}-${ICON_STATE.SOLID}`);
  });

  it('allows overriding default props', () => {
    render(
      <Icon
        name={mockIconName}
        state={ICON_STATE.OUTLINE}
        size={32}
        color="red"
        data-testid={testId}
      />,
    );
    const svgElement = screen.getByTestId(testId);

    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
    expect(svgElement).toHaveStyle({ color: 'red' });
  });
});
