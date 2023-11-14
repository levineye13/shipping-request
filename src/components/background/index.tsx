import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IBackground {
  readonly isActive: boolean;
  readonly className?: string;
}

const Background: FC<IBackground> = ({ isActive, className }): ReactElement => {
  return (
    <div
      className={`${styles.background} ${
        isActive ? styles.background_active : ''
      } ${className || ''}`}
    />
  );
};

export default Background;
