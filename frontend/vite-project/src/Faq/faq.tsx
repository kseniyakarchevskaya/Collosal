import { useState, useEffect } from 'react';
import styles from './faq.module.scss';
interface AccordionItem {
    id: number;
    category: string;
    question: string;
    answer: string;
}
const categories = ['General', 'Transaction', 'Maintenance', 'Technology', 'Technology '];
export default function Pircing() {
    const [faqItems, setFaqItems] = useState<AccordionItem[]>([]);
    const [activeTab, setActiveTab] = useState<string>('Transaction');
    const [openId, setOpenId] = useState<number | null>(1);

    useEffect(() => {
        const fetchFaqData = async () => {
            try {
                const res = await fetch('http://localhost:3003/company-faq-accordion');
                if (!res.ok) throw new Error('Failed to fetch accordion data');

                const data = await res.json();
                if (Array.isArray(data)) {
                    setFaqItems(data);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchFaqData();
    }, []);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    if (faqItems.length === 0) return null;

    const filteredItems = faqItems.filter((item) => item.category.trim() === activeTab.trim());
    return (
        <>
            <section className={styles.statistic}>
                <div className={styles.center}>
                    <p>PRICING</p>
                    <h1>Frequently asked questions, maybe the same as yours</h1>
                </div>
            </section>
            <section className={styles.accordionSectionRoot}>
                <div className={styles.accordionMainLayout}>
                    <div className={styles.leftTabsMenu}>
                        {categories.map((tab, idx) => (
                            <div
                                key={idx}
                                className={`${styles.tabItem} ${activeTab.trim() === tab.trim() ? styles.tabActive : ''}`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setOpenId(null); 
                                }}
                            >
                                <span>{tab}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.rightAccordionList}>
                        {filteredItems.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div
                                    className={`${styles.accordionCard} ${isOpen ? styles.cardOpen : ''}`}
                                    key={item.id}
                                >
                                    <div
                                        className={styles.questionHeaderBar}
                                        onClick={() => toggleAccordion(item.id)}
                                    >
                                        <h2>{item.question}</h2>
                                        <span className={styles.arrowIcon}>
                                            {isOpen ? 'ˆ' : '∨'}
                                        </span>
                                    </div>

                                    {isOpen && (
                                        <div className={styles.answerBodyRow}>
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
