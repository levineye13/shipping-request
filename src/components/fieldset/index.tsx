import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IFieldset {
  readonly children: ReactElement | ReactElement[];
  readonly name: string;
  readonly title: string;
  readonly className?: string;
}

const Fieldset: FC<IFieldset> = ({
  children,
  name,
  title,
  className,
}): ReactElement => {
  return (
    <fieldset className={`${styles.fieldset} ${className || ''}`} name={name}>
      <p className={styles.fieldset__title}>{title}</p>
      {children}
    </fieldset>
  );
};

export default Fieldset;
