import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoGroup}>
          <div className={styles.logoMark}>
            <span className={styles.logoShape}></span>
            <span className={styles.logoShapeTwo}></span>
          </div>
          <div className={styles.logoText}>
            Apply<span className={styles.highlight}>.ng</span>
          </div>
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/internships">Internships</Link></li>
            <li><Link href="/scholarships">Scholarships</Link></li>
          </ul>
        </nav>

        {/* Mobile menu button placeholder */}
        <button className={styles.mobileMenuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
