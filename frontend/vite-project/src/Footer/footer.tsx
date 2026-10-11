import styles from './footer.module.scss';
import { im } from '../Photo.ts';
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer>
                <div className={styles.ques}>
                    <h1>We've prepared everything, it's time for you to tell the problem</h1>
                    <div className={styles.but}>
                        <NavLink to={'/qoute'}>Send Quote</NavLink>
                        <button>Ask Us</button>
                    </div>
                </div>
                <div className={styles.foot}>
                    <div className={styles.logo}>
                        <img src={im.logo2}/>
                        <p>Copyright © 2021</p>
                        <p>Design By Collosal LLC</p>
                    </div>
                    <div>
                        <a href="">SERVICES</a>
                        <a href="">Web Development</a>
                        <a href="">App Development</a>
                        <a href="">UI Design</a>
                        <a href="">Consultation</a>
                        <a href="">Maintenance</a>
                    </div>
                    <div>
                        <a href="">COMPANY</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Send Quote</a>
                        <a href="">Privacy Policy</a>
                        <NavLink to={'/terms'}>Term of Service</NavLink>   
                        <a href="">Jobs</a>
                    </div>
                    <div>
                        <a href="">RESOURCES</a>
                        <a href="">Support</a>
                        <a href="">Documentation</a>
                        <a href="">License</a>
                        <a href="">Sitemap</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
