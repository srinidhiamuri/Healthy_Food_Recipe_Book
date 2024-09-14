import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
            Home
          </a>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a>Recipe</a>
            </li>
            <li>
              <a>Tracking</a>
            </li>
            <li>
                <a>Account</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;