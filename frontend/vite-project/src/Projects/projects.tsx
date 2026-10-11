import styles from './projects.module.scss';
import Project1 from './Project1/project1.tsx'
function Projects() {
  return (
    <>
      <section className={styles.projectSection}>
        <div className={styles.topSection}>
          <div className={styles.txt}>
            <p>PROJECTS</p>
            <h1>We have completed many amazing projects that you will not believe</h1>
          </div>
          <div className={styles.dropdownWrapper}>
            <select className={styles.selectElement} defaultValue="technology">
                <option value="technology">Technology</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="business">Business</option>
            </select>
          </div>
        </div>
      </section>
      <Project1/>
      <Project1/>
      <div className={styles.but}>
        <button>Load More</button>
      </div>
    </>
  );
}

export default Projects;
