import { useState, useEffect } from 'react';
import styles from '../Terms/terms.module.scss';
interface TermsSectionItem {
    id: number;
    title: string | null;
    content: string;
}

export default function Terms() {
    const [sections, setSections] = useState<TermsSectionItem[]>([]);

    useEffect(() => {
        const fetchTermsData = async () => {
            try {
                const res = await fetch('http://localhost:3003/terms');
                if (!res.ok) throw new Error('Failed to fetch terms');

                const data = await res.json();
                if (Array.isArray(data)) {
                    setSections(data);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchTermsData();
    }, []);

    if (sections.length === 0) return null;
    return (
        <>
            <section className={styles.terms}>
                <div className={styles.top}>
                    <p>PAGE</p>
                    <h1>Terms & Conditions</h1>
                    <span>Updated at 2021-05-06</span>
                </div>
            </section>
            <section className={styles.termsSectionRoot}>
                <div className={styles.termsMainLayout}>
                    {sections.map((item) => (
                        <div className={styles.textBlockWrapper} key={item.id}>
                            {item.title && <h2>{item.title}</h2>}
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
           </section>
        </>
    );
}
