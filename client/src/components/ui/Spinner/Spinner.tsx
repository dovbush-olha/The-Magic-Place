import styles from './Spinner.module.scss';

export function Spinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstRing} />
      <div className={styles.secondRing} />
      <div className={styles.thirdRing} />
    </div>
  );
}
