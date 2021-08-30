import React from 'react';

import styles from './index.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li className="item"><a href="">about us</a></li>
          <li className="item"><a href="">work</a></li>
          <li className="item"><a href="">shop</a></li>
          <li className="item"><a href="">contact</a></li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <a href="">
          <img src="./logo.png" alt=""/>
        </a>
      </div>

    </header>
  );
};

export default Header;