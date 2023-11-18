import React, { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import SendCargo from '../../pages/send-cargo';
import { routes } from '../../utils/constants';
import styles from './index.module.scss';

interface IMain {
  readonly className?: string;
}

const Main: FC<IMain> = ({ className }): ReactElement => {
  return (
    <main className={`${styles.main} ${className || ''}`}>
      <Routes>
        <Route path={routes.delivery} element={<p>Delivery Page</p>} />
        <Route path={routes.sendCargo} element={<SendCargo />} />
        <Route path={routes.contacts} element={<p>Contacts Page</p>} />
      </Routes>
    </main>
  );
};

export default Main;
