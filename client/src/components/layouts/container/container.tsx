import styles from './container.module.scss';

export type ContainerProps = {
  readonly children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
