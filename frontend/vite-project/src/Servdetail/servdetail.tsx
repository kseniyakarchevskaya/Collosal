import styles from '../Servdetail/servdetail.module.scss';
import { im } from '../Photo.ts';
import Component from './Component/component.tsx';
export default function Servdetail() {
    return (
        <>
            <section className={styles.statistic}>
                <div className={styles.center}>
                    <p>DEVELOPMENT</p>
                    <h1>Solve your company's repetitive problems by designing apps</h1>
                </div>
            </section>
            <section className={styles.featuresSectionRoot}>
                <div className={styles.featuresMainLayout}>
                    <div className={styles.leftGraphicsWrapper}></div>
                    <div className={styles.rightContentZone}>
                        <div className={styles.textParagraphGroup}>
                            <p>
                                Just tell us your repetitive problem or the primitive method used
                                today, and we will create a digital solution.
                            </p>
                            <p>
                                We can build you a website, a mobile app and a desktop app. All
                                types of applications have a good security system, are easy to
                                maintain, and are high speed.
                            </p>
                        </div>
                        <ul className={styles.featuresBulletList}>
                            <li>
                                <span className={styles.squareMarker}></span>
                                <p>Avoid potential bugs with unit testing</p>
                            </li>
                            <li>
                                <span className={styles.squareMarker}></span>
                                <p>Removing unused code will speed up the application</p>
                            </li>
                            <li>
                                <span className={styles.squareMarker}></span>
                                <p>The modern design pleases the users</p>
                            </li>
                            <li>
                                <span className={styles.squareMarker}></span>
                                <p>A good UX will not disappoint users</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.statistic1}>
                <div className={styles.center}>
                    <p>FEATURES</p>
                    <h1>Here's what you will get when purchasing this service</h1>
                </div>
            </section>
            <section className={styles.featuresSectionRoot1}>
                <div className={styles.featuresGridContainer1}>
                    <div className={styles.featureCard1}>
                        <div className={styles.cardContentWrapper1}>
                            <div className={styles.iconArea1}>
                                <img src={im.figma} />
                            </div>
                            <h3>Design Files</h3>
                            <p>
                                Projects are well designed using Figma. You will get the design
                                file.
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureCard1}>
                        <div className={styles.cardContentWrapper1}>
                            <div className={styles.iconArea1}>
                                <img src={im.z5} />
                            </div>
                            <h3>Same Day</h3>
                            <p>
                                We don't want you to wait long. Everything will be finished on the
                                same day.
                            </p>
                        </div>
                    </div>
                    <div className={styles.featureCard1}>
                        <div className={styles.cardContentWrapper1}>
                            <div className={styles.iconArea1}>
                                <img src={im.code} />
                            </div>
                            <h3>Quality Code</h3>
                            <p>Code written according to good practice is highly maintainable.</p>
                        </div>
                    </div>
                    <div className={styles.featureCard1}>
                        <div className={styles.cardContentWrapper1}>
                            <div className={styles.iconArea1}>
                                <img src={im.z3} />
                            </div>
                            <h3>SEO</h3>
                            <p>The website will appear on the first page of the search engine.</p>
                        </div>
                    </div>
                    <div className={styles.featureCard1}>
                        <div className={styles.cardContentWrapper1}>
                            <div className={styles.iconArea1}>
                                <img src={im.z1} />
                            </div>
                            <h3>Responsive Design</h3>
                            <p>Access the website on any device, don't limit your visitors.</p>
                        </div>
                    </div>
                    <div className={styles.featureCard1}>
                        <div className={styles.cardContentWrapper1}>
                            <div className={styles.iconArea1}>
                                <img src={im.z4} />
                            </div>
                            <h3>Blazing Fast</h3>
                            <p>A high speed website will not disappoint prospective customers.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.statistic2}>
                <div className={styles.center}>
                    <p>FAQ</p>
                    <h1>Frequently asked questions, maybe the same as yours</h1>
                </div>
            </section>
            <Component />
        </>
    );
}
