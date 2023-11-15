import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IForm {
  readonly children: ReactElement | ReactElement[];
  readonly name: string;
  readonly onSubmit: () => void;
}

const Form: FC<IForm> = ({ children, name, onSubmit }): ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      className={styles.form}
      name={name}
      onSubmit={handleSubmit}
      noValidate
    >
      {children}
    </form>
  );
};

export default Form;
