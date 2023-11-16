import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ICheckbox {
  readonly checked: boolean;
  readonly onChange: () => void;
  readonly signature?: string;
  readonly className?: string;
}

const Checkbox: FC<ICheckbox> = ({
  checked,
  onChange,
  signature,
  className,
}): ReactElement => {
  return (
    <label className={`${styles.label} ${className || ''}`}>
      <span
        className={`${styles.label__custom} ${
          checked ? styles.label__custom_checked : ''
        }`}
      />
      {signature && <p className={styles.label__signature}>{signature}</p>}
      <input
        className={styles.label__checkbox}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default Checkbox;
