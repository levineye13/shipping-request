import React, { FC, ReactElement } from 'react';

import Logo from '../logo';
import Menu from '../menu';
import styles from './index.module.scss';

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <Menu className={styles.header__menu} />
      </div>
    </header>
  );
};

export default Header;
