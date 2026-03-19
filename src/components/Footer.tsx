import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3>Apply<span className={styles.highlight}>.ng</span></h3>
            <p>Your portal for the latest jobs, internships, scholarships, and fellowships.</p>
          </div>
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/jobs">Jobs</Link></li>
              <li><Link href="/internships">Internships</Link></li>
              <li><Link href="/scholarships">Scholarships</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Apply.ng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
