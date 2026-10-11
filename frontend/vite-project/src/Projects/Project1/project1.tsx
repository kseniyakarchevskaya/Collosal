import { useState, useEffect } from 'react';
import styles from '../Project1/project1.module.scss';
import { NavLink } from 'react-router-dom';
interface LandingPageItem {
    id: number;
    title: string;
    description: string;
}

export default function Project1() {
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
        <>
            <section className={styles.gridSection}>
                <div className={styles.gridob}>
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
                                    <NavLink to={'/detail'}>Detail</NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
        
    );
}
