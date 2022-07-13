import React from 'react';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { Footer } from 'styles/utils';

const ChooseRoom = () => (
  <Modal
    title="Escolha a sala."
    subtitle="Escolha uma sala para entrar na partida."
  >
    <Footer>
      <Button type="ghost" toGo="/" label="Voltar" />
    </Footer>
  </Modal>
);

export default ChooseRoom;
