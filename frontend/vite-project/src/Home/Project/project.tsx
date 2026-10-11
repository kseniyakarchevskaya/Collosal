import { useState, useEffect } from 'react';
import styles from '../Project/project.module.scss';

interface LandingPageItem {
    id: number;
    title: string;
    description: string;
}

export default function Project() {
    const [pages, setPages] = useState<LandingPageItem[]>([]);

    useEffect(() => {
        const fetchLandingPages = async () => {
            try {
                const res = await fetch('http://localhost:3003/landing-pages');
                if (!res.ok) throw new Error('Failed to fetch');

                const data = await res.json();
                setPages(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchLandingPages();
    }, []);

    return (
        <section className={styles.gridSection}>
            <div className={styles.gridob}>
                <div className={styles.top}>
                    <p>PROJECTS</p>
                    <h4>We have completed many amazing projects that you will not believe</h4>
                </div>
                <div className={styles.gridRowLayout}>
                    {pages.map((item, index) => (
                        <div className={styles.cardContainer} key={item.id}>
                            <div className={styles.skeletonCard}>
                                <div className={styles.topHeaderBar}></div>
                                <div className={styles.subHeaderBar}></div>

                                {index === 0 ? (
                                    <div className={styles.verticalContentBlock}></div>
                                ) : (
                                    <div className={styles.horizontalContentBlock}></div>
                                )}
                            </div>
                            <div className={styles.cardTextZone}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.actionZone}>
                                <button className={styles.detailBtn}>Detail</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
