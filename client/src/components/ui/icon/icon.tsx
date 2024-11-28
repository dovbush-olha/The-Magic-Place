import { ICON_STATE, IconName, IconState } from './consts.ts';

export type IconProps = {
  name: IconName;
  state?: IconState;
  size?: number;
  color?: string;
};

export function Icon({
  name,
  state = ICON_STATE.SOLID,
  size = 24,
  color = 'currentColor',
  ...props
}: Readonly<IconProps>) {
  return (
    <svg
      width={size}
      height={size}
      style={{ color }}
      {...props}
    >
      <use xlinkHref={`#${name}-${state}`} />
    </svg>
  );
}
