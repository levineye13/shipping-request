import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IModal {
  readonly isOpen: boolean;
  readonly title: string;
  readonly children: ReactElement | ReactElement[];
}

const Modal: FC<IModal> = ({ isOpen, title, children }): ReactElement => {
  return (
    <dialog className={`${styles.modal} ${isOpen ? styles.modal_open : ''}`}>
      <p className={styles.modal__title}>{title}</p>
      {children}
    </dialog>
  );
};

export default Modal;
