import styles from './page.module.css';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import AdPlaceholder from '../components/AdPlaceholder';
import fs from 'fs/promises';
import path from 'path';

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams.q || '';

  let allPosts: any[] = [];
  try {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    const fileData = await fs.readFile(filePath, 'utf8');
    allPosts = JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading posts.json", error);
  }

  const filteredPosts = allPosts.filter(post => {
    if (!searchQuery) return true;
    const s = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(s) ||
      post.category.toLowerCase().includes(s) ||
      post.excerpt.toLowerCase().includes(s)
    );
  });

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>Find Your Dream Job, Internship, or Scholarship</h1>
            <p>Moving careers or starting one? We connect ambitious talent with life-changing opportunities across Africa's fastest-growing sectors.</p>

            <form action="/" method="GET" className={styles.searchBar}>
              <input
                type="text"
                name="q"
                placeholder="Search by title, company, or category..."
                defaultValue={searchQuery}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className={styles.container}>
        <div className={styles.mainLayout}>

          {/* Left Column: Listings */}
          <div className={styles.mainContent}>
            <div className={styles.sectionHeader}>
              <h2>{searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Opportunities'}</h2>
            </div>

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
                <div className={styles.noResults}>
                  <h3>No opportunities found</h3>
                  <p>We couldn&apos;t find any listings matching &quot;{searchQuery}&quot;. Try searching for something else or browse our categories.</p>
                </div>
              )}
            </div>

            {filteredPosts.length > 0 && (
              <button className={styles.loadMore}>Load More Listings</button>
            )}

            <AdPlaceholder height="150px" />
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
