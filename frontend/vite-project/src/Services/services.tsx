import styles from '../Services/services.module.scss';
import { im } from '../Photo.ts';
import { NavLink } from 'react-router-dom';

export default function Setvices() {
    return (
        <>
            <section className={styles.statistic}>
                <div className={styles.center}>
                    <p>SERVICES</p>
                    <h1>We are here to help solve your company's problems</h1>
                </div>
            </section>
            <section className={styles.designSectionRoot}>
                <div className={styles.designMainLayout}>
                    <div className={styles.leftGraphicsWrapper}></div>

                    <div className={styles.rightContentZone}>
                        <div className={styles.textHeaderGroup}>
                            <span>UI DESIGN</span>
                            <h1>
                                Don't let your idea get caught by others, design a prototype for
                                your idea
                            </h1>
                            <p>
                                Delegate your ideas as quickly as possible, create beautiful designs
                                and vivid prototypes.
                            </p>
                        </div>

                        <div className={styles.miniCardsRow}>
                            <div className={styles.miniCard}>
                                <div className={styles.cardHeaderTitle}>
                                    <div className={styles.iconArea}>
                                        <img src={im.z1}  />
                                    </div>
                                    <h3>Beautiful Design</h3>
                                </div>
                                <p>Create a modern design for your idea.</p>
                            </div>

                            <div className={styles.miniCard}>
                                <div className={styles.cardHeaderTitle}>
                                    <div className={styles.iconArea}>
                                        <img src={im.z2}  />
                                    </div>
                                    <h3>Card Name</h3>
                                </div>
                                <p>Create vivid prototypes for your designs.</p>
                            </div>
                        </div>
                        <div className={styles.linkActionZone}>
                            <NavLink to={'/servdetail'}>
                                <span>Service Detail</span>
                                <span className={styles.arrowIcon}>→</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.devSectionRoot}>
                <div className={styles.devMainLayout}>
                    <div className={styles.leftContentZone}>
                        <div className={styles.textHeaderGroup}>
                            <span>DEVELOPMENT</span>
                            <h1>
                                Create solutions to repetitive problems, design applications and
                                access anywhere!
                            </h1>
                            <p>
                                Just tell us your repetitive problem or the primitive method used
                                today, and we will create a digital solution.
                            </p>
                        </div>

                        <div className={styles.rowsListGroup}>
                            <div className={styles.wideRowCard}>
                                <div className={styles.innerContentRow}>
                                    <div className={styles.iconArea}>
                                        <img src={im.smartphone} />
                                    </div>
                                    <h3>Mobile App Development</h3>
                                </div>
                            </div>

                            <div className={styles.wideRowCard}>
                                <div className={styles.innerContentRow}>
                                    <div className={styles.iconArea}>
                                        <img src={im.monitor} />
                                    </div>
                                    <h3>Desktop App Development</h3>
                                </div>
                            </div>
                            <div className={styles.wideRowCard}>
                                <div className={styles.innerContentRow}>
                                    <div className={styles.iconArea}>
                                        <img src={im.globe} />
                                    </div>
                                    <h3>Web Development</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.linkActionZone}>
                            <NavLink to={'/servdetail'}>
                                <span>Service Detail</span>
                                <span className={styles.arrowIcon}>→</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.rightGraphicsWrapper}></div>
                </div>
            </section>
            <section className={styles.mainSectionRoot}>
                <div className={styles.mainLayout}>
                    <div className={styles.leftGraphicsWrapper}></div>
                    <div className={styles.rightContentZone}>
                        <div className={styles.textHeaderGroup}>
                            <span>MAINTENANCE</span>
                            <h1>
                                Think of your server as your own child, taking care of it every day
                            </h1>
                            <p>
                                We will back up your servers every day, clean them every week,
                                upgrade them when there is an update.
                            </p>
                        </div>
                        <div className={styles.cardsGrid}>
                            <div className={styles.miniCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.iconArea}>
                                        <img src={im.z11} />
                                    </div>
                                    <h3>Back up every day</h3>
                                </div>
                            </div>
                            <div className={styles.miniCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.iconArea}>
                                        <img src={im.z13} />
                                    </div>
                                    <h3>Upgrade</h3>
                                </div>
                            </div>
                            <div className={styles.miniCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.iconArea}>
                                        <img src={im.z12} />
                                    </div>
                                    <h3>Cleaning every week</h3>
                                </div>
                            </div>
                            <div className={styles.miniCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.iconArea}>
                                        <img src={im.z14} />
                                    </div>
                                    <h3>Fixing error</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.linkActionZone}>
                            <NavLink to={'/servdetail'}>
                                <span>Service Detail</span>
                                <span className={styles.arrowIcon}>→</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}
