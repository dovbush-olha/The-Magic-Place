import { clsx } from 'clsx';

import { BUTTON_VARIANTS, ButtonVariants } from '@/components/ui/button/constants.ts';

import styles from './button.module.scss';

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariants;
  asLink?: boolean;
  isDisabled?: boolean;
};

type ButtonSpecificProps = {
  asLink?: false;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

type LinkSpecificProps = {
  asLink: true;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
};

export type ButtonProps = CommonProps & (ButtonSpecificProps | LinkSpecificProps);

export function Button({
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  asLink = false,
  isDisabled = false,
  ...props
}: ButtonProps) {
  const Component = asLink ? 'a' : 'button';

  return (
    <Component
      disabled={asLink ? undefined : isDisabled}
      className={clsx(styles.btn, styles[variant])}
      {...props}
    >
      {children}
    </Component>
  );
}
