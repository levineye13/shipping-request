import React, { FC, ReactElement, useState } from 'react';

import Down from '../../images/down.svg';
import Quest from '../../images/quest.svg';
import styles from './index.module.scss';

interface IDropMenu {
  readonly items: string[];
  readonly activeIndex: number;
  readonly onItemClick: (index: number) => void;
}

const DropMenu: FC<IDropMenu> = ({
  items,
  activeIndex,
  onItemClick,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeSelect =
    (index: number): React.MouseEventHandler<HTMLParagraphElement> =>
    (): void => {
      onItemClick(index);
    };

  const index = activeIndex && activeIndex < items.length ? activeIndex : 0;

  return (
    <div className={styles.menu}>
      <p
        className={`${styles.menu__select} ${
          isOpen ? styles.menu__select_active : ''
        }`}
        onClick={handleToggleMenu}
      >
        {items[index] || ''}
        <img src={Down} alt='Стрелка вниз' />
      </p>
      <ul
        className={`${styles.menu__list} ${
          isOpen ? styles.menu__list_open : ''
        }`}
      >
        {items.map((item, itemIndex) => (
          <li className={styles.menu__item} key={itemIndex}>
            <p
              className={styles.menu__par}
              onClick={handleChangeSelect(itemIndex)}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
      <img src={Quest} alt='Вопросительный знак' />
    </div>
  );
};

export default DropMenu;
