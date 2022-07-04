import React from 'react';

import Modal from 'components/Modal';

const LoadingRoom = () => (
  <Modal
    title="Fulano,"
    subtitle="Estamos carregando uma partida para você."
    btnGhost={{ toGo: '/', label: 'Cancelar' }}
  ></Modal>
);

export default LoadingRoom;
