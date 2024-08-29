import styles from './Spinner.module.scss';

export function Spinner() {
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
