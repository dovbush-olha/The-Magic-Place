import React from 'react';
import { clsx } from 'clsx';

import { BUTTON_VARIANTS, ButtonVariants } from '@/components/ui/button/constants.ts';

import styles from './button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariants;
  className?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, children, className = '', variant = BUTTON_VARIANTS.PRIMARY, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={clsx(styles.btn, styles[variant], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={clsx(styles.btn, styles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
