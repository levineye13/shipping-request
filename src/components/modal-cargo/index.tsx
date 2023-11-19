import React, { FC, ReactElement } from 'react';

import Modal from '../modal';
import Button from '../button';
import styles from './index.module.scss';
import { IRequest } from '../../utils/interfaces';

interface IModalCargo {
  readonly isOpen: boolean;
  readonly cargos: IRequest;
  readonly onClose: () => void;
}

const ModalCargo: FC<IModalCargo> = ({
  isOpen,
  cargos,
  onClose,
}): ReactElement => {
  const { cargos: cargoList } = cargos;

  return (
    <Modal isOpen={isOpen} title='Заявка отправлена'>
      <div className={styles.modal__info}>
        <p className={`${styles.modal__key} ${styles.modal__addr}`}>
          Откуда забрать:&nbsp;
          <span className={styles.modal__value}>{cargos.shippingAddress}</span>
        </p>
        <p className={`${styles.modal__key} ${styles.modal__addr}`}>
          Куда привезти:&nbsp;
          <span className={styles.modal__value}>
            {cargos.destinationAddress}
          </span>
        </p>
        <p className={`${styles.modal__key} ${styles.modal__addr}`}>
          Дата отправки:&nbsp;
          <span className={styles.modal__value}>{cargos.date}</span>
        </p>
      </div>

      <div className={styles.modal__cargos}>
        {cargoList.map((cargo) => {
          return (
            <>
              <p className={`${styles.modal__key} ${styles.modal__transport}`}>
                Транспорт 1:&nbsp;
                <span className={styles.modal__value}>{cargo.transport}</span>
              </p>
              <p className={`${styles.modal__key} ${styles.modal__cargo}`}>
                Кол-во грузчиков:&nbsp;
                <span className={styles.modal__value}>
                  {cargo.moversNumber}
                </span>
              </p>
              <p className={`${styles.modal__key} ${styles.modal__cargo}`}>
                Кол-во пассажиров:&nbsp;
                <span className={styles.modal__value}>
                  {cargo.passengersNumber}
                </span>
              </p>
            </>
          );
        })}
      </div>

      <div className={styles.modal__info}>
        <p className={`${styles.modal__key} ${styles.modal__contacts}`}>
          Заказчик:&nbsp;
          <span
            className={styles.modal__value}
          >{`${cargos.surname} ${cargos.name}`}</span>
        </p>
        <p className={`${styles.modal__key} ${styles.modal__contacts}`}>
          Телефон:&nbsp;
          <span className={styles.modal__value}>{cargos.tel}</span>
        </p>
        <p className={`${styles.modal__key} ${styles.modal__contacts}`}>
          E-mail:&nbsp;
          <span className={styles.modal__value}>{cargos.email}</span>
        </p>
      </div>

      <p className={styles.modal__par}>
        Информация продублирована на электронную почту
      </p>
      <Button type='button' onClick={onClose}>
        ОК
      </Button>
    </Modal>
  );
};

export default ModalCargo;
