import React, { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import SendCargo from '../../pages/send-cargo';
import { routes } from '../../utils/constants';
import { IRequest } from '../../utils/interfaces';
import styles from './index.module.scss';

interface IMain {
  readonly cargos: IRequest;
  readonly setCargos: (cargos: IRequest) => void;
  readonly onCargoSubmit: () => void;
  readonly className?: string;
}

const Main: FC<IMain> = ({
  cargos,
  setCargos,
  onCargoSubmit,
  className,
}): ReactElement => {
  return (
    <main className={`${styles.main} ${className || ''}`}>
      <Routes>
        <Route path={routes.delivery} element={<p>Delivery Page</p>} />
        <Route
          path={routes.sendCargo}
          element={
            <SendCargo
              cargos={cargos}
              setCargos={setCargos}
              onCargoSubmit={onCargoSubmit}
            />
          }
        />
        <Route path={routes.contacts} element={<p>Contacts Page</p>} />
      </Routes>
    </main>
  );
};

export default Main;
