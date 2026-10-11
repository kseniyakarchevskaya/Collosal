import logo from '../assets/logo1.png';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
      <header>
        <div className={styles.menu}>
          <NavLink to={'/'}><img src={logo} /></NavLink>
          <div className={styles.but}>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/work'}>How We Work</NavLink>
            <NavLink to={'/projects'}>Projects</NavLink>
            <NavLink to={'/about'}>About</NavLink>
          </div>
          <button>
            <NavLink to={'/contact'}>Contact</NavLink>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
