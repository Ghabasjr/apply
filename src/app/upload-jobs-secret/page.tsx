import { addPost } from '../actions';
import styles from './admin.module.css';
import posts from '../../../data/posts.json';
import DeleteButton from '../../components/DeleteButton';

export default function AdminPage() {
  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminWrapper}>

        {/* ── Manage Existing Posts ── */}
        <div className={styles.adminCard}>
          <h2>Manage Listings</h2>
          <p>Remove outdated, closed, or expired opportunities from the site.</p>

          <div className={styles.postList}>
            {posts.length === 0 && (
              <p className={styles.empty}>No listings to manage.</p>
            )}
            {posts.map((post) => (
              <div key={post.id} className={styles.postRow}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postTitle}>{post.title}</span>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
                <DeleteButton id={post.id} title={post.title} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Add New Post ── */}
        <div className={styles.adminCard}>
          <h2>Post a New Opportunity</h2>
          <p>Fill out the details below to add a new Job, Internship, or Scholarship to Apply.ng.</p>

          <form action={addPost} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" required placeholder="e.g. Graphic Designer Needed" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <select id="category" name="category" required>
                <option value="Job">Job</option>
                <option value="Internship">Internship</option>
                <option value="Scholarship">Scholarship</option>
                <option value="Fellowship">Fellowship</option>
                <option value="Grants">Grants</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="imageUrl">Cover Image URL (Optional)</label>
              <input type="url" id="imageUrl" name="imageUrl" placeholder="https://example.com/image.jpg" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="applyUrl">Applying Link (URL)</label>
              <input type="url" id="applyUrl" name="applyUrl" required placeholder="https://example.com/apply-here" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="excerpt">Short Excerpt</label>
              <textarea id="excerpt" name="excerpt" rows={2} required placeholder="Brief summary of the opportunity..."></textarea>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="content">Full Content Description</label>
              <textarea id="content" name="content" rows={8} required placeholder="Provide full details, requirements, and benefits..."></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Publish Opportunity</button>
          </form>
        </div>

      </div>
    </div>
  );
}
