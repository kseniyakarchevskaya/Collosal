import { useState, useEffect } from 'react';
import styles from '../Detail/detail.module.scss';
import Project1 from '../Projects/Project1/project1.tsx';
interface ProjectDetailData {
    id: number;
    description: string;
    category: string;
    client: string;
    technology: string;
}
export default function Detail() {
   const [details, setDetails] = useState<ProjectDetailData[]>([]);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const res = await fetch('http://localhost:3003/project-details');
                if (!res.ok) throw new Error('Failed to fetch project details');
                const data = await res.json();
                
                if (Array.isArray(data)) {
                    setDetails(data);
                } else {
                    setDetails([data]);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchProjectDetails();
    }, []);

    if (!Array.isArray(details) || details.length === 0) return null;

    return (
        <>
            <section className={styles.detail}>
                <div className={styles.top}>
                    <p>PROJECT DETAIL</p>
                    <h1>The Desktop App Landing Page</h1>
                </div>
            </section>
            <section className={styles.landing}>
                <div className={styles.landingcenter}>
                    <div className={styles.skeletonCard}>
                        <div className={styles.topHeaderBar}></div>
                        <div className={styles.subHeaderBar}></div>
                        <div className={styles.horizontalContentBlock}></div>
                    </div>
                    <div className={styles.detailMainLayout}>
                        {details.map((item) => (
                            <div className={styles.projectWrapperCard} key={item.id}>
                                <div className={styles.descriptionRow}>
                                    <p>{item.description}</p>
                                </div>
                                <div className={styles.metaBlock}>
                                    <span>CATEGORY</span>
                                    <h2>{item.category}</h2>
                                </div>
                                <div className={styles.metaBlock}>
                                    <span>CLIENT</span>
                                    <h2>{item.client}</h2>
                                </div>
                                <div className={styles.metaBlock}>
                                    <span>TECHNOLOGY</span>
                                    <h2>{item.technology}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.text}>
                <div className={styles.bottom}>
                    <p>PROJECTS</p>
                    <h2>Other Amazing Projects</h2>
                </div>
            </section>
            <Project1 />
        </>
    );
}
