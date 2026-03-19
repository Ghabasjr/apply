import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import AdPlaceholder from '../../../components/AdPlaceholder';
import { supabase } from '../../../lib/supabase';
import styles from './job.module.css';

export default async function JobDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', slug)
    .single();

  if (!post) {
    notFound();
    return null;
  }

  return (
    <div className={styles.page}>
      
      <div className={styles.container}>
        <div className={styles.mainLayout}>
          
          {/* Main Content Area */}
          <article className={styles.article}>
            <header className={styles.header}>
              <span className={styles.categoryBadge}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <span>Posted on {post.date}</span>
                <span className={styles.author}>by Apply.ng Admin</span>
              </div>
            </header>
            
            <div 
              className={styles.featuredImage}
              style={{ backgroundImage: `url(${post.image_url || 'https://via.placeholder.com/800x400?text=Apply.ng'})` }}
            ></div>

            <AdPlaceholder height="150px" />

            <div className={styles.content}>
              <p className={styles.excerpt}>{post.excerpt}</p>
              
              <div className={styles.bodyContent}>
                {post.content.split('\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.applySection}>
                <div className={styles.applyInfo}>
                  <h3>How to Apply</h3>
                  <p>To apply for this {post.category.toLowerCase()}, follow the link below:</p>
                  <a href={post.apply_url} target="_blank" rel="noopener noreferrer" className={styles.applyLink}>
                    {post.apply_url}
                  </a>
                </div>
                <div className={styles.applyBtnWrap}>
                  <a href={post.apply_url} target="_blank" rel="noopener noreferrer" className={styles.applyBtn}>
                    Apply Here
                  </a>
                </div>
              </div>
            </div>
            
            <AdPlaceholder height="250px" />
          </article>

          {/* Sidebar Area */}
          <div className={styles.sidebarWrap}>
            <AdPlaceholder height="250px" />
            <Sidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
