import React from 'react';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { Footer } from 'styles/utils';

const LoadingRoom = () => (
  <Modal title="Fulano," subtitle="Estamos carregando uma partida para você.">
    <Footer>
      <Button type="ghost" toGo="/" label="Cancelar" />
    </Footer>
  </Modal>
);

export default LoadingRoom;
