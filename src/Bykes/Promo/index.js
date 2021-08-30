import React from 'react';

import styles from './index.module.scss';
import Header from '../Header';

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.bg}>
        <Header />
      </div>
    </div>
  );
};

export default Promo;