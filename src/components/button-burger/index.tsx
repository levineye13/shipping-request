import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButtonBurger {
  readonly onClick: () => void;
}

const ButtonBurger: FC<IButtonBurger> = ({ onClick }): ReactElement => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.button__element} />
    </button>
  );
};

export default ButtonBurger;
