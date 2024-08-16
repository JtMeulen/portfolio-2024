import styles from './Tag.module.scss';

export const Tag = ({ children }: { children: string }) => {
  return <span className={styles.tag}>{children}</span>;
};
