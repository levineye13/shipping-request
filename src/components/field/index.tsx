import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IField {
  readonly title: string;
  readonly name: string;
  readonly type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly placeholder?: string;
  readonly className?: string;
}

const Field: FC<IField> = ({
  title,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
}): ReactElement => {
  return (
    <label className={`${styles.label} ${className || ''}`}>
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
