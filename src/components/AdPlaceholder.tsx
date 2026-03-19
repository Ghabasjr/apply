import styles from './AdPlaceholder.module.css';

export default function AdPlaceholder({ width = '100%', height = '250px' }: { width?: string; height?: string }) {
  return (
    <div className={styles.adContainer} style={{ width, height }}>
      <div className={styles.adContent}>
        <span className={styles.adLabel}>Advertisement Placeholder</span>
      </div>
    </div>
  );
}
