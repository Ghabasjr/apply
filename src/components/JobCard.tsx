import Link from 'next/link';
import styles from './JobCard.module.css';

interface JobCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
}

export default function JobCard({ id, title, category, date, excerpt, imageUrl }: JobCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/job/${id}`}>
        {/* Placeholder image if none provided */}
        <div 
          className={styles.imageWrap}
          style={{ backgroundImage: `url(${imageUrl || 'https://via.placeholder.com/400x250?text=Apply.ng'})` }}
        >
          <span className={styles.categoryBadge}>{category}</span>
        </div>
      </Link>
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{date}</span>
        </div>
        <Link href={`/job/${id}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.excerpt}>{excerpt}</p>
        
        <Link href={`/job/${id}`} className={styles.readMore}>
          Read More &rarr;
        </Link>
      </div>
    </article>
  );
}
