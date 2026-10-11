import styles from './contact.module.scss';
import { im } from '../Photo.ts';
function Contact() {
  return (
    <>
        <section className={styles.contactSectionRoot}>
            <div className={styles.contactMainLayout}>
                <div className={styles.leftInfoZone}>
                    <span className={styles.greenLabel}>CONTACT</span>
                    <h1>We love receiving messages from you, we are waiting for it.</h1>
                    <div className={styles.infoRowBlock}>
                        <div className={styles.iconSquare}>
                            <img src={im.phone}/>
                        </div>
                        <div className={styles.textMeta}>
                            <span>Phone</span>
                            <p>+62 1234 8921</p>
                        </div>
                    </div>
                    <div className={styles.infoRowBlock}>
                        <div className={styles.iconSquare}>
                            <img src={im.mail}/>
                        </div>
                        <div className={styles.textMeta}>
                            <span>Email</span>
                            <p>support@collosal.tld</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightFormCard}>
                    <form className={styles.mainFormElement}>
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
                        <div className={styles.inputGroup}>
                            <label>Subject</label>
                            <input type="text" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Message</label>
                            <textarea required />
                        </div>
                        <div className={styles.btnActionZone}>
                            <button type="submit" className={styles.sendMessageBtn}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  );
}

export default Contact;