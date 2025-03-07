import { ReactNode } from 'react';

import styles from './visually-hidden.module.scss';

export type VisuallyHiddenProps = {
  readonly children: ReactNode;
};

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className={styles.visuallyHidden}>{children}</span>;
}
