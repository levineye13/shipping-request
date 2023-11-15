import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ITitle {
  readonly children: string;
  readonly className?: string;
}

const Title: FC<ITitle> = ({ children, className }): ReactElement => {
  return <h2 className={`${styles.title} ${className || ''}`}>{children}</h2>;
};

export default Title;
