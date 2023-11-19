import React, { FC, ReactElement } from 'react';

import Delete from '../../images/delete.svg';
import styles from './index.module.scss';

interface IFieldset {
  readonly children: ReactElement | ReactElement[];
  readonly name: string;
  readonly title: string;
  readonly withDelete?: boolean;
  readonly onDelete?: () => void;
  readonly className?: string;
}

const Fieldset: FC<IFieldset> = ({
  children,
  name,
  title,
  withDelete,
  onDelete,
  className,
}): ReactElement => {
  const handleDelete = (): void => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <fieldset className={`${styles.fieldset} ${className || ''}`} name={name}>
      <p className={styles.fieldset__title}>{title}</p>
      {children}
      <button
        className={`${styles.fieldset__delete} ${
          withDelete ? styles.fieldset__delete_active : ''
        }`}
        type='button'
        onClick={handleDelete}
      >
        <img
          className={styles.fieldset__img}
          src={Delete}
          alt='Кнопка удаления'
        />
      </button>
    </fieldset>
  );
};

export default Fieldset;
