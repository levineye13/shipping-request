import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../utils/constants';
import styles from './index.module.scss';

interface ISidebar {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly className?: string;
}

const Sidebar: FC<ISidebar> = ({
  isOpen,
  onClose,
  className,
}): ReactElement => {
  return (
    <nav
      className={`${styles.sidebar} ${isOpen ? styles.sidebar_opened : ''} ${
        className || ''
      }`}
    >
      <button
        className={styles.sidebar__close}
        type='button'
        onClick={onClose}
      />
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <NavLink
            to={routes.main}
            className={({ isActive }) =>
              `${styles.sidebar__link} ${
                isActive ? styles.sidebar__link_active : ''
              }`
            }
          >
            <span className={styles.sidebar__text}>Доставка и оплата</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to={routes.sendCargo}
            className={({ isActive }) =>
              `${styles.sidebar__link} ${
                isActive ? styles.sidebar__link_active : ''
              }`
            }
          >
            <span className={styles.sidebar__text}>Отправить груз</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to={routes.contacts}
            className={({ isActive }) =>
              `${styles.sidebar__link} ${
                isActive ? styles.sidebar__link_active : ''
              }`
            }
          >
            <span className={styles.sidebar__text}>Контакты</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
