import React from 'react';
import { clsx } from 'clsx';

import { BUTTON_VARIANTS, ButtonVariants } from '@/components/ui/button/constants.ts';
import { IconProps } from '@/components/ui/icon/icon.tsx';

import styles from './button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariants;
  className?: string;
  iconLeft?: React.ReactElement<IconProps>;
  iconRight?: React.ReactElement<IconProps>;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, children, iconLeft, iconRight, className, variant = BUTTON_VARIANTS.PRIMARY, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={clsx(styles.btn, styles[variant], className)}
        >
          {iconLeft}
          {children}
          {iconRight}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={clsx(styles.btn, styles[variant], className)}
        {...props}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    );
  },
);

Button.displayName = 'Button';
