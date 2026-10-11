import styles from '../HowWeWork/work.module.scss';


export default function Work() {

    return (
        <>
            <section className={styles.workflow}>
                <div className={styles.center}>
                    <p>HOW WE WORK</p>
                    <h1>We have a workflow that allows the job to be delivered well</h1>
                </div>
            </section>
            <section className={styles.step1}>
                <div className={styles.center}>
                    <div className={styles.image}></div>
                    <div className={styles.text}>
                        <span>STEP 01</span>
                        <h2>Let's talk about your company's problems first</h2>
                        <p>After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem.</p>
                        <p>In this step, you will discuss what application to build.</p>
                    </div>
                </div>
            </section>
            <section className={styles.step2}>
                <div className={styles.center}>
                    <div className={styles.text}>
                        <span>STEP 02</span>
                        <h2>Doing planning, design and development until everything is finished</h2>
                        <p>When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development.</p>
                        <p>In this step, the application is 100% complete.</p>
                    </div> 
                    <div className={styles.image}></div>
                </div>
            </section>
            <section className={styles.step3}>
                <div className={styles.center}>
                    <div className={styles.image}></div>
                    <div className={styles.text}>
                        <span>STEP 03</span>
                        <h2>The project is complete and we ship all the project assets, and access to the server</h2>
                        <p>We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on.</p>
                        <p>In this step, everything is done and the contract ends.</p>
                    </div> 
                    
                </div>
            </section>
        </>
    );
}
