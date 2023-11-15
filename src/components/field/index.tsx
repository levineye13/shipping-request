import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IField {
  readonly title: string;
  readonly name: string;
  readonly type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly placeholder?: string;
}

const Field: FC<IField> = ({
  title,
  name,
  type,
  value,
  onChange,
  placeholder,
}): ReactElement => {
  return (
    <label className={styles.label}>
      {title}
      <input
        className={styles.label__input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Field;
