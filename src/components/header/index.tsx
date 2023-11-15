import React, { FC, ReactElement } from 'react';

import Logo from '../logo';
import Menu from '../menu';
import ButtonBurger from '../button-burger';
import styles from './index.module.scss';

interface IHeader {
  readonly setSidebar: () => void;
}

const Header: FC<IHeader> = ({ setSidebar }): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <Menu className={styles.header__menu} />
        <ButtonBurger onClick={setSidebar} />
      </div>
    </header>
  );
};

export default Header;
