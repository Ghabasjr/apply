import { addPost } from '../actions';
import styles from './admin.module.css';

export default function AdminPage() {
  return (
    <div className={styles.adminContainer}>
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
  );
}
