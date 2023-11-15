import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ISwitch {
  readonly title: string;
  readonly name: string;
  readonly checked: boolean;
  readonly onChange: () => void;
  readonly className?: string;
}

const Switch: FC<ISwitch> = ({
  title,
  name,
  checked,
  onChange,
  className,
}): ReactElement => {
  return (
    <label className={`${styles.switch} ${className || ''}`}>
      {title}
      <span
        className={`${styles.switch__custom} ${
          checked ? styles.switch__custom_checked : ''
        }`}
      />
      <input className={styles.switch__checkbox} type='checkbox' name={name} />
    </label>
  );
};

export default Switch;
