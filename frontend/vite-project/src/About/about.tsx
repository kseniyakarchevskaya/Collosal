import { useState, useEffect } from 'react';
import styles from '../About/about.module.scss';
import { im } from '../Photo.ts';
interface StatItem {
    id: number;
    value: string;
    label: string;
    icon_name: string;
}
interface TeamMember {
    id: number;
    name: string;
    title: string;
    image_url: string;
}
export default function About() {
    const [statsData, setStatsData] = useState<StatItem[]>([]);
    const [teamData, setTeamData] = useState<TeamMember[]>([]); 

    useEffect(() => {
        const fetchMultipleTablesData = async () => {
            try {
                const [statsRes, teamRes] = await Promise.all([
                    fetch('http://localhost:3003/stats'),
                    fetch('http://localhost:3003/company-team')
                ]);

                if (!statsRes.ok || !teamRes.ok) throw new Error('Failed to fetch multiple data sources');

                const statsJson = await statsRes.json();
                const teamJson = await teamRes.json();

                if (Array.isArray(statsJson)) setStatsData(statsJson);
                if (Array.isArray(teamJson)) setTeamData(teamJson);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMultipleTablesData();
    }, []);

    if (statsData.length === 0 || teamData.length === 0) return null;

    return (
        <>
            <section className={styles.about}>
                <div className={styles.center}>
                    <div className={styles.image}></div>
                    <div className={styles.text}>
                        <span>ABOUT</span>
                        <h1>We are creative, smart and hardworking people</h1>
                        <p>
                            Several creative people gather in the same place - that's Collosal. We
                            collaborate to produce the best results, loved by clients and
                            comfortable for users. Here we maintain togetherness even though with
                            different backgrounds, all the people here are already experts in their
                            respective fields.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.statistic}>
                <div className={styles.center}>
                    <p>STATISTICS</p>
                    <h2>In 3 years we reached 8 countries, 193 clients and earning $100k USD</h2>
                </div>
            </section>
            <section className={styles.statsSectionRoot}>
                <div className={styles.statsContainer}>
                    {statsData.map((item) => (
                        <div className={styles.statCard} key={item.id}>
                            <div className={styles.iconSquare}>
                                <img src={im[item.icon_name as keyof typeof im] || undefined} />
                            </div>

                            <div className={styles.textGroup}>
                                <h2>{item.value}</h2>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.sec3}>
                <div className={styles.image}>
                    <img src={im.git} />
                    <img src={im.for1} />
                    <img src={im.gog} />
                    <img src={im.mic} />
                    <img src={im.fac} />
                </div>
            </section>
            <section className={styles.st}>
                <div className={styles.center}>
                    <p>OUR TEAM</p>
                    <h3>Meet the team! All creative people are here</h3>
                </div>
            </section>
            <section className={styles.teamSectionRoot}>
                <div className={styles.teamGridContainer}>
                    {teamData.map((item) => (
                        <div className={styles.memberCard} key={item.id}>
                            <div className={styles.photoWrapper}>
                                <img src={item.image_url || undefined}/>
                            </div>
                            <div className={styles.metaTextZone}>
                                <h3>{item.name}</h3>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
