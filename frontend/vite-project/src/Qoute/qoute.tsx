import styles from './qoute.module.scss';

function Qoute() {
  return (
    <>
        <section className={styles.quoteSectionRoot}>
            <div className={styles.quoteMainLayout}>
                <div className={styles.leftInfoZone}>
                    <span className={styles.greenLabel}>SEND QUOTE</span>
                    <h1>Tell us about your problem and how we can help</h1>
                    <p className={styles.description}>
                        We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond.
                    </p>
                    <div className={styles.actionBtnArea}>
                        <button className={styles.askUsStaticBtn}>
                            Ask Us
                        </button>
                    </div>
                </div>
                <div className={styles.rightFormCard}>
                    <form className={styles.mainFormElement} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputDoubleRow}>
                            <div className={styles.inputGroup}>
                                <label>Name</label>
                                <input type="text" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input type="email" required />
                            </div>
                        </div>
                        <div className={styles.inputDoubleRow}>
                            <div className={styles.inputGroup}>
                                <label>Company</label>
                                <input type="text" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Company Size</label>
                                <div className={styles.selectWrapper}>
                                    <select required defaultValue="">
                                        <option value="" disabled hidden></option>
                                        <option value="small">1 - 10 employees</option>
                                        <option value="medium">11 - 50 employees</option>
                                        <option value="large">51+ employees</option>
                                    </select>
                                    <span className={styles.selectArrow}>∨</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Tell Us Your Problem</label>
                            <textarea required />
                        </div>
                        <div className={styles.btnActionZone}>
                            <button type="submit" className={styles.sendQuoteBtn}>
                                Send Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  );
}

export default Qoute;