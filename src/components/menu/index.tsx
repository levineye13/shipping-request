import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../utils/constants';
import styles from './index.module.scss';

interface IMenu {
  readonly className?: string;
}

const Menu: FC<IMenu> = ({ className }): ReactElement => {
  return (
    <nav className={`${styles.menu} ${className || ''}`}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <NavLink
            to={routes.main}
            className={({ isActive }) =>
              `${styles.menu__link} ${isActive ? styles.menu__link_active : ''}`
            }
          >
            <span className={styles.menu__text}>Доставка и оплата</span>
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink
            to={routes.sendCargo}
            className={({ isActive }) =>
              `${styles.menu__link} ${isActive ? styles.menu__link_active : ''}`
            }
          >
            <span className={styles.menu__text}>Отправить груз</span>
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink
            to={routes.contacts}
            className={({ isActive }) =>
              `${styles.menu__link} ${isActive ? styles.menu__link_active : ''}`
            }
          >
            <span className={styles.menu__text}>Контакты</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
