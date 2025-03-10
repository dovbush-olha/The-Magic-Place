import { VisuallyHidden } from '@/components/ui/visually-hidden';

import styles from './spinner.module.scss';

type SpinnerProps = {
  readonly isLoading?: boolean;
};

export function Spinner({ isLoading = false }: SpinnerProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={styles.center}
      role="status"
      aria-live="polite"
    >
      <div className={styles.wrapper}>
        <VisuallyHidden>Loading</VisuallyHidden>

        <div className={styles.firstRing} />
        <div className={styles.secondRing} />
        <div className={styles.thirdRing} />
      </div>
    </div>
  );
}
