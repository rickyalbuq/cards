import React from 'react';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { Footer } from 'styles/utils';

const EndGame = () => (
  <Modal title="Fim de jogo." subtitle="Esse é o resumo da sua última partida.">
    <Footer>
      <Button type="cta" toGo="../room/12345" label="Jogar novamente" />
      <Button type="ghost" toGo="/" label="Sair" />
    </Footer>
  </Modal>
);

export default EndGame;
