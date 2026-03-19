import styles from '../page.module.css';
import JobCard from '../../components/JobCard';
import Sidebar from '../../components/Sidebar';
import AdPlaceholder from '../../components/AdPlaceholder';
import { supabase } from '../../lib/supabase';

export default async function JobsPage() {
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('category', 'Job')
    .order('created_at', { ascending: false });

  const filteredPosts = posts || [];

  return (
    <div className={styles.page}>
      <section className={styles.categoryHero}>
        <div className={styles.container}>
          <h1 className={styles.categoryTitle}>Job Opportunities</h1>
          <p className={styles.categorySubtitle}>Browse the latest job openings from top companies.</p>
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
                    imageUrl={post.image_url}
                  />
                ))
              ) : (
                <p className={styles.noResults}>No job opportunities found at the moment. Check back later!</p>
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
