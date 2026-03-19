import styles from './page.module.css';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import AdPlaceholder from '../components/AdPlaceholder';
import posts from '../../data/posts.json';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>Find Your Dream Job, Internship, or Scholarship</h1>
            <p>We connect ambitious talents with life-changing opportunities across Africa and beyond. Explore thousands of listings daily.</p>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search for opportunities..." />
              <button>Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className={styles.container}>
        <div className={styles.mainLayout}>
          
          {/* Left Column: Listings */}
          <div className={styles.mainContent}>
            <div className={styles.sectionHeader}>
              <h2>Latest Opportunities</h2>
            </div>
            
            <div className={styles.grid}>
              {posts.map((post) => (
                <JobCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  excerpt={post.excerpt}
                  imageUrl={post.imageUrl}
                />
              ))}
            </div>
            
            <AdPlaceholder height="150px" />
            
            <button className={styles.loadMore}>Load More Listings</button>
          </div>

          {/* Right Column: Sidebar */}
          <div className={styles.sidebarWrap}>
            <AdPlaceholder height="250px" />
            <Sidebar />
            <div className={styles.stickyAd}>
              <AdPlaceholder height="600px" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
