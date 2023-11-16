import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButtonCreate {
  readonly children: string;
  readonly onClick: () => void;
  readonly className?: string;
}

const ButtonCreate: FC<IButtonCreate> = ({
  children,
  onClick,
  className,
}): ReactElement => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type='button'
      onClick={onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={styles.button__plus}
        viewBox='0 0 14 15'
        fill='none'
      >
        <path className={styles.button__path} d='M7 0.5L7 14.5' />
        <path className={styles.button__path} d='M14 7.5L2.38419e-07 7.5' />
      </svg>
      {children}
    </button>
  );
};

export default ButtonCreate;
