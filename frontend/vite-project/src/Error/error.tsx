import styles from './error.module.scss';
function Error() {
  return (
    <>
        <section className={styles.errorSection}>
            <div className={styles.text}>
                <p>ERROR</p>
                <h1>The page you are looking for is not on this website, please check again</h1>
                <p className={styles.white}>The system cannot find the page you are looking for, maybe you have the wrong path or the page has been deleted.</p>
                <button>Back to Home</button>
            </div>
        </section>
    </>
  );
}

export default Error;
