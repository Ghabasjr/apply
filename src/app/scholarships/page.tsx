import styles from '../page.module.css';
import JobCard from '../../components/JobCard';
import Sidebar from '../../components/Sidebar';
import AdPlaceholder from '../../components/AdPlaceholder';
import posts from '../../../data/posts.json';

export default function ScholarshipsPage() {
  const filteredPosts = posts.filter(post => post.category === 'Scholarship');

  return (
    <div className={styles.page}>
      <section className={styles.categoryHero}>
        <div className={styles.container}>
          <h1 className={styles.categoryTitle}>Scholarships</h1>
          <p className={styles.categorySubtitle}>Discover funded opportunities and reach your educational goals.</p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.mainLayout}>
          
          <div className={styles.mainContent}>
            <div className={styles.grid}>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <JobCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    category={post.category}
                    date={post.date}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                  />
                ))
              ) : (
                <p className={styles.noResults}>No scholarship opportunities found at the moment. Check back later!</p>
              )}
            </div>
            
            <AdPlaceholder height="150px" />
          </div>

          <div className={styles.sidebarWrap}>
            <Sidebar />
            <AdPlaceholder height="600px" />
          </div>

        </div>
      </div>
    </div>
  );
}
