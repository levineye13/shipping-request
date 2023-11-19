import React, { FC, ReactElement, useState } from 'react';

import Header from '../header';
import Main from '../main';
import Background from '../background';
import Sidebar from '../sidebar';
import ModalCargo from '../modal-cargo';
import { IRequest } from '../../utils/interfaces';
import { initialRequest } from '../../utils/constants';
import styles from './index.module.scss';

const App: FC = (): ReactElement => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  const [isCargoModalActive, setIsCargoModalActive] = useState(false);
  const [cargos, setCargos] = useState<IRequest>(initialRequest);

  const handleSetCargos = (cargos: IRequest) => {
    setCargos(cargos);
  };

  const handleOpenSidebar = (): void => {
    setIsSidebarActive(true);
  };

  const handleCloseSidebar = (): void => {
    setIsSidebarActive(false);
  };

  const handleCloseModals = (): void => {
    setIsCargoModalActive(false);
    setIsSidebarActive(false);
  };

  const handleCargoSubmit = () => {
    setIsCargoModalActive(true);
  };

  return (
    <div className={styles.app}>
      <Header setSidebar={handleOpenSidebar} />
      <Main
        className={styles.app__main}
        cargos={cargos}
        setCargos={handleSetCargos}
        onCargoSubmit={handleCargoSubmit}
      />
      <Background
        isActive={isSidebarActive || isCargoModalActive}
        onClose={handleCloseModals}
      />
      <Sidebar isOpen={isSidebarActive} onClose={handleCloseSidebar} />
      <ModalCargo
        isOpen={isCargoModalActive}
        cargos={cargos}
        onClose={handleCloseModals}
      />
    </div>
  );
};

export default App;
