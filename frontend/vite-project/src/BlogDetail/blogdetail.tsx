import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { im } from '../Photo.ts';
import styles from './blogdetail.module.scss';
import { NavLink } from 'react-router-dom';
interface FullArticleItem {
    id: number;
    title: string;
    image_url: string;
    published_at: string;
    reading_time: string;
    p1: string;
    p2: string;
    p3: string;
    h1_title: string;
    p4: string;
    middle_image: string;
    p5: string;
    h2_title: string;
    p6: string;
    li_1: string;
    li_2: string;
    li_3: string;
    li_4: string;
    p7: string;
    quote_text: string;
    quote_author: string;
    p8: string;
}
interface RelatedPostItem {
    id: number;
    image_url: string;
    title: string;
    description: string;
    author_name: string;
    author_avatar: string;
    published_at: string;
    reading_time: string;
}
interface ResponseItem {
    id: number;
    author_name: string;
    author_avatar: string;
    published_time: string;
    response_text: string;
}
interface CommentFormState {
    name: string;
    email: string;
    comment: string;
}

const initialFormState: CommentFormState = {
    name: '',
    email: '',
    comment: '',
};
function BlogDetail() {
    const { id } = useParams<{ id: string }>();
    const [articleData, setArticleData] = useState<FullArticleItem[]>([]);
    const [relatedPosts, setRelatedPosts] = useState<RelatedPostItem[]>([]);
    const [responses, setResponses] = useState<ResponseItem[]>([]);
    const [form, setForm] = useState<CommentFormState>(initialFormState);

    useEffect(() => {
        const fetchAllBlogData = async () => {
            try {
                const [articleRes, relatedRes, responsesRes] = await Promise.all([
                    fetch(`http://localhost:3003/blog-detail-page/${id}`),
                    fetch('http://localhost:3003/related-blogs'),
                    fetch(`http://localhost:3003/blog-posts/${id}/responses`)
                ]);

                if (!articleRes.ok || !relatedRes.ok || !responsesRes.ok) {
                    throw new Error('Failed to fetch blog data');
                }

                const articleJson = await articleRes.json();
                const relatedJson = await relatedRes.json();
                const responsesJson = await responsesRes.json();

                if (Array.isArray(articleJson)) setArticleData(articleJson);
                if (Array.isArray(relatedJson)) setRelatedPosts(relatedJson);
                if (Array.isArray(responsesJson)) setResponses(responsesJson);
            } catch (err) {
                console.error(err);
            }
        };

        if (id) fetchAllBlogData();
    }, [id]);

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3003/blog-posts/${id}/responses`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error('Failed to post comment');

            const newComment: ResponseItem = await res.json();
            
            setResponses((prev) => [...prev, newComment]);
            setForm(initialFormState);
        } catch (err) {
            console.error(err);
        }
    };

    if (articleData.length === 0 || relatedPosts.length === 0 || responses.length === 0) return null;

    return (
        <>
            <section className={styles.statistic}>
                <div className={styles.center}>
                    <p>PAGE</p>
                    <h1>10 Figma Plugins that will increase your productivity</h1>
                    <span>Mar 11 3 min read</span>
                </div>
            </section>
            {articleData.map((item) => (
                <div className={styles.pageMainWrapper} key={item.id}>
                    <section className={styles.mainBannerSection}>
                        <div className={styles.mainBannerZone}>
                            <img src={item.image_url} />
                        </div>
                    </section>

                    <section className={styles.articleBodySection}>
                        <div className={styles.articleBodyLayout}>
                            <p>{item.p1}</p>
                            <p>{item.p2}</p>
                            <p>{item.p3}</p>

                            <h2>{item.h1_title}</h2>
                            <p>{item.p4}</p>

                            <div className={styles.middleImageZone}>
                                <img src={item.middle_image} alt="Illustration" />
                            </div>

                            <p>{item.p5}</p>

                            <h2>{item.h2_title}</h2>
                            <p>{item.p6}</p>

                            <ul className={styles.customBulletList}>
                                <li>• {item.li_1}</li>
                                <li>• {item.li_2}</li>
                                <li>• {item.li_3}</li>
                                <li>• {item.li_4}</li>
                            </ul>

                            <p>{item.p7}</p>

                            <p>{item.quote_text}</p>
                            <p>{item.quote_author}</p>

                            <p>{item.p8}</p>
                        </div>
                    </section>
                </div>
            ))}
            <section className={styles.authorSectionRoot}>
                <div className={styles.authorCardContainer}>
                    <div className={styles.topInfoRow}>
                        <div className={styles.profileBox}>
                            <div className={styles.avatarCircle}>
                                <img src={im.al} />
                            </div>
                            <div className={styles.metaData}>
                                <h3>Alex Berner</h3>
                                <p>UI Designer</p>
                            </div>
                        </div>
                        <div className={styles.socialsBox}>
                            <a href="." className={styles.socialDot}>
                                <img src={im.ss1} />
                            </a>
                            <a href="." className={styles.socialDot}>
                                <img src={im.ss2} />
                            </a>
                            <a href="." className={styles.socialDot}>
                                <img src={im.ss3} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.bioDescriptionRow}>
                        <p>
                            Night subdue their morning created every light earth very darkness
                            they're you're deep female. Tree sixth divided greater, midst earth
                            forth won't for moved.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.relatedSectionRoot}>
                <div className={styles.relatedMainLayout}>
                    <div className={styles.topTitleZone}>
                        <h2>Other people also read ...</h2>
                    </div>
                    <div className={styles.relatedCardsGrid}>
                        {relatedPosts.map((item) => (
                            <div className={styles.relatedCard} key={item.id}>
                                <NavLink
                                    to={`/blogdetail/${item.id}`}
                                    className={styles.imageLinkWrapper}
                                >
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className={styles.coverImage}
                                    />
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
                                            alt={item.author_name}
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
                </div>
            </section>
            <section className={styles.responsesSectionRoot}>
                <div className={styles.responsesMainLayout}>
                    
                    <div className={styles.responsesTitleZone}>
                        <h2>Responses</h2>
                    </div>

                    <div className={styles.responsesListZone}>
                        {responses.map((item) => (
                            <div className={styles.responseCard} key={item.id}>
                                <div className={styles.responseAuthorRow}>
                                    <div className={styles.authorAvatarCircle}>
                                        <img 
                                            src={im[item.author_avatar as keyof typeof im] || undefined} 
                                        />
                                    </div>
                                    <div className={styles.authorMetaDetails}>
                                        <h3>{item.author_name}</h3>
                                        <p>{item.published_time}</p>
                                    </div>
                                </div>
                                <div className={styles.responseTextRow}>
                                    <p>{item.response_text}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className={styles.commentFormSectionRoot}>
                <div className={styles.formCardContainer}>
                    <form className={styles.commentFormBox} onSubmit={handleFormSubmit}>
                        
                        <div className={styles.inputDoubleRow}>
                            <div className={styles.inputGroup}>
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={form.name} 
                                    onChange={handleFormChange} 
                                    required 
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={form.email} 
                                    onChange={handleFormChange} 
                                    required 
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Comment</label>
                            <textarea 
                                name="comment" 
                                value={form.comment} 
                                onChange={handleFormChange} 
                                required 
                            />
                        </div>

                        <div className={styles.btnActionZone}>
                            <button type="submit" className={styles.postCommentBtn}>
                                Post Comment
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
}

export default BlogDetail;
