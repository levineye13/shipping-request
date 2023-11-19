import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ICounter {
  readonly title: string;
  readonly name: string;
  readonly value: number;
  readonly onIncrement: () => void;
  readonly onDecrement: () => void;
  readonly signature?: string;
  readonly className?: string;
}

const Counter: FC<ICounter> = ({
  title,
  name,
  value,
  onIncrement,
  onDecrement,
  signature,
  className,
}): ReactElement => {
  return (
    <label className={`${styles.counter} ${className || ''}`}>
      {title}
      <div className={styles.counter__custom}>
        <button
          className={`${styles.counter__button} ${styles.counter__button_left}`}
          type='button'
          onClick={onDecrement}
        >
          -
        </button>
        <span className={styles.counter__value}>
          {`${value} ${signature || ''}`}
        </span>
        <button
          className={`${styles.counter__button}  ${styles.counter__button_right}`}
          type='button'
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </label>
  );
};

export default Counter;
