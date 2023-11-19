import React, { FC, ReactElement } from 'react';

import Title from '../../components/title';
import SendCargoForm from '../../components/send-cargo-form';
import { IRequest } from '../../utils/interfaces';
import styles from './index.module.scss';

interface ISendCargo {
  readonly cargos: IRequest;
  readonly setCargos: (cargos: IRequest) => void;
  readonly onCargoSubmit: () => void;
}

const SendCargo: FC<ISendCargo> = ({
  cargos,
  setCargos,
  onCargoSubmit,
}): ReactElement => {
  return (
    <section className={styles.section}>
      <Title className={styles.section__title}>Заявка на отправку груза</Title>
      <SendCargoForm
        cargos={cargos}
        setCargos={setCargos}
        onCargoSubmit={onCargoSubmit}
      />
    </section>
  );
};

export default SendCargo;
