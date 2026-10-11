
import styles from './pircing.module.scss';
import Component from '../Servdetail/Component/component';

export default function Pircing() {
    return (
        <>
            <section className={styles.statistic}>
                <div className={styles.center}>
                    <p>PRICING</p>
                    <h1>What do you need? Choose a service that can help you</h1>
                </div>
            </section>
            <section className={styles.pricingSectionRoot}>
                <div className={styles.pricingMainLayout}>
                    <div className={styles.cardsGridRow}>
                        <div className={`${styles.planCard} ${styles.purpleCard}`}>
                            <div className={styles.cardHeaderRow}>
                                <h3>UI Design</h3>
                                <div className={styles.priceZone}>
                                    <span>Starting from</span>
                                    <h2>1200\$</h2>
                                </div>
                            </div>

                            <div className={styles.featuresListZone}>
                                <p>10 design pages</p>
                                <p>Well-documented</p>
                                <p>4 revisions</p>
                                <p>$100/additional page</p>
                            </div>

                            <div className={styles.btnActionZone}>
                                <button className={styles.whiteDetailBtn}>Detail</button>
                            </div>
                        </div>
                        <div className={`${styles.planCard} ${styles.blueCard}`}>
                            <div className={styles.cardHeaderRow}>
                                <h3>Development</h3>
                                <div className={styles.priceZone}>
                                    <span>Starting from</span>
                                    <h2>5000\$</h2>
                                </div>
                            </div>

                            <div className={styles.featuresListZone}>
                                <p>Web & Mobile</p>
                                <p>Well-documented</p>
                                <p>8 revisions</p>
                                <p>$1000/additional feature</p>
                            </div>

                            <div className={styles.btnActionZone}>
                                <button className={styles.purpleDetailBtn}>Detail</button>
                            </div>
                        </div>
                        <div className={`${styles.planCard} ${styles.magentaCard}`}>
                            <div className={styles.cardHeaderRow}>
                                <h3>Maintenance</h3>
                                <div className={styles.priceZone}>
                                    <span>Starting from</span>
                                    <h2>3000\$</h2>
                                </div>
                            </div>

                            <div className={styles.featuresListZone}>
                                <p>Daily backup</p>
                                <p>3 hourse of maintenance</p>
                                <p>Including fixing</p>
                                <p>$50/additional hour</p>
                            </div>

                            <div className={styles.btnActionZone}>
                                <button className={styles.whiteDetailBtn}>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Component />
        </>
    );
}
