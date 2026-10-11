import { useState, useEffect } from 'react';
import styles from '../Blog/blog.module.scss';
import { im } from '../Photo.ts';
import { NavLink } from 'react-router-dom';
interface BlogPostItem {
    id: number;
    image_url: string;
    title: string;
    description: string;
    author_name: string;
    author_avatar: string;
    published_at: string;
    reading_time: string;
}
export default function Blog() {
    const [posts, setPosts] = useState<BlogPostItem[]>([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const res = await fetch('http://localhost:3003/company-blogs');
                if (!res.ok) throw new Error('Failed to fetch blog posts');

                const data = await res.json();
                if (Array.isArray(data)) {
                    setPosts(data);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchBlogPosts();
    }, []);

    if (posts.length === 0) return null;
    return (
        <>
            <section className={styles.statistic}>
                <div className={styles.center}>
                    <p>BLOG</p>
                    <h1>Get precise knowledge wherever you are</h1>
                </div>
            </section>
            <section className={styles.blogSectionRoot}>
                <div className={styles.blogMainLayout}>
                    <div className={styles.blogCardsGrid}>
                        {posts.map((item) => (
                            <div className={styles.blogCard} key={item.id}>
                                <NavLink
                                    to={`/blogdetail/${item.id}`}
                                    className={styles.imageLinkWrapper}
                                >
                                    <img src={item.image_url} className={styles.coverImage} />
                                </NavLink>

                                <div className={styles.cardTextZone}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className={styles.authorMetaZone}>
                                    <div className={styles.avatarCircle}>
                                        <img
                                            src={
                                                im[item.author_avatar as keyof typeof im] ||
                                                undefined
                                            }
                                        />
                                    </div>
                                    <div className={styles.authorDetails}>
                                        <h3>{item.author_name}</h3>
                                        <p>
                                            {item.published_at} • {item.reading_time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.loadMoreActionZone}>
                        <button className={styles.loadMoreBtn}>Load More</button>
                    </div>
                </div>
            </section>
        </>
    );
}
