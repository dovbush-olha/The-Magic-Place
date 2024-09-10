import styles from './spinner.module.scss';

interface SpinnerProps {
  isLoading?: boolean;
}

export function Spinner({ isLoading = false }: SpinnerProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles.center}>
      <div className={styles.wrapper}>
        <div className={styles.firstRing} />
        <div className={styles.secondRing} />
        <div className={styles.thirdRing} />
      </div>
    </div>
  );
}
