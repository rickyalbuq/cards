import React from 'react';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { Footer } from 'styles/utils';

const GiveUp = () => (
  <Modal
    title="Desistir da partida."
    subtitle="Tem certeza que quer abandonar a partida?"
  >
    <Footer>
      <Button type="cta" toGo="../room/12345" label="Voltar ao jogo" />
      <Button type="ghost" toGo="/" label="Sair" />
    </Footer>
  </Modal>
);

export default GiveUp;
