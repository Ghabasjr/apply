import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const recentPosts = [
    { id: '1', title: 'How to Write a CV in 5 Minutes', type: 'Tips' },
    { id: '2', title: 'Top 10 Scholarships for African Students 2026', type: 'Scholarship' },
    { id: '3', title: 'Google Software Engineering Internship', type: 'Internship' },
    { id: '4', title: 'Federal Government Grant Application Open', type: 'Grants' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>Recent Updates</h3>
        <ul className={styles.postList}>
          {recentPosts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <span className={styles.postType}>{post.type}</span>
              <Link href={`/job/${post.id}`} className={styles.postLink}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>Popular Categories</h3>
        <ul className={styles.categoryList}>
          <li><Link href="/jobs">Jobs <span>(120)</span></Link></li>
          <li><Link href="/internships">Internships <span>(45)</span></Link></li>
          <li><Link href="/scholarships">Scholarships <span>(89)</span></Link></li>
          <li><Link href="/fellowships">Fellowships <span>(32)</span></Link></li>
        </ul>
      </div>
    </aside>
  );
}
