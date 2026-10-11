import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './component.module.scss';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export default function Component() {
    const [faqData, setFaqData] = useState<FaqItem[]>([]);

    useEffect(() => {
        const fetchFaqData = async () => {
            try {
                const res = await fetch('http://localhost:3003/company-faq');
                if (!res.ok) throw new Error('Failed to fetch FAQ data');

                const data = await res.json();
                if (Array.isArray(data)) {
                    setFaqData(data);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchFaqData();
    }, []);

    if (faqData.length === 0) return null;

    return (
        <>
            
            <section className={styles.faqSectionRoot}>
                <div className={styles.faqMainLayout}>
                    <div className={styles.faqGridBlock}>
                        {faqData.map((item) => (
                            <div className={styles.faqCard} key={item.id}>
                                <h2>{item.question}</h2>
                                <p>{item.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.bottomAskZone}>
                        <p>
                            Didn't find an answer?{' '}
                            <NavLink to="/faq" className={styles.askLink}>
                                Do not hesitate to ask!
                            </NavLink>
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
